<script>
export default {
  head: {
    title: 'ご支援いただいた皆様',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'この度は、早稲田祭2024にご支援いただきまして誠にありがとうございます。ご支援いただいた皆様の企業名・御芳名を掲載しております。早稲田祭2024運営スタッフ一同、心より御礼申し上げます。'
      },
      { hid: 'keyword', name: 'keyword', content: '早稲田祭supportページ' },
      { hid: 'og:type', property: 'og:type', content: 'article' },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'ご支援いただいた皆様'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'この度は、早稲田祭2024にご支援いただきまして誠にありがとうございます。ご支援いただいた皆様の企業名・御芳名を掲載しております。早稲田祭2024運営スタッフ一同、心より御礼申し上げます。'
      },
      { hid: 'og:url', property: 'og:url', content: '/support' },
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
      <Hero>ご支援いただいた皆様へ</Hero>
    </section>

    <Content class="content">
      <section>
        <sectionTitle :align="'center'"> ご支援いただいた皆様へ </sectionTitle>
        <div class="g_section-content">
          <Paragraph :align="'center'">
            この度は、早稲田祭2024にご支援賜りまして<br
              class="sp" />誠にありがとうございます。
          </Paragraph>
          <Paragraph :align="'center'">
            今年度の早稲田祭が無事に開催できたのも、<br />ひとえに皆様のご理解・ご協力に<br
              class="sp" />よるものでございます。
          </Paragraph>
          <Paragraph :align="'center'">
            ご支援いただいた皆様へ感謝の意を込め、<br
              class="sp" />下記ページにご芳名を掲載しております。
          </Paragraph>
          <Paragraph :align="'center'">
            早稲田祭2024運営スタッフ一同、<br
              class="sp" />心より御礼申し上げます。
          </Paragraph>
        </div>
      </section>
      <section>
        <sectionTitle :bg-color="'orange'" :position="'center'">
          ご協賛いただいた皆様へ
        </sectionTitle>

        <div class="g_section-content">
          <Paragraph :align="'center'">
            ご協賛いただいた企業様のご芳名・企業ロゴを<br class="sp" /><NuxtLink
              class="kochira"
              to="/company">
              こちら </NuxtLink
            >に掲載しております。
          </Paragraph>
        </div>
      </section>
      <section>
        <sectionTitle :bg-color="'yellow'" :position="'center'">
          校友の皆様へ
        </sectionTitle>
        <div class="g_section-content">
          <Paragraph :align="'center'">
            ご支援いただいた校友の皆様のご芳名を<br class="sp" /><NuxtLink
              class="kochira"
              to="/advertise">
              こちら </NuxtLink
            >に掲載しております。
          </Paragraph>
        </div>
      </section>
      <section>
        <sectionTitle :bg-color="'orange'" :position="'center'">
          スペシャルサンクス
        </sectionTitle>
        <div class="g_section-content">
          <Paragraph :align="'center'">
            早稲田祭2024の開催にあたってご協力いただいた<br
              class="sp" />皆様のご芳名を<NuxtLink class="kochira" to="/thanks">
              こちら </NuxtLink
            >に掲載しております。
          </Paragraph>
        </div>
      </section>
    </Content>
  </div>
</template>

<style scoped>
section {
  text-align: center;
}
.content {
  background-size: 100% 100%;
}
a {
  font-weight: bold;
  color: #036eb8;
  text-decoration: none;
}

.sp {
  display: block;
}

@media screen and (min-width: 768px) {
  .sp {
    display: none;
  }
}
</style>
