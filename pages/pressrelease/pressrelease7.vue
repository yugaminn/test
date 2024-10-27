<script>
export default {
  layout: 'maintenance',
  head: {
    title: 'フォトコンテスト結果発表',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: '早稲田祭2022 フォトコンテスト'
      },
      {
        hid: 'keyword',
        name: 'keyword',
        content: '早稲田 早稲田大学 早稲田祭 早稲田祭2022 フォトコンテスト '
      },
      { hid: 'og:type', property: 'og:type', content: 'article' },
      {
        hid: 'og:title',
        property: 'og:title',
        content: '早稲田祭2022 フォトコンテスト'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: '早稲田祭2022 フォトコンテスト'
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
      <Hero>フォトコンテスト結果発表</Hero>
    </section>
    <section class="section">
      <div class="g_section-content">
        <Paragraph>&emsp;</Paragraph>
        <Paragraph>
          「早稲田祭の伝え切れていない魅力」をテーマに、Instagramのストーリー機能を用いてフォトコンテストを実施しました。たくさんのご応募いただき、ありがとうございました。
          ご応募いただいた作品の中から3作品の優秀作品を選考し、早稲田祭公式Instagramにおいて投票を行った結果、最優秀作品が決定しました！
        </Paragraph>
      </div>
    </section>
    <section class="saigo">
      <SectionTitle :bg-color="'orange'" class="content">最優秀賞</SectionTitle>
    </section>
    <section class="hero-img-wrapper">
      <img class="photo" src="~assets/images/pressrelease/photocontest.png" />
    </section>
    <div class="g_section-content">
      <Paragraph>
        hawaii（@hawaii_morning_cafe）さん、おめでとうございます！
      </Paragraph>
    </div>
  </div>
</template>

<style scoped>
.hero-img-wrapper {
  display: flex;
  justify-content: center;
}
.photo {
  max-width: 720px;
  width: 80%;
}
.line {
  text-decoration: underline;
  font-size: 120%;
  padding-top: 25px;
  padding-bottom: 25px;
}
.g_section-content {
  text-align: center;
  margin: 0 auto;
  width: 70%;
}

.saigo {
  text-align: center;
}

@media screen and (max-width: 920px) {
  .saigo {
    font-size: 80%;
  }
  .g_section-content {
    text-align: center;
    margin: 0 auto;
    width: 80%;
  }
}
</style>
