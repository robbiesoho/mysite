<template>
  <div class="container">
    <div class="technologies">
      <h1>Technologies</h1>
      <ul>
        <li v-for="(tech, id) in technologies" :key="id">
          <div class="tech-card">
            <div class="tech-card-title">{{ tech.name }}</div>
            <div class="tech-card-details">
              <ul>
                <li v-for="(detail, id) in tech.details" :key="id">
                  <div class="tech-card-detail">{{ detail.name }}</div>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
      <!-- <div class="tech-card">
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
      </div> -->
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
          details: [
            {
              name: "Node.js",
              image: "",
            },
            {
              name: "React",
              image: "",
            },
            {
              name: "Vue.js",
              image: "",
            },
            {
              name: "Express.js",
              image: "",
            },
          ],
        },
        {
          name: "Ruby",
          details: [
            {
              name: "Ruby On Rails",
              image: "",
            },
            {
              name: "RSpec",
              image: "",
            },
          ],
        },
        {
          name: "HTML/CSS",
          details: [
            {
              name: "Bootstrap",
              image: "",
            },
          ],
        },
        {
          name: "Severs",
          details: [
            {
              name: "Heroku",
              image: "",
            },
            {
              name: "Amazon S3",
              image: "",
            },
          ],
        },
        {
          name: "Database",
          details: [
            {
              name: "PostgresSQL",
              image: "",
            },
            {
              name: "MySQL",
              image: "",
            },
            {
              name: "SQLlite",
              image: "",
            },
            {
              name: "MongoDB",
              image: "",
            },
          ],
        },
        {
          name: "Version Control",
          details: [
            {
              name: "Git",
              image: "",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style>
.tech-card {
  display: flex;
}

.tech-card-title {
  font-size: 3vh;
}

.tech-card-details {
  text-align: center;
}

#tech-card-thumbnail {
  width: 25px;
  height: auto;
}
</style>
