<template>
  <div class="container landing-container">
    <div id="landing-main">
      <div class="background-img-container">
        <div class="red-background-img-top"></div>
        <div class="blue-background-img-top"></div>
        <div class="red-background-img-bottom"></div>
        <div class="blue-background-img-bottom"></div>
      </div>

      <img
        src="../assets/images/robphotos/rob on la malinche.jpg"
        alt="avatar"
        class="avatar"
      />
      <div id="landing-words">
        <h1 id="main-name">Robert J Porto</h1>
        <div id="main-details">
          <div class="main-detail">Full Stack</div>
          <div class="main-detail">Web Developer</div>
          <div class="main-detail">Educator</div>
          <div class="main-detail">Artist</div>
        </div>
        <!-- <div id="main-quote">"To learn and create"</div> -->
        <div id="main-quote">
          “Taking a new step, uttering a new word, is what people fear most.” ―
          Fyodor Dostoevsky
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
/* .landing-container {
  background-color: #edf7f6;
  height: 100%;
} */

#landing-main {
  padding: 0;
  background-color: #dfcfbe;
  height: 100%;
}
.avatar {
  position: absolute;
  margin-top: 4%;
  right: 0;
  width: 200px;

  height: auto;
  border-radius: 70%;
  border: 1px solid black;
  object-fit: cover;
  object-position: 50% 50%;
}

#landing-words {
  padding-top: 4%;
}

#main-name {
  margin-top: 0;

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
  margin-top: 8%;
  font-size: 1.25em;
  text-align: center;
}

.background-img-container {
  position: fixed;
  /* border: 2px black solid; */
  height: 20vh;
  width: 20vw;
  left: 25%;
  top: 25%;
  z-index: -1;
}

/* .red-background-img-top {
  background-color: rgb(162, 0, 0);
  position: absolute;
  height: 100px;
  width: 100px;
  opacity: 0.08;
  left: 30%;
  top: 50%;
  z-index: -1;
}
.blue-background-img-top {
  background-color: blue;
  position: absolute;
  height: 100px;
  width: 100px;
  opacity: 0.08;
  left: 55%;
  top: 30%;
  z-index: -1;
} */

/* .red-background-img-bottom {
  background-color: rgb(162, 0, 0);
  position: absolute;
  height: 100px;
  width: 100px;
  opacity: 0.08;
  left: 55%;
  top: 10%;
  z-index: -1;
}

.blue-background-img-bottom {
  background-color: blue;
  position: absolute;
  height: 100px;
  width: 100px;
  opacity: 0.08;
  left: 30%;
  top: 60%;
  z-index: -1;
} */

@media (min-width: 900px) {
  #landing-main {
    background-color: #edf7f6;
    background-color: #dfcfbe;

    display: flex;
    height: 100%;

    align-items: center;
    justify-content: space-between;
  }
  .avatar {
    /* border-radius: 50%;
    border: 2px solid #23313a;
    width: 300px;


    display: block;
    left: 60%;
     */
    width: 350px;
    margin: 2% 10%;
    position: relative;
    order: 2;
  }

  #landing-words {
    padding-top: 0;
    display: flex;
    flex-direction: column;
  }

  #main-name {
    font-size: 4em;
    /* font-size: 7vw; */
  }

  #main-details {
    display: flex;
    flex-direction: column;
  }
  .main-detail {
    padding: 10px;
    font-size: 2em;
    /* margin: 15px; */
  }

  #main-quote {
    margin-top: 25px;
    font-size: 1em;
  }
}
</style>
