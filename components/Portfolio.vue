<template>
  <v-container class="portfolio">
    <Headline
      :comment="'Portfolio'"
      :title="'What did I already developed?'"
      :description="' '"
    />

    <!--
    <v-row justify="end">
      <v-tooltip top>
        <template #activator="{ on, attrs }">
          <v-icon
            color="success darken-2"
            v-bind="attrs"
            v-on="on"
            @click="displayGrid = true"
            class="ma-4"
          >
            mdi-view-grid
          </v-icon>
        </template>
        <span>Grid</span>
      </v-tooltip>
      <v-tooltip top>
        <template #activator="{ on, attrs }">
          <v-icon
            color="success darken-2"
            class="ma-4"
            v-bind="attrs"
            v-on="on"
            @click="displayGrid = false"
          >
            mdi-format-list-bulleted
          </v-icon>
        </template>
        <span>List</span>
      </v-tooltip>
    </v-row>
-->
    <v-row v-if="displayGrid">
      <v-card
        class="mx-auto my-5 card"
        max-width="374"
        v-for="project in projectsToShow"
        :key="project.id"
        cols="4"
      >
        <a :href="project.website" target="_blank">
          <v-img height="190" :src="project.thumbnail"></v-img>
        </a>

        <v-card-title class="d-flex align-center justify-space-between">
          {{ project.name }}
          <div>
            <v-tooltip top v-if="project.github != '-'">
              <template #activator="{ on, attrs }">
                <a class="mx-1" :href="project.github" target="_blank">
                  <v-icon color="grey lighten-1" v-bind="attrs" v-on="on" large>
                    mdi-github
                  </v-icon>
                </a>
              </template>
              <span>Github</span>
            </v-tooltip>
          </div>
        </v-card-title>

        <v-card-text>
          <div class="my-1 text-subtitle-1">{{ project.type }}</div>

          <div>
            {{ project.description }}
          </div>
        </v-card-text>

        <v-divider class="mx-4"></v-divider>

        <v-card-text class="pb-1">
          <v-chip-group
            v-model="selection"
            active-class="success darken-2 white--text"
            column
          >
            <v-chip
              class="text-uppercase text-caption"
              v-for="(skill, index) in project.skills"
              :key="index"
            >
              {{ skill }}</v-chip
            >
          </v-chip-group>
        </v-card-text>

        <v-card-actions class="d-flex justify-center"> </v-card-actions>
      </v-card>
    </v-row>

    <!--
    <v-row v-if="!displayGrid" class="flex-column ma-0">
      <v-data-table
        :headers="headers"
        :items="projects"
        class="elevation-1 my-12"
        hide-default-footer
      >
      </v-data-table>
    </v-row>
      -->

    <v-row justify="end" v-if="displayGrid">
      <v-btn
        color="success darken-2 ma-4"
        elevation="3"
        v-if="!showMore"
        @click=";(numbersProjects = 10), (showMore = true)"
      >
        <span>Show More</span>
      </v-btn>
      <v-btn
        color="success darken-2 ma-4"
        elevation="3"
        v-else
        @click=";(numbersProjects = 3), (showMore = false)"
      >
        <span>Show Less</span>
      </v-btn>
    </v-row>
  </v-container>
</template>

<script>
import { v1 as uuidv4 } from 'uuid'
import Headline from './layout/Headline.vue'

export default {
  name: 'Portfolio',
  components: {
    Headline,
  },
  data() {
    return {
      projects: [
        {
          id: uuidv4(),
          name: "Laura SIBILLE's Portfolio",
          skills: ['nuxtjs', 'sass'],
          type: 'Front End Website',
          website: 'https://www.laurasibille.com/',
          github: '-',
          description: `
          This is the website I created for the UX-UI Designer Laura SIBILLE.
          `,
          thumbnail: require('@/static/img/portfolio/laura-sibille-feature.png'),
        },
        {
          id: uuidv4(),
          name: 'Invoice App',
          skills: ['vuejs', 'vuex', 'firebase'],
          type: 'Full Stack App',
          description: `
          An Invoice app with realtime update connected with Firebase.
          `,
          website: 'https://vuejs-invoice-app.web.app/',
          github: 'https://github.com/alexandre-soares/vuejs-invoice-app',
          thumbnail: require('@/static/img/portfolio/invoice-app-feature.png'),
        },
        {
          id: uuidv4(),
          name: 'Netflix Movie Api',
          skills: ['vuejs', 'axios'],
          type: 'Front End App',
          website: 'https://quirky-hugle-b33382.netlify.app',
          github:
            'https://github.com/alexandre-soares/netflix-movie-app-nuxtjs',
          description: `
          A Netflix visual connected with a movie api to display a list of movies.
          `,
          thumbnail: require('@/static/img/portfolio/netflix-feature.png'),
        },
        {
          id: uuidv4(),
          name: `Requiem's Blog`,
          skills: ['vuejs', 'firebase', 'crud'],
          type: 'Full Stack App',
          website: 'https://joker-s-blog.web.app/',
          github: 'https://github.com/alexandre-soares/joker-blog',
          description: `
          A blog where you can find some interesting articles about video games.
          `,
          thumbnail: require('@/static/img/portfolio/requiem-blog-featured-image.png'),
        },
        {
          id: uuidv4(),
          name: 'Music Player',
          skills: ['vuejs'],
          type: 'Front End App',
          website: 'https://elastic-euler-fa1143.netlify.app',
          github: 'https://github.com/alexandre-soares/vuejs-music-app',
          description: `
          A music player made with VueJS. Manipulation of audio files. (Desktop Only)
          `,
          thumbnail: require('@/static/img/portfolio/music-player-feature.png'),
          carouselImages: [
            require('@/static/img/portfolio/music-player-feature.png'),
          ],
        },
        {
          id: uuidv4(),
          name: 'Weather App',
          skills: ['vuejs', 'firebase', 'crud'],
          type: 'Full Stack App',
          description: `
          An app where you can check the weather. The app is connected with Firebase.
          `,
          website: 'https://vuejs-weather-app-7dab4.web.app/',
          github: 'https://github.com/alexandre-soares/vuejs-weather-app',
          thumbnail: require('@/static/img/portfolio/weather-app-feature.png'),
        },
      ],
      headers: [
        {
          text: 'Name',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'Type', value: 'type' },
        { text: 'Description', value: 'description' },
        { text: 'Website', value: 'website' },
        { text: 'Github', value: 'github' },
      ],
      displayGrid: true,
      showMore: false,
      numbersProjects: 3,
    }
  },
  computed: {
    projectsToShow() {
      return this.projects.slice(0, this.numbersProjects)
    },
  },
}
</script>

<style lang="scss" scoped></style>
