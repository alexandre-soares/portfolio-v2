<template>
  <div class="contact">
    <v-container>
      <Headline
        :comment="'Contact'"
        :title="'Contact Me'"
        :description="'Any questions? Want to plan a meeting? Just write me a message!'"
      />
    </v-container>

    <v-row no-gutters align="baseline">
      <v-col md="12" lg="5" xl="5" class="contact__informations">
        <div>
          <h3>Contact Information</h3>
          <p>Fill up the form and I will contact you within 24 hours.</p>

          <div>
            <v-row align="center">
              <v-icon color="success darken-2"> mdi-phone </v-icon>
              <span>+33 6 67 11 43 80</span>
            </v-row>

            <v-row align="center">
              <v-icon color="success darken-2"> mdi-email </v-icon>
              <span>alexandre.desousasoares@gmail.com</span>
            </v-row>

            <v-row align="center">
              <v-icon color="success darken-2"> mdi-pin </v-icon>
              <span>ul. Kozloduy 93, Sofia, Bulgaria</span>
            </v-row>
          </div>
        </div>
      </v-col>
      <v-col md="12" lg="7" xl="7" class="contact__form">
        <validation-observer ref="observer" v-slot="{ invalid }">
          <form ref="form" class="contact__form" @submit.prevent="submit">
            <validation-provider
              v-slot="{ errors }"
              name="Name"
              rules="required|max:30"
            >
              <v-text-field
                v-model="user_name"
                name="name"
                :counter="30"
                :error-messages="errors"
                label="Name *"
                required
                color="success darken-2"
              ></v-text-field>
            </validation-provider>

            <validation-provider
              v-slot="{ errors }"
              name="Phone Number"
              :rules="{
                required: false,
                regex: '^([0-9]+)$',
              }"
            >
              <v-text-field
                v-model="contact_number"
                :error-messages="errors"
                name="contact_number"
                label="Phone Number"
                color="success darken-2"
              ></v-text-field>
            </validation-provider>

            <validation-provider
              v-slot="{ errors }"
              name="Email"
              rules="required|email"
            >
              <v-text-field
                v-model="user_email"
                :error-messages="errors"
                name="email"
                label="E-mail *"
                required
                color="success darken-2"
              ></v-text-field>
            </validation-provider>

            <validation-provider
              v-slot="{ errors }"
              name="Message"
              rules="required|min:10"
            >
              <v-textarea
                v-model="message"
                :min="10"
                :error-messages="errors"
                name="message"
                label="Message *"
                required
                color="success darken-2"
              ></v-textarea>
            </validation-provider>

            <v-btn
              color="success darken-2"
              class="mr-4 mt-4"
              type="submit"
              :disabled="invalid"
              :loading="loading"
            >
              Send message
            </v-btn>
            <v-btn class="mt-4" @click="clear"> Clear </v-btn>
          </form>
        </validation-observer>

        <v-alert
          v-if="isEmailSent === true"
          outlined
          text
          type="success darken-2"
          width="700"
          class="mx-auto"
          >Thank you! You <strong>successfully</strong> sent your message! I'll
          get back to you <strong>within 24 hours.</strong></v-alert
        >

        <v-alert
          v-if="isEmailSent === false"
          dense
          outlined
          type="error"
          width="500"
          class="mx-auto"
          >Oops! <strong>Something's wrong!</strong> Please try again
          <strong>later!</strong>
        </v-alert>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import emailjs from 'emailjs-com'
import {
  required,
  digits,
  email,
  max,
  min,
  regex,
} from 'vee-validate/dist/rules'
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from 'vee-validate'

import Headline from './layout/Headline.vue'

setInteractionMode('eager')
extend('digits', {
  ...digits,
  message: '{_field_} needs to be {length} digits. ({_value_})',
})
extend('required', {
  ...required,
  message: '{_field_} can not be empty',
})
extend('max', {
  ...max,
  message: '{_field_} may not be greater than {length} characters',
})
extend('min', {
  ...min,
  message: '{_field_} may not be less than {length} characters',
})
extend('regex', {
  ...regex,
  message: '{_field_} {_value_} needs to be only with numbers',
})
extend('email', {
  ...email,
  message: 'Email must be valid',
})
export default {
  components: {
    ValidationProvider,
    ValidationObserver,
    Headline,
  },
  data() {
    return {
      user_name: '',
      contact_number: '',
      user_email: '',
      message: '',
      isEmailSent: null,
      loader: null,
      loading: false,
    }
  },
  watch: {
    loader() {
      const l = this.loader
      this[l] = !this[l]

      setTimeout(() => (this[l] = false), 4000)

      this.loader = null
    },
    isEmailSent() {
      setTimeout(() => (this.isEmailSent = null), 4000)
    },
  },
  methods: {
    submit() {
      this.$refs.observer.validate()

      // LOADING BUTTON

      this.loader = 'loading'

      this[this.loader] = !this[this.loader]
      this[this.loader] = false

      emailjs
        .sendForm(
          'service_wjep9cc',
          'template_mnlhg61',
          this.$refs.form,
          'user_Zi0oEySIEQtJvHwy02QhL'
        )
        .then(
          (result) => {
            console.log('SUCCESS!', result.text)

            setTimeout(() => (this.isEmailSent = true), 2000)
          },
          (error) => {
            console.log('FAILED...', error.text)
            setTimeout(() => (this.isEmailSent = false), 2000)
          }
        )
    },
    clear() {
      this.user_name = ''
      this.contact_number = ''
      this.user_email = ''
      this.message = ''
      this.$refs.observer.reset()
    },
  },
}
</script>
<style lang="scss" scoped>
.contact {
  &__informations {
    background-color: #202b38;
    color: white;
    height: 100vh;
    padding: 20px 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    & div {
      padding: 30px !important;
      @media only screen and (max-width: 1100px) {
        padding: 10px !important;
      }

      & p {
        margin: 20px 0;
      }
      & span {
        margin-left: 20px;
      }
    }
  }
  &__form {
    padding: 2rem 3rem;
    & textarea {
      width: 100%;
      margin-top: 2rem;
      border-bottom: 1px solid #40b883;
      font-family: 'Poppins', 'Helvetica Neue', Arial, sans-serif;
      &:focus {
        outline: none;
        border-bottom: 1px solid #202b38;
      }
    }
  }
}
.contact-icons {
  display: flex;
  flex-direction: row;
}
</style>
