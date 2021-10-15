<template>
  <v-container>
    <v-row class="hero">
      <v-col class="text" order="12" order-lg="1" md="12" lg="6">
        <h1 class="text-h2">
          Alexandre <span class="primary-color">SOARES</span>
        </h1>
        <h2 class="text-h3 my-4">VueJS Web Developer</h2>
        <p class="text-body-2">
          With solid <strong>work ethic</strong> and
          <strong>new technologies</strong>, I'm determined to produce quality
          products <strong>under deadline pressure.</strong> I smoothly manage
          projects from <strong>concept to completion.</strong>
        </p>
        <nuxt-link :to="{ path: '/', hash: '#about' }">
          <v-btn color="success darken-2" elevation="3">Learn more</v-btn>
        </nuxt-link>
      </v-col>
      <v-col order="1" order-lg="12" md="12" lg="6">
        <img src="~/assets/img/alex-2.png" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.hero {
  height: 80vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 1100px) {
    height: auto;
    text-align: center;
  }

  & img {
    height: 500px;
    width: 500px;
    margin: 0 auto;
    text-align: center;
    display: block;
  }
}

.text {
  width: 50%;
}
</style>
