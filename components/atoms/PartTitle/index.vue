<script>
export default {
  props: ['bgColor', 'position']
}
</script>

<template>
  <h4
    class="PartTitle"
    :class="{
      bg_gleen: bgColor === 'gleen',
      bg_purple: bgColor === 'purple',
      bg_blue: bgColor === 'blue',
      bg_pink: bgColor === 'pink',
      bg_yellow: bgColor === 'yellow',
      position_center: position === 'center'
    }">
    <slot />
  </h4>
</template>

<style scoped>
.PartTitle:after {
  margin-left: -10px;
  margin-right: -10px;
  border-left: 3px solid #ec6d6d;
}
.PartTitle {
  padding-left: 12px;
  padding-right: 12px;
  display: inline-block;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  font-family: 'Noto Sans JP', 'Hiragino Kaku Gothic ProN', Meiryo, sans-serif;
  font-size: 20px;
  color: #3e3a39;
  font-weight: bold;
}

.bg_pink {
  border-left: 8px double #ec6d6d; /*二重線 */
}

.bg_gleen {
  border-left: 8px double #a9d06b; /*二重線 */
}

.bg_purple {
  border-left: 8px double #8f82bc; /*二重線 */
}

.bg_blue {
  border-left: 8px double #4cbbb4; /*二重線 */
}

.bg_yellow {
  border-left: 8px double #fdd35c; /*二重線 */
}

.position_center {
  padding-left: 24px;
}
@media screen and (max-width: 768px) {
  .PartTitle {
    font-size: 14px;
  }
}
</style>
