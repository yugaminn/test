<template>
  <div v-cloak>
    <Header />
    <main>
      <Nuxt />
    </main>
    <Footer />
    <Headmenu />
  </div>
</template>

<script>
export default {
  mounted() {
    if (this.$store.state.isFirstLoading) {
      this.$nextTick(() => {
        this.$nuxt.$loading.start()
        setTimeout(() => this.$nuxt.$loading.finish(), 2000)
      })
    }
  }
}
</script>

<style scoped>
main {
  margin: auto;
}
</style>
