<template>
  <h2 class="block-title">
    <slot />
  </h2>
</template>

<style scoped>
.block-title {
  margin-bottom: 16px;
  margin-left: 8px;
  position: relative;
  display: inline;
}
.block-title::after {
  content: '';
  position: absolute;
  left: -5px;
  bottom: -4px; /*下線の上下位置調整*/
  display: inline-block;
  width: calc(100% + 20px); /*下線の幅*/
  height: 6px; /*下線の太さ*/
  background-color: #eda93b; /*下線の色*/
  border-radius: 5px;
}

.block-title::before {
  content: '';
  position: absolute;
  bottom: -10px;
  left: -22px;
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #eda93b;
}
</style>
