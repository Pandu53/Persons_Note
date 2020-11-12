<template>
  <div class="row">
    <div class="col-2"><span class="nav-title">Plug Letter</span></div>
    <div class="col-6">
      <nav class="nav nav-pills nav-fill">
        <a class="nav-item nav-link" href="#">List Person</a>
      </nav>
    </div>
    <div class="col-4">
      <nav class="nav nav-pills nav-fill">
        <a class="nav-item nav-link" href="#">Add Person</a>
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
</style>