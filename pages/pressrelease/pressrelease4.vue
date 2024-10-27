<script>
export default {
  layout: 'maintenance',
  head: {
    title: '手軽に知識を！ふらっと学ぼ～ど企画、開催！',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: '手軽に知識を！ふらっと学ぼ～ど企画、開催！'
      },
      {
        hid: 'keyword',
        name: 'keyword',
        content: '早稲田 早稲田大学 早稲田祭 早稲田祭2022 ふらっと学ぼ～ど'
      },
      { hid: 'og:type', property: 'og:type', content: 'article' },
      {
        hid: 'og:title',
        property: 'og:title',
        content: '手軽に知識を！ふらっと学ぼ～ど企画、開催！'
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
      <Hero>手軽に知識を！ふらっと学ぼ～ど企画、開催！</Hero>
      <div class="hura">
        <table>
          <tr>
            <td>
              <img
                class="image1"
                src="~assets/images/pressrelease/pressrelease4-1.JPG" />
            </td>
            <td>
              <img
                class="image2"
                src="~assets/images/pressrelease/pressrelease4-2.JPG" />
            </td>
          </tr>
        </table>
        <Paragraph
          >「祭」をテーマにしたこの寄稿。みなさんは祭と聞いて何を思い浮かべますか？</Paragraph
        >
        <Paragraph
          >夏祭りや伝統的な祭、そして今あなたがいる早稲田祭。</Paragraph
        >
        <Paragraph>
          一様に祭と言っても実はさまざまな祭が存在します。
        </Paragraph>
        <Paragraph
          >本企画では、日々早稲田大学で研究を重ねる先生方に「祭」と「先生方の研究分野」を掛け合わせた寄稿を書いていただきました。</Paragraph
        >
        <Paragraph>「早稲田の先生って何を研究しているんだろう？」</Paragraph
        ><Paragraph
          >そんなみなさんの疑問を解決するとともに、学問のプロフェッショナルである先生方の鋭く、面白い寄稿を読んで知識を1UPしませんか？</Paragraph
        ><Paragraph
          >ぜひ先生方の活字からあふれる情熱を感じに11号館2階ラウンジへ「ふらっと」学びに来てください！</Paragraph
        >
      </div>
    </section>
  </div>
</template>

<style scoped>
.hura {
  text-align: center;
}

.image1 {
  display: inline;
  width: 80%;
}

.image2 {
  display: inline;
  width: 70%;
}

table {
  padding-left: 10%;
  padding-top: 1em;
  padding-bottom: 1em;
}
</style>
