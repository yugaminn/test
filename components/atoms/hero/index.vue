<script>
export default {}
</script>

<template>
  <div>
    <div class="hero">
      <h2 class="content">
        <slot />
      </h2>
    </div>
  </div>
</template>

<style scoped>
.hero {
  color: #3e3a39;
  text-align: center;
  padding-top: 12%;
  background-image: url('~assets/images/hero_pc.png');
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: auto;
  position: relative;
  object-fit: cover;
}
@media screen and (max-width: 1200px) {
  .hero {
    background-image: url('~assets/images/hero_sp.png');
  }
}
.content {
  font-size: 24px;
  font-family: 'Noto Sans JP', 'Hiragino Kaku Gothic ProN', Meiryo, sans-serif;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}

@media screen and (max-width: 700px) {
  .content {
    font-size: 17px;
  }
}

@media screen and (max-width: 500px) {
  .content {
    font-size: 15px;
  }
}

@media screen and (max-width: 390px) {
  .content {
    font-size: 13px;
  }
}
</style>
