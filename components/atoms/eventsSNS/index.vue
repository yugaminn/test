<script>
export default {
  props: {
    url: {
      type: String,
      default: ''
    }
  }
}
</script>

<template>
  <div class="container">
    <a :href="url" target="_blank" rel="noopener noreferrer"><slot /></a>
  </div>
</template>

<style scoped>
.container {
  padding-bottom: 1rem;
}

a {
  margin-right: 1rem;
}
</style>
