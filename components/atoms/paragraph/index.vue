<script>
export default {
  props: ['align']
}
</script>

<template>
  <p
    class="paragraph"
    :class="{
      alignCenter: align === 'center',
      alignRight: align === 'right'
    }">
    <slot />
  </p>
</template>

<style scoped>
.paragraph {
  letter-spacing: 0.5px;
  line-height: 1.4;
  font-size: 20px;
  color: #3e3a39;
  padding-bottom: 8px;
}

.alignCenter {
  text-align: center;
}
.alignRight {
  text-align: right;
}
@media screen and (max-width: 768px) {
  .paragraph {
    font-size: 14px;
  }
}
</style>
