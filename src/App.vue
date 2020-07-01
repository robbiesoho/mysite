<template>
  <div id="app">
    <Nav></Nav>
    <router-view />
    <Work></Work>
    <Tech></Tech>
  </div>
</template>

<script>
import Nav from "@/components/Nav/Nav";
import Work from "@/components/Work";
import Tech from "@/components/Tech";

export default {
  name: "app",
  components: {
    Nav: Nav,
    Work: Work,
    Tech: Tech,
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

h1 {
  margin-top: 4%;
  font-size: 2.5em;
  margin-left: 3vw;
  padding-bottom: 10px;
}
</style>
