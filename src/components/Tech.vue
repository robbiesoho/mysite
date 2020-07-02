<template>
  <div class="container">
    <div class="technologies">
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
            },
            {
              name: "React",
              image: "react.png",
            },
            {
              name: "Vue.js",
              image: "vue.png",
            },
            {
              name: "Express.js",
              image: "express.png",
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
            },
            {
              name: "RSpec",
              image: "rspec.png",
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
            },
          ],
        },
        {
          name: "Severs",
          image: "server.png",
          details: [
            {
              name: "Heroku",
              image: "heroku.png",
            },
            {
              name: "Amazon S3",
              image: "amazons3.png",
            },
          ],
        },
        {
          name: "Database",
          image: "database.jpg",
          details: [
            {
              name: "PostgresSQL",
              image: "postgres.png",
            },
            {
              name: "MySQL",
              image: "mysql.png",
            },
            {
              name: "SQLlite",
              image: "sqlite.png",
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
            },
          ],
        },
      ],
    };
  },
};
</script>

<style>
.technologies {
  border-bottom: solid rgba(0, 0, 0, 0.1) 1px;
}
.technologies li {
  list-style: none;
}

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
}

.tech-card-title {
  font-size: 2em;
  padding: 10px;
  display: inline-block;
  /* vertical-align: baseline; */
}

.tech-card-title-image {
  width: 15%;
  height: auto;
}
.tech-card-details li {
  display: flex;
}

.tech-card-detail {
  padding: 10px;
  margin-left: 3vw;
  font-size: 2em;
  display: inline-block;
  vertical-align: top;
}

.tech-card-thumbnail {
  width: 20%;
  height: 20%;
  margin-left: auto;
}
</style>
