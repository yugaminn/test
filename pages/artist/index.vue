<script>
export default {
  head: {
    title: '早稲田アリーナ企画',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'アーティストライブについての情報はこちらから'
      },
      { hid: 'keyword', name: 'keyword', content: 'アーティストライブ' },
      { hid: 'og:type', property: 'og:type', content: 'article' },
      {
        hid: 'og:title',
        property: 'og:title',
        content: '早稲田アリーナ企画'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'アーティストライブについての情報はこちらから'
      },
      { hid: 'og:url', property: 'og:url', content: '/artist' },
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
      <Hero>早稲田アリーナ企画</Hero>
    </section>
    <Content class="content">
      <section>
        <div class="box1">
          <SectionTitle :bg-color="'pink'" :positiona="'center'">
            早稲田アリーナ企画概要
          </SectionTitle>
          <div class="g_section-content">
            <Paragraph :align="'center'">
              今年もやってきた日本最大規模の<br
                class="br-sp" />学祭アーティストライブ。
            </Paragraph>
            <Paragraph :align="'center'">
              普段は部活で使用している37号館早稲田アリーナが学生の手によってライブ会場に生まれ変わります！
            </Paragraph>
            <Paragraph :align="'center'">
              早大生が1から創り出したステージの上でプロのアーティストが輝く姿は必見です！
            </Paragraph>
          </div>
        </div>
        <div class="box2">
          <div class="content1 artistsan">
            <div class="small-text1">
              <PartTitle :bg-color="'pink'"
                >企画名：AGESTOCK2024 in WASEDA ARENA ～Da-iCE SPECIAL
                LIVE～</PartTitle
              >
              <Paragraph class="small-text"
                >11月2日(土) 12:00開演（11:00開場）</Paragraph
              >
              <Paragraph
                >場所：戸山キャンパス 37号館早稲田アリーナ
                <br />メインアリーナ</Paragraph
              >
              <Paragraph>主管：AGESTOCK2024実行委員会</Paragraph>
              <Paragraph>出演アーティスト：Da-iCE</Paragraph>
              <Paragraph>
                詳細は<a
                  href="https://agestock.jp/gakusai2024/da-ice"
                  class="artist-link"
                  >こちら</a
                >
              </Paragraph>
            </div>
          </div>
          <div class="content1 artistsan">
            <div class="small-text1">
              <PartTitle :bg-color="'purple'"
                >企画名：マカロック× WASEDA!!
                <br />～青春を鳴らせ、ソウダイに～</PartTitle
              >
              <Paragraph>
                日時：：11月2日(土) 17:00開演（16:00開場）
              </Paragraph>
              <Paragraph>
                場所：戸山キャンパス 37号館早稲田アリーナ
                <br />メインアリーナ</Paragraph
              >
              <Paragraph> 主管：WasedaLive!! 実行委員会 </Paragraph>
              <Paragraph> 出演アーティスト：マカロニえんぴつ </Paragraph>
              <Paragraph>
                詳細は<a
                  href="https://lit.link/wasedalive2024"
                  class="artist-link"
                  >こちら</a
                >
              </Paragraph>
            </div>
          </div>
        </div>
        <div class="box2">
          <div class="content1 artistsan">
            <div class="small-text1">
              <PartTitle :bg-color="'blue'"
                >企画名：WASEDA ARENA SUMMIT vol.5</PartTitle
              >
              <Paragraph class="small-text"
                >11月3日(日) 12:00開演（11:00開場）</Paragraph
              >
              <Paragraph
                >場所：戸山キャンパス 37号館早稲田アリーナ
                <br />メインアリーナ</Paragraph
              >
              <Paragraph>主管：WASEDA ARENA SUMMIT</Paragraph>
              <Paragraph>出演アーティスト：Kroi</Paragraph>
              <Paragraph>
                詳細は<a
                  href="https://linktr.ee/wasedaarenasummit2021"
                  class="artist-link"
                  >こちら</a
                >
              </Paragraph>
            </div>
          </div>
          <div class="content1 artistsan">
            <div class="small-text1">
              <PartTitle :bg-color="'yellow'"
                >企画名：AGESTOCK2024 in WASEDA ARENA ～FRUITS ZIPPER SPECIAL
                LIVE～</PartTitle
              >
              <Paragraph> 日時：11月3日(日) 17:00開演（16:00開場）</Paragraph>
              <Paragraph>
                場所：戸山キャンパス 37号館早稲田アリーナ <br />メインアリーナ
              </Paragraph>
              <Paragraph> 主管：AGESTOCK2024実行委員会</Paragraph>
              <Paragraph> 出演アーティスト：FRUITS ZIPPER </Paragraph>
              <Paragraph>
                詳細は<a
                  href="https://agestock.jp/gakusai2024/fruitszipper/"
                  class="artist-link"
                  >こちら</a
                ></Paragraph
              >
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="box1">
          <SectionTitle :bg-color="'pink'" :positiona="'center'">
            座席・入場方法に関して
          </SectionTitle>
          <div class="g_section-content">
            <Paragraph :align="'center'">
              本企画では、1階A・Bブロックが指定席<br
                class="br-sp" />(スタンディング席)、Cブロックが自由席
            </Paragraph>
            <Paragraph :align="'center'">
              (スタンディング席)、2階D・E・Fブロックが指定席(シッティング席)にわかれています。
            </Paragraph>
            <Paragraph :align="'center'">
              ブロックごとに入場待機列の場所が異なりますので、以下の画像をご参照ください。
            </Paragraph>
            <div class="pic-container">
              <img src="~assets/images/artist/arena_block.png" class="pic1" />
              <img src="~assets/images/artist/arena_gyoretu.png" class="pic1" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="box1">
          <SectionTitle :bg-color="'pink'" :positiona="'center'">
            物販について
          </SectionTitle>
          <div class="g_section-content">
            <Paragraph :align="'center'">
              本企画の物販の場所をご案内いたします。<br
                class="br-sp" />上掲の画像をご参照ください。
            </Paragraph>
            <div class="date">
              <div class="date1">
                <Paragraph>
                  11月2日(土)<br />
                  Da-iCE：戸山キャンパス 31号館02教室<br />
                  マカロニえんぴつ：戸山キャンパス 31号館01教室</Paragraph
                >
              </div>
              <div class="date1">
                <Paragraph>
                  11月3日(日)<br />
                  Kroi：戸山キャンパス 31号館01教室<br />
                  FRUITS ZIPPER：戸山キャンパス 31号館02教室
                </Paragraph>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="box1">
          <SectionTitle :bg-color="'pink'" :positiona="'center'">
            注意事項
          </SectionTitle>
          <div class="g_section-content1">
            <ul>
              <li>
                本公演においては規制退場を行います。アナウンスの指示に従い、ご退場ください。
              </li>
              <li>
                37号館早稲田アリーナ内における写真撮影・録音・録画は禁止となっております。ステージを映さない写真の撮影もご遠慮ください。（Kroiを除く）
              </li>
              <li>再入場は原則禁止となっております。</li>
              <li>
                37号館早稲田アリーナ内は、トイレの数が大変少なくなっております。開演時間に間に合わない場合がございますので、入場前に37号館早稲田アリーナ外のトイレをご利用ください。<br
                  class="br-sp" />また、企画終了後はご利用いただけませんのでご注意ください。
              </li>
              <li>
                37号館早稲田アリーナ内は、蓋のついているペットボトル以外の飲食物の持ち込みを禁止しております。飲食は入場前にお済ませください。
              </li>
              <li>37号館早稲田アリーナ内での飲酒は禁止となっております。</li>
              <li>
                座席のスペースには限りがございますので、必要最低限の荷物でご来場ください。
              </li>
              <li>雨天時は折りたたみ傘でのご来場にご協力お願いいたします。</li>
              <li>
                チケットの転売は禁止となっております。<br
                  class="br-sp" />転売チケットでの入場はできません。
              </li>
              <li>
                指定席のお客様は、前に詰めず指定された場所から移動しないでください。
              </li>
              <li>
                早稲田祭2024会場付近は、大変な混雑が予想されます。お時間に余裕をもってお越しください。
              </li>
              <li>
                混雑に伴う開演時間の変更はございませんので、予めご了承ください。
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Content>
  </div>
</template>

<style scoped>
.br-sp {
  display: none;
}
.corabocontainer {
  margin-top: 10%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
section {
  text-align: center;
}
.hako {
  width: fit-content;
  margin: 2% auto;
  display: flex;
}
.small-text1 {
  text-align: left;
}
.small-box1 {
  display: flex;
}
.box2 {
  display: flex;
  text-align: center;
  justify-content: space-around;
  margin: 0px;
}
a {
  text-decoration: none;
  font-weight: bold;
  color: #036eb8;
}
.content1 {
  margin: 30px;
}
.artistsan {
  width: 45vw;
}
.g_section-content1 {
  text-align: center;
  font-size: 20px;
  margin: 15px;
}
ul {
  text-align: left;
}
li {
  font-size: 20px;
  padding: 5px 0;
  list-style: disc;
}
.text1 {
  text-align: left;
}
.box3 {
  display: flex;
  margin: 30px;
}
.pic-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
.pic1 {
  width: 30vw;
  margin: 0 20px;
  border: 1px solid #59c3e1;
}
.date {
  display: flex;
  display: flex;
  text-align: center;
  justify-content: center;
}
.date1 {
  margin: 20px;
}
.br-sp {
  display: none;
}
/* <!--font-size--> */
.g_section-content > .paragraph,
.small-text1 > .paragraph,
.date1 > .paragraph,
.g_section-content1 > .paragraph {
  font-size: 20px;
}
@media screen and (max-width: 1024px) {
  .br-sp {
    display: block;
  }
  .content {
    background-image: none;
  }
  .box2 {
    display: flex;
    flex-flow: column;
    margin: 0;
  }
  .artistsan {
    width: auto;
  }
  .g_section-content1 {
    margin: 0 auto;
    width: 83vw;
    padding-left: 2%;
  }
  li {
    font-size: 14px;
  }
  .content {
    width: 100%;
  }
  .content1 {
    margin: 20px;
  }
  .box3 {
    display: flex;
    margin: 20px;
  }
  .date1 {
    margin: 20px;
  }
  .date {
    margin: auto;
    display: block;
  }
  .br-sp {
    display: block;
  }
  /* <!--font-size--> */
  .g_section-content > .paragraph,
  .small-text1 > .paragraph,
  .date1 > .paragraph,
  .g_section-content1 > .paragraph {
    font-size: 14px;
  }
}
@media screen and (max-width: 500px) {
  .pic-container {
    flex-direction: column;
    align-items: center;
  }
  .pic1 {
    width: 45vw;
    margin: 20px;
  }
  .date {
    margin: 0 auto;
  }
  .date1 {
    width: 100%;
    margin: 0;
    line-height: 0.5em;
  }
}
</style>
