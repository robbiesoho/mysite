<template>
  <div id="contact" class="container">
    <h1>Contact me</h1>
    <div id="contact-container">
      <h2 id="display">{{ message }}</h2>
      <form class="contact-form" @submit.prevent="sendEmail">
        <label>Name</label>
        <input placeholder="Your name.." type="text" name="user_name" />
        <label>Email</label>
        <input placeholder="Your email.." type="email" name="user_email" />
        <label>Message</label>
        <textarea
          placeholder="Your message.."
          rows="5"
          name="message"
        ></textarea>
        <input
          id="submit-message"
          type="submit"
          value="Send"
          v-on:click="changeMessage()"
        />
      </form>
    </div>
  </div>
</template>

<script scoped>
import emailjs from "emailjs-com";
export default {
  data() {
    return {
      message: " ",
    };
  },

  methods: {
    sendEmail: (e) => {
      emailjs
        .sendForm(
          "default_service",
          "template_KzLOxypU",
          e.target,
          "user_8zfwHC7mxZlkWrnU3uSLn"
        )

        .then(
          (result) => {
            console.log("SUCCESS!", result.status, result.text);
          },
          (error) => {
            console.log("FAILED...", error);
          }
        );

      e.target.user_name.value = " ";
      e.target.user_email.value = " ";
      e.target.message.value = " ";
    },

    changeMessage() {
      this.message = "Message sent. Thank you for contacting me!";
    },
  },
};
</script>

<style>
#contact-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#contact-container * {
  flex-basis: 100%;
  padding: 5px;
}

#display {
  font-size: 2.5em;
}

.contact-form {
  display: flex;
  flex-direction: column;
  font-size: 2em;
  align-items: center;
  padding-bottom: 50px;
}

.contact-form label {
  font-size: 0.75em;
}
.contact-form input {
  width: 50vw;
  font-size: 0.5em;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
.contact-form textarea {
  width: 75vw;
  font-size: 0.6em;
  margin-bottom: 30px;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

#submit-message {
  width: 20%;
  background-color: #dfcfbe;
  color: black;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
#submit-message:hover {
  background-color: darkslateblue;
  color: white;
}
</style>
