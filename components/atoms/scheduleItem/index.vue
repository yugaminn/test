<script>
export default {
  props: {
    isSecondDay: {
      type: Boolean,
      default: false
    },
    time: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    group: {
      type: String,
      default: ''
    },
    script: {
      type: String,
      default: ''
    },
    id: {
      type: Number,
      default: 0
    }
  },
  computed: {
    boxStyle() {
      const OPEN_TIME = this.isSecondDay ? 9 : 10
      const TIMES = this.time.split('～')
      const START_TIME = TIMES[0]?.split(':')
      const END_TIME = TIMES[1]?.split(':')
      const START_TIME_HOUR_NUMBERED = Number(START_TIME[0])
      const START_TIME_MINUTES_NUMBERED = Number(START_TIME[1])
      const END_TIME_HOUR_NUMBERED = Number(END_TIME[0])
      const END_TIME_MINUTES_NUMBERED = Number(END_TIME[1])
      const DIFF =
        END_TIME_HOUR_NUMBERED * 60 +
        END_TIME_MINUTES_NUMBERED -
        (START_TIME_HOUR_NUMBERED * 60 + START_TIME_MINUTES_NUMBERED)
      const POSITION_DIFF =
        START_TIME_HOUR_NUMBERED * 60 +
        START_TIME_MINUTES_NUMBERED -
        OPEN_TIME * 60
      return `height: ${DIFF * 4}px; top: ${POSITION_DIFF * 4}px`
    }
  }
}
</script>

<template>
  <li :style="boxStyle" class="box">
    <NuxtLink
      v-if="id !== 0"
      :to="`/events/${id}`"
      class="contents-wrapper event-link"
      target="_blank"
      rel="noopener noreferrer">
      <div class="time">{{ time }}</div>
      <div class="name">
        {{ name }}
        <span class="group">{{ group }}</span>
        <span class="script">{{ script }}</span>
      </div>
    </NuxtLink>
    <div v-else class="contents-wrapper">
      <div class="time">{{ time }}</div>
      <div class="name">
        {{ name }}
        <span class="group">{{ group }}</span>
        <span class="script">{{ script }}</span>
      </div>
    </div>
  </li>
</template>

<style scoped>
.box {
  position: absolute;
  left: 0;
  width: 100%;
  background: #f9edbb;
}
.contents-wrapper {
  display: block;
  width: 100%;
  height: 100%;
  padding: 2px;
}
.event-link {
  text-decoration: none;
  box-shadow: 1px 1px 2px gray;
}
.event-link:hover {
  box-shadow: 2px 2px 4px gray;
}

.time {
  font-size: 12px;
  color: #181825;
}
.group {
  font-size: 10px;
  color: #181825;
}
.name {
  font-size: 12px;
  color: #224786;
  font-weight: 600;
}
.script {
  font-size: 10px;
  color: red;
}
</style>
