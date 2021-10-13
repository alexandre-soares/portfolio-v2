<template>
  <div class="contact">
    <v-container>
      <span class="comments"> /* Contact */ </span>
      <h2>Contact <span class="primary-color">Me</span></h2>
      <p class="subinfo mt-4">
        Any questions? Want to plan a meeting? Just write me a message!
      </p>
    </v-container>

    <v-row no-gutters align="baseline">
      <v-col cols="5" class="contact__informations">
        <div>
          <h3>Contact Information</h3>
          <p>Fill up the form and I will contact you within 24 hours</p>

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
      <v-col cols="7" class="contact__form">
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
                label="Name"
                required
                color="success darken-2"
              ></v-text-field>
            </validation-provider>

            <validation-provider
              v-slot="{ errors }"
              name="Phone Number"
              :rules="{
                required: true,
                regex: '^([0-9]+)$',
              }"
            >
              <v-text-field
                v-model="contact_number"
                :error-messages="errors"
                name="contact_number"
                label="Phone Number"
                required
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
                label="E-mail"
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
                label="Message"
                required
                color="success darken-2"
              ></v-textarea>
            </validation-provider>

            <v-btn
              color="success darken-2"
              class="mr-4 mt-4"
              type="submit"
              :disabled="invalid"
              :class="{ 'button--loading': loadingButton }"
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
          width="500"
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
  },
  data() {
    return {
      user_name: '',
      contact_number: '',
      user_email: '',
      message: '',
      isEmailSent: null,
      loadingButton: null,
    }
  },
  methods: {
    submit() {
      this.$refs.observer.validate()
      this.loadingButton = true

      emailjs
        .sendForm(
          'service_wjep9cc',
          'template_mnlhg61',
          this.$refs.form,
          'user_Zi0oEySIEQtJvHwy02QhL',
        )
        .then(
          (result) => {
            console.log('SUCCESS!', result.text)
            this.loadingButton = false
            this.isEmailSent = true
          },
          (error) => {
            console.log('FAILED...', error.text)
            this.loadingButton = false
            this.isEmailSent = false
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
    background-color: $dark-green;
    color: white;
    height: 100vh;
    padding: 20px 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    & div {
      padding: 30px !important;

      & p {
        margin: 20px 0;
      }

      & span {
        font-size: 1.5rem;
        margin-left: 20px;
      }
    }
  }

  &__form {
    padding: 2rem 3rem;

    & textarea {
      width: 100%;
      margin-top: 2rem;
      font-size: 1.6rem;
      border-bottom: 1px solid $light-green;
      font-family: 'Poppins', 'Helvetica Neue', Arial, sans-serif;
      &:focus {
        outline: none;
        border-bottom: 1px solid $dark-green;
      }
    }
  }
}

.contact-icons {
  display: flex;
  flex-direction: row;
}

.button .button__text {
  color: #ffffff;
  transition: all 0.2s;
}
.button--loading .button__text {
  visibility: hidden;
  opacity: 0;
}
.button--loading::after {
  content: '';
  z-index: 99;
  background-color: #2fb454;
  position: absolute;
  width: 16px;
  height: 16px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  border: 4px solid transparent;
  border-top-color: #ffffff;
  border-radius: 50%;
  animation: button-loading-spinner 1s ease infinite;
}
@keyframes button-loading-spinner {
  from {
    transform: rotate(0turn);
  }
  to {
    transform: rotate(1turn);
  }
}
</style>
