<script>
export default {
  layout: 'maintenance',
  head: {
    title: 'キャンパスにお越しの方へ（要予約）',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          '早稲田祭2024では、チケット制（オンライン配布・無料）を導入いたします。キャンパスにご来場いただく方は、キャンパス入場チケットを「キャンパス入場チケットの申し込みはこちら」にてご予約ください。'
      },
      {
        hid: 'keyword',
        name: 'keyword',
        content: '早稲田 早稲田大学 早稲田祭 早稲田祭2024,キャンパス'
      },
      { hid: 'og:type', property: 'og:type', content: 'article' },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'キャンパスにお越しの方へ（要予約）'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          '早稲田祭2022では、チケット制（オンライン配布・無料）を導入いたします。キャンパスにご来場いただく方は、キャンパス入場チケットを「キャンパス入場チケットの申し込みはこちら」にてご予約ください。'
      },
      { hid: 'og:url', property: 'og:url', content: '/campus' },
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
      <Hero> キャンパスにお越しの方へ<br />（要予約） </Hero>
    </section>

    <Content>
      <section class="sukima1">
        <SectionTitle :bg-color="'green'">
          キャンパス入場チケットのご案内
        </SectionTitle>
        <div class="g_section-content">
          <Paragraph class="sukima">
            早稲田祭2021では、チケット制（オンライン配布・無料）を導入いたします。
            <br />
            チケットをお持ちでない場合はご入場いただけませんので、予めご了承ください。
          </Paragraph>
          <Paragraph>
            キャンパス入場チケットは11月1日(月)
            12:00をもちまして、お申し込みの受付を終了いたしました。
          </Paragraph>
          <Paragraph>
            現在、キャンパス入場チケットのお申し込みを完了した方を対象に、一部企画を観覧される際に必要な企画観覧チケットの受付をしております。
            <br />
            なくなり次第終了の予定ですので予めご了承ください。
          </Paragraph>
          <Paragraph>
            早稲田祭をオンラインでご視聴される場合、チケットは原則不要でございます。（一部企画を除く。）<br />
            早稲田祭のオンラインでの楽しみ方は、<NuxtLink
              :to="'/online'"
              class="linkcolor">
              こちら
            </NuxtLink>
            をご覧ください。
          </Paragraph>
        </div>
      </section>

      <section class="sukima1">
        <SectionTitle :bg-color="'pink'"> ご来場の皆様へ </SectionTitle>
        <div class="g_section-content">
          <Paragraph class="sukima">
            <strong>【ご来場の皆様へのお願い】</strong>
          </Paragraph>
          <Paragraph class="jisage">
            トラブル防止等の観点から、酒類の持ち込みおよび飲酒、キャンパスへのバイク・車・自転車でのご来場、無許可での勧誘・広報・宣伝活動、ペット同伴でのご来場といった行為は全てお断りさせていただきます。
            <br />
            また、ごみの分別や完全分煙へのご協力をお願いいたします。
          </Paragraph>
          <Paragraph class="sukima1">
            <strong>【感染症対策】</strong>
          </Paragraph>
          <Paragraph class="jisage">
            来場者の皆様が安心して早稲田祭にお越しいただけるよう、入場規制や食事の禁止、マスクの着用などといったガイドラインを設け、感染症対策を徹底してまいります。詳細につきましては、
            <NuxtLink :to="'/covid19'" class="linkcolor">
              感染症対策について
            </NuxtLink>
            をご覧ください。
          </Paragraph>
          <Paragraph class="sukima1">
            <strong>【会場でお困りの際は】</strong>
          </Paragraph>
          <Paragraph class="jisage">
            各キャンパスに1か所ずつインフォメーションを設置し、各種案内を行っております。迷子や落とし物のお問い合わせ等、お困りの際はお気軽にお立ち寄りください。
          </Paragraph>
          <Paragraph class="sukima-jisage">
            早稲田祭2021終了後の落とし物に関するお問い合わせは、下記のメールアドレスにご連絡ください。落とし物は11月27日(土)に戸塚警察署に受け渡しますので、以降はそちらにお問い合わせください。
          </Paragraph>
          <Paragraph>
            お問い合わせ
            <a href="mailto:otoshimonokanri@wasedasai.net" class="linkcolor"
              >otoshimonokanri@wasedasai.net</a
            >
          </Paragraph>
          <Paragraph class="sukima-jisage">
            また、我々運営スタッフは全ての方に早稲田祭を楽しんでいただきたいという考えから、ガイドヘルプなどのバリアフリー活動に積極的に取り組んでいます。ご要望がございましたらお気軽にご相談ください。
          </Paragraph>
          <Paragraph>
            お問い合わせ
            <a href="mailto:barrierfree@wasedasai.net" class="linkcolor"
              >barrierfree@wasedasai.net</a
            >
          </Paragraph>
        </div>
      </section>

      <section id="access" class="sukima1">
        <SectionTitle :bg-color="'yellow'"> キャンパス地図 </SectionTitle>
        <div class="g_section-content g_flex-box">
          <div>
            <PartTitle :bg-color="'blue'">早稲田キャンパス</PartTitle>
            <div class="campus-img-wrapper">
              <img
                src="~assets/images/campus/campus-waseda.png"
                alt="早稲田キャンパスマップ" />
            </div>
          </div>
          <div>
            <PartTitle :bg-color="'blue'">戸山キャンパス</PartTitle>
            <div class="campus-img-wrapper">
              <img
                src="~assets/images/campus/campus-toyama2.png"
                alt="戸山キャンパスマップ" />
            </div>
          </div>
        </div>
      </section>

      <section class="sukima1">
        <SectionTitle :bg-color="'purple'"> 交通アクセス </SectionTitle>
        <div class="g_section-content g_flex-box campus-access">
          <div>
            <Paragraph><strong>【早稲田キャンパス】</strong></Paragraph>
            <Paragraph>〒169-8050 東京都新宿区西早稲田1-6-1</Paragraph>
            <Paragraph class="sukima">
              JR山手線 高田馬場駅から徒歩20分
            </Paragraph>
            <Paragraph>西武新宿線 高田馬場駅から徒歩20分</Paragraph>
            <Paragraph>東京メトロ東西線 早稲田駅から徒歩5分</Paragraph>
            <Paragraph>東京メトロ副都心線 西早稲田駅から徒歩17分</Paragraph>
            <Paragraph>都電荒川線 早稲田駅から徒歩5分</Paragraph>
            <Paragraph>
              都営バス 学02（学バス）高田馬場駅〜早大正門 9分
            </Paragraph>
          </div>
          <div>
            <Paragraph class="sukima">
              <strong>【戸山キャンパス】</strong>
            </Paragraph>
            <Paragraph>〒162-8644 東京都新宿区戸山1-24-1</Paragraph>
            <Paragraph class="sukima">
              JR山手線 高田馬場駅から徒歩20分
            </Paragraph>
            <Paragraph>西武新宿線 高田馬場駅から徒歩20分</Paragraph>
            <Paragraph>東京メトロ東西線 早稲田駅から徒歩3分</Paragraph>
            <Paragraph>東京メトロ副都心線 西早稲田駅から徒歩12分</Paragraph>
          </div>
        </div>
      </section>
    </Content>
  </div>
</template>

<style scoped>
.jisage {
  text-indent: 1em;
}

.campus-access > div {
  text-align: left;
}

.sukima {
  padding-top: 15px;
}

.sukima-jisage {
  padding-top: 15px;
  text-indent: 1em;
}

.campus-img-wrapper {
  padding: 1rem;
}

.linkcolor {
  color: #274c82;
}
</style>
