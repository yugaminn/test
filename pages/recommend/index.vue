<script>
export default {
  layout: 'maintenance',
  head: {
    title: '二択で診断！おすすめ運営スタッフ企画！',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'あなたにぴったりの早稲田祭おすすめ企画を診断！'
      },
      {
        hid: 'keyword',
        name: 'keyword',
        content:
          '早稲田 早稲田大学 受験 学部 早稲田祭 早稲田祭2022 企画 おすすめ 診断 わせだサイくん'
      },
      { hid: 'og:type', property: 'og:type', content: 'article' },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'おすすめ企画'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: '二択で診断！おすすめ運営スタッフ企画！'
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: '/recommend'
      },
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
      <Hero>二択で診断！おすすめ運営スタッフ企画</Hero>
    </section>
    <div>
      <img src="~assets/images/recommend/nitakulogo.png" class="saikunimg" />
      <div class="botan">
        <TicketLink :url="'recommend/1'" class="shindan"> 診断開始 </TicketLink>
      </div>
      <box class="welcome" :bg-color="'yellow'" :short="true" :rounded="true">
        <Paragraph>
          二択の質問による診断を通して、早稲田祭2022運営スタッフ規格のうち、パンフレットに記載されている31の企画から、あなたに合ったおすすめの企画を紹介します！
        </Paragraph>
      </box>
      <div>
        <Paragraph class="bunsyo">
          なお、この診断は早稲田祭2022運営スタッフが独自に作成したフローチャートであり、診断結果に明確な根拠はございません。この企画を通じて早稲田祭2022により興味を持っていただけたら嬉しいです！
        </Paragraph>
      </div>
    </div>
  </div>
</template>
<style scoped>
.welcome {
  margin: 40px;
  margin: auto;
}
.saikunimg {
  margin: auto;
  width: 30%;
}

.bunsyo {
  text-align: center;
  padding: 40px;
  font-size: 10px;
}
.shindan {
  margin: auto;
  padding-bottom: 60px;
}
.botan {
  padding: 40px;
}
@media screen and (max-width: 920px) {
  .box {
    padding: 0;
    margin-bottom: 0;
    font-size: 15px;
    height: 120px;
  }

  .saikunimg {
    margin-bottom: 20px;
    width: 70%;
  }
}
</style>
