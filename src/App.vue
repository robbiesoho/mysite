<template>
  <div id="app">
    <Nav></Nav>
    <router-view />
  </div>
</template>

<script>
import Nav from "@/components/Nav";

export default {
  name: "app",
  components: {
    Nav: Nav,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Roboto Condensed", sans-serif;
  line-height: 1.4;
}

.avatar {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 400px;
  height: 500px;
  border-radius: 70%;
  background-color: palevioletred;
}
</style>
