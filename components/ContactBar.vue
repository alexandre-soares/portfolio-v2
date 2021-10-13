<template>
  <div class="contact-bar">
    <div class="contact-icons">
      <v-tooltip right>
        <template #activator="{ on, attrs }">
          <v-icon color="primary" dark v-bind="attrs" v-on="on">
            mdi-email
          </v-icon>
        </template>
        <span>Contact me</span>
      </v-tooltip>
      <v-tooltip right>
        <template #activator="{ on, attrs }">
          <a href="https://www.linkedin.com/in/alex-ds-soares/" target="_blank">
            <v-icon color="primary" dark v-bind="attrs" v-on="on">
              mdi-linkedin
            </v-icon>
          </a>
        </template>
        <span>Linkedin</span>
      </v-tooltip>
      <v-tooltip right>
        <template #activator="{ on, attrs }">
          <v-icon color="primary" dark v-bind="attrs" v-on="on">
            mdi-instagram
          </v-icon>
        </template>
        <span>Follow me on Instagram</span>
      </v-tooltip>
      <v-tooltip right>
        <template #activator="{ on, attrs }">
          <a href="https://github.com/alexandre-soares" target="_blank">
            <v-icon color="primary" dark v-bind="attrs" v-on="on">
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
  left: 40px;
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
