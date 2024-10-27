<template>
  <div v-cloak>
    <Header />
    <main>
      <Nuxt />
    </main>
    <Footer />
  </div>
</template>

  <script>
export default {
  // mounted() {
  //   if (this.$store.state.isFirstLoading) {
  //     this.$nextTick(() => {
  //       this.$nuxt.$loading.start()
  //       setTimeout(() => this.$nuxt.$loading.finish(), 2000)
  //     })
  //   }
  // }
}
</script>

  <style scoped>
main {
  max-width: 1440px;
  margin: auto;
  /* padding-top: 80px; */
}
</style>
