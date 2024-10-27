<script>
export default {
  layout: 'maintenance',
  head: {
    title: 'プレスリリース',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: '前夜祭チケット申し込み開始のお知らせ'
      },
      {
        hid: 'keyword',
        name: 'keyword',
        content: '早稲田 早稲田大学 早稲田祭 早稲田祭2022 前夜祭 チケット'
      },
      { hid: 'og:type', property: 'og:type', content: 'article' },
      {
        hid: 'og:title',
        property: 'og:title',
        content: '前夜祭チケット申し込み開始のお知らせ'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: '前夜祭チケット申し込み開始のお知らせ'
      },
      { hid: 'og:url', property: 'og:url', content: '/pressrelease2' },
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
      <section>
        <div class="SectionTitle">
          <SectionTitle :bg-color="'yellow'">
            前夜祭チケット申込開始のお知らせ
          </SectionTitle>
        </div>

        <div class="image2">
          <img src="~/assets/images/pressrelease/pressrelease2.png" />
        </div>
        <div class="flex">
          <p class="text">
            <Paragraph>
              11月4日（金）17:30~から、大隈講堂にて前夜祭を開催します!
              <br />
              各団体のコラボパフォーマンスとオリジナルストーリーで素敵な90分間をお届けします。
              <br />翌日からの早稲田祭2022に向けて一緒に盛り上がりましょう!
              <br />ぜひお越しください!
            </Paragraph>

            <Paragraph class="apply">
              チケット（オンライン配布・無料）の申し込みは<a
                href="https://wasedazenyasai.peatix.com"
                target="_brank"
                class="link"
                >こちら</a
              >から <br />（外部サイト「Peatix」へ接続します）
            </Paragraph>
            <Paragraph>
              ※チケットの事前キャンセルが発生した発生した場合は随時キャンセル分を再配布しています。<br />そのため、チケットの申し込み状況が変動することがあります。詳しくは上記のリンクをご確認ください。
            </Paragraph>
          </p>
          <figure class="image">
            <img src="~/assets/images/pressrelease/pressrelease2.png" />
          </figure>
        </div>

        <Paragraph class="moji"
          >※前夜祭は前日企画のため、キャンパス入場チケットをお持ちでない方も前夜祭企画観覧チケットを取得いただけます。みなさまのご来場お待ちしております！
        </Paragraph>
        <Paragraph>
          ※前夜祭チケット入手にはPeatixの会員登録・ログインが必須となります。まだ会員登録がお済みでない方は、お早めにご登録ください。（<a
            href="https://peatix.com/signup?_gl=1*120d1rz*_up*MQ..&gclid=CjwKCAjws--ZBhAXEiwAv-RNLyBucJL9bP4UAy0eh8PGLQgm9JhdbBxVG6mATxGUFUgX-jKCqw48FhoCiaQQAvD_BwE"
            target="_brank"
            class="link"
            >Peatixの会員登録・ログインはこちら</a
          >）
        </Paragraph>

        <Paragraph class="cancel">
          ※当日キャンセルなどで空席が出た場合、当日受付をいたします。当日枠をご希望の方は直接大隈講堂前までお越しください。

          <br />
          ※チケットを取得していても入場時間を過ぎて来場された場合、席の確保はいたしかねます。予めご了承ください。
        </Paragraph>
      </section>
    </Content>
  </div>
</template>

<style scoped>
.moji {
  color: red;
}
.link {
  color: rgb(28, 28, 204);
}
.link:hover {
  color: #d35b31;
}
@media screen and (max-width: 920px) {
  .saigo {
    font-size: 80%;
  }
}
.flex {
  display: flex;
}
.flex .text {
  margin: 60px 20px 40px 20px;
  padding: 0;
}

.flex .image {
  width: 320px;
  margin: 0;
  padding: 0;
  overflow: hidden;
  position: relative;
}

.cancel {
  padding-top: 30px;
}

.SectionTitle {
  text-align: center;
}

.apply {
  padding-top: 50px;
}

@media screen and (max-width: 1024px) {
  .image {
    display: none;
  }
}
@media screen and (min-width: 1024px) {
  .image2 {
    display: none;
  }
}
</style>
