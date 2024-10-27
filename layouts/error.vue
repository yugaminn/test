<template>
  <div v-cloak class="container">
    <div class="message-container">
      <h1 v-if="error.statusCode === 404">Page not found...</h1>
      <h1 v-else class="errormessage">An error occurred</h1>
      <Paragraph>お探しのページが見つからなかったツノ</Paragraph>
    </div>
    <div>
      <img class="saikun" src="../assets/images/saisai.png" alt="サイくん" />
    </div>
  </div>
</template>
<script>
export default {
  props: ['error'],
  head: {
    titleTemplate: null,
    title: '早稲田祭2023'
  }
}
</script>
<style scoped>
.container {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.errormessage {
  font-family: 'Noto Sans JP', 'Hiragino Kaku Gothic ProN', Meiryo, sans-serif;
}

.message-container {
  text-align: center;
  position: relative;
  margin: 2rem auto 1.5rem;
  padding: 30px;
  background-color: #fff;
  color: #3e3a39;
  border: 0.3em solid #59c3e1;
  border-radius: 20px;
  width: 100%;
  max-width: 480px;
  font-family: 'Noto Sans JP', 'Hiragino Kaku Gothic ProN', Meiryo, sans-serif;
}

.message-container:before {
  content: '';
  position: absolute;
  display: block;
  width: 30px;
  height: 30px;
  bottom: -10px;
  left: 40px;
  margin-left: 0;
  background-color: #fff;
  border-radius: 0 50px 0 50px;
  z-index: -1;
}
.message-container:after {
  content: '';
  position: absolute;
  display: block;
  width: 30px;
  height: 30px;
  bottom: -5px;
  left: 49px;
  margin-left: 0;
  background-color: #fff;
  border-radius: 0 50px 0 50px;
  z-index: -1;
  transform: rotate(30deg);
}
.saikun {
  max-width: 300px;
  width: 100%;
}
</style>
