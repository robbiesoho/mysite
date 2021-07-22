<template>
  <div class="container">
    <ul id="navbar-menu">
      <h1>RP | Dev</h1>
      <a class="nav-item" href="http://www.robporto.dev" target="_blank"
        >Blog</a
      >
      <a class="nav-item" href="/rp.png" target="_blank">Resume</a>
      <!-- <router-link class="nav-item" to="#work">Work</router-link> -->
      <!-- <router-link class="nav-item" to="#tech">Tech</router-link> -->
      <!-- <router-link class="nav-item" to="#about">About Me</router-link> -->
      <router-link class="nav-item" to="#contact">Contact Me</router-link>
      <router-link class="nav-item" to="#media">Social Media</router-link>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#navbar-menu h1 {
  font-size: 5.5rem;
  margin-top: 10px;
  margin-left: 10px;
}

.nav-item {
  color: black;
  text-decoration: none;
  font-size: 1.5rem;
  border-radius: 20%;
  border: 3px solid black;
  padding: 10px;
}

#navbar-menu {
  display: flex;
  justify-content: space-around;
  align-items: baseline;
}

.nav-item:hover {
  color: white;
  background-color: black;
  cursor: pointer;
}
</style>
