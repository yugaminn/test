<script>
export default {
  head: {
    title: 'スペシャルサンクス',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: '早稲田祭に貢献した方々です。アクセスはこちらから！！'
      },
      { hid: 'keyword', name: 'keyword', content: 'スペシャルサンクス' },
      { hid: 'og:type', property: 'og:type', content: 'article' },
      { hid: 'og:title', property: 'og:title', content: 'スペシャルサンクス' },
      {
        hid: 'og:description',
        property: 'og:description',
        content: '早稲田祭に貢献した方々です。アクセスはこちらから！！'
      },
      { hid: 'og:url', property: 'og:url', content: 'thanks' },
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
      <Hero> スペシャルサンクス </Hero>
    </section>

    <Content>
      <section class="thanks_title">
        <Box :rounded="true" :bg-color="'skyblue'">
          早稲田祭2024の開催にあたりまして、多くの方々にご協力を賜りました。
          <br />ご協力いただいた皆様に感謝を込め、こちらにご芳名を掲載させていただきます。
        </Box>
      </section>
      <section class="member">
        <Paragraph class="sukima_shita_thanks">敬称略・五十音順</Paragraph>
        <Paragraph>池袋子ども会</Paragraph>
        <Paragraph>石川孝一様</Paragraph>
        <Paragraph>牛込警察署</Paragraph>
        <Paragraph>株式会社クリエイティブ・アート・スィンク</Paragraph>
        <Paragraph>小林電装株式会社</Paragraph>
        <Paragraph>有限会社さくらガス</Paragraph>
        <Paragraph>笹井木材有限会社</Paragraph>
        <Paragraph>山王スペース＆レンタル株式会社</Paragraph>
        <Paragraph>三美印刷株式会社</Paragraph>
        <Paragraph>株式会社シミズオクト</Paragraph>
        <Paragraph>社会福祉法人新宿区社会福祉協議会</Paragraph>
        <Paragraph>社会福祉法人日本点字図書館</Paragraph>
        <Paragraph>白井エコセンター株式会社</Paragraph>
        <Paragraph>大日本印刷株式会社</Paragraph>
        <Paragraph>東京地下鉄株式会社</Paragraph>
        <Pargraph>東京都交通局</Pargraph>
        <Paragraph>東京ボード工業株式会社</Paragraph>
        <Paragraph>戸塚警察署</Paragraph>
        <Paragraph>都電荒川線早稲田駅</Paragraph>
        <Paragraph>有限会社半藤油脂</Paragraph>
        <Paragraph>備品を貸していただいた地域の方々</Paragraph>
        <Paragraph>吉住はるお様</Paragraph>
        <Paragraph>株式会社ヨネヤマ</Paragraph>
        <Paragraph>理工展連絡会</Paragraph>
        <Paragraph>早稲田祭2024協力団体の皆様</Paragraph>
        <Paragraph
          >早稲田祭2024公式パンフレット・サンプリングバッグの制作にご協力いただいた皆様
        </Paragraph>
        <Paragraph>早稲田祭2024にご協賛いただいた企業の皆様 </Paragraph>
        <Paragraph
          >早稲田祭2024の開催にあたってお力添えをいただいた早稲田大学
          学生部学生生活課をはじめとする皆様
        </Paragraph>
        <Paragraph
          >早稲田祭2024の開催に対して多大なるご理解、ご協力をいただいた地域住民の皆様
        </Paragraph>
        <Paragraph>早稲田大学アクセシビリティ支援センター </Paragraph>
        <Paragraph>早稲田大学学生会館インフォメーションの皆様 </Paragraph>
        <Paragraph>早稲田大学 環境ロドリゲス </Paragraph>
        <Paragraph>早稲田大学校友会</Paragraph>
        <Paragraph>早稲田大学写真部</Paragraph>
        <Paragraph>早稲田大学周辺商店連合会</Paragraph>
        <Paragraph>早稲田大学手話さあくる</Paragraph>
        <Paragraph>株式会社早稲田大学プロパティマネジメント</Paragraph>
        <Paragraph>早稲田大学文学学術院准教授 和田修先生</Paragraph>
        <Paragraph>早稲田大学放送研究会</Paragraph>
        <Paragraph>2024稲門祭実行委員会</Paragraph>
        <Paragraph>GOOD MORNING CAFE</Paragraph>
        <Paragraph>JR高田馬場駅</Paragraph>
        <Paragraph>JOYSOUND</Paragraph>
        <Paragraph>株式会社KREET </Paragraph>
        <Paragraph>laut liebe</Paragraph>
      </section>
    </Content>
  </div>
</template>
<style scoped>
.thanks_title {
  text-align: center;
  margin: 1rem;
}
.member {
  padding-bottom: 20px;
  text-align: center;
}
.sukima_shita_thanks {
  padding-bottom: 20px;
  padding-top: 20px;
  font-size: 20px;
  color: #3e3a39;
  font-family: 'Noto Sans JP', 'Hiragino Kaku Gothic ProN', Meiryo, sans-serif;
}
@media screen and (max-width: 1024px) {
  .sukima_shita_thanks {
    font-size: 14px;
  }
}
</style>
