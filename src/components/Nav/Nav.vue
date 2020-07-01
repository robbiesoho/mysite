<template>
  <div class="container">
    <div class="landing-head">
      <h1>RP | Dev</h1>
      <Hamburger />
      <transition name="slide">
        <div class="landing-nav" v-if="isPanelOpen">
          <ul id="navbar-menu">
            <li>Resume</li>
            <li>Work</li>
            <li>Tech</li>
            <li>Contact</li>
          </ul>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import Hamburger from "./Hamburger";
import { store, mutations } from "@/store.js";

export default {
  name: "App",
  components: {
    Hamburger,
  },

  methods: {
    closeNav: mutations.toggleNav,
  },
  computed: {
    isPanelOpen() {
      return store.isNavOpen;
    },
  },
};
</script>

<style>
.landing-head h1 {
  font-size: 5rem;
}

.landing-head {
  border-bottom: solid rgba(0, 0, 0, 0.1) 1px;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.2s ease;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(100%);
  transition: all 150ms ease-in 0s;
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

.avatar {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 200px;
  height: auto;
  border-radius: 70%;
  background-color: palevioletred;
  object-fit: cover;
  object-position: 50% 50%;
}
</style>
