<script>
export default {
  layout: 'maintenance',
  head: {
    title: '大隈講堂前ステージ企画 4年ぶりの復活へ ',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: '大隈講堂前ステージ企画 4年ぶりの復活へ '
      },
      {
        hid: 'keyword',
        name: 'keyword',
        content:
          '早稲田 早稲田大学 早稲田祭 早稲田祭2022 大隈講堂前ステージ企画　隈ステ '
      },
      { hid: 'og:type', property: 'og:type', content: 'article' },
      {
        hid: 'og:title',
        property: 'og:title',
        content: '大隈講堂前ステージ企画 4年ぶりの復活へ'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: '長い歴史を持つ大隈講堂前ステージが4年ぶりに復活します！'
      },
      { hid: 'og:url', property: 'og:url', content: '/pressrelease11' },
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
    <section class="hero">
      <Hero> 大隈講堂前ステージ企画 <br class="br" />4年ぶりの復活へ</Hero>
    </section>
    <br />
    <Content>
      <section class="hero-img-wrapper">
        <img
          class="image_kumaste"
          src="~assets/images/pressrelease/image_kumaste.JPG" />
      </section>
      <Paragraph :align="'center'"
        >※写真は2019年度以前に撮影されたものです。</Paragraph
      >

      <section>
        <div class="g_section-content">
          <Paragraph>
            長い歴史を持つ大隈講堂前ステージが4年ぶりに復活します！
            2019年の工事に続き、新型コロナウイルスの流行で2020年、2021年ともに大隈講堂前ステージの復活は叶いませんでした。早稲田祭の中で最大規模を誇る大隈講堂前ステージは多くのサークルの目標となるステージです。
          </Paragraph>
          <br />
          <Paragraph>
            「大隈講堂前ステージをなんとしてでも復活させること」を最大の目標として、私たち運営スタッフは活動してきました。そして、ついに4年ぶりの復活を迎えることとなります。スタッフ一同、協力していただいた全てのみなさまに感謝の念を抱きながら、全力で取り組んで参ります。</Paragraph
          >
          <br />
          <Paragraph>
            たくさんの人の4年越しの想いがぶつかる大隈講堂前ステージを、ぜひご覧ください！</Paragraph
          >
        </div>
      </section>
    </Content>
  </div>
</template>

<style scoped>
.hero-img-wrapper {
  display: flex;
  justify-content: center;
}
.image_kumaste {
  width: 720px;
}
@media screen and (min-width: 720px) {
  .br {
    display: none;
  }
}
</style>
