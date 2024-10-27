<script>
export default {
  layout: 'maintenance',
  head: {
    title: '早大生が熱く早稲田を語る「ワセラジ!!」',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          '11月6日(土)、7日(日) にかけてハイブリッド開催中の早稲田祭2021。 さまざまなサークルや早大生が早稲田文化を語る「ワセラジ!!」も2日間にわたって放送中です！'
      },
      {
        hid: 'keyword',
        name: 'keyword',
        content: '早稲田 早稲田大学 早稲田祭 早稲田祭2021  ワセラジ'
      },
      { hid: 'og:type', property: 'og:type', content: 'article' },
      {
        hid: 'og:title',
        property: 'og:title',
        content: '早大生が熱く早稲田を語る「ワセラジ!!」'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          '11月6日(土)、7日(日) にかけてハイブリッド開催中の早稲田祭2021。 さまざまなサークルや早大生が早稲田文化を語る「ワセラジ!!」も2日間にわたって放送中です！'
      },
      { hid: 'og:url', property: 'og:url', content: '/pressrelease13' },
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
    <Content>
      <section class="hero-img-wrapper">
        <img
          class="pressrelease13-1"
          src="~assets/images/pressrelease/pressrelease13-1.png"
          alt="preserelease13-1" />
      </section>
      <section>
        <Paragraph :align="'center'" class="line">
          <strong> 早大生が熱く早稲田を語る「ワセラジ!!」 </strong>
        </Paragraph>
      </section>
      <section>
        <div class="g_section-content">
          <Paragraph>
            昨年度の早稲田祭で新企画としてスタートし、好評を博した「ワセラジ!!」企画。
          </Paragraph>
          <Paragraph>
            今年もさまざまなサークルや早大生をゲストとして迎え、15コーナーという多種多様な内容で「ワセラジ!!」を盛り上げました。
          </Paragraph>
          <Paragraph>
            1日目からたくさんのサークルが登場し、早稲田の魅力や日頃の活動の様子などについて熱いトークを繰り広げました。
          </Paragraph>
        </div>
      </section>
      <section>
        <div class="g_section-content">
          <Paragraph>ワセラジ‼ 放送タイムテーブル</Paragraph>
        </div>
      </section>
      <section>
        <div class="g_section-content">
          <Paragraph>11/6(土)</Paragraph>
          <Paragraph>10:00～10:30 FMwaseda ワセラジ!!ジャック</Paragraph>
          <Paragraph>10:30～11:00 演劇集団ところで ラジオドラマ</Paragraph>
          <Paragraph>
            11:30～12:00
            東京踊りっぱーず（早稲田大学よさこいチーム東京花火／早稲田大学”踊り侍”／下駄っぱーず）
          </Paragraph>
          <Paragraph>
            12:15～12:45 ワセメシコラボの裏側（早稲田祭2021運営スタッフ）
          </Paragraph>
          <Paragraph>12:45～13:15 早稲田大学男祭り2021実行委員会</Paragraph>
          <Paragraph>13:30～14:00 中夜祭2021</Paragraph>
          <Paragraph>
            14:45～15:15 女子ダンスサークル対談（Dance Team Brilliant
            Pinks／早稲田大学ハワイ民族舞踊研究会／早稲田大学ベリーダンスサークルSARAHbelly）
          </Paragraph>
          <Paragraph>
            15:30～16:00
            プロ野球ファンサークル（早燕会／早大信星会／早大猛虎会／早竜会）
          </Paragraph>
        </div>
      </section>
      <section>
        <div class="g_section-content">
          <Paragraph>11/7(日)</Paragraph>
          <Paragraph>
            10:00～10:30
            和風パフォーマンスサークル対談（魁響／津軽三味線愛好会三津巴／早稲田大学書道パフォーマンスサークル
            漣）
          </Paragraph>
          <Paragraph>
            10:45～11:15
            3大サークル対談（早稲田祭2021運営スタッフ／早稲田大学広告研究会／早稲田大学放送研究会）
          </Paragraph>
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
.pressrelease13 {
  max-width: 720px;
  width: 100%;
}
.line {
  text-decoration: underline;
  font-size: 120%;
  padding-top: 25px;
  padding-bottom: 25px;
}
.link {
  color: #274c82;
  word-wrap: break-word;
}
@media screen and (max-width: 920px) {
  .saigo {
    font-size: 80%;
  }
}
</style>
