<script>
export default {
  layout: 'maintenance',
  head: {
    title: 'WASEDA PARADE 2022開催のお知らせ',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'WASEDA PARADE 2022開催のお知らせ'
      },
      {
        hid: 'keyword',
        name: 'keyword',
        content: '早稲田 早稲田大学 早稲田祭 早稲田祭2022 パレード'
      },
      { hid: 'og:type', property: 'og:type', content: 'article' },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'WASEDA PARADE 2022開催のお知らせ　'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: '早稲田祭2022にパレードが帰ってきます！'
      },
      { hid: 'og:url', property: 'og:url', content: '/pressrelease1' },
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
      <Hero> WASEDA PARADE 2022開催のお知らせ </Hero>
    </section>

    <Content>
      <section>
        <div class="slide">
          <img
            class="festivalpicture"
            src="~/assets/images/pressrelease/cheer-pressrelease.JPG" />
          <img
            class="festivalpicture"
            src="~/assets/images/pressrelease/dancingpressrelease1.JPG" />
          <img
            class="festivalpicture"
            src="~/assets/images/pressrelease/parade-pressrelease1.JPG" />
        </div>
        <div class="setumei">※写真は2019年度に撮影されたものです。</div>
        <div class="setumei">
          <PartTitle
            >早稲田祭2022に<br class="smartphone" />パレードが帰ってきます！
          </PartTitle>

          <Paragraph>
            3年ぶりに1日目閉幕企画であるWASEDA PARADE
            2022の開催が決定しました！</Paragraph
          >
          <Paragraph>
            PARADE
            2022は、戸山キャンパス戸山カフェテリアステージで行われるPARADE Start
            Fes.、 周辺地域で行われるPARADE、大隈講堂前ステージで行われるPARADE
            Goal Fes.の3つで構成されています。</Paragraph
          >
          <Paragraph
            >新型コロナウイルス感染拡大の影響で<br
              class="smartphone" />早稲田祭2019以降中止となっていましたが、ついに<br
              class="smartphone" />今年復活します。</Paragraph
          >
          <Paragraph
            >今年は「早稲田に失われたものを探しに行く冒険」をテーマに、早稲田のまちと早稲田祭2022、1日目の<br
              class="smartphone" />閉幕を最高に盛り上げます。</Paragraph
          >
          <Paragraph>ぜひみなさんも一緒に冒険へ出かけましょう！</Paragraph>
          <br />
          <Paragraph>
            ※感染症対策のため、PARADEの立ち止まっての観覧はご遠慮ください。</Paragraph
          >
          <Paragraph>歩きながらの観覧をよろしくお願いします。</Paragraph>
          <Paragraph
            >※PARADE Goal Fes.では、一部の観覧スペースで<br
              class="smartphone" />企画観覧チケットが必要です。</Paragraph
          >
        </div>
      </section>
    </Content>
  </div>
</template>

<style scoped>
.setumei {
  text-align: center;
}
.festivaloicture {
  width: 100px;
}
.slide {
  position: relative;
  overflow: hidden;
  height: 200px;
  margin: auto;
  width: 300px;
  background: #fff;
}
.slide img {
  display: block;
  position: absolute;
  width: inherit;
  height: inherit;
  left: 100%;
  animation: slide-anime 6s ease infinite;
}
.slide img:nth-of-type(1) {
  animation-delay: 0s;
}
.slide img:nth-of-type(2) {
  animation-delay: 2s;
}
.slide img:nth-of-type(3) {
  animation-delay: 4s;
}

@keyframes slide-anime {
  0% {
    left: 100%;
  }
  10% {
    left: 0;
  }
  28% {
    left: 0;
  }
  38% {
    left: -100%;
  }
  100% {
    left: -100%;
  }
}
@media screen and (max-width: 1024px) {
  .festivaloicture {
    width: 100px;
  }
  .slide {
    position: relative;
    overflow: hidden;
    padding-right: 62.5%;
    height: 200px;
    margin: auto;
    background: #fff;
  }
  .slide img {
    display: block;
    position: absolute;
    width: inherit;
    height: inherit;
    left: 100%;
    animation: slide-anime 6s ease infinite;
  }
  .slide img:nth-of-type(1) {
    animation-delay: 0s;
  }
  .slide img:nth-of-type(2) {
    animation-delay: 2s;
  }
  .slide img:nth-of-type(3) {
    animation-delay: 4s;
  }
}
@media screen and (min-width: 1024px) {
  .smartphone {
    display: none;
  }
}
</style>
