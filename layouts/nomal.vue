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
    <main>
      <Nuxt />
    </main>
    <footer>
      <NuxtLink :to="'/'" target="_blank" rel="noopener noreferrer">
        <img src="~/assets/images/logo_with_catch_white.png" alt="" srcset="" />
      </NuxtLink>
    </footer>
  </div>
</template>

<style scoped>
footer {
  background-color: #d35b31;
  display: flex;
  justify-content: center;
}
footer img {
  max-width: 270px;
  width: 100%;
}
</style>
