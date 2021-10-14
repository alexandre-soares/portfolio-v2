<template>
  <v-container class="about">
    <Headline
      :comment="'About Me'"
      :title="'My Awesome Services'"
      :description="'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae reprehenderit deleniti molestias natus delectus beatae sequi exercitationem tempora quam amet tenetur vero fugiat incidunt sed, obcaecati nesciunt unde libero porro?'"
    />

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
          <img
            :src="service.iconUrl"
            alt="icon"
            class="icon"
            height="70"
            width="70"
          />
        </div>
        <div class="card__content">
          <h4 class="text-h6">{{ service.name }}</h4>

          <v-spacer></v-spacer>

          <p class="text-body-2 card__description">
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
      hoveredComment: true,
      services: [
        // Front End Skills
        {
          id: uuidv4(),
          bottom: 50,
          left: 60,
          iconUrl: '/img/about-me/ux.png',
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
          iconUrl: '/img/about-me/backend.png',
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
          bottom: 300,
          left: 700,
          iconUrl: '/img/about-me/tool-box.png',
          name: 'Tools',
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
      text-align: center;
      margin: 10px 0;
    }
  }

  &__description {
    text-align: justify;
  }
}

.v-icon {
  cursor: pointer;
}

.icon {
  display: block;
  margin: 10px auto;
  object-fit: cover;
}
</style>
