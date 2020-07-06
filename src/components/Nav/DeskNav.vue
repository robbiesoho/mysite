<template>
  <div class="container">
    <ul id="navbar-menu">
      <h1>RP | Dev</h1>
      <li>Resume</li>
      <li>Work</li>
      <li>Tech</li>
      <li>About Me</li>
      <li>Social Media</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style scoped>
#navbar-menu h1 {
  font-size: 5.5rem;
  flex-basis: content;
  margin-top: 0;
  /* margin-left: 0; */
}

#navbar-menu li {
  font-size: 1.5rem;
  /* background: black;
  color: white; */
  border-radius: 20%;
  border: 3px solid black;
  padding: 10px;
}

#navbar-menu {
  flex-basis: auto;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}

#navbar-menu li:hover {
  color: white;
  background-color: black;
  /* background-color: #dfcfbe */
  cursor: pointer;
}
</style>
