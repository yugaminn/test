<script>
export default {
  layout: 'maintenance',
  head: {
    title: '早稲田祭2022 飲食物販売企画実施のお知らせ',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: '早稲田祭2022 飲食物販売企画実施のお知らせ'
      },
      {
        hid: 'keyword',
        name: 'keyword',
        content:
          '早稲田 早稲田大学 早稲田祭 早稲田祭2022 飲食物販売企画 飲食物 '
      },
      { hid: 'og:type', property: 'og:type', content: 'article' },
      {
        hid: 'og:title',
        property: 'og:title',
        content: '早稲田祭2022 飲食物販売企画実施のお知らせ'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: '早稲田祭2022にて飲食物販売が3年ぶりに復活します！'
      },
      { hid: 'og:url', property: 'og:url', content: '/pressrelease3' },
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
  <div>
    <section>
      <Hero>飲食物販売企画実施のお知らせ</Hero>
      <div class="inshoku">
        <br />
        <span class="underline"
          >早稲田祭2022にて飲食物販売が3年ぶりに復活します！</span
        >
        <Paragraph
          >早大生の「想い」が詰まった個性豊かな屋台が早稲田祭2022を彩ります！</Paragraph
        >
        <Paragraph> ぜひ足をお運びください！！ </Paragraph>
        <Paragraph
          >早稲田祭2022では感染症対策徹底のもと飲食物販売を実施します。</Paragraph
        >
        <Paragraph
          >以下の注意事項に沿ってお楽しみいただきますようお願いいたします。</Paragraph
        >
        <img class="topimage" src="~assets/images/pressrelease/yatai.JPG" />
        <Paragraph>※写真は2019年度に撮影されたものです。</Paragraph>
        <Paragraph
          >※キャンパス構内での食べ歩き、飲み歩きは全面禁止されています。</Paragraph
        >
        <Paragraph
          >お食事をする際は必ず飲食スペースにて食事をするようお願いします。</Paragraph
        >
        <Paragraph
          >※飲食物を購入される際は、対応する飲食スペースで配布している座席指定券が必要になります。</Paragraph
        >
      </div>
    </section>
  </div>
</template>

<style scoped>
.inshoku {
  text-align: center;
}

.underline {
  background: linear-gradient(transparent 60%, #f5d197 0%);
}

.topimage {
  display: inline;
  width: 60%;
  text-align: center;
}
</style>
