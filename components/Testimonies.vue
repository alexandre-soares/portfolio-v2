<template>
  <v-container>
    <div class="testimonies">
      <div>
        <span class="comments"> /* Testimonies */ </span>
        <h2>They <span class="primary-color">worked</span> with me</h2>
        <p class="subinfo mt-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto vero
          corrupti, impedit voluptas reprehenderit aliquam! Voluptas sequi magni
          repellat ut ullam provident, libero explicabo inventore quo sed
          pariatur dolorum! Sequi.
        </p>
      </div>

      <v-container>
        <v-row class="flex-column">
          <v-col>
            <div class="testimony">
              <img src="/img/testimonies/Doris.jpg" alt="Doris" />
              <blockquote class="groucho">
                I had the pleasure of working with Alex on two different
                projects over two years. Reactive and devoted to his work, Alex
                always navigated multi-partner projects with a lot of
                professionalism and a dash of humour.
                <a
                  href="https://www.linkedin.com/in/doris-monjac-35843a104/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <footer>
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
                Alexandre is a great professional, very structured and
                organised. He was always doing his best to meet my requirements.
                <a
                  href="https://www.linkedin.com/in/laura-sibille/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <footer>Laura SIBILLE - UX-UI Designer</footer>
                </a>
              </blockquote>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-container>
</template>

<script></script>

<style lang="scss" scoped>
/* Some vars */
$background-color: hsl(50, 5, 97);
$black: hsl(200, 40, 10);
$white: $background-color;
$base-font-size: 1.8rem;
$base-line-height: 1.5em;
.testimonies {
  position: relative;
  @media only screen and (max-width: $bp-small) {
    height: auto;
  }
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
  @media only screen and (max-width: $bp-small) {
    margin: 2rem 0;
  }
  @media only screen and (max-width: $bp-medium) {
    align-items: flex-start;
  }
  & img {
    object-fit: cover;
    width: 15%;
    border-radius: 50%;
    margin-right: 2rem;
    @media only screen and (max-width: $bp-medium) {
      width: 30%;
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
  font-size: $base-font-size;
  line-height: $base-line-height;
  width: 60%;
  footer {
    font-family: 'Noto Sans', sans-serif;
    font-size: 1.4rem;
    font-weight: 700;
    color: darken($white, 30%);
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
    color: darken($white, 15%);
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
