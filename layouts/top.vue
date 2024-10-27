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

<template>
  <div v-cloak>
    <Header :has-header="false" />
    <main>
      <Nuxt />
    </main>
    <Footer />
    <Headmenu />
  </div>
</template>

<style scoped></style>
