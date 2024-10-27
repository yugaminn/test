<script>
export default {
  layout: 'maintenance',
  head: {
    title: '学園祭コラボ',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: '早稲田祭は、毎年さまざまな学園祭とコラボ企画を行っています。'
      },
      {
        hid: 'keyword',
        name: 'keyword',
        content: '早稲田 早稲田大学 早稲田祭 早稲田祭2022 学園祭コラボ　三大祭'
      },
      { hid: 'og:type', property: 'og:type', content: 'article' },
      {
        hid: 'og:title',
        property: 'og:title',
        content: '学園祭コラボ'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: '早稲田祭は、毎年さまざまな学園祭とコラボ企画を行っています。'
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
      <Hero>学園祭コラボ</Hero>
    </section>
    <div class="maeoki">
      <Paragraph class="sukima">
        早稲田祭は、毎年さまざまな学園祭とコラボ企画を<br />行っています。
      </Paragraph>
      <Paragraph class="sukima">
        代表対談など、各学園祭の魅力が詰まった<br />コンテンツが盛りだくさん！
      </Paragraph>
      <paragraph class="sukima"
        >祭への想いあふれるコラボ、ぜひご覧ください！
      </paragraph>
    </div>

    <Content>
      <section>
        <div class="title">
          <SectionTitle :bg-color="'orange'"> 早慶東大コラボ </SectionTitle>
        </div>
        <div>
          <paragraph class="akanesasu">
            〜あかねさす 未来に架ける その先を〜
          </paragraph>
          <div class="picscenter">
            <img
              src="~/assets/images/collabo/daihyos.jpg"
              alt="写真"
              class="daihyos" />
          </div>
          <Paragraph class="about">
            早稲田祭2022は慶應義塾大学の三田祭と<br />東京大学の駒場祭とコラボ企画を実施しました！<br />代表・委員長対談の様子はこちらからチェック！
          </Paragraph>
        </div>
        <div class="taidan">
          <div class="taidan-child">
            <PartTitle :bg-color="'blue'" class="sukima">
              【前編】ロゴとキャッチコピーに<br />懸ける想い
            </PartTitle>
            <br />
            <paragraph class="center"
              >今年も祭がやってくる。秋の早稲田に、三田に、<br />そして駒場に。<br />2022年だからこそ出せるテーマを、代表・委員長が<br />熱く語る。<br />早慶東大コラボ対談、ここに開幕。
            </paragraph>
          </div>
          <paragraph class="center">
            <a
              href="https://note.com/wasedasai2022/n/nd53195db5055"
              target="_blank"
              class="linkcolor"
              >記事はこちら</a
            >
          </paragraph>
          <paragraph class="center">
            <a
              href="https://m.youtube.com/watch?v=Re8tlHUy3b4"
              target="_blank"
              class="linkcolor"
              >動画はこちら</a
            >
          </paragraph>

          <div class="taidan">
            <div class="taidan-child">
              <br />
              <PartTitle :bg-color="'yellow'" class="sukima">
                【中編】代表・委員長の1日
              </PartTitle>
              <br />
              <paragraph class="sukima"
                >学園祭の魅力を語り尽くす！ プレゼンバトル。<br />「想いの照らす、その先を」しかと見届けよ！</paragraph
              >
            </div>
            <paragraph class="center">
              <a
                href="https://note.com/wasedasai2022/n/ne06d76b1ac4a?magazine_key=m32e853cf3cad"
                target="_blank"
                class="linkcolor"
                >記事はこちら</a
              >
            </paragraph>
            <paragraph class="center">
              <a
                href="https://m.youtube.com/watch?v=5c2OskaLS9k"
                target="_blank"
                class="linkcolor"
                >動画はこちら</a
              >
            </paragraph>
            <div class="taidan">
              <div class="taidan-child">
                <br />
                <PartTitle :bg-color="'orange'" class="sukima">
                  【後編】白熱のプレゼンバトル
                </PartTitle>
                <br />
                <paragraph class="sukima"
                  >学園祭実行委員会を率いる、代表・委員長の日常に密着。<br />祭を創る者たちの姿をご覧あれ！
                </paragraph>
              </div>
            </div>
          </div>
          <br />
          <paragraph class="center">
            <a
              href="https://note.com/wasedasai2022/n/n8f13241f14dd"
              target="_blank"
              class="linkcolor"
              >記事はこちら</a
            >
          </paragraph>
          <paragraph class="center">
            <a
              href="https://m.youtube.com/watch?v=pYSf_9-zxpQ"
              target="_blank"
              class="linkcolor"
              >動画はこちら</a
            >
          </paragraph>
        </div>
        <br />
        <paragraph class="sukima">
          各学園祭のマスコットキャラクターやロゴなど、最高に可愛いInstagramコラボフィルターが3種類登場！
        </paragraph>
        <paragraph class="center">
          <a
            href="https://www.instagram.com/ar/534370271857225"
            class="linkcolor"
            target="_blank"
            >第1弾はこちら</a
          >
        </paragraph>
        <paragraph class="center">
          <a
            href="https://www.instagram.com/ar/1263125844467188"
            class="linkcolor"
            target="_blank"
            >第2弾はこちら</a
          >
        </paragraph>
        <paragraph class="center">
          <a
            href="https://www.instagram.com/ar/3351861421757221"
            class="linkcolor"
            target="_blank"
            >第3弾はこちら</a
          >
        </paragraph>
        <paragraph class="sukima">
          ※ご利用にはInstagramアプリのダウンロードおよびInstagramアカウントの登録が必要です。</paragraph
        >

        <paragraph class="sukima"
          >本企画の実施に際して三田祭実行委員会および駒場祭委員会のみなさまには多大なるご協力を賜りましたこと、この場をお借りしてお礼を申し上げます。
        </paragraph>
      </section>
      <br />
      <section>
        <div class="title">
          <SectionTitle :bg-color="'yellow'">
            早稲田祭だけじゃない！？
          </SectionTitle>
        </div>
        <div class="taidan-parent">
          <div class="taidan-child">
            <br />
            <br />
            <PartTitle> ～早大三大まつりの代表に迫る～ </PartTitle>
            <div class="picscenter">
              <img
                src="~/assets/images/collabo/sandai.JPG"
                alt="写真"
                class="sandai" />
            </div>
            <paragraph class="sukima">
              同じ早稲田大学の学園祭でありながら実は接点の少ない早稲田祭・理工展・所沢キャンパス祭でコラボ企画を行います。<br />各まつりの公式サイトを経由しながら、代表対談を楽しもう！
              <br />個性あふれる各まつりの裏側や、代表の素顔に<br />迫ります。
            </paragraph>
          </div>
        </div>
        <br />
        <br />
        <paragraph class="center">
          <a
            href="https://tokosai.net/kikaku_corabo.html"
            target="_blank"
            class="linkcolor"
            >第1弾はこちら</a
          >
        </paragraph>
        <paragraph class="center"
          >所沢キャンパス祭公式サイトに掲載しています。<br />他のコンテンツもあわせてお楽しみください！</paragraph
        >
        <br />
        <Paragraph class="center">
          <a
            href="https://rikoten.com/about/dialogue/"
            target="_blank"
            class="linkcolor"
            >第2弾はこちら</a
          >
        </Paragraph>
        <paragraph class="center"
          >理工展公式サイトに掲載しています。<br />他のコンテンツもあわせてお楽しみください！</paragraph
        >
        <br />
        <paragraph class="center">
          <a
            href="https://note.com/wasedasai2022/n/ne62c0b8610d2"
            target="_blank"
            class="linkcolor"
            >第3弾はこちら</a
          >
        </paragraph>
        <paragraph class="center"
          >早稲田祭公式noteに掲載しています。<br />他のコンテンツもあわせてお楽しみください！</paragraph
        >
      </section>
    </Content>
  </div>
</template>

<style scoped>
.linkcolor {
  color: #274c82;
}
.linkcolor:hover {
  color: #d35b31;
}
.taidan-parent {
  display: inline-block;
}
.picscenter {
  display: flex;
  justify-content: center;
}
.maeoki {
  padding-top: 15px;
  text-align: center;
}
.taidan {
  display: inline-block;
  width: 100%;
}
.about {
  padding-top: 15px;
  text-align: center;
}
.taidan-child {
  text-align: center;
}
.center {
  text-align: center;
}
.sukima {
  padding-top: 15px;
  text-align: center;
}

.title {
  text-align: center;
}

.title span {
  font-size: smaller;
}
.akanesasu {
  padding-top: 15px;
  font-size: large;
  text-align: center;
}
.line {
  position: relative;
}
.line::before {
  position: absolute;
  content: '';
  display: block;
  transform: rotate(0);
  background-color: black;
  width: 100%;
  height: 1px;
  top: 50%;
  left: 0;
}

@media screen and (min-width: 1024px) {
  .sukima br {
    display: none;
  }
  .taidan br {
    display: none;
  }
  .center br {
    display: none;
  }
  .photo {
    display: flex;
    justify-content: center;
  }
  .daihyos,
  .sandai {
    width: 50%;
    height: auto;
  }
}
</style>
