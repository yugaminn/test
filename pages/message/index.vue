<script>
export default {
  props: ['bgColor'],
  head: {
    title: '地域×早大生メッセージ企画',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: '地域の飲食店と早大生が相互に抱いている想いを発信します！'
      },
      {
        hid: 'keyword',
        name: 'keyword',
        content:
          '早稲田 早稲田大学 早稲田祭 早稲田祭2024 地域 早大生 メッセージ 企画'
      },
      { hid: 'og:type', property: 'og:type', content: 'article' },
      {
        hid: 'og:title',
        property: 'og:title',
        content: '地域×早大生メッセージ企画やる'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: '地域の飲食店と早大生が相互に抱いている想いを発信します！'
      },
      { hid: 'og:url', property: 'og:url', content: '/online' },
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
    <section class="Hero">
      <Hero>
        物語をつくる早大生へのメッセージ<br />
        〜早稲田のまちと早大生のつながり〜
      </Hero>
    </section>

    <!------------------------------HTML:main_contents------------------------------>
    <div class="message_wrap1">
      <div id="main_covered_contents1" class="main_covered_contents1">
        <div>
          <Content>
            <section class="messagesection message01">
              <!------------------------------sec_title_alter------------------------------>

              <div class="section_title_alternate margin1">
                <SectionTitle :bg-color="'orange'"
                  >地域×早大生メッセージ企画って<br class="sp" />どんな企画？
                </SectionTitle>
              </div>

              <!------------------------------main_contents1------------------------------>

              <div class="g_section-content">
                <Paragraph class="sukima">
                  本企画は、地域の飲食店と早大生が相互に抱いている想いを目に見える形にして発信していく企画です。</Paragraph
                >
                <Paragraph
                  >早大生を代表し、早稲田大学のサークルのみなさまには早稲田大学周辺地域の飲食店のみなさまに対しての想いを込めた色紙を作成していただきました。
                  そして早稲田大学周辺地域の飲食店のみなさまからは早大生に対しての想いを込めたビデオメッセージをいただきます。
                  そうすることで、日頃から相互に抱いている目には見えなかった想いを目に見える形にし、
                  多くの方に早稲田大学周辺地域の飲食店と早大生のつながりを感じていただけるようにしたのがこの企画です。
                  早稲田にしかない地域と早大生の素敵なつながりを感じることができる暖かい企画になっています。
                </Paragraph>
                <!--<div>image（オンラインで楽しめる企画を探すページの画像）</div>-->
              </div>
              <div class="imagescontainer01 imgcontainer01">
                <div class="imagescover imagescover1">
                  <img
                    src="~/assets/images/message/managerandstudents1.jpg"
                    class="message_image1 mess_photo" />
                  <img
                    src="~/assets/images/message/managerandstudents2.jpg"
                    class="message_image2 mess_photo" />
                </div>
              </div>
            </section>

            <section class="messagesection message01">
              <!------------------------------sec_title_alter------------------------------>

              <div class="section_title_alternate margin1">
                <SectionTitle :bg-color="'orange'"
                  >早稲田祭2024における<br
                    class="sp" />企画の実施について</SectionTitle
                >
              </div>

              <!------------------------------main_contents1------------------------------>

              <div class="g_section-content">
                <Paragraph>
                  本年度のメッセージ企画でのテーマは早稲田祭2024のメインテーマを踏まえて、「物語を創る早大生にメッセージを」となっております。
                  当企画の大きな特徴は、映像の構成と色紙のQRコード添付という点です。
                  まず、早大生と地域の飲食店の方々のつながりや「ワセメシ」の素晴らしさを映像を見る方々に伝えられるように、店内での食レポシーンを含めるなどの工夫も行いました。この撮影は、地域の飲食店の方々と参加団体のみなさまがつながる機会の創出になっています。また、ロングバージョンとショートバージョンの映像を2本用意することで、多くの方々に見ていただきやすくすると共に、店主の方や参加団体のみなさまからのメッセージシーンの全てを映像にすることを可能にしました。
                  そして、各公式SNSや早稲田祭当日のビジョン放映に加えて、より多くの方々の目に留まるよう、当企画の映像QRコードを早大生から地域の飲食店の方々へ送る色紙に添付しました。この色紙が飾られている店舗にてQRコードを読み取っていただくことでも映像を再生できます。こちらを通して早大生とのつながりを実感していただけると幸いです。たくさんの早大生のみなさまが店を訪れ、早稲田のまちと学生のつながりを感じていただくことこそが、再生回数以上に大きな意味を持つと考えています。なお、本企画で作成した映像は、早稲田祭2024当日に各ステージにて放映するほか、各公式SNSでも配信しますので、ぜひチェックしてみてください。
                </Paragraph>
                <!--<div>image（オンラインで楽しめる企画を探すページの画像）</div>-->
              </div>
              <div class="imagescontainer01 imgcontainer02">
                <div class="imagescover">
                  <img
                    src="~/assets/images/message/managerandstudent3.jpg"
                    class="message_image1 mess_photo" />
                  <img
                    src="~/assets/images/message/managerandstudent4.jpeg"
                    class="message_image2 mess_photo"
                    loading="eager"
                    onload="ImageGuide2();" />
                </div>
              </div>
            </section>
            <section class="messagesection message01">
              <!------------------------------sec_title_alter------------------------------>

              <div class="section_title_alternate margin1">
                <SectionTitle :bg-color="'orange'"
                  >ご協力いただいているみなさまへ</SectionTitle
                >
              </div>

              <!------------------------------main_contents1------------------------------>

              <div class="g_section-content">
                <Paragraph>
                  本企画は、早稲田のまちを彩る「ワセメシ」と呼ばれる早稲田大学周辺地域の飲食店のみなさま、
                  早大生を代表して色紙作成をしてくださる参加団体のみなさまのご協力によって実現しています。
                  互いに抱いている想いを目に見える形として発信することができているのも、ひとえにみなさまの
                  ご協力のおかげです。誠にありがとうございます。
                  ワセメシ店主のみなさまからの早大生への想いを感じ、私たち早大生からもワセメシ店主のみなさ
                  まに感謝の心を伝えていけたらと思います。また、本企画がより強いつながりを構築するきっかけ
                  となれば幸いです。そして今後もワセメシ店舗様に加えて、早稲田祭に来場しこの企画を目にする
                  全ての人に感謝の気持ちが伝わるような、素晴らしい企画を目指していきます。
                </Paragraph>
                <!--<div>image（オンラインで楽しめる企画を探すページの画像）</div>-->
              </div>
              <div class="imagescontainer01 imgcontainer01">
                <div class="imagescover">
                  <img
                    src="~/assets/images/message/managerandstudent5.jpeg"
                    class="message_image1 mess_photo" />
                  <img
                    src="~/assets/images/message/managerandstudent6.jpg"
                    class="message_image2 mess_photo" />
                </div>
              </div>
            </section>

            <section class="messagesection message01">
              <!------------------------------sec_title_alter------------------------------>

              <div class="section_title_alternate margin1">
                <SectionTitle :bg-color="'orange'"
                  >参加団体・協力店舗名
                </SectionTitle>
              </div>

              <!------------------------------main_contents1------------------------------>

              <div class="credit">
                <Paragraph>
                  【参加団体名（敬称略）】<br />
                  早稲田大学よさこいチーム東京花火<br />
                  早稲田大学”踊り侍”<br />
                  男祭り2024<br />
                  TAP-LOVERS<br />
                  早稲田大学 下駄っぱーず<br />
                  企画集団便利舎<br />
                  中夜祭2024実行委員会<br />
                  早稲田大学漫画研究会<br />
                  Seiren Musical Project<br />
                  早稲田大学書道パフォーマンスサークル漣<br />
                  まっちワークグループ早稲田<br />
                  アイドルサークル早稲田<br />
                  早稲田大学ベリーダンスサークルSARAHbelly<br />
                  早稲田大学チアダンスチームMYNX<br />
                  <p>早稲田大学男子チアリーディングチームSHOCKERS</p>
                  <br />
                  【協力店舗名】<br />
                  武道家 本店<br />
                  東京麺珍亭本舗<br />
                  喫茶ぷらんたん<br />
                  図星 はなれ<br />
                  Pizzeria TAKATA BOKUSYA 高田牧舎<br />
                  炭焼丼専門店 どんぴしゃり<br />
                  三品食堂<br />
                  キッチンミキ<br />
                  ママキムチ<br />
                  こはぜ珈琲 早稲田店<br />
                  早稲田モンスターズキッチン<br />
                  都電テーブル 早稲田<br />
                  GOOD MORNING CAFE 早稲田<br />
                  Whistle Cafe<br />
                  居酒屋 もちだ<br />
                </Paragraph>
                <!--<div>image（オンラインで楽しめる企画を探すページの画像）</div>-->
              </div>
            </section>

            <section class="messagesection message06">
              <!-----------------------------sec_title_alter------------------------------>
              <div class="margin1">
                <PartTitle :bg-color="'orange'"
                  >以下のリンクから<br
                    class="sp" />メッセージ動画をご覧いただけます。</PartTitle
                >
              </div>
              <!------------------------------main_contents6------------------------------>
              <div class="g_section-content">
                <Paragraph class="message_link_list sukima">
                  <a
                    href="https://x.com/wasedasai/status/1846836177569304783?s=46"
                    target="_blank"
                    rel="noopener noreferrer">
                    早稲田祭公式X（旧Twitter） ショート版</a
                  ><br />
                  <a
                    href="https://www.instagram.com/reel/DBN8E1Ky6tu/?igsh=MXNtaWoydXk3c3I2OA=="
                    target="_blank"
                    rel="noopener noreferrer">
                    早稲田祭公式Instagram ショート版</a
                  ><br />
                  <a
                    href="https://youtu.be/B1gBemFTS0Q"
                    target="_blank"
                    rel="noopener noreferrer">
                    早稲田祭公式Youtubeチャンネル ロング版</a
                  >
                </Paragraph>
              </div>
            </section>
          </Content>
        </div>
      </div>
    </div>
  </div>
</template>

<!----------------------------------------CSS(scoped)---------------------------------------->
<style scoped>
/*------------------------------CSS:main------------------------------*/
.g_section-content {
  color: #036eb8;
}
a {
  text-decoration: none;
  color: #036eb8;
  font-weight: bold;
}
.messagesection {
  margin-top: 25px;
  display: flex;
  flex-direction: column;
}
.margin1 {
  text-align: center;
}
.sukima {
  padding-top: 15px;
}

.message_group_list,
.message_link_list {
  text-align: center;
}

.imagescontainer01 {
  max-width: 1200px;
  /* margin: */
  display: flex;
  text-align: center;
  justify-content: space-around;
}
.imgcontainer01 {
  display: flex;
  justify-content: end;
}
.imgcontainer02 {
  display: flex;
  justify-content: start;
}
.sp {
  display: none;
}
@media screen and (max-width: 768px) {
  .Hero {
    white-space: nowrap;
  }
}
@media screen and (max-width: 768px) {
  .imagescontainer01 {
    margin: 0 0 0 0;
    justify-content: center;
  }
}
.imagescontainer02 {
  max-width: 1200px;
  /* margin: 0 auto 0 0; */
  display: flex;
  justify-content: center;
}
@media screen and (max-width: 768px) {
  .imagescontainer02 {
    margin: 0 0 0 0;
    justify-content: center;
  }
}
.imagescontainer03 {
  max-width: 1200px;
  /* margin: 0 0 0 auto; */
  display: flex;
  justify-content: center;
}
@media screen and (max-width: 768px) {
  .imagescontainer03 {
    margin: 0 0 0 0;
    justify-content: center;
  }
  .credit {
    font-size: 14px;
  }
  .sp {
    display: block;
  }
}
.imagescover {
  display: flex;
  width: fit-content;
  text-align: center;
}

.mess_photo {
  min-width: 140px;
  width: 30vw;
  max-width: 300px;
  height: auto;
  margin: 1%;
  border-radius: 3%;
  /* box-shadow: 3px 1px 10px rgb(110, 110, 110); */
  margin-right: 10%;
}
.mess_photo_single {
  min-width: 220px;
  width: 35vw;
  max-width: 400px;
  height: auto;
  margin: 1%;
  border-radius: 3%;
  /* box-shadow: 3px 1px 10px rgb(110, 110, 110); */
  text-align: center;
}
.credit {
  text-align: center;
  font-size: 20px;
}

/*------------------------------CSS:curve_view------------------------------*/
.message_wrap1 {
  display: flex;
  justify-content: center;
}

.main_covered_contents1 {
  position: relative;
  z-index: 10;
}

.roundcurve_cover {
  width: 90%;
  max-width: 1200px;
  position: absolute;
  overflow-y: hidden;
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.roundcurve_cover::-webkit-scrollbar {
  display: none;
}

.roundcurve_cover_inner {
  width: 100%;
  height: fit-content;
  position: relative;
}

.roundcurve1 {
  position: absolute;
  z-index: 3;
  top: 0px;
  left: 5px;
}
.roundcurve2 {
  position: absolute;
  z-index: 1;
  top: -20px;
}
.roundcurve3 {
  position: absolute;
  z-index: 2;
  top: -40px;
  left: 30px;
}
</style>
