<template>
  <v-container class="about">
    <div>
      <span class="comments"> /* About Me */ </span>
      <h2>My awesome <span class="primary-color">Services</span></h2>
      <p class="subinfo mt-4">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto vero
        corrupti, impedit voluptas reprehenderit aliquam! Voluptas sequi magni
        repellat ut ullam provident, libero explicabo inventore quo sed pariatur
        dolorum! Sequi.
      </p>
    </div>

    <v-row class="services-list">
      <v-card
        class="mx-auto my-12 pa-3 card"
        min-width="300"
        max-width="400"
        v-for="service in services"
        :key="service.id"
        cols="12"
        sm="4"
        :style="{ bottom: service.bottom + 'px', left: service.left + 'px' }"
      >
        <div class="card__header">
          <img :src="service.iconUrl" alt="icon" class="icon" />
        </div>
        <div class="card__content">
          <h4>{{ service.name }}</h4>

          <v-spacer></v-spacer>

          <p class="card__description">
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
              cols="12"
              sm="2"
            >
              <v-tooltip top>
                <template #activator="{ on, attrs }">
                  <v-icon :color="tool.color" v-bind="attrs" v-on="on" x-large>
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
export default {
  name: 'AboutMe',
  data() {
    return {
      hoveredComment: true,
      services: [
        // Front End Skills
        {
          id: uuidv4(),
          bottom: 100,
          left: 60,
          iconUrl: '/img/ux.png',
          name: 'Frond End Skills',
          description: `I'm a thing. But, like most politicians, he promised more than
                he could deliver. You won't have time for sleeping, soldier, not
                with all the bed making you'll be doing.`,
          tools: [
            {
              id: uuidv4(),
              name: 'HTML',
              iconName: 'mdi-language-html5',
              color: 'html',
            },
            {
              id: uuidv4(),
              name: 'CSS',
              iconName: 'mdi-language-css3',
              color: 'css',
            },
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
          bottom: -100,
          left: 600,
          iconUrl: '/img/backend.png',
          name: 'Back End Skills',
          toggleName: 'showBackSkills',
          description: `I'm a thing. But, like most politicians, he promised more than
                he could deliver. You won't have time for sleeping, soldier, not
                with all the bed making you'll be doing.`,
          tools: [
            {
              id: uuidv4(),
              name: 'Node JS',
              iconName: 'mdi-nodejs',
              color: 'nodejs',
            },
          ],
        },
        // Other - Personality
        {
          id: uuidv4(),
          bottom: 300,
          left: 700,
          iconUrl: '/img/ux.png',
          name: 'Personality',
          description: `I'm a thing. But, like most politicians, he promised more than
                he could deliver. You won't have time for sleeping, soldier, not
                with all the bed making you'll be doing.`,
          tools: [
            {
              id: uuidv4(),
              name: 'Docker',
              iconName: 'mdi-docker',
              color: 'docker',
            },
            {
              id: uuidv4(),
              name: 'GraphQL',
              iconName: 'mdi-graphql',
              color: 'graphql',
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
          ],
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.about {
  position: relative;
  height: 100vh;
  margin-bottom: 100px;
}

p {
  margin: 10px 0 !important;
}

.subinfo {
  width: 50% !important;
}

.services-list {
  margin-top: 30px;
}

.card {
  position: absolute;
  &__header {
    & img {
      object-fit: cover;
    }
  }

  &__content {
    & h4 {
      font-size: 1.6rem;
      text-align: center;
      margin: 10px 0;
    }
  }

  &__description {
    text-align: justify;
    font-size: 1.4rem;
  }

  &__footer {
  }
}

.v-icon {
  cursor: pointer;
}

.icon {
  display: block;
  margin: 10px auto;
  height: 10rem;
  width: 10rem;
  object-fit: cover;
}
</style>
