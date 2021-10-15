<template>
  <div class="headline">
    <span
      class="comments grey--text text--lighten-1 text-uppercase text-subtitle-1"
    >
      /* {{ comment }} */
    </span>
    <h2 class="text-h3 my-6 font-weight-medium primary-color">
      {{ title }}
    </h2>
    <p class="text-body-1 subinfo">
      {{ description }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    comment: {
      type: String,
    },
    title: {
      type: String,
    },
    description: {
      type: String,
    },
  },
}
</script>

<style lang="scss" scoped>
.headline {
  @media only screen and (max-width: 1100px) {
    width: 100% !important;
    text-align: center;
  }

  & .subinfo {
    width: 50% !important;

    @media only screen and (max-width: 1100px) {
      width: 100% !important;
    }
  }
}
</style>
