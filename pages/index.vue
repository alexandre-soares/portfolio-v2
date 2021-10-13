<template>
  <div class="home">
    <Hero />
    <About-me />
    <Testimonies />
    <Contact />
  </div>
</template>

<script>
import AboutMe from '../components/AboutMe.vue'
import Contact from '../components/Contact.vue'
import Hero from '../components/Hero.vue'
import Testimonies from '../components/Testimonies.vue'
export default {
  name: 'Home',
  components: {
    Hero,
    AboutMe,
    Testimonies,
    Contact,
  },
}
</script>

<style>
.home {
  z-index: 2;
  backdrop-filter: blur(2rem);
}
</style>
