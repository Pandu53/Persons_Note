<template>
  <div class="container">
    <h1>Add Person</h1>
    <form>
      <div class="form-group row">
        <label for="inputName" class="col-sm-2 col-form-label">Name and Sirname</label>
        <div class="col-sm-10">
          <input
            type="text"
            class="form-control col-6 d-inline-block"
            id="inputName"
            placeholder="Name"
          />
          <input
            type="text"
            class="form-control col-6 d-inline-block"
            id="inputName"
            placeholder="Sirname"
          />
        </div>
      </div>
      <div class="form-group row">
          <div class="col-sm-4">
              <label for="inputAge" class="col-sm-2 col-form-label"
          >Age</label>
          <input type="number"
                class="form-control col-6 d-inline-block"
                id="inputAge"
                min="0"
                max="99"
                step="1"
                value="69"
                />
          </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddPerson",
  data: function () {
    return {};
  },
};
</script>