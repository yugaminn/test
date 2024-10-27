<script>
export default {
  layout: 'maintenance',
  head: {
    title: '旅する教授〜あなたにとって「旅」とは何ですか？〜',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: '早稲田祭2021 戸山Opening Festival'
      },
      {
        hid: 'keyword',
        name: 'keyword',
        content: '早稲田 早稲田大学 早稲田祭 早稲田祭2021 戸山 OpeninfFestival '
      },
      { hid: 'og:type', property: 'og:type', content: 'article' },
      {
        hid: 'og:title',
        property: 'og:title',
        content: '早稲田祭2021 戸山Opening Festival。'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: '早稲田祭2021 戸山Opening Festival'
      },
      { hid: 'og:url', property: 'og:url', content: '/pressrelease3' },
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
      <section class="hero-img-wrapper">
        <img
          class="pressrelease10-1"
          src="~assets/images/pressrelease/pressrelease10-1.png"
          alt="pressrelease10-1" />
      </section>
      <section>
        <Paragraph :align="'center'" class="line">
          <strong> 早稲田祭2021開幕！ </strong>
        </Paragraph>
      </section>
      <section>
        <div class="g_section-content">
          <Paragraph>
            海外を研究対象に持つ多分野の早稲田大学の教授の方々に「旅」をテーマに語っていただきました。
          </Paragraph>
        </div>
      </section>
      <section>
        <div class="g_section-content">
          <Paragraph>
            教授・准教授の方々をお招きし、旅番組でもなく講義でもないディープな旅情報をお届けしました。
          </Paragraph>
        </div>
      </section>
      <section>
        <div class="g_section-content">
          <Paragraph>
            自由に旅ができない今だからこそ、お家で楽しめる旅気分をお届けしました。アフリカ、オセアニア、ヨーロッパ、南アメリカ、アジア、イスラーム、北アメリカの7部編成になっています。
          </Paragraph>
        </div>
      </section>
      <section>
        <div class="g_section-content">
          <Paragraph>
            公式YouTubeチャンネルにて、アーカイブ配信もありますので、ぜひご覧ください。
          </Paragraph>
        </div>
      </section>
      <section class="saigo">
        <div class="content">
          <Paragraph>ーーー</Paragraph>
          <Paragraph>〈早稲田祭2021概要〉</Paragraph>
          <Paragraph>【名称】早稲田祭2021</Paragraph>
          <Paragraph>【主催】早稲田祭2021運営スタッフ</Paragraph>
          <Paragraph>【日時】11月6日(土)、7日 (日)</Paragraph>
          <Paragraph>【開催場所・プラットフォーム】</Paragraph>
          <Paragraph>早稲田大学 早稲田キャンパス、戸山キャンパス</Paragraph>
          <Paragraph>
            早稲田祭2021公式サイト（<a
              href="http://www.wasedasai.net"
              class="link"
              >http://www.wasedasai.net/</a
            >）
          </Paragraph>
          <Paragraph>【公式Twitter】@wasedasai</Paragraph>
          <Paragraph>
            【公式Facebook】<a
              href="http://www.facebook.com/wasedasai"
              class="link"
              >http://www.facebook.com/wasedasai</a
            >
          </Paragraph>
          <Paragraph>【公式Instagram】@wasedasai</Paragraph>
          <Paragraph>【公式YouTubeチャンネル】</Paragraph>
          <Paragraph>
            <a
              href="http://www.youtube.com/user/WasedasaiOfficial/about"
              class="link"
              >http://www.youtube.com/user/WasedasaiOfficial/about</a
            >
          </Paragraph>
          <Paragraph>【公式TikTok】@wasedasai</Paragraph>
          <Paragraph>
            【公式マスコットキャラクター「わせだサイくん」公式Twitter】@wasedasai_kun </Paragraph
          ><br />
          <Paragraph>【お問い合わせ先】</Paragraph>
          <Paragraph>主催：早稲田祭2021運営スタッフ</Paragraph>
          <Paragraph>担当者：一色優</Paragraph>
          <Paragraph>TEL：070-3790-4429</Paragraph>
          <Paragraph>
            <a href="mailto:media@wasedasai.net" class="link"
              >E-mail：media@wasedasai.net</a
            >
          </Paragraph>
        </div>
      </section>
    </Content>
  </div>
</template>

<style scoped>
.hero-img-wrapper {
  display: flex;
  justify-content: center;
}
.pressrelease10-1 {
  max-width: 720px;
  width: 100%;
}
.line {
  text-decoration: underline;
  font-size: 120%;
  padding-top: 25px;
  padding-bottom: 25px;
}
.link {
  color: #274c82;
  word-wrap: break-word;
}
@media screen and (max-width: 920px) {
  .saigo {
    font-size: 80%;
  }
}
</style>
