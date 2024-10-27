<script>
export default {
  props: {
    bgColor: {
      type: String,
      default: 'pink'
    },
    url: {
      type: String,
      default: 'green'
    }
  }
}
</script>

<template>
  <div
    class="slide-link"
    :class="{
      bg_blue: bgColor === 'blue'
      // bg_green: bgColor === 'green'
    }">
    <NuxtLink :to="url">
      <div class="slidelink"><slot /></div>
    </NuxtLink>
  </div>
</template>

<style scoped>
.slidelink {
  display: inline-block;
  cursor: pointer;
  transition: 0.2s cubic-bezier(0.45, 0, 0.55, 1);
  background: #59c3e1;
  border-radius: 60px;
  font-family: 'Noto Sans JP', 'Hiragino Kaku Gothic ProN', Meiryo, sans-serif;
  font-size: 20px;
  /* max-width: 300px; */
  padding: 15px 50px;
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

.slidelink:hover {
  background: #f3982d;
}

a:hover::before {
  right: 17px;
}
@media screen and (max-width: 768px) {
  .slidelink {
    font-size: 14px;
  }
}
</style>
