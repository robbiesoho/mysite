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

      <div id="main-quote">"To learn and create interesting things"</div>
    </div>
    <!-- work -->
    <div class="work">
      <div class="work-card">
        <div class="card-title">Fan Factory</div>
        <img src="../assets/images/rob on la malinche.jpg" class="card-pic" />
        <div class="card-text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic,
          tenetur.
        </div>
        <a class="work-card-link-left" href="">Go to site</a>
        <a class="work-card-link-right" href="">See the code</a>
      </div>
      <div class="work-card">
        <div class="card-title">Cuts Again</div>
        <img src="../assets/images/rob on la malinche.jpg" class="card-pic" />

        <div class="card-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
          necessitatibus.
        </div>
        <a class="work-card-link-left" href="">Go to site</a>
        <a class="work-card-link-right" href="">See the code</a>
      </div>
      <div class="work-card">
        <div class="work-card-title">Blog Site</div>
        <img src="../assets/images/rob on la malinche.jpg" class="card-pic" />

        <div class="work-card-text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, natus!
        </div>
        <a class="work-card-link-left" href="">Go to site</a>
        <a class="work-card-link-right" href="">See the code</a>
      </div>
    </div>
    <!-- Technologies -->
    <div class="technologies">
      <div class="tech-card">
        <div class="tech-card-title">Javascript</div>
        <div class="tech-card-detail">React</div>
        <img
          src="../assets/images/rob on la malinche.jpg"
          alt=""
          id="tech-card-thumbnail"
        />
        <div class="tech-card-detail">Vue.js</div>
        <img
          src="../assets/images/rob on la malinche.jpg"
          alt=""
          id="tech-card-thumbnail"
        />
      </div>
      <div class="tech-card">
        <div class="tech-card-title">Ruby</div>
        <div class="tech-card-detail">Ruby On Rails</div>
        <img
          src="../assets/images/rob on la malinche.jpg"
          alt=""
          id="tech-card-thumbnail"
        />
        <div class="tech-card-detail">Test</div>
        <img
          src="../assets/images/rob on la malinche.jpg"
          alt=""
          id="tech-card-thumbnail"
        />
      </div>
      <div class="tech-card">
        <div class="tech-card-title">HTML/CSS</div>
        <div class="tech-card-detail">Bootstrap</div>
        <img
          src="../assets/images/rob on la malinche.jpg"
          alt=""
          id="tech-card-thumbnail"
        />
      </div>
      <div class="tech-card">
        <div class="tech-card-title">Servers</div>
        <div class="tech-card-detail">Heroku</div>
        <img
          src="../assets/images/rob on la malinche.jpg"
          alt=""
          id="tech-card-thumbnail"
        />
        <div class="tech-card-detail">Amazon S3</div>
        <img
          src="../assets/images/rob on la malinche.jpg"
          alt=""
          id="tech-card-thumbnail"
        />
      </div>
    </div>
    <div class="about-me">
      <div class="about-me-title">About Me</div>
      <div class="about-me-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore aut
        harum incidunt quis maxime soluta ducimus et. Reprehenderit esse
        possimus quam saepe quisquam ducimus corporis quae, est asperiores
        dolores dignissimos.
      </div>
    </div>
    <div class="contact">
      <div class="contact-email"></div>
      <div class="contact-facebook"></div>
      <div class="contact-linkedin"></div>
      <div class="contact-github"></div>
      <div class="contact-stackover"></div>
    </div>
    <div class="footer">
      <p>2020 RPDEV</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
#landing-nav h1 {
  font-size: 5rem;
}

.toggle-nav {
  position: absolute;
  top: 25px;
  right: 10px;
  z-index: 11;
  display: block;
  text-align: center;
  font-size: 14px;
  color: #ffffff;
  width: 40px;
  height: 40px;
  line-height: 40px;
  cursor: pointer;
  background-color: black;
}

.toggle-nav div {
  width: 25px;
  height: 5px;
  background-color: white;
  margin: 6px auto;
}

#landing-nav ul {
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
  font-size: 1.5em;
  text-align: center;
  border-bottom: solid rgba(0, 0, 0, 0.1) 1px;
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
