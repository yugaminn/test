<script>
export default {
  layout: 'maintenance',
  head: {
    title: '公式パンフレット 追加・訂正情報',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: '早稲田祭2023の公式パンフレットの追加・訂正情報'
      },
      {
        hid: 'keyword',
        name: 'keyword',
        content:
          '早稲田 早稲田大学 早稲田祭 早稲田祭2023 公式パンフレット 追加　訂正　情報'
      },
      { hid: 'og:type', property: 'og:type', content: 'article' },
      {
        hid: 'og:title',
        property: 'og:title',
        content: '公式パンフレット 追加・訂正情報'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: '早稲田祭2023の公式パンフレットの追加・訂正情報'
      },
      { hid: 'og:url', property: 'og:url', content: '/pamphlet' },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://wasedasai.net/images/logo.png'
      }
    ]
  }
}
</script>
<template>
  <content>
    <div>
      <Hero>公式パンフレット追加・訂正情報</Hero>
    </div>
    <section class="pamphlet_section">
      <div class="pamphlet">
        <img src="~assets/images/pamphlet/pamphlet23.jpg" />
      </div>
    </section>
  </content>
</template>

<style scoped>
.pamphlet {
  padding-top: 30px;
  width: 50%;
  margin: 0 auto;
}
@media screen and (max-width: 768px) {
  .pamphlet {
    padding-top: 15px;
    width: 100%;
  }
}
</style>
