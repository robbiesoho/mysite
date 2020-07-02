<template>
  <div class="container">
    <!-- Landing area -->
    <div id="landing-main">
      <img
        src="../assets/images/rob on la malinche.jpg"
        alt="avatar"
        class="avatar"
      />
      <div id="main-name">Robert J Porto</div>
      <div id="main-details">
        <div class="main-detail">Full Stack</div>
        <div class="main-detail">Educator</div>
        <div class="main-detail">Artist</div>
      </div>

      <div id="main-quote">"To learn and create"</div>
    </div>
    <!-- work -->
  </div>
</template>

<script>
export default {};
</script>

<style>
#landing-nav h1 {
  font-size: 5rem;
}
s #landing-nav ul {
  display: none;
}

#landing-nav li {
  color: white;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 25px;
  display: block;
  background-color: black;
  border-bottom: solid white 2px;
}

#landing-nav li:hover {
  color: black;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 25px;
  display: block;
  background-color: white;
  border: solid black 2px;
}

.avatar {
  position: absolute;
  right: 0;
  /* margin: 5px; */
  width: 200px;
  height: auto;
  border-radius: 70%;
  border: 1px solid black;
  object-fit: cover;
  object-position: 50% 50%;
}

#main-name {
  margin-top: 4%;
  font-size: 2.5em;
  margin-left: 3vw;
  padding-bottom: 10px;
}

.main-detail {
  font-size: 1.5em;
  margin-left: 10vw;
  padding: 15px;
}
.main-detail:before {
  content: "✓";
}

#main-quote {
  padding: 20px;
  font-size: 1.75em;
  text-align: center;
}
</style>
