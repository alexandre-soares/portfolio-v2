<template>
  <nav>
    <v-toolbar flat>
      <v-toolbar-title>Alexandre SOARES</v-toolbar-title>
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
