<template>
  <div class="container">
    <div id="media">
      <h1>Social Media</h1>
      <ul class="media-cards">
        <li v-for="(media, id) in medias" :key="id">
          <div class="media-card">
            <a :href="media.url">
              <img
                :src="require(`@/assets/images/socialimages/${media.image}`)"
                alt=""
                :id="media.name"
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
          name: "linkedin",
          image: "linkedin.png",
          url: "https://www.reddit.com",
        },
        {
          name: "github",
          image: "github.png",
          url: "https://github.com/robbiesoho",
        },
        {
          name: "stackof",
          image: "stackof.png",
          url: "https://stackoverflow.com/users/10757461/robert",
        },

        {
          name: "facebook",
          image: "facebook.png",
          url: "https://www.facebook.com/robert.porto.3998",
        },
        {
          name: "twitter",
          image: "twitter.png",
          url: "https://twitter.com/RPDev10",
        },
      ],
    };
  },
};
</script>

<style>
#media {
  background-color: #edf7f6;
  border: solid rgba(0, 0, 0, 0.1) 1px;
  padding-bottom: 20px;
}
#media li {
  list-style: none;
}

.media-cards {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  padding-left: 40px;
}

.media-cards li {
  flex-basis: 20%;
}

.media-card {
  max-width: 120px;
}

.media-card-title-image {
  width: 77%;
  height: auto;
}
#facebook,
#stackof,
#github {
  width: 50%;
}

#twitter {
  width: 60%;
}

.media-card-title-image:hover {
  border: 10px solid #dfcfbe;
}
</style>
