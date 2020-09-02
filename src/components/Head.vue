<template>
  <div class="container landing-container">
    <div id="landing-main">
      <img
        src="../assets/images/robphotos/rob on la malinche.jpg"
        alt="avatar"
        class="avatar"
      />
      <div id="landing-words">
        <h1 id="main-name">Robert J Porto</h1>
        <div id="main-details">
          <div class="main-detail">
            Full Stack <br />
            Web Developer
          </div>
          <div class="main-detail">Educator</div>
          <div class="main-detail">Artist</div>
        </div>
        <!-- <div id="main-quote">
          “Taking a new step, uttering a new word, is what people fear most.” ―
          Fyodor Dostoevsky
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
#landing-main {
  position: relative;
  padding: 0;
  background-color: #dfcfbe;
  height: 100%;

  display: grid;

  grid-template-columns: 2fr 1fr;
  grid-template-rows: auto;
}
.avatar {
  position: absolute;
  top: 15%;

  right: 2.5vw;
  width: 40vw;
  max-width: 250px;
  height: auto;
  border-radius: 70%;
  border: 1px solid black;
  object-fit: cover;
  object-position: 50% 50%;
  grid-area: avatar;

  grid-column: 2;
}

#landing-words {
  padding-top: 4%;
}

#main-name {
  margin-top: 0;

  font-size: 3em;
  margin-left: 3vw;
  padding-bottom: 10px;
  grid-area: name;
}

.main-detail {
  font-size: 1.5em;
  margin-left: 2.5vw;
  padding: 15px;
  grid-area: details;
}
.main-detail:before {
  content: "✓";
}

#main-quote {
  margin-top: 8%;
  padding: 0 10px 10px 40px;
  font-size: 1.25em;
  grid-area: quote;
}

.background-img-container {
  position: fixed;
  height: 20vh;
  width: 20vw;
  left: 25%;
  top: 25%;
  z-index: -1;
}

@media (min-width: 700px) {
  #landing-main {
    background-color: #dfcfbe;
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: space-between;
  }
  .avatar {
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
    font-size: 4.5em;
  }

  #main-details {
    display: flex;
    flex-direction: column;
  }
  .main-detail {
    padding: 10px;
    font-size: 2em;
  }

  #main-quote {
    margin-top: 25px;
    font-size: 1.25em;
  }
}
</style>
