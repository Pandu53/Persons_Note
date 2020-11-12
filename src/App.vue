<template>
  <div id="app">
    <div id="nav">
      <NavigationBar ></NavigationBar>
      <router-view class="container" />
    </div>
  </div>
</template>


<script>
import NavigationBar from "./components/NavigationBar.vue"
export default {
  name:"MainApp",
  data: function(){
    return{
      
    }
  },
  components: {
    NavigationBar
  }
}
</script>