<script>
export default {
  props: ['bgColor']
}
</script>

<template>
  <h2 class="block-title">
    <slot />
  </h2>
</template>

<style scoped>
.block-title {
  display: inline-block;
  font-size: 24px;
  margin-bottom: 16px;
  position: relative;
  font-family: 'Noto Sans JP', 'Hiragino Kaku Gothic ProN', Meiryo, sans-serif;
  font-weight: bold;
  color: transparent;
  background: repeating-linear-gradient(
    90deg,
    #59c3e1 0,
    #59c3e1 1.25em,
    #f3982d 1.25em,
    #f3982d 2.25em,
    #3e3a39 2.25em,
    #3e3a39 100em
  );
  /* background: repeating-linear-gradient(
    90deg,
    #59c3e1 0 1.25em,
    #f3982d 1.25em 2.25em,
    #3e3a39 2.25em 100em
  ); */
  background-clip: text;
  -webkit-background-clip: text;
}

.block-title::first-letter {
  font-size: 30px;
}

@media screen and (max-width: 768px) {
  .block-title {
    font-size: 16px;
  }
  .block-title::first-letter {
    font-size: 20px;
  }
}
</style>
