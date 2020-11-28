<template>
  <div id="app">
    <MobileNav v-if="isMobile()"></MobileNav>
    <DeskNav v-if="!isMobile()"></DeskNav>
    <Head></Head>
    <!-- <Work></Work> -->
    <!-- <Tech></Tech> -->
    <!-- <About></About> -->
    <Contact></Contact>
    <Media></Media>
    <Footer></Footer>
  </div>
</template>

<script>
import MobileNav from "@/components/Nav/MobileNav";
import DeskNav from "@/components/Nav/DeskNav";
import Head from "@/components/Head";
// import Work from "@/components/Work";
// import Tech from "@/components/Tech";
import Media from "@/components/Media";
// import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default {
  name: "app",
  components: {
    MobileNav: MobileNav,
    DeskNav: DeskNav,
    Head: Head,
    // Work: Work,
    // Tech: Tech,
    Media: Media,
    // About: About,
    Contact: Contact,
    // eslint-disable-next-line
    Footer: Footer,
    // eslint-disable-next-line
  },
  methods: {
    isMobile: function() {
      return window.innerWidth <= 1000;
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
}

li {
  list-style: none;
}
</style>
