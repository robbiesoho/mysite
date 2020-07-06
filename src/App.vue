<template>
  <div id="app">
    <MobileNav v-if="isMobile()"></MobileNav>
    <DeskNav v-if="!isMobile()"></DeskNav>
    <router-view />
    <Work></Work>
    <Tech></Tech>
    <About></About>
    <Media></Media>
    <Footer></Footer>
  </div>
</template>

<script>
import MobileNav from "@/components/Nav/MobileNav";
import DeskNav from "@/components/Nav/DeskNav";
import Work from "@/components/Work";
import Tech from "@/components/Tech";
import Media from "@/components/Media";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default {
  name: "app",
  components: {
    MobileNav: MobileNav,
    DeskNav: DeskNav,
    Work: Work,
    Tech: Tech,
    Media: Media,
    About: About,
    // eslint-disable-next-line
    Footer: Footer,
    // eslint-disable-next-line
  },
  methods: {
    isMobile: function() {
      return window.innerWidth <= 900;
    },
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
  margin-top: 2%;
  margin-bottom: 2%;
  font-size: 2.5em;
  margin-left: 3vw;
  padding-bottom: 10px;
}

.container {
  border-bottom: solid rgba(0, 0, 0, 0.1) 1px;
  /* background-color: #edf7f6;
  margin: 0 auto; */
}

li {
  list-style: none;
}
</style>
