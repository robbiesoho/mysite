<template>
  <div class="landing-nav">
    <div
      id="toggle-nav"
      :class="{ active: isBurgerActive }"
      @click.prevent="toggle"
    >
      <div></div>
      <div></div>
      <div></div>
    </div>

    <ul id="navbar-menu">
      <li>Work</li>
      <li>Resume</li>
      <li>Contact</li>
    </ul>
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

<style>
/* #navbar-menu {
  display: none;
} */

.hidden {
  visibility: hidden;
}

.landing-nav li {
  color: white;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 25px;
  display: block;
  background-color: black;
  border-bottom: solid white 2px;
}

.landing-nav li:hover {
  color: black;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 25px;
  display: block;
  background-color: white;
  border: solid black 2px;
}

#toggle-nav {
  position: absolute;
  top: 40px;
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
