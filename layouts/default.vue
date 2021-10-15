<template>
  <v-app app>
    <Navbar />
    <v-main>
      <Nuxt />
    </v-main>
    <Social-bar />
  </v-app>
</template>

<script>
import SocialBar from '../components/layout/SocialBar.vue'
import Navbar from '../components/Navbar.vue'
export default {
  components: { Navbar, SocialBar },
}
</script>

<style lang="scss">
html {
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  position: relative;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
}

// COLORS

.primary-color {
  color: #40b883;
}
</style>
