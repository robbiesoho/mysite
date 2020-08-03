<template>
  <div class="container">
    <div id="tech">
      <h1>Technologies</h1>
      <ul class="tech-cards">
        <li v-for="(tech, id) in technologies" :key="id">
          <div class="tech-card">
            <div class="tech-card-title">{{ tech.name }}</div>
            <img
              :src="require(`@/assets/images/techimages/${tech.image}`)"
              alt=""
              class="tech-card-title-image"
            />
            <div class="tech-card-details">
              <ul>
                <li v-for="(detail, id) in tech.details" :key="id">
                  <div class="tech-card-detail">{{ detail.name }}</div>
                  <img
                    :src="require(`@/assets/images/techimages/${detail.image}`)"
                    alt=""
                    class="tech-card-thumbnail"
                    :id="detail.id"
                  />
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      technologies: [
        {
          name: "JavaScript",
          image: "javascript.png",
          details: [
            {
              name: "Node.js",
              image: "nodejs.png",
              id: "node",
            },
            {
              name: "React",
              image: "react.png",
              id: "react",
            },
            {
              name: "Vue.js",
              image: "vue.png",
              id: "vue",
            },
            {
              name: "Express.js",
              image: "express.png",
              id: "express",
            },
          ],
        },
        {
          name: "Ruby",
          image: "ruby.png",
          details: [
            {
              name: "Ruby On Rails",
              image: "rails.png",
              id: "rails",
            },
            {
              name: "RSpec",
              image: "rspec.png",
              id: "rspec",
            },
          ],
        },
        {
          name: "HTML/CSS",
          image: "htmlcss.png",
          details: [
            {
              name: "Bootstrap",
              image: "bootstrap.png",
              id: "boot",
            },
          ],
        },
        {
          name: "Severs",
          image: "server.png",
          details: [
            {
              name: "Amazon AWS",
              image: "aws.png",
              id: "aws",
            },
            {
              name: "Heroku",
              image: "heroku.png",
              id: "heroku",
            },
          ],
        },
        {
          name: "Database",
          image: "database.jpg",
          details: [
            {
              name: "MongoDB",
              image: "mongo.jpeg",
              id: "mongo",
            },
            {
              name: "PostgreSQL",
              image: "postgres.png",
              id: "postgres",
            },

            {
              name: "SQLlite",
              image: "sqlite.png",
              id: "sqllite",
            },
          ],
        },
        {
          name: "VControl",
          image: "versioncontrol.jpg",
          details: [
            {
              name: "Git",
              image: "git.png",
              id: "git",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style>
.tech-cards {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.tech-cards li {
  flex-basis: 100%;
}

.tech-card {
  padding: 2em;
  border-right: solid black 1px;
  background-color: #edf7f6;

  border: solid rgba(0, 0, 0, 0.1) 1px;
  height: 100%;
}

.tech-card-title {
  font-size: 2em;

  padding: 15px;
  display: inline-block;
}

.tech-card-title-image {
  width: 15%;
  height: auto;
}
.tech-card-details li {
  display: flex;
  justify-content: center;
}

.tech-card-detail {
  padding: 15px;
  margin-left: 3vw;
  font-size: 1.7em;
  display: inline-block;
  vertical-align: top;
}

.tech-card-thumbnail {
  width: 20%;
  height: 20%;
  margin-left: auto - 10vw;
}

.tech-cards img {
  align-self: center;
  width: 56.24px;
}

@media (min-width: 600px) {
  .tech-cards li {
    flex-basis: 50%;
  }
}
@media (min-width: 900px) {
  .tech-cards li {
    flex-basis: 33%;
  }
}
</style>
