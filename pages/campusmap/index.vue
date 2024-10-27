<script>
export default {
  layout: 'maintenance',
  head: {
    title: 'キャンパスマップ',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: '早稲田祭2024の概要、開催に寄せて、テーマについて紹介します。'
      },
      {
        hid: 'keyword',
        name: 'keyword',
        content:
          '早稲田 早稲田大学 早稲田祭 早稲田祭2024 概要 開催 テーマ キャッチコピー'
      },
      { hid: 'og:type', property: 'og:type', content: 'article' },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'キャンパスマップ'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: '早稲田祭2024の概要、開催に寄せて、テーマについて紹介します。'
      },
      { hid: 'og:url', property: 'og:url', content: '/about' },
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
      <Hero>テーマ・ロゴ／代表・総長挨拶</Hero>
    </section>

    <Content>
      <section>
        <SectionTitle class="SectionTitle">テーマ・ロゴについて</SectionTitle>
        <div class="g_section-content">
          <PartTitle class="messager" :bg-color="'orange'"
            >キャッチコピー</PartTitle
          >
          <img
            class="catch_copy-img"
            src="~assets/images/about/22logo_with_catch.png" />
          <Paragraph>
            魅せられ、惹きつけられた「何か」への想い。
            この2年間、時にぶつかり、時に合わさり、私たちを繋ぎ止めていたものです。
          </Paragraph>
          <paragraph>
            早稲田祭2022は、原点。
            この場所から、早大生の力強く、あたたかい想いが太陽のように広がる。
            そして、あなたを一歩先へと導く活力になるように。「想いの照らす、その先を。」
          </paragraph>
          <PartTitle class="messager1" :bg-color="'orange'">ロゴ</PartTitle>
          <img class="logo-img" src="~assets/images/about/22logo_only.png" />
          <Paragraph> コンセプトは「力強い想い、力強い広がり」。 </Paragraph>
          <paragraph>
            中心にあるのは早稲田。あふれんばかりの想いが広がる様子を表現しています。
            「太陽」のモチーフによって照らされるその先を、ふぞろいで立体的な円錐や円によって想いの広がりやその多様性を表現しました。
            濃いオレンジは強く広がる「想い」、薄いオレンジは想いが照らしている「可能性」、薄い黄色は早稲田祭の後に見える「その先」を意識し、連続性や重厚感を表現しています。
          </paragraph>
        </div>
      </section>
      <section>
        <SectionTitle class="SectionTitle"
          >早稲田祭2022開催に寄せて
        </SectionTitle>
        <div class="h_section-content">
          <PartTitle class="messager" :bg-color="'yellow'">
            早稲田祭2022運営スタッフ代表 <br class="onoderaspace" />高山 都
          </PartTitle>
          <div class="message_flex-box">
            <div class="img-wrapper">
              <img
                class="message-img"
                src="~assets/images/about/22daihyo.jpg" />
            </div>
            <div class="message-box">
              <Paragraph>
                この度は早稲田祭2022、並びに本サイトへお越しいただきありがとうございます。
              </Paragraph>
              <Paragraph>
                今年度は3年ぶりの本格的な対面開催となりましたことを大変嬉しく思います。
                早稲田祭2022の開催にあたって、教職員の皆様、周辺地域にお住まいの皆様、校友・企業の皆様など、多くの方々のご理解・ご協力をいただきました。この場をお借りして厚く御礼申し上げます。
              </Paragraph>
              <Paragraph>
                この2年間、私たちはさまざまな制約を受け、何事も思うように活動することが叶いませんでした。しかしこの2年間があったからこそ再確認できたことがあります。それは、私たち早大生を、そして早稲田のまちをいかなるときも繋ぎ止めてくれていたのは、胸の奥に秘めている自分が魅せられた「何か」に対する強い「想い」であるということです。本気になれる理由は自分自身にあり、それが一つになったときのあふれんばかりの情熱や熱気が<b>早稲田</b>なのだと改めて実感しました。
              </Paragraph>
              <Paragraph>
                早稲田のまちから発信されるエネルギーは、他にどこを探してもありません。だからこそ、早稲田だから創りあげることができる祭を、早稲田だから感じることができる「想い」を、一人でも多くの方に届けたい。
                早稲田祭2022はそれぞれの集大成であると同時に、スタートラインでもあります。
                この祭で受け取った「想い」を胸に、一歩先へと皆様が踏み出すきっかけとなればそれ以上のことはありません。
              </Paragraph>
              <Paragraph
                >早大生の、そして早稲田のまちの「想い」が詰まった早稲田祭2022を、どうぞお楽しみください。</Paragraph
              >
            </div>
          </div>
          <PartTitle class="messager" :bg-color="'yellow'">
            早稲田大学総長 田中 愛治
          </PartTitle>
          <div class="message_flex-box">
            <div class="img-wrapper">
              <img class="message-img" src="~assets/images/about/22socho.jpg" />
            </div>
            <div class="message-box">
              <Paragraph>
                新型コロナウイルス感染症が流行し、早三年が経ちました。早大生は、日々状況が変化するコロナ禍において、少しずつ新たな一歩を踏み出そうとしています。
              </Paragraph>
              <Paragraph>
                今年度の早稲田祭は、一昨年度のオンライン開催、昨年度のハイブリッド開催の経験を活かし、学生の皆さんが力を合わせて、約三年ぶりの本格的な対面形式で開催する運びとなりました。早稲田大学を代表して、心より御慶び申し上げます。また、ご来場の皆様、ならびにこのような不安定な社会情勢において早稲田祭の開催にご協力いただいた全ての方々に、深く感謝申し上げます。
              </Paragraph>
              <Paragraph>
                早稲田大学は1882年の創立以来長く積み上げた歴史の中で、進取の精神のもと、さまざまな挑戦をしてまいりました。復活、そして新たな一歩を踏み出す今年度の早稲田祭は、まさにこの進取の精神の表れであります。
              </Paragraph>
              <Paragraph>
                ご来場いただきますご父母の皆様、受験生、校友、地域の皆様、そして全ての早稲田ファンの皆様におかれましては、豊かな学生文化が凝縮された早稲田文化と早稲田精神の発露を十分にご堪能いただけるものと思います。学生たちへの熱いご声援を、よろしくお願い申し上げます。
              </Paragraph>
            </div>
          </div>
        </div>
      </section>
    </Content>
  </div>
</template>

<style scoped>
.messager {
  padding-top: 1rem;
}

.messager1 {
  margin-top: 30px;
}
.message-img {
  max-width: 320px;
  width: 100%;
}
.catch_copy-img {
  display: flex;
  justify-content: center;
}
.SectionTitle {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 20px;
}
@media screen and (min-width: 920px) {
  .message_flex-box {
    display: flex;
    align-items: flex-start;
    width: 100%;
  }
  .img-wrapper {
    padding: 0.5rem 1rem;
    display: flex;
    justify-content: flex-end;
    width: 30%;
  }
  .message-box {
    padding: 2rem 1rem;
    width: 70%;
  }
  .onoderaspace {
    display: none;
  }
}

.catch_copy-img {
  max-width: 600px;
  width: 100%;
  margin: auto;
  padding: 1rem;
}
.logo-img {
  max-width: 240px;
  width: 100%;
  margin: auto;
}

.video-wrapper {
  width: 100%;
  height: 100%;
  padding-top: 2rem;
}
.video-wrapper video {
  display: block;
  max-width: 720px;
  margin: auto;
}
.video-wrapper .paragraph {
  margin-top: 1rem;
}
.g_section-content {
  text-align: center;
}
</style>
