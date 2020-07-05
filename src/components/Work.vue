<template>
  <div class="container">
    <div class="work">
      <h1>Work</h1>
      <ul>
        <li v-for="(project, id) in projects" :key="id">
          <div class="work-card">
            <div class="card-title">{{ project.name }}</div>
            <img
              :src="require(`@/assets/images/${project.imageName}`)"
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
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit.t consectetur adipisicing elitt consectetur adipisicing elitt consectetur adipisicing elitt consectetur adipisicing elit",

          image: "@/assets/images/fanfactory.png",
          imageName: "fanfactory.png",
          url: "http://www.fanfactory.xyz/",
          github: "https://github.com/robbiesoho/fanfactory",
        },

        {
          name: "Media Project",
          text:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit.t consectetur adipisicing elitt consectetur adipisicing elitt consectetur adipisicing elitt consectetur adipisicing elit",

          image: "@/assets/images/fanfactory.png",
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
  padding: 25px 0;
  border-bottom: solid rgba(0, 0, 0, 0.1) 1px;
}

.work-card-links {
  display: flex;
  justify-content: space-around;
}
.work-card-link {
  font-size: 2.5vh;
  color: blue;
}
</style>
