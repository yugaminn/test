<script>
export default {
  data: () => ({
    loading: false
  }),
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      this.loading = false
      this.$store.commit('changeFirstLoading', false)
    }
  }
}
</script>

<template>
  <div v-if="loading" class="loader-background">
    <div class="loader-container">
      <div class="logo-wrapper">
        <img
          max-width="320px"
          width="100%"
          class="logo"
          src="~assets/images/logogiripng.png" />
      </div>
    </div>
  </div>
</template>
