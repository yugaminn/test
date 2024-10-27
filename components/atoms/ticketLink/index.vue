<script>
export default {
  props: {
    url: {
      type: String,
      default: '/'
    }
  }
}
</script>
<template>
  <div class="ticket-link">
    <NuxtLink :to="url" class="link">
      <div class="text-container">
        <slot />
      </div>
    </NuxtLink>
  </div>
</template>

<style scoped>
.ticket-link {
  position: relative;
  max-width: 480px;
  width: 80%;
  height: 60px;
  border-radius: 30px;
  cursor: pointer;
} 

.link {
  position: absolute;
  display: inline-block;
  width: 100%;
  height: 100%;
  border-radius: 30px;
  top: 8px;
  left: 8px;
  color: #d35b31;
  border: #d35b31 4px solid;
  background: white;
  text-decoration: none;
  font-weight: 600;
  padding: 0.5rem;
  transition: all 0.2s;
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
  text-align: center;
}
</style>
