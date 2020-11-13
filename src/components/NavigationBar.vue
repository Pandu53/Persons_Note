<template>
  <div class="row ">
    <div class="col-2"><span class="nav-title">Plug Letter</span></div>
    <div class="col-6">
      <nav class="nav nav-pills nav-left">
        <router-link class="nav-item nav-link" class-active="active" to="/PersonsList">List Person</router-link>
      </nav>
    </div>
    <div class="col-4">
      <nav class="nav nav-pills nav-right">
        <router-link class="nav-item nav-link" to="/AddPerson">Add Person</router-link>
        <a class="nav-item nav-link" href="#">Logout</a>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavigationBar",
  data: function () {
    return {};
  },
};
</script>

<style  scoped>
.nav-title {
  font-weight: bold;
  margin: 0 10px;
}
.router-link-active {
  background-color: rgba(112, 138, 253, 0.397);
}
</style>