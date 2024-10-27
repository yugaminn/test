<script>
export default {
  layout: 'maintenance',
  head: {
    title: '学部分けサイくん',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          '全国に住む高校生向けに、オンラインならではのコンテンツを用意しています！'
      },
      {
        hid: 'keyword',
        name: 'keyword',
        content:
          '早稲田 早稲田大学 受験 学部 早稲田祭 早稲田祭2021 高校 高校生 英語 勉強法 わせだサイくん'
      },
      { hid: 'og:type', property: 'og:type', content: 'article' },
      {
        hid: 'og:title',
        property: 'og:title',
        content: '高校生/受験生応援企画〜集え！未来の早大生〜'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          '全国に住む高校生向けに、オンラインならではのコンテンツを用意しています！'
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: '/mirainosoudaisei/saikungakubu'
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
  <div class="waku">
    <img src="~assets/images/paclab/gakubuwake.jpg" class="ribon" />
    <img src="~assets/images/paclab/saikun-start.png" class="saikunimg" />
    <TicketLink :url="'/mirainosoudaisei/saikun'" class="shindan">
      診断開始
    </TicketLink>
    <Box :rounded="true" :bg-color="'blue'" class="box">
      <Paragraph class="bunsyo">
        <b>サイくんが独断と偏見であなたにぴったりの学部を診断するよ！</b>
      </Paragraph>
    </Box>
    <Paragraph class="chuui">
      ※本企画は早稲田祭2021運営スタッフが独自に作成したフローチャートであり、学部適性の診断における明確な根拠はございません。本企画を通じて早大生がイメージする各学部の雰囲気や各学部の新たな魅力を発見していただけたら嬉しいです。
    </Paragraph>
  </div>
</template>
<style scoped>
.saikunimg {
  margin: auto;
  width: 500px;
}
.ribon {
  margin: 0px;
  width: 70%;
  margin: auto;
}
.circleLink {
  margin: auto;
  margin: 0px;
  margin: auto;
}
.bunsyo {
  text-align: center;
  padding: 40px 0px;
  font-size: 20px;
}
.waku {
  border-radius: 5px;
  border: 7px solid #274c82;
  margin: 0px 40px 80px 40px;
  padding: 0px 50px 60px 50px;
}
.shindan {
  margin: auto;
}
.box {
  margin-top: 40px;
}
.chuui {
  font-size: 10px;
  margin-top: 15px;
}
@media screen and (max-width: 920px) {
  .ribon {
    width: 100%;
  }
  .box {
    padding: 0;
    margin-bottom: 0;
  }
  .saikunimg {
    margin-bottom: 20px;
  }
  .waku {
    margin-bottom: 20px;
  }
}
</style>
