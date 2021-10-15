<template>
  <v-container class="about mb-8">
    <Headline :comment="'About Me'" :title="'What am I doing?'" />

    <p class="text-subtitle-1">CORE SKILLS:</p>

    <v-row justify="space-between">
      <v-chip color="success darken-2 font-weight-medium my-2" label outlined
        >Front End Frameworks</v-chip
      >
      <v-chip color="success darken-2 font-weight-medium my-2" label outlined
        >CSS Preprocessors</v-chip
      >
      <v-chip color="success darken-2 font-weight-medium my-2" label outlined
        >RESTful Services/APIs</v-chip
      >
      <v-chip color="success darken-2 font-weight-medium my-2" label outlined
        >Responsive/Mobile Design</v-chip
      >
      <v-chip color="success darken-2 font-weight-medium my-2" label outlined
        >Cross-Browser Development</v-chip
      >
      <v-chip color="success darken-2 font-weight-medium my-2" label outlined
        >Git/Version Control</v-chip
      >
      <v-chip color="success darken-2 my-2" label outlined
        >Problem Solving</v-chip
      >
    </v-row>

    <v-row>
      <v-card
        class="mx-auto my-6 py-10 px-5 card rounded-lg"
        max-width="350"
        v-for="service in services"
        :key="service.id"
        elevation="10"
        cols="12"
        sm="4"
      >
        <div class="card__header">
          <img
            :src="service.iconUrl"
            alt="icon"
            class="d-block my-4 mx-auto"
            height="70"
            width="70"
          />
        </div>
        <div class="card__content">
          <h4 class="text-h6 text-center my-4">{{ service.name }}</h4>

          <v-spacer></v-spacer>

          <p class="text-body-2 text-justify ma-4">
            {{ service.description }}
          </p>
        </div>

        <div class="card__footer">
          <v-divider class="mb-4"></v-divider>

          <v-row justify="center">
            <v-col
              class="text-center"
              v-for="tool in service.tools"
              :key="tool.id"
              md="2"
            >
              <v-tooltip top>
                <template #activator="{ on, attrs }">
                  <v-icon :color="tool.color" v-bind="attrs" v-on="on" large>
                    {{ tool.iconName }}
                  </v-icon>
                </template>
                <span>{{ tool.name }}</span>
              </v-tooltip>
            </v-col>
          </v-row>
        </div>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import { v1 as uuidv4 } from 'uuid'
import Headline from './layout/Headline.vue'
export default {
  components: { Headline },
  name: 'AboutMe',
  data() {
    return {
      isActive: false,
      hoveredComment: true,
      services: [
        // Front End Skills
        {
          id: uuidv4(),
          iconUrl: '/img/about-me/ux.png',
          name: 'Frond End Technologies',
          description: `These are my main Front-End Skills that I use to build websites.`,
          tools: [
            {
              id: uuidv4(),
              name: 'Javascript',
              iconName: 'mdi-language-javascript',
              color: 'javascript',
            },
            {
              id: uuidv4(),
              name: 'Sass',
              iconName: 'mdi-sass',
              color: 'sass',
            },
            {
              id: uuidv4(),
              name: 'Bootstrap',
              iconName: 'mdi-bootstrap',
              color: 'bootstrap',
            },
            {
              id: uuidv4(),
              name: 'Vue',
              iconName: 'mdi-vuejs',
              color: 'vuejs',
            },
            {
              id: uuidv4(),
              name: 'NuxtJS',
              iconName: 'mdi-nuxt',
              color: 'nuxtjs',
            },
            {
              id: uuidv4(),
              name: 'Vuetify',
              iconName: 'mdi-vuetify',
              color: 'vuetify',
            },
          ],
        },
        // Back End Skills
        {
          id: uuidv4(),
          iconUrl: '/img/about-me/backend.png',
          name: 'Back End Technologies',
          description: `These are my main Back-End Skills that I use to build websites.`,
          tools: [
            {
              id: uuidv4(),
              name: 'Node JS',
              iconName: 'mdi-nodejs',
              color: 'nodejs',
            },
            {
              id: uuidv4(),
              name: 'Firebase',
              iconName: 'mdi-firebase',
              color: 'firebase',
            },
          ],
        },
        // Other - Personality
        {
          id: uuidv4(),
          iconUrl: '/img/about-me/tool-box.png',
          name: 'Tools / Apis',
          description: `These are my main tools for developing websites.`,
          tools: [
            {
              id: uuidv4(),
              name: 'Docker',
              iconName: 'mdi-docker',
              color: 'docker',
            },
            {
              id: uuidv4(),
              name: 'Jira',
              iconName: 'mdi-jira',
              color: 'jira',
            },
            {
              id: uuidv4(),
              name: 'Visual Studio Code',
              iconName: 'mdi-microsoft-visual-studio',
              color: 'vscode',
            },
            {
              id: uuidv4(),
              name: 'Git',
              iconName: 'mdi-git',
              color: 'git',
            },
            {
              id: uuidv4(),
              name: 'GraphQL',
              iconName: 'mdi-graphql',
              color: 'graphql',
            },
          ],
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.v-icon {
  cursor: pointer;
}
</style>
