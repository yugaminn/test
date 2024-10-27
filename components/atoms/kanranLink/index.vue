<script>
export default {
  props: ['event']
}
</script>

<template>
  <NuxtLink
    target="_blank"
    rel="noopener noreferrer"
    :to="`/events/${event}`"
    :class="'link'">
    <slot />
  </NuxtLink>
</template>
<style scoped>
.link {
  color: #274c82;
}
</style>
