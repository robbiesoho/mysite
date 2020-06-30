<template>
  <div class="container">
    <!-- Landing area -->
    <div class="landing-head">
      <h1>RP | Dev</h1>
      <Hamburger />
    </div>

    <div id="landing-main">
      <div id="main-name">Robert J Porto</div>
      <div id="main-details">
        <div class="main-detail">Full Stack</div>
        <div class="main-detail">Educator</div>
        <div class="main-detail">Artist</div>
      </div>

      <img
        src="../assets/images/rob on la malinche.jpg"
        alt="avatar"
        class="avatar"
      />
      <div class="main-quote">"To learn and make interesting things"</div>
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
    closeSidebarPanel() {
      closeSidebarPanel: mutations.toggleNav;
    },
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

.card-pic {
  width: 50px;
  height: auto;
}

#tech-card-thumbnail {
  width: 25px;
  height: auto;
}
</style>
