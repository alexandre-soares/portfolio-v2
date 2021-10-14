<template>
  <v-container>
    <section class="hero">
      <div>
        <h1 class="text-h2">Alexandre <span class="primary-color">SOARES</span></h1>
        <h2 class="text-h3 my-4">Full Stack Developer</h2>
        <p class="text-body-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ducimus
          facere, perspiciatis excepturi velit dicta sint minima consequuntur
          nam dolore saepe corporis tempora nisi aliquid recusandae,
          necessitatibus eos expedita doloremque.
        </p>
        <v-btn color="success darken-2" elevation="3">Learn more</v-btn>
      </div>
      <div>
        <img src="~/assets/img/alex.png" />
      </div>
    </section>
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

  & img {
    height: 500px;
    width: 500px;
  }
}
</style>
