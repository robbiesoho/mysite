<template>
  <div class="container">
    <div id="work">
      <h1>Work Examples</h1>
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
          name: "City Boyz Media",
          text:
            "City Boyz is a media site made from the MERN stack and uses redux for state management. It is deployed on AWS and uses MongoDB Atlas. This was a project for some friends who like to write articles.",

          imageName: "cityboyz.png",
          url: "http://www.cityboyz.us/",
          github: "https://github.com/robbiesoho/cityboyz",
        },
        {
          name: "Fan Factory",
          text:
            "Fan Factory is an events (concerts, Formula 1) company located in Tlaxcala, Mexico. Admins can log in and manage events, tickets and customers using an easy to use UI (written in ROR). Customers can checkout the very simple customer UI (written in React.js) to check out upcoming and past events. The backend was made with ROR and PostgreSQL and deployed on heroku.",

          imageName: "fanfactory.png",
          url: "http://www.fanfactory.xyz/",
          github: "https://github.com/robbiesoho/fanfactory",
        },

        {
          name: "Not-Facebook",
          text:
            "Use your Facebook account and sign into Not-Facebook. You can find your friends, leave them comments and like their comments. The greatest social media platform ever created. Made with Ruby on rails, PostgreSQL and deployed on Heroku.",

          imageName: "notface.png",
          url: "https://fast-thicket-99631.herokuapp.com/",
          github: "https://github.com/robbiesoho/Not-Facebook",
        },
      ],
    };
  },
};
</script>

<style>
.card-title {
  text-align: center;
  font-size: 35px;
  font-weight: 900;
  padding-bottom: 15px;
}

.card-pic {
  margin: 10px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}

.card-text {
  margin: 20px;
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
  padding-top: 20px;
}

.work-card-link {
  font-size: 1.2em;
  color: blue;
}

.work-card-link:hover {
  color: purple;
}

@media (min-width: 750px) {
  .work-cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .work-cards li {
    flex-basis: 50%;
  }
}
</style>
