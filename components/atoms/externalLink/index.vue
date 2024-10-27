<script>
export default {
  props: ['isInternal', 'url', 'rounded', 'bgColor', 'color']
}
</script>

<template>
  <NuxtLInk
    v-if="isInternal"
    class="externalLink"
    :href="url"
    :class="{
      rounded,
      // bg_purple: bgColor === 'purple',
      // bg_pink: bgColor === 'pink',
      bg_skyblue: bgColor === 'skyblue'
      // bg_blue: bgColor === 'blue',
      // bg_green: bgColor === 'green',
      // color_white: color === 'white',
      // bg_navy: color === 'navy',
      // bg_orange: color === 'orange'
    }">
    <slot />
  </NuxtLInk>
  <a
    v-else
    :href="url"
    class="externalLink"
    :class="{
      rounded,
      // bg_purple: bgColor === 'purple',
      // bg_pink: bgColor === 'pink',
      bg_skyblue: bgColor === 'skyblue'
      // bg_blue: bgColor === 'blue',
      // bg_green: bgColor === 'green',
      // color_white: color === 'white',
      // bg_navy: color === 'navy',
      // bg_orange: color === 'orange'
    }">
    <slot />
  </a>
</template>

<style scoped>
.externalLink {
  display: inline-block;
  cursor: pointer;
  transition: 0.2s cubic-bezier(0.45, 0, 0.55, 1);
  background: #59c3e1;
  border-radius: 60px;
  font-family: 'Noto Sans JP', 'Hiragino Kaku Gothic ProN', Meiryo, sans-serif;
  font-size: 14px;
  min-width: 170px;
  padding: 15px;
  text-align: center;
}

a {
  color: #fff;
  text-decoration: none;
  position: relative;
}

a::before {
  border-right: 2px solid #fff;
  border-top: 2px solid #fff;
  bottom: 0;
  content: '';
  height: 7px;
  width: 7px;
  margin: auto;
  position: absolute;
  right: 20px;
  top: 0;
  transform: rotate(45deg);
  transition: right 0.3s;
}

.externalLink:hover {
  background: #f3982d;
}

a:hover::before {
  right: 17px;
}

@media screen and (max-width: 768px) {
  .externalLink {
    padding: 15px 12px;
  }
}
</style>
