<script>
export default {
  props: ['bgColor', 'rounded']
}
</script>

<template>
  <div
    class="timetablecontents"
    :class="{
      rounded,
      bg_navy: bgColor === 'navy',
      bg_yellow: bgColor === 'yellow'
    }">
    <slot />
  </div>
</template>

<style scoped>
.timetablecontents {
  width: 100%;
  padding: 1rem;
}
@media screen and (min-width: 1024px) {
  .timetablecontents {
    padding: 2rem;
  }
}
.rounded {
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
}
.bg_navy {
  background-color: #274c82;
  color: white;
}
.bg_yellow {
  background-color: #f4e25d;
}
</style>
