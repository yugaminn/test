<script>
export default {
  layout: 'maintenance',
  head: {
    title: '早稲田祭の夜を彩ったエコキャンドル！',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: '早稲田祭の夜を彩ったエコキャンドル！'
      },
      {
        hid: 'keyword',
        name: 'keyword',
        content: '早稲田 早稲田大学 早稲田祭 早稲田祭2022 エコキャンドル'
      },
      { hid: 'og:type', property: 'og:type', content: 'article' },
      {
        hid: 'og:title',
        property: 'og:title',
        content: '早稲田祭の夜を彩ったエコキャンドル！'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: '早稲田祭の夜を彩ったエコキャンドル！'
      },
      { hid: 'og:url', property: 'og:url', content: '/pressrelease4' },
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
  <div class="candle">
    <Hero>早稲田祭の夜を彩ったエコキャンドル！</Hero>
    <section>
      <img class="candleimg" src="~/assets/images/pressrelease/ecocandle.png" />
      <Paragraph
        >早稲田祭2022両日にかけて行われた「エコキャンドルプロジェクト」では、</Paragraph
      >
      <Paragraph
        >「早稲田祭が社会に向けてできることは何だろう」という観点から、</Paragraph
      >
      <Paragraph
        >多くの来場者数を誇る早稲田祭の特徴を活かし、SDGsや大学周辺地域への理解を促進する企画を行いました。</Paragraph
      >
      <Paragraph
        >このプロジェクトでは、ワセメシ飲食店から発生した廃油をキャンドルへとリサイクルする製作体験が行われ、</Paragraph
      >
      <Paragraph
        >夜には2日間の体験で作られたおよそ600個以上のキャンドルが両キャンパスの装飾として用いられました。</Paragraph
      >
      <Paragraph
        >早稲田祭では、祭を通して社会的責任を果たすFSR（Festival Social
        Responsibility）に基づく活動を進めています。</Paragraph
      >
    </section>
  </div>
</template>

<style scoped>
.candle {
  text-align: center;
}
.candleimg {
  margin: 0 auto;
  padding-top: 20px;
  padding-bottom: 20px;
  width: 50%;
  height: 50%;
}
</style>
