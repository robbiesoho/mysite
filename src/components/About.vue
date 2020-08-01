<template>
  <div class="container">
    <div id="about">
      <h1>About Me</h1>
      <div id="about-me-text">
        <img
          id="robguitar"
          src="@/assets/images/robphotos/robguitar.jpg"
          class="card-pic"
        />
        <p>
          I am self-taught, full stack web developer from New Haven, CT. I have
          experience working with frameworks such as Ruby On Rails, Express.js
          and Django. I am familiar with front-end framworks React and Vue.js. I
          have worked with different database technologies such as MongoDB,
          PostgreSQL, and SQLite. I have experience with industry tools such as
          Git, Heroku and AWS.
        </p>
        <br />
        <p>
          I am always looking to improve my skillset. I am self-motivated and
          unquencibly curious. All the projects listed on my
          <a
            href="https://github.com/robbiesoho"
            target="_blank"
            id="resume-link"
            >github</a
          >
          are my own. For more information, feel free to read my
          <a href="/resume.pdf" target="_blank" id="resume-link">resume</a>.
        </p>
      </div>
    </div>
  </div>
</template>

<script scoped>
export default {
  name: "App",
};
</script>

<style>
#about {
  background-color: #edf7f6;
  height: 100%;
}
#about-me-text {
  padding: 0 15px 15px 15px;
  font-size: 1.6em;
}

#robguitar {
  border-radius: 50%;

  float: right;

  padding: 10px;

  max-width: 150px;
}

#resume-link:hover {
  color: red;
}
</style>
