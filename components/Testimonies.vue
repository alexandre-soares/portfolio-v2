<template>
  <v-container class="testimonies">
    <Headline
      :comment="'Testimonies'"
      :title="'They worked with me'"
      :description="'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae reprehenderit deleniti molestias natus delectus beatae sequi exercitationem tempora quam amet tenetur vero fugiat incidunt sed, obcaecati nesciunt unde libero porro?'"
    />

    <v-container>
      <v-row class="flex-column">
        <v-col>
          <div class="testimony">
            <img src="/img/testimonies/Doris.jpg" alt="Doris" />
            <blockquote class="groucho">
              I had the pleasure of working with Alex on two different projects
              over two years. Reactive and devoted to his work, Alex always
              navigated multi-partner projects with a lot of professionalism and
              a dash of humour.
              <a
                href="https://www.linkedin.com/in/doris-monjac-35843a104/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <footer class="text-body-2">
                  Doris MONJAC - Head Of The Economy And Society Unit of
                  EUROQUALITY
                </footer>
              </a>
            </blockquote>
          </div>
        </v-col>
        <v-col>
          <div class="testimony">
            <img src="/img/testimonies/Laura.jpg" alt="Laura" />
            <blockquote class="groucho">
              Alexandre is a great professional, very structured and organised.
              He was always doing his best to meet my requirements.
              <a
                href="https://www.linkedin.com/in/laura-sibille/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <footer class="text-body-2">
                  Laura SIBILLE - UX-UI Designer
                </footer>
              </a>
            </blockquote>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import Headline from './layout/Headline.vue'

export default {
  components: {
    Headline,
  },
}
</script>

<style lang="scss" scoped>
.testimonies {
  position: relative;

  & .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
.testimony {
  margin: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: center;

  & img {
    object-fit: cover;
    width: 15%;
    border-radius: 50%;
    margin-right: 2rem;

    @media only screen and (max-width: 900px) {
      width: 25%;
    }
  }
  & p {
    width: 60%;
    text-align: justify;
  }
  & span {
    display: inline-block;
    color: #000046;
    margin-top: 2rem;
  }
}
.groucho {
  position: relative;
  width: 60%;
  footer {
    font-family: 'Noto Sans', sans-serif;
    float: right;
    &:before {
      content: '\2015';
    }
  }
  &:after {
    content: '\201D';
    position: absolute;
    top: 0.28em;
    right: -0.2em;
    font-size: 6em;
    font-style: italic;
    z-index: -1;
  }
}
a footer {
  transition: all 0.3s ease-in;
  &:hover {
    color: $light-green;
  }
}
</style>
