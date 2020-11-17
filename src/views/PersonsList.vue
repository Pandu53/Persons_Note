<template>
  <div class="container">
    <h1>Persons List</h1>
    <div class="row ">
    <div
      class="card m-2 fle"
      style="width: 18rem"
      v-for="(person, index) in personsNotes"
      :key="index"
    >
      <img class="card-img-top p-2" src="../assets/dummy.png" alt="Card image cap" />
      <div class="card-body">
        <h5 class="card-title">{{ person.name }} {{ person.sirname }}</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">{{ person.age }} Jahre alt.</li>
        <li class="list-group-item">Wohnt in {{ person.location }}.</li>
        <li class="list-group-item">Ist {{ person.job }} von Beruf.</li>
      </ul>
      <div class="card-body">
        <a href="#" class="card-link">bearbeiten</a>
      </div>
    </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "PersonsList",
  data: function () {
    return {};
  },
  computed: {
    personsNotes: function () {
      return this.$store.getters.notes;
    },
  },
};
</script>