<script>
export default {
  layout: 'maintenance',
  head: {
    title: '企画観覧チケットリリースに関するお詫び',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: '企画観覧チケットリリースに関するお詫び'
      },
      {
        hid: 'keyword',
        name: 'keyword',
        content: '早稲田 早稲田大学 早稲田祭 早稲田祭2022 お詫び'
      },
      { hid: 'og:type', property: 'og:type', content: 'article' },
      {
        hid: 'og:title',
        property: 'og:title',
        content: '企画観覧チケットリリースに関するお詫び'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: '企画観覧チケットリリースに関するお詫び'
      },
      { hid: 'og:url', property: 'og:url', content: '/pressrelease8' },
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
  <div class="moji">
    <section>
      <Paragraph :align="'right'">令和4年10月28日</Paragraph>
      <h2 :align="'center'">企画観覧チケットリリースに関する<br />お詫び</h2>
    </section>
    <section>
      <Paragraph class="sukima1">
        &emsp;日頃より早稲田祭2022にご理解とご協力をいただきありがとうございます。
      </Paragraph>
      <Paragraph class="sukima">
        &emsp;企画観覧チケットのリリースにつきまして、本日10/27(木)
        12:00を予定しておりました。しかしながら取得リンクご案内の送付の際に、外部サイトPeatixを通じた一斉送信にて想定以上の遅延が発生し、一部のご案内が12:00に届かない事態になってしまいました。
      </Paragraph>
      <Paragraph class="sukima">
        &emsp;私どもよりチケット案内に関する情報提供が不十分だったために、このような事態を招いてしまいましたことをお詫び申し上げます。
      </Paragraph>
      <Paragraph>
        一斉送信したメッセージの到着に遅延が生じてしまうことを考慮し、12:00以前から当該アナウンスをリリースしておりましたが、我々の想定を上回る遅延が発生し、ご案内が12:00に届かない事態が発生してしまったというのが現状でございます。
      </Paragraph>
      <Paragraph class="sukima">
        &emsp;また、予約開始から早い段階でチケットが満席となってしまい、この事態に対し適切な対応をとることができませんでした。申し訳ございません。
      </Paragraph>
      <Paragraph> 大変恐縮ですが、ご容赦いただけますと幸いです。 </Paragraph>
      <Paragraph class="sukima">
        &emsp;なお、大隈講堂前ステージでは、前方ブロックはチケット制となっておりますが、後方ブロックからはチケットなしで自由に企画をご覧いただけます。
      </Paragraph>
      <Paragraph>
        また、早稲田祭2022では屋内・屋外問わず、チケットなしでご覧いただける企画を数多くご用意しております。
      </Paragraph>
      <Paragraph> よろしければ、これらの企画もお楽しみください。 </Paragraph>
      <Paragraph class="sukima">
        &emsp;改めまして、この度は来場を楽しみにしてくださっている皆さまに、ご迷惑をおかけしてしまい誠に申し訳ございませんでした。
      </Paragraph>
      <Paragraph class="sukima">
        &emsp;今後キャンセルの生じた企画につきましては、随時対応を行い、その分のチケットをリリースしていく予定です。外部サイトPeatixのチケットページを随時確認していただければと思います。
      </Paragraph>
      <Paragraph class="sukima">
        &emsp;今後とも早稲田祭2022を、よろしくお願いいたします。
      </Paragraph>
      <Paragraph>&emsp;</Paragraph>
      <Paragraph class="sukima1">
        本件に関するお問い合わせは下記メールアドレスにて受け付けております。
      </Paragraph>
      <Paragraph class="mail">campus_raijou2022@wasedasai.net</Paragraph>
      <Paragraph :align="'right'" class="sukima1">
        早稲田祭2022運営スタッフ
      </Paragraph>
    </section>
  </div>
</template>

<style scoped>
.moji {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

.sukima {
  padding-top: 1rem;
}

.sukima1 {
  padding-top: 2rem;
}

.hiduke {
  padding-top: 1rem;
  padding-left: 1rem;
}

.mail {
  color: rgb(28, 28, 204);
  text-decoration: underline;
}

@media screen and (max-width: 920px) {
  table {
    margin-left: 3%;
    margin-right: 3%;
    margin-bottom: 5%;
    font-size: 80%;
  }
  td {
    padding: 5px 14px;
    border: 1px solid rgb(0, 0, 0);
  }
}

@media screen and (min-width: 920px) {
  .moji {
    padding-left: 10rem;
    padding-right: 10rem;
  }
  h2 br {
    display: none;
  }
}
</style>
