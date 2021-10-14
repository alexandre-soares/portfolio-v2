<template>
  <div class="home">
    <Hero />
    <About-me />
    <Portfolio />
    <Testimonies />
    <Contact />
  </div>
</template>

<script>
import AboutMe from '../components/AboutMe.vue'
import Hero from '../components/Hero.vue'
import Portfolio from '../components/Portfolio.vue'
import Testimonies from '../components/Testimonies.vue'
import Contact from '../components/Contact.vue'
export default {
  name: 'Home',
  components: {
    Hero,
    AboutMe,
    Portfolio,
    Testimonies,
    Contact
  },
}
</script>

<style>
.home {
  z-index: 2;
  backdrop-filter: blur(2rem);
}
</style>
