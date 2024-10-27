<script>
export default {
  layout: 'maintenance',
  head: {
    title: '高校生/受験生応援企画〜集え！未来の早大生〜',
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
      { hid: 'og:url', property: 'og:url', content: '/mirainosoudaisei/top' },
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
    <img
      class="ouenkikaku"
      src="~assets/images/mirainosoudaisei/mirainosoudaisei_ouen.png" />
    <img
      class="saikun"
      src="~assets/images/mirainosoudaisei/saikun_mirainosoudaisei_top.png" />
    <Content>
      <section>
        <Box :rounded="true" :bg-color="'yellow'">
          <Paragraph :align="'center'">
            みんな～、こんツノ～！
            早稲田祭公式マスコットキャラクターの「わせだサイくん」ツノ！
            永遠の36歳！
            中年のおっさんだけど、エネルギーと早稲田大学への愛はみんなにも負けないツノよ！<br />
            ここでは受験生のみなさんを応援するコンテンツを用意したツノ！
            どれも楽しいから、ぜひとも参加してくだサイ！
          </Paragraph>
        </Box>
      </section>
      <section>
        <div>
          <SectionTitle :bg-color="'pink'" :align="'center'">
            サイくんタイムカプセル
          </SectionTitle>
        </div>
        <Paragraph :align="'center'">
          がんばる未来のキミへ応援メッセージを送ろう！<br />
          <nuxt-link to="timecapsule" class="link"><b>こちら</b></nuxt-link
          >から参加できます
        </Paragraph>
      </section>
      <section>
        <div>
          <SectionTitle :bg-color="'green'" :align="'center'">
            サイくんと挑戦！英語力判定
          </SectionTitle>
        </div>
        <Paragraph :align="'center'">
          キミの今の英語力を確かめよう！<br />
          <nuxt-link to="english" class="link"><b>こちら</b></nuxt-link
          >から参加できます
        </Paragraph>
      </section>
      <section>
        <div>
          <SectionTitle :bg-color="'blue'" :align="'center'">
            学部分けサイくん
          </SectionTitle>
        </div>
        <Paragraph :align="'center'">
          サイくんが独断と偏見でぴったりの学部を判定するよ！<br />
          <nuxt-link to="saikungakubu" class="link"><b>こちら</b></nuxt-link
          >から参加できます
        </Paragraph>
      </section>
    </Content>
  </div>
</template>

<style scoped>
.ouenkikaku {
  margin: 0 auto;
  width: 40%;
}
.saikun {
  margin-left: 78%;
  margin-top: -25%;
  width: 25%;
}
.link {
  color: #274c82;
}
</style>
