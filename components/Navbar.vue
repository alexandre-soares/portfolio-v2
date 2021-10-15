<template>
  <nav>
    <v-toolbar flat>
      <nuxt-link :to="{ path: '/' }">
        <v-toolbar-title class="success--text text--darken-2">Alexandre SOARES</v-toolbar-title>
      </nuxt-link>
      <v-spacer></v-spacer>
      <nuxt-link :to="{ path: '/', hash: '#contact' }">
        <v-btn color="success darken-2" elevation="3">
          <span>Hire Me!</span>
          <v-icon right>mdi-email</v-icon>
        </v-btn>
      </nuxt-link>
    </v-toolbar>
  </nav>
</template>

<script>
export default {}
</script>

<style>
nav {
  background-color: transparent !important;
}
</style>
