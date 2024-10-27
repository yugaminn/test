<script>
export default {
  props: ['bgColor', 'rounded', 'short']
}
</script>

<template>
  <div
    class="Box"
    :class="{
      bg_yellow: bgColor === 'yellow',
      bg_blue: bgColor === 'blue',
      bg_red: bgColor === 'red',
      bg_green: bgColor === 'green',
      bg_purple: bgColor === 'purple',
      bg_skyblue: bgColor === 'skyblue',
      rounded,
      short
    }">
    <slot />
  </div>
</template>

<style scoped>
.Box {
  font-family: 'Noto Sans JP', 'Hiragino Kaku Gothic ProN', Meiryo, sans-serif;
  padding: 1.5rem 2rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  box-shadow: 0 3px 6px 0 rgba(21, 44, 66, 0.5);
}
.bg_yellow {
  background-color: #fee5a3;
  color: #3e3a39;
  font-family: 'Noto Sans JP', 'Hiragino Kaku Gothic ProN', Meiryo, sans-serif;
}
.bg_blue {
  background-color: #94d1dc;
  color: #3e3a39;
  font-family: 'Noto Sans JP', 'Hiragino Kaku Gothic ProN', Meiryo, sans-serif;
}
.bg_red {
  background: #f0908a;
  color: #fff;
  font-family: 'Noto Sans JP', 'Hiragino Kaku Gothic ProN', Meiryo, sans-serif;
}
.bg_green {
  background-color: #d0e5b9;
  color: #3e3a39;
  font-family: 'Noto Sans JP', 'Hiragino Kaku Gothic ProN', Meiryo, sans-serif;
}
.bg_purple {
  background-color: #b0a7d1;
  color: #fff;
  font-family: 'Noto Sans JP', 'Hiragino Kaku Gothic ProN', Meiryo, sans-serif;
}
.bg_skyblue {
  background-color: #aaddee;
  color: #3e3a39;
  font-family: 'Noto Sans JP', 'Hiragino Kaku Gothic ProN', Meiryo, sans-serif;
}
.rounded {
  border-radius: 40px;
}
.short {
  max-width: 720px;
  margin: auto;
}
</style>
