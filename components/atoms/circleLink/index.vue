<script>
export default {
  props: {
    isInternal: {
      type: Boolean,
      default: true
    },
    color: {
      type: String,
      default: 'pink'
    },
    url: {
      type: String,
      default: '/'
    },
    size: {
      type: String,
      default: 'big'
    }
  }
}
</script>

<template>
  <div
    :class="{
      btnWrapper: size == 'small'
    }">
    <Nuxt-link
      v-if="isInternal"
      class="btn"
      :to="url"
      :class="{
        btn_01: color == 'pink',
        btn_02: color == 'green',
        btn_03: color == 'purple',
        btn_04: color == 'pink2',
        btn_05: color == 'orange',
        btn_06: color == 'blue',
        btn_07: color == 'yellow',
        btn_08: color == 'lightgreen',
        btn_09: color == 'skyblue'
      }"
      ontouchstart="">
      <span class="btn__circle" />
      <span class="btn__txt"><slot /></span>
    </Nuxt-link>

    <a
      v-else
      class="btn"
      :to="url"
      :class="{
        btn_01: color == 'pink',
        btn_02: color == 'green',
        btn_03: color == 'purple',
        btn_04: color == 'pink2',
        btn_05: color == 'orange',
        btn_06: color == 'blue',
        btn_07: color == 'yellow',
        btn_08: color == 'lightgreen',
        btn_09: color == 'skyblue'
      }"
      ontouchstart="">
      <span class="btn__circle" />
      <span class="btn__txt"><slot /></span>
    </a>
  </div>
</template>

<style scoped>
/* 小さめボタン用wrapper */
.btnWrapper {
  width: 140px;
}

/*-----------------
  ボタンコンポーネント
-------------------*/
.btn {
  color: #fff;
  font-size: 18px;
  display: block;
  width: 200px;
  max-width: 100%;
  box-sizing: border-box;
  font-family: 'senobi-gothic', sans-serif;
  font-weight: 400;
  font-style: normal;
  text-decoration: none;
  padding: 10px;
  border: 1px solid #000;
  border-radius: 50%;
  position: relative;
}
.btn::before {
  content: '';
  display: inline-block;
  width: calc(100% + 36%);
  height: calc(100% + 36%);
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  transition: all 0.3s;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
}
.btn__circle {
  display: block;
  width: 100%;
  padding-top: 100%;
  box-sizing: border-box;
  text-align: center;
  text-decoration: none;
  background-color: #000;
  border: 1px solid #000;
  border-radius: 50%;
  transition: all 0.3s;
  position: relative;
}
.btn__txt {
  display: block;
  width: 78%;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.btn__txt::before {
  content: '';
  display: inline-block;
  width: 100%;
  height: 1px;
  background-color: #fff;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}
.btn__txt::after {
  content: '';
  display: inline-block;
  width: 5px;
  height: 5px;
  background-color: #fff;
  border-radius: 50%;
  position: absolute;
  bottom: -2px;
  right: 0;
}

/*------- ボタンごとカラー -------*/
/* btn--01 */
.btn_01 .btn__circle {
  background-color: #cc3399;
  border-color: #cc3399;
}
.btn_01 {
  border-color: #cc3399;
}
.btn_01::before {
  background-image: url('~assets/images/btn_hover_redpurple.png');
}

/* btn--02 */
.btn_02 .btn__circle {
  background-color: #5dd1a7;
  border-color: #5dd1a7;
}
.btn_02 {
  border-color: #5dd1a7;
}
.btn_02::before {
  background-image: url('~assets/images/btn_hover_green.png');
}
/* btn--03 */
.btn_03 .btn__circle {
  background-color: #a86cbc;
  border-color: #a86cbc;
}
.btn_03 {
  border-color: #a86cbc;
}
.btn_03::before {
  background-image: url('~assets/images/btn_hover_purple.png');
}
/* btn--04 */
.btn_04 .btn__circle {
  background-color: #f268a7;
  border-color: #f268a7;
}
.btn_04 {
  border-color: #f268a7;
}
.btn_04::before {
  background-image: url('~assets/images/btn_hover_pink.png');
}
/* btn--05 */
.btn_05 .btn__circle {
  background-color: #eb6b5f;
  border-color: #eb6b5f;
}
.btn_05 {
  border-color: #eb6b5f;
}
.btn_05::before {
  background-image: url('~assets/images/btn_hover_orange.png');
}
/* btn--06 */
.btn_06 .btn__circle {
  background-color: #475d98;
  border-color: #475d98;
}
.btn_06 {
  border-color: #475d98;
}
.btn_06::before {
  background-image: url('~assets/images/btn_hover_blue.png');
}
/* btn--07 */
.btn_07 .btn__circle {
  background-color: #edd466;
  border-color: #edd466;
}
.btn_07 {
  border-color: #edd466;
}
.btn_07::before {
  background-image: url('~assets/images/btn_hover_yellow.png');
}
/* btn--08 */
.btn_08 .btn__circle {
  background-color: #cee372;
  border-color: #cee372;
}
.btn_08 {
  border-color: #cee372;
}
.btn_08::before {
  background-image: url('~assets/images/btn_hover_lightgreen.png');
}
/* btn--09 */
.btn_09 .btn__circle {
  background-color: #8bd7db;
  border-color: #8bd7db;
}
.btn_09 {
  border-color: #8bd7db;
}
.btn_09::before {
  background-image: url('~assets/images/btn_hover_lightblue.png');
}

/* :hoverが使える端末を想定 */
@media (hover: hover) {
  .btn:hover::before {
    transform: translate(-50%, -50%) scale(1);
  }
  .btn:hover {
    color: #000;
  }
  .btn:hover .btn__circle {
    background-color: #fff;
  }
  .btn_01:hover {
    color: #e084c1;
  }
  .btn_02:hover {
    color: #5dd1a7;
  }
  .btn_03:hover {
    color: #a86cbc;
  }
  .btn_04:hover {
    color: #f268a7;
  }
  .btn_05:hover {
    color: #eb6b5f;
  }
  .btn_06:hover {
    color: #475d98;
  }
  .btn_07:hover {
    color: #edd466;
  }
  .btn_08:hover {
    color: #cee372;
  }
  .btn_09:hover {
    color: #8bd7db;
  }
}
/* :hoverが使えない端末を想定 */
@media (hover: none) {
  .btn::before {
    transition: all 0.1s;
  }
  .btn:active::before {
    transform: translate(-50%, -50%) scale(1);
  }
  .btn:active {
    color: #000;
  }
  .btn:active .btn__circle {
    background-color: #fff;
  }
  .btn_01:active {
    color: #ce319f;
  }
  .btn_02:active {
    color: #5dd1a7;
  }
  .btn_03:active {
    color: #a86cbc;
  }
  .btn_04:active {
    color: #f268a7;
  }
  .btn_05:active {
    color: #eb6b5f;
  }
  .btn_06:active {
    color: #475d98;
  }
  .btn_07:active {
    color: #edd466;
  }
  .btn_08:active {
    color: #cee372;
  }
  .btn_09:active {
    color: #8bd7db;
  }
}

/* レスポンシブ */
@media screen and (max-width: 1200px) {
  .btnWrapper {
    width: 160px;
  }
  .btn {
    width: 180px;
    font-size: 16px;
  }
}
</style>
