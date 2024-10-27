<template>
  <div class="content">
    <slot />
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.content {
  max-width: 1140px;
  padding: 1rem;
  margin: auto;
}

@media screen and (min-width: 1200px) {
  .content {
    width: 100%;
    padding: 2rem;
  }
}
</style>
