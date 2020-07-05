<template>
  <div class="ham-container">
    <div
      id="toggle-nav"
      :class="{ active: isBurgerActive }"
      @click.prevent="toggle"
    >
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script>
import { store, mutations } from "@/store.js";

export default {
  computed: {
    isBurgerActive() {
      return store.isNavOpen;
    },
  },
  methods: {
    toggle() {
      mutations.toggleNav();
    },
  },
};
</script>

<style scoped>
.hidden {
  visibility: hidden;
}

#toggle-nav {
  position: absolute;
  top: 50px;
  right: 15px;
  z-index: 11;
  display: block;
  text-align: center;
  font-size: 14px;
  color: #ffffff;
  width: 40px;
  height: 40px;
  line-height: 40px;
  cursor: pointer;
  background-color: black;
}

#toggle-nav div {
  width: 25px;
  height: 5px;
  background-color: white;
  margin: 6px auto;
}

#toggle-nav:hover {
  background-color: lightgrey;
}

#toggle-nav:hover div {
  background-color: black;
}
</style>
