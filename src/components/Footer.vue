<template>
  <div class="container">
    <div id="footer">
      <p>2020 RP | DEV</p>
      <a id="foot-link" href="https://github.com/robbiesoho/mysite"
        >See the code for this site</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#footer {
  color: white;
  background-color: black;
  display: flex;
  height: 40px;
  line-height: 40px;
  font-size: 1.5em;

  left: 0;
  bottom: 0;
  width: 100%;
}

#foot-link {
  color: white;
  margin-left: auto;
  font-size: 0.6em;
  margin-right: 20px;
}
#foot-link:hover {
  color: grey;
}
</style>
