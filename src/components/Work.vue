<template>
  <div class="container">
    <div id="work">
      <h1>Work</h1>
      <ul class="work-cards">
        <li v-for="(project, id) in projects" :key="id">
          <div class="work-card">
            <div class="card-title">{{ project.name }} {{ project.id }}</div>
            <img
              :src="require(`@/assets/images/workphotos/${project.imageName}`)"
              class="card-pic"
            />
            <div class="card-text">
              {{ project.text }}
            </div>
            <div class="work-card-links">
              <a class="work-card-link work-card-link-left" :href="project.url"
                >Go to site</a
              >
              <a
                class="work-card-link work-card-link-right"
                :href="project.github"
                >See the code</a
              >
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script scoped>
export default {
  data() {
    return {
      projects: [
        {
          name: "Fan Factory",
          text:
            "Fan Factory is an events (concerts, Formula 1) company located in Tlaxcala, Mexico. Admins can log in and manage events, tickets and customers using an easy to use UI (written in ROR). Customers can checkout the very simple customer UI (written in React.js) to check out upcoming and past events.",

          imageName: "fanfactory.png",
          url: "http://www.fanfactory.xyz/",
          github: "https://github.com/robbiesoho/fanfactory",
        },

        {
          name: "Media Project",
          text:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit.t consectetur adipisicing elitt consectetur adipisicing elitt consectetur adipisicing elitt consectetur adipisicing elit",

          imageName: "fanfactory.png",
          url: "https://www.nytimes.com/",
          github: "https://github.com/robbiesoho/fanfactory",
        },
        {
          name: "Project 3",
          text:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit.t consectetur adipisicing elitt consectetur adipisicing elitt consectetur adipisicing elitt consectetur adipisicing elit",

          imageName: "fanfactory.png",
          url: "https://www.nytimes.com/",
          github: "https://github.com/robbiesoho/fanfactory",
        },
        {
          name: "Project 4",
          text:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit.t consectetur adipisicing elitt consectetur adipisicing elitt consectetur adipisicing elitt consectetur adipisicing elit",

          imageName: "fanfactory.png",
          url: "https://www.nytimes.com/",
          github: "https://github.com/robbiesoho/fanfactory",
        },
      ],
    };
  },
};
</script>

<style>
.card-title {
  text-align: center;
  font-size: 4vh;
}

.card-pic {
  margin: 10px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}

.card-text {
  display: inline-block;
  position: relative;
  text-align: center;
  font-size: 3vh;
}

.work-card {
  background-color: #edf7f6;
  padding: 25px 0;
  border: solid rgba(0, 0, 0, 0.1) 1px;
  height: 100%;
}

.work-card-links {
  display: flex;
  justify-content: space-around;
  padding-top: 50px;
}

.work-card-link {
  font-size: 1.2em;
  color: blue;
}

.work-card-link:hover {
  color: purple;
}

@media (min-width: 900px) {
  .work-cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .work-cards li {
    flex-basis: 49.7%;
  }
}
</style>
