<script>
export default { props: ['bgColor'] }
</script>

<template>
  <span class="sectiontitle-container">
    <h2
      class="sectiontitle"
      :class="{
        bg_blue: bgColor === 'blue'
      }">
      <slot />
    </h2>
  </span>
</template>

<style scoped>
.sectiontitle {
  position: relative;
  display: inline-block;
  color: #3e3a39;
  font-family: 'Noto Sans JP', 'Hiragino Kaku Gothic ProN', Meiryo, sans-serif;
  font-weight: normal;
  font-size: 24px;
  background: #aaddee;
  margin: 0 auto 40px;
  padding: 7px 30px 10px 30px;
}
.sectiontitle:after {
  position: absolute;
  content: '';
  top: 100%;
  left: 0;
  border: none;
  border-bottom: solid 15px transparent;
  border-right: solid 40px #00afd8;
}

@media screen and (max-width: 768px) {
  .sectiontitle {
    font-size: 16px;
    margin: 0 auto 30px;
  }
}
</style>
