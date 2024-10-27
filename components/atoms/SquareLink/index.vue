<script>
export default {
  props: {
    bgColor: {
      type: String,
      default: 'blue'
    },
    url: {
      type: String,
      default: '/'
    },
    internal: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<template>
  <div
    class="button-link"
    :class="{
      bg_red: bgColor === 'red',
      bg_pink: bgColor === 'pink',
      bg_yellow: bgColor === 'yellow',
      bg_blue: bgColor === 'blue',
      bg_purple: bgColor === 'purple',
      bg_green: bgColor === 'green',
      bg_orange: bgColor === 'orange',
      bg_skyblue: bgColor === 'skyblue'
    }">
    <NuxtLink v-if="internal" :to="url" class="link">
      <div class="text-container">
        <slot />
      </div>
    </NuxtLink>
    <a v-else :href="url" class="link">
      <div class="text-container">
        <slot />
      </div>
    </a>
  </div>
</template>

<style scoped>
.button-link {
  position: relative;
  width: 270px;
  height: 120px;
  color: #224786;
  background: #ffffff;
  cursor: pointer;
  border-radius: 20px;
}

.link {
  position: absolute;
  display: inline-block;
  width: 100%;
  height: 100%;
  top: -8px;
  left: -8px;
  color: #224786;
  border: #224786 7px solid;
  background: white;
  text-decoration: none;
  font-weight: 600;
  padding: 0.5rem;
  transition: all 0.2s;
  border-radius: 18px;
}
.link:hover {
  top: 0px;
  left: 0px;
}

.text-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.bg_red {
  background-color: #d35b31;
}
.bg_red .link {
  color: #d35b31;
  border-color: #d35b31;
}
.bg_red:hover .link {
  background-color: #d35b31;
  color: #ffffff;
}
.bg_pink {
  background-color: #ed88a5;
}
.bg_pink .link {
  color: #ed88a5;
  border-color: #ed88a5;
}
.bg_pink:hover .link {
  background-color: #ed88a5;
  color: #ffffff;
}
.bg_yellow {
  background-color: #ffe97b;
}
.bg_yellow .link {
  color: #ffe97b;
  border-color: #ffe97b;
}
.bg_yellow:hover .link {
  background-color: #ffe97b;
  color: #ffffff;
}

.bg_blue {
  background-color: #2861a5;
}
.bg_blue .link {
  color: #2861a5;
  border-color: #2861a5;
}
.bg_blue:hover .link {
  background-color: #2861a5;
  color: #ffffff;
}

.bg_purple {
  background-color: #b369b7;
}
.bg_purple .link {
  color: #b369b7;
  border-color: #b369b7;
}
.bg_purple:hover .link {
  background-color: #b369b7;
  color: #ffffff;
}

.bg_green {
  background-color: #74a01f;
}
.bg_green .link {
  color: #74a01f;
  border-color: #74a01f;
}
.bg_green:hover .link {
  background-color: #74a01f;
  color: #ffffff;
}

.bg_orange {
  background-color: #eda93b;
}
.bg_orange .link {
  color: #eda93b;
  border-color: #eda93b;
}
.bg_orange:hover .link {
  background-color: #eda93b;
  color: #ffffff;
}

.bg_skyblue {
  background-color: #4cb2bf;
}
.bg_skyblue .link {
  color: #4cb2bf;
  border-color: #4cb2bf;
}
.bg_skyblue:hover .link {
  background-color: #4cb2bf;
  color: #ffffff;
}
.bg_white {
  background-color: #ffffff;
}
</style>
