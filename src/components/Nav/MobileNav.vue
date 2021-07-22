<template>
  <div class="container">
    <div class="landing-head">
      <h1>RP | Dev</h1>
      <Hamburger />
      <transition name="slide">
        <div class="landing-nav" v-if="isPanelOpen">
          <ul id="navbar-menu">
            <a
              class="nav-item-mob"
              href="http://www.robporto.dev"
              target="_blank"
              >Blog</a
            >
            <a class="nav-item-mob" href="/rp.png" target="_blank">Resume</a>
            <!-- <router-link class="nav-item-mob" to="#work">Work</router-link> -->
            <!-- <router-link class="nav-item-mob" to="#tech">Tech</router-link> -->
            <!-- <router-link class="nav-item-mob" to="#about">About Me</router-link> -->
            <router-link class="nav-item-mob" to="#contact"
              >Contact Me</router-link
            >
            <router-link class="nav-item-mob" to="#media"
              >Social Media</router-link
            >
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

<style scoped>
.landing-head h1 {
  font-size: 5rem;
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

.nav-item-mob {
  color: white;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 25px;
  display: block;
  background-color: black;
  border-bottom: solid white 2px;
}

.nav-item-mob:hover {
  color: black;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 25px;
  display: block;
  background-color: white;
  border: solid black 2px;
}
</style>
