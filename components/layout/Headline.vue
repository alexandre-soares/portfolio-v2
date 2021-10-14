<template>
  <div>
    <span
      class="comments grey--text text--lighten-1 text-uppercase text-subtitle-1"
    >
      /* {{ comment }} */
    </span>
    <h2 class="text-h2 my-5 primary-color">
      {{ title }}
    </h2>
    <p class="text-body-1 subinfo mt-4">
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
.subinfo {
  width: 50% !important;
}
</style>
