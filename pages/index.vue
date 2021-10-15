<template>
  <div class="home">
    <Hero />
    <About-me class="my-4" id="about" />
    <Portfolio class="my-4" />
    <Testimonies class="my-4" />
    <Contact id="contact" />
  </div>
</template>

<script>
import AboutMe from '../components/AboutMe.vue'
import Hero from '../components/Hero.vue'
import Portfolio from '../components/Portfolio.vue'
import Testimonies from '../components/Testimonies.vue'
import Contact from '../components/Contact.vue'
export default {
  head: {
    title: 'Alexandre SOARES - VueJS Developer',
    meta: [
      {
        hid: 'description',
        name: 'VueJS Developer Page',
        content: 'Home page description'
      }
    ],
  },
  name: 'Home',
  components: {
    Hero,
    AboutMe,
    Portfolio,
    Testimonies,
    Contact,
  },
}
</script>

<style>
.home {
  position: relative;
  z-index: 2;
  backdrop-filter: blur(2rem);
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.7),
    rgba(255, 255, 255, 0.3)
  );
}
</style>
