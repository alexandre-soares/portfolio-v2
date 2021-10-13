<template>
  <v-app app>
    <Navbar />
    <v-main>
      <Nuxt />
    </v-main>
    <Contact-bar />
  </v-app>
</template>

<script>
import ContactBar from '../components/ContactBar.vue'
import Navbar from '../components/Navbar.vue'
export default {
  components: { Navbar, ContactBar },
}
</script>

<style lang="scss">
html {
  font-family: 'Poppins', 'Helvetica Neue', Arial, sans-serif;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  font-size: 62.5%;

  @media only screen and (max-width: $bp-medium) {
    font-size: 61%;
  }
  @media only screen and (max-width: $bp-small) {
    font-size: 60%;
  }
  @media only screen and (max-width: $bp-smallest) {
    font-size: 58%;
  }
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

h1 {
  font-size: 3.9rem;
  font-weight: 400;
}

h2 {
  font-size: 3.3rem;
}

h3 {
  font-size: 2.7rem;
}

h4 {
  font-size: 2.3rem;
}

h5 {
  font-size: 1.3rem;
}

p {
  font-size: 1.6rem;
}

a {
  text-decoration: none;
}

img {
  width: 100%;
  height: 100%;
}

// COLORS

.primary-color {
  color: $light-green;
}

// Comments Class

.comments {
  font-size: 1.6rem;
  color: rgb(182, 182, 182);
  padding: 20px 0;
  text-transform: uppercase;
  transition: 0.8s all ease-in-out;

  &.active {
    color: $light-green;
  }
}

// BUTTONS

button span {
  font-size: 1.2rem;
}

</style>
