<script>
export default {
  layout: 'maintenance',
  head: {
    title: 'ご協賛いただいた皆様へ',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          '早稲田祭2024の開催にあたりまして、ご協賛いただいた企業様をご紹介しております'
      },
      {
        hid: 'keyword',
        name: 'keyword',
        content: '早稲田祭2024 早稲田祭　協賛'
      },
      { hid: 'og:type', property: 'og:type', content: 'article' },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'ご協賛いただいた皆様へ'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'ご協賛いただいた方のご紹介'
      },
      { hid: 'og:url', property: 'og:url', content: '/company' },
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
      <Hero>ご協賛いただいた皆様へ</Hero>
    </section>
    <div class="g_background_himo">
      <Content class="content">
        <section class="kigyokyosan">
          <Box :bg-color="'purple'" :short="true" :rounded="true">
            <Paragraph :align="'center'">ご協賛いただいた皆様へ</Paragraph>
            <Paragraph :align="'center'">
              早稲田祭2023の開催にあたりまして、今年度も多くの企業様にご協賛いただきました。
            </Paragraph>
            <Paragraph :align="'center'">
              早稲田祭2023運営スタッフ一同、心より御礼申し上げます。
            </Paragraph>
          </Box>
        </section>
        <section class="kigyokyosan">
          <Paragraph class="topkuukan" :align="'center'">
            早稲田祭2023ご協賛企業
          </Paragraph>
          <Paragraph :align="'center'">敬称略・五十音順 </Paragraph>
          <div :align="'center'" class="topkuukan">
            <img
              src="~assets/images/kyousan/logo02_abuild.png"
              width="20%"
              height="20%" />
          </div>
          <div :align="'center'" class="topkuukan">
            <img
              src="~assets/images/kyousan/logo03_adv.png"
              width="20%"
              height="20%" />
          </div>
          <div :align="'center'" class="topkuukan">
            <img
              src="~assets/images/kyousan/logo04_amha.png"
              width="20%"
              height="20%" />
          </div>
          <div :align="'center'" class="topkuukan">
            <img
              src="~assets/images/kyousan/logo05_cpa.png"
              width="20%"
              height="20%" />
          </div>
          <div :align="'center'" class="topkuukan">
            <img
              src="~assets/images/kyousan/logo6_takara.png"
              width="20%"
              height="20%" />
          </div>
          <div :align="'center'" class="topkuukan">
            <img
              src="~assets/images/kyousan/logo07_goodexpress.png"
              width="20%"
              height="20%" />
          </div>
          <div :align="'center'" class="topkuukan">
            <img
              src="~assets/images/kyousan/logo08_hario.jpg"
              width="20%"
              height="20%" />
          </div>
          <div :align="'center'" class="topkuukan">
            <img
              src="~assets/images/kyousan/logo9_ism.png"
              width="20%"
              height="20%" />
          </div>
          <div :align="'center'" class="topkuukan">
            <img
              src="~assets/images/kyousan/logo10_joy.png"
              width="20%"
              height="20%" />
          </div>
          <Paragraph :align="'center'" class="topkuukan"
            >株式会社KINUJO</Paragraph
          >
          <div :align="'center'" class="topkuukan">
            <img
              src="~assets/images/kyousan/logo11_kiss.png"
              width="20%"
              height="20%" />
          </div>
          <div :align="'center'" class="topkuukan">
            <img
              src="~assets/images/kyousan/logo12_moralcode.jpg"
              width="20%"
              height="20%" />
          </div>
          <div :align="'center'" class="topkuukan">
            <img
              src="~assets/images/kyousan/logo13_snow.png"
              width="20%"
              height="20%" />
          </div>
          <div :align="'center'" class="topkuukan">
            <img
              src="~assets/images/kyousan/logo14_wowow.png"
              width="20%"
              height="20%" />
          </div>
          <div :align="'center'" class="topkuukan">
            <img
              src="~assets/images/kyousan/logo15_akari.png"
              width="20%"
              height="20%" />
          </div>
          <div :align="'center'" class="topkuukan">
            <img
              src="~assets/images/kyousan/logo16_agos.png"
              width="20%"
              height="20%" />
          </div>
          <div :align="'center'" class="topkuukan">
            <img
              src="~assets/images/kyousan/logo18ams.jpg"
              width="20%"
              height="20%" />
          </div>
          <Paragraph :align="'center'" class="topkuukan"
            >株式会社アリエルトレーディング</Paragraph
          >
          <Paragraph :align="'center'" class="topkuukan"
            >アルペンローゼ株式会社</Paragraph
          >
          <!--未定 19-->
          <Paragraph :align="'center'" class="topkuukan"
            >アンカー・ジャパン株式会社</Paragraph
          >
          <div :align="'center'" class="topkuukan">
            <img
              src="~assets/images/kyousan/logo22_ikoto.JPG"
              width="20%"
              height="20%" />
          </div>
          <div :align="'center'" class="topkuukan">
            <img
              src="~assets/images/kyousan/logo20_ike.png"
              width="20%"
              height="20%" />
          </div>
          <div :align="'center'" class="topkuukan">
            <img
              src="~assets/images/kyousan/logo21_inaba.jpg"
              width="20%"
              height="20%" />
          </div>
          <div :align="'center'" class="topkuukan">
            <img
              src="~assets/images/kyousan/logo25_val.png"
              width="20%"
              height="20%" />
          </div>
          <div :align="'center'" class="topkuukan">
            <img
              src="~assets/images/kyousan/logo23_ueni.jpg"
              width="20%"
              height="20%" />
          </div>
          <div :align="'center'" class="topkuukan">
            <img
              src="~assets/images/kyousan/logo24_air.jpg"
              width="20%"
              height="20%" />
          </div>
          <div :align="'center'" class="topkuukan">
            <img
              src="~assets/images/kyousan/logo28_sag.png"
              width="20%"
              height="20%" />
          </div>
          <div :align="'center'" class="topkuukan">
            <img
              src="~assets/images/kyousan/logo26_enafowado.png"
              width="20%"
              height="20%" />
          </div>
          <div :align="'center'" class="topkuukan">
            <img
              src="~assets/images/kyousan/logo28_nt.png"
              width="20%"
              height="20%" />
          </div>
          <div :align="'center'" class="topkuukan">
            <img
              src="~assets/images/kyousan/logo29_ogon.jpg"
              width="20%"
              height="20%" />
          </div>
          <div :align="'center'" class="topkuukan">
            <img
              src="~assets/images/kyousan/logo27_gyouza.jpg"
              width="20%"
              height="20%" />
          </div>
          <div :align="'center'" class="topkuukan">
            <img
              src="~assets/images/kyousan/logo28_ogawa.jpg"
              width="20%"
              height="20%" />
          </div>
          <div :align="'center'" class="topkuukan">
            <img
              src="~assets/images/kyousan/logo29_onishi.png"
              width="20%"
              height="20%" />
          </div>
          <div :align="'center'" class="topkuukan">
            <img
              src="~assets/images/kyousan/logo30_kai.jpg"
              width="20%"
              height="20%" />
          </div>
          <div :align="'center'" class="topkuukan">
            <img
              src="~assets/images/kyousan/logo31_casio.png"
              width="20%"
              height="20%" />
          </div>
          <div :align="'center'" class="topkuukan">
            <img
              src="~assets/images/kyousan/logo32_kasugai.jpg"
              width="20%"
              height="20%" />
          </div>
          <div :align="'center'" class="topkuukan">
            <img
              src="~assets/images/kyousan/logo33_kaneyoshi.png"
              width="20%"
              height="20%" />
          </div>
          <div :align="'center'" class="topkuukan">
            <img
              src="~assets/images/kyousan/logo33_kamiiso.jpg"
              width="20%"
              height="20%" />
          </div>
          <div :align="'center'" class="topkuukan">
            <img
              src="~assets/images/kyousan/logo34_banban.png"
              width="20%"
              height="20%" />
          </div>
          <div :align="'center'" class="topkuukan">
            <img
              src="~assets/images/kyousan/logo35_karaokekan.jpg"
              width="20%"
              height="20%" />
          </div>
          <div :align="'center'" class="topkuukan">
            <img
              src="~assets/images/kyousan/logo36_bigeco.jpg"
              width="20%"
              height="20%" />
          </div>
          <div :align="'center'" class="topkuukan">
            <img
              src="~assets/images/kyousan/logo37_carbee.jpg"
              width="20%"
              height="20%" />
          </div>
          <div :align="'center'" class="topkuukan">
            <img
              src="~assets/images/kyousan/logo38_gyunyu.png"
              width="20%"
              height="20%" />
          </div>
          <div :align="'center'" class="topkuukan">
            <img
              src="~assets/images/kyousan/logo45_kyowa.jpg"
              width="20%"
              height="20%" />
          </div>
          <div :align="'center'" class="topkuukan">
            <img
              src="~assets/images/kyousan/logo39_gyokuroenn.png"
              width="20%"
              height="20%" />
          </div>
          <div :align="'center'" class="topkuukan">
            <img
              src="~assets/images/kyousan/logo44_kusuri.png"
              width="20%"
              height="20%" />
          </div>
          <div :align="'center'" class="topkuukan">
            <img
              src="~assets/images/kyousan/logo40_grop.png"
              width="20%"
              height="20%" />
          </div>
          <div :align="'center'" class="topkuukan">
            <img
              src="~assets/images/kyousan/logo41_kouku.jpg"
              width="20%"
              height="20%" />
          </div>
          <Paragraph :align="'center'" class="topkuukan"
            >合鹿製紙有限会社</Paragraph
          >
          <Paragraph :align="'center'" class="topkuukan"
            >厚生労働省 薬物乱用防止啓発事業事務局</Paragraph
          >
          <div :align="'center'" class="topkuukan">
            <img
              src="~assets/images/kyousan/logo49_bimote.jpg"
              width="20%"
              height="20%" />
          </div>
          <div :align="'center'" class="topkuukan">
            <img
              src="~assets/images/kyousan/logo44_konishi.png"
              width="20%"
              height="20%" />
          </div>
          <div :align="'center'" class="topkuukan">
            <img
              src="~assets/images/kyousan/logo43_konnya.jpg"
              width="20%"
              height="20%" />
          </div>
          <div :align="'center'" class="topkuukan">
            <img
              src="~assets/images/kyousan/logo46_scients.png"
              width="20%"
              height="20%" />
          </div>
          <div :align="'center'" class="topkuukan">
            <img
              src="~assets/images/kyousan/logo44_sangi.png"
              width="20%"
              height="20%" />
          </div>
          <div :align="'center'" class="topkuukan">
            <img
              src="~assets/images/kyousan/logo45_sanmedouzu.jpg"
              width="20%"
              height="20%" />
          </div>
          <div :align="'center'" class="topkuukan">
            <img
              src="~assets/images/kyousan/logo49_shinsei.png"
              width="20%"
              height="20%" />
          </div>
          <div :align="'center'" class="topkuukan">
            <img
              src="~assets/images/kyousan/logo47_str.png"
              width="20%"
              height="20%" />
          </div>
          <div :align="'center'" class="topkuukan">
            <img
              src="~assets/images/kyousan/logo48_seibu.jpg"
              width="20%"
              height="20%" />
          </div>
          <div :align="'center'" class="topkuukan">
            <img
              src="~assets/images/kyousan/logo50_senkyo.png"
              width="20%"
              height="20%" />
          </div>
          <Paragraph :align="'center'" class="topkuukan"
            >有限会社創和工芸</Paragraph
          >
          <Paragraph :align="'center'" class="topkuukan"
            >大鵬薬品工業株式会社</Paragraph
          >
          <div :align="'center'" class="topkuukan">
            <img
              src="~assets/images/kyousan/logo52_daiya.png"
              width="20%"
              height="20%" />
          </div>
          <div :align="'center'" class="topkuukan">
            <img
              src="~assets/images/kyousan/logo53_tarami.jpg"
              width="20%"
              height="20%" />
          </div>
          <div :align="'center'" class="topkuukan">
            <img
              src="~assets/images/kyousan/logo54_darton.jpg"
              width="20%"
              height="20%" />
          </div>
          <div :align="'center'" class="topkuukan">
            <img
              src="~assets/images/kyousan/logo69_tukasa.jpg"
              width="20%"
              height="20%" />
          </div>
          <div :align="'center'" class="topkuukan">
            <img
              src="~assets/images/kyousan/logo64_linemo.png"
              width="20%"
              height="20%" />
          </div>
          <Paragraph :align="'center'" class="topkuukan"
            >株式会社 寺岡製作所</Paragraph
          >
          <div :align="'center'" class="topkuukan">
            <img
              src="~assets/images/kyousan/logo66_teramoto.jpg"
              width="20%"
              height="20%" />
          </div>
          <div :align="'center'" class="topkuukan">
            <img
              src="~assets/images/kyousan/logo72_ribbon.jpg"
              width="20%"
              height="20%" />
          </div>
          <Paragraph :align="'center'" class="topkuukan"
            >株式会社ナレッジクロスファクトリー</Paragraph
          >
          <Paragraph :align="'center'" class="topkuukan"
            >株式会社ネクストレベル</Paragraph
          >
          <div :align="'center'" class="topkuukan">
            <img
              src="~assets/images/kyousan/logo59_hakata.png"
              width="20%"
              height="20%" />
          </div>
          <div :align="'center'" class="topkuukan">
            <img
              src="~assets/images/kyousan/logo60_hakeya.png"
              width="20%"
              height="20%" />
          </div>
          <div :align="'center'" class="topkuukan">
            <img
              src="~assets/images/kyousan/logo60_bath.jpg"
              width="20%"
              height="20%" />
          </div>
          <div :align="'center'" class="topkuukan">
            <img
              src="~assets/images/kyousan/logo61_hatakousen.png"
              width="20%"
              height="20%" />
          </div>
          <Paragraph :align="'center'" class="topkuukan"
            >榛名湖温泉ゆうすげ元湯</Paragraph
          >
          <Paragraph :align="'center'" class="topkuukan"
            >ヒサゴ株式会社</Paragraph
          >
          <div :align="'center'" class="topkuukan">
            <img
              src="~assets/images/kyousan/logo81_edu.JPG"
              width="20%"
              height="20%" />
          </div>
          <div :align="'center'" class="topkuukan">
            <img
              src="~assets/images/kyousan/logo64_videoresearch.png"
              width="20%"
              height="20%" />
          </div>
          <div :align="'center'" class="topkuukan">
            <img
              src="~assets/images/kyousan/logo65_beauty.jpg"
              width="20%"
              height="20%" />
          </div>
          <div :align="'center'" class="topkuukan">
            <img
              src="~assets/images/kyousan/logo67_faiten.jpg"
              width="20%"
              height="20%" />
          </div>
          <div :align="'center'" class="topkuukan">
            <img
              src="~assets/images/kyousan/logo78_pentel.jpg"
              width="20%"
              height="20%" />
          </div>
          <Paragraph :align="'center'" class="topkuukan"
            >マセマ出版社</Paragraph
          >
          <Paragraph :align="'center'" class="topkuukan"
            >マルサンアイ株式会社</Paragraph
          >
          <div :align="'center'" class="topkuukan">
            <img
              src="~assets/images/kyousan/logo82_kuruma.jpg"
              width="20%"
              height="20%" />
          </div>
          <div :align="'center'" class="topkuukan">
            <img
              src="~assets/images/kyousan/logo71_makeup.png"
              width="20%"
              height="20%" />
          </div>
          <div :align="'center'" class="topkuukan">
            <img
              src="~assets/images/kyousan/logo71_meito.jpg"
              width="20%"
              height="20%" />
          </div>
          <div :align="'center'" class="topkuukan">
            <img
              src="~assets/images/kyousan/logo72_take.jpg"
              width="20%"
              height="20%" />
          </div>
          <div :align="'center'" class="topkuukan">
            <img
              src="~assets/images/kyousan/logo73_yusei.jpg"
              width="20%"
              height="20%" />
          </div>
          <div :align="'center'" class="topkuukan">
            <img
              src="~assets/images/kyousan/logo74_unity.jpg"
              width="20%"
              height="20%" />
          </div>
          <div :align="'center'" class="topkuukan">
            <img
              src="~assets/images/kyousan/logo76_yoji.jpg"
              width="20%"
              height="20%" />
          </div>
          <div :align="'center'" class="topkuukan">
            <img
              src="~assets/images/kyousan/logo78_art.jpg"
              width="20%"
              height="20%" />
          </div>
          <div :align="'center'" class="topkuukan">
            <img
              src="~assets/images/kyousan/logo88_parkhotel.jpg"
              width="20%"
              height="20%" />
          </div>
          <div :align="'center'" class="topkuukan">
            <img
              src="~assets/images/kyousan/logo87_luxsis.jpg"
              width="20%"
              height="20%" />
          </div>
          <div :align="'center'" class="topkuukan">
            <img
              src="~assets/images/kyousan/logo93_rico.JPG"
              width="20%"
              height="20%" />
          </div>
          <div :align="'center'" class="topkuukan">
            <img
              src="~assets/images/kyousan/logo78_ribuhato.jpg"
              width="20%"
              height="20%" />
          </div>
          <Paragraph :align="'center'" class="topkuukan"
            >株式会社留学ジャーナル</Paragraph
          >
          <Paragraph :align="'center'" class="topkuukan"
            >リンテック株式会社</Paragraph
          >
          <div :align="'center'" class="topkuukan">
            <img
              src="~assets/images/kyousan/logo80_routein.jpg"
              width="20%"
              height="20%" />
          </div>
          <div :align="'center'" class="topkuukan">
            <img
              src="~assets/images/kyousan/logo105_wonder.png"
              width="20%"
              height="20%" />
          </div>
        </section>
      </Content>
    </div>
  </div>
</template>

<style scoped>
.kigyokyosan {
  text-align: center;
  margin-top: 40px;
}
.topkuukan {
  padding-top: 20px;
}
</style>
