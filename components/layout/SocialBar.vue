<template>
  <div class="contact-bar">
    <div class="contact-icons">
      <v-tooltip right>
        <template #activator="{ on, attrs }">
          <a target="_blank" href="/CV Alexandre SOARES 2021.pdf">
            <v-icon color="success darken-2" dark v-bind="attrs" v-on="on">
              mdi-download
            </v-icon>
          </a>
        </template>
        <span>Download my resume</span>
      </v-tooltip>
      <v-tooltip right>
        <template #activator="{ on, attrs }">
          <nuxt-link :to="{ path: '/', hash: '#contact' }">
            <v-icon color="success darken-2" dark v-bind="attrs" v-on="on">
              mdi-email
            </v-icon>
          </nuxt-link>
        </template>
        <span>Contact me</span>
      </v-tooltip>
      <v-tooltip right>
        <template #activator="{ on, attrs }">
          <a href="https://www.linkedin.com/in/alex-ds-soares/" target="_blank">
            <v-icon color="success darken-2" dark v-bind="attrs" v-on="on">
              mdi-linkedin
            </v-icon>
          </a>
        </template>
        <span>Linkedin</span>
      </v-tooltip>
      <v-tooltip right>
        <template #activator="{ on, attrs }">
          <a href="https://github.com/alexandre-soares" target="_blank">
            <v-icon color="success darken-2" dark v-bind="attrs" v-on="on">
              mdi-github
            </v-icon>
          </a>
        </template>
        <span>Github</span>
      </v-tooltip>
    </div>
    <div class="vl"></div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.contact-bar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: fixed;
  bottom: 0;
  left: 20px;

  z-index: 9999;

  @media only screen and (max-width: 1100px) {
    left: 10px;
  }
}

.contact-icons {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & a {
    text-decoration: none;
  }

  & i {
    cursor: pointer;
    margin: 10px;
  }
}

.vl {
  border-left: 2px solid grey;
  height: 50px;
  margin-top: 10px;
}
</style>
