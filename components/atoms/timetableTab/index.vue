<script>
export default {
  props: ['bgColor', 'rounded', 'withSaikun'],
  methods: {
    handleTabClick() {
      this.$emit('tab-click-event')
    }
  }
}
</script>

<template>
  <div class="timetabletab-wrapper">
    <div
      class="timetabletab"
      :class="{
        rounded,
        bg_navy: bgColor === 'navy',
        bg_yellow: bgColor === 'yellow'
      }"
      @click="handleTabClick">
      <slot />
    </div>
    <div class="saikun-wrapper">
      <img
        src="~assets/images/saikuns/saikun.gif"
        alt="サイくん"
        class="saikun"
        :class="{ withSaikun }" />
    </div>
  </div>
</template>

<style scoped>
.timetabletab-wrapper {
  position: relative;
  width: 100%;
}

.timetabletab {
  text-align: center;
  padding: 12px;
  width: 100%;
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  position: relative;
  z-index: 300;
}
.rounded {
  border-top-left-radius: 20px 20px;
  border-top-right-radius: 20px 20px;
}
.bg_navy {
  background-color: #274c82;
  color: white;
}
.bg_yellow {
  background-color: #f4e25d;
}

.saikun-wrapper {
  z-index: 200;
}
.saikun {
  position: absolute;
  display: none;
  width: auto;
  height: 120px;
  left: 10px;
  top: -80px;
  animation: pikopiko 2s steps(2, start) infinite;
}
.withSaikun {
  display: block;
}
</style>
