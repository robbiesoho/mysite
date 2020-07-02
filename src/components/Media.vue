<template>
  <div class="container">
    <div class="media">
      <h1>Contact Me On Social Media</h1>
      <ul class="media-cards">
        <li v-for="(media, id) in medias" :key="id">
          <div class="media-card">
            <!-- <div class="media-card-title">{{ media.name }}</div> -->
            <a :href="media.url">
              <img
                :src="require(`@/assets/images/socialimages/${media.image}`)"
                alt=""
                class="media-card-title-image"
              />
            </a>
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
      medias: [
        {
          name: "Linkedin",
          image: "linkedin.png",
          url: "https://www.reddit.com",
        },
        {
          name: "Github",
          image: "github.png",
          url: "https://github.com/robbiesoho",
        },
        {
          name: "StackOF",
          image: "stackof.png",
          url: "https://stackoverflow.com/users/10757461/robert",
        },

        {
          name: "Facebook",
          image: "facebook.png",
          url: "https://www.facebook.com/robert.porto.3998",
        },
        {
          name: "Twitter",
          image: "twitter.png",
          url: "https://twitter.com/RPDev10",
        },
      ],
    };
  },
};
</script>

<style>
.media li {
  list-style: none;
}

.media-cards {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
}

.media-cards li {
  flex-basis: 20%;
}

.media-card {
}

.media-card-title-image {
  width: 77%;
  height: auto;
}
</style>
