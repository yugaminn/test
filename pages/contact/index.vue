<script>
export default {
  head: {
    title: 'お問い合わせ',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'お問い合わせはこちらから。'
      },
      { hid: 'keyword', name: 'keyword', content: 'お問い合わせ' },
      { hid: 'og:type', property: 'og:type', content: 'article' },
      { hid: 'og:title', property: 'og:title', content: 'お問い合わせ' },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'お問い合わせはこちらから。'
      },
      { hid: 'og:search', property: 'og:search', content: '/contact' },
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
      <Hero> お問い合わせ </Hero>
    </section>

    <Content>
      <section>
        <div class="centerer">
          <PartTitle :bg-color="'pink'"
            >早稲田祭2024に関するお問い合わせ</PartTitle
          >
        </div>
        <div class="g_section-content">
          <Paragraph>
            <strong>E-mail：</strong
            ><span class="mail"
              ><a href="mailto:info@wasedasai.net">info@wasedasai.net</a></span
            >
          </Paragraph>
        </div>
      </section>
      <section>
        <div class="centerer">
          <PartTitle :bg-color="'gleen'"
            >取材などのお申し込みに関するお問い合わせ</PartTitle
          >
        </div>
        <div class="g_section-content">
          <Paragraph>
            取材に関するお問い合わせはメールにて承っております。なお、早稲田祭2024当日に早稲田大学構内での取材をご希望の方には、取材申請書をご提出いただく必要がございますので、必ず事前にご連絡くださいますようお願いいたします。
          </Paragraph>
          <Paragraph>
            <strong>E-mail：</strong
            ><span class="mail"
              ><a href="mailto:media@wasedasai.net"
                >media@wasedasai.net</a
              ></span
            >
          </Paragraph>
        </div>
      </section>
      <section>
        <div class="centerer">
          <PartTitle :bg-color="'purple'"
            >校友支援金に関するお問い合わせ</PartTitle
          >
        </div>
        <div class="g_section-content">
          <Paragraph>
            早稲田祭2024へのご支援をご検討していただける場合、<br
              class="pc" />ならびにご不明点・ご相談のある場合は下記のメールアドレスまでお気軽にお問い合わせください。
          </Paragraph>
          <Paragraph>
            <strong>E-mail：</strong
            ><span class="mail"
              ><a href="mailto:calumni@wasedasai.net"
                >calumni@wasedasai.net</a
              ></span
            >
          </Paragraph>
          <Paragraph>
            校友支援金フォームは<strong
              ><a href="https://forms.gle/ySv5KE11ZbEfUebS8">こちら</a></strong
            ><br />
            ※メール送信の際、メール本文に【お名前・所属稲門会・卒業年次・住所・電話番号・支援金額（ご支援いただける場合）】をご明記ください。
          </Paragraph>
        </div>
      </section>
      <section>
        <div class="centerer">
          <PartTitle :bg-color="'blue'">
            落とし物に関するお問い合わせ</PartTitle
          >
        </div>
        <div class="g_section-content">
          <paragraph>
            早稲田祭2024終了後の落とし物に関するお問い合わせは、メールにて承っております。<br />落とし物は11月23日(土)に牛込警察署馬場下交番に引き渡しますので、以降は直接そちらにお問い合わせください。
          </paragraph>
          <Paragraph>
            <strong>E-mail：</strong
            ><span class="mail"
              ><a href="mailto:otoshimonokanri@wasedasai.net"
                >otoshimonokanri@wasedasai.net</a
              ></span
            >
          </Paragraph>
        </div>
      </section>
    </Content>
  </div>
</template>

<style scoped>
.g_section-content a {
  text-decoration: none;
  color: #036eb8;
}
.mail {
  font-weight: 800;
}
@media screen and (min-width: 1024px) {
  .mail {
    color: #036eb8;
    text-decoration: none;
  }

  .centerer {
    width: 95%;
    margin: 0 auto;
  }
}

@media screen and (max-width: 720px) {
  .block {
    width: fit-content;
  }
  .centerer {
    width: 100%;
  }
  .pc {
    display: none;
  }
}
</style>
