<script>
export default {
  layout: 'maintenance',
  head: {
    title: 'プレスリリース',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: '「早稲田祭で一句」入賞作品発表。'
      },
      {
        hid: 'keyword',
        name: 'keyword',
        content: '早稲田 早稲田大学 早稲田祭 早稲田祭2022 '
      },
      { hid: 'og:type', property: 'og:type', content: 'article' },
      {
        hid: 'og:title',
        property: 'og:title',
        content: '「早稲田祭で一句」入賞作品発表'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: '「早稲田祭で一句」入賞作品発表'
      },
      { hid: 'og:url', property: 'og:url', content: '/pressrelease6' },
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
      <img src="~/assets/images/pressrelease/pressrelease6.png" />
      <br />
      <Paragraph>&emsp;</Paragraph>
      <div class="center">
        <Paragraph
          >「早稲田祭で一句」は、来場者のみなさまに川柳を<br
            class="kaigyou" />書いていただき、それらを展示する企画です。</Paragraph
        ><Paragraph>小野記念講堂周辺にて実施しました。</Paragraph>
        <Paragraph>書いていただいたみなさま、ありがとうございます。</Paragraph>
        <br />
        <Paragraph>最優秀賞を発表します。</Paragraph>
        <Paragraph
          >最優秀賞は早稲田祭2022運営スタッフ代表
          高山都が選ばせていただきました。</Paragraph
        >

        <SectionTitle>最優秀賞 </SectionTitle>
      </div>
      <br />

      <img src="~/assets/images/pressrelease/pressrelease6-1.jpg" />

      <br />

      <div class="center">
        <Paragraph>以上が入賞作品です。</Paragraph>
        <Paragraph
          >「早稲田祭で一句」、そして早稲田祭2022に参加してくださったみなさま、ありがとうございました！
        </Paragraph>
      </div>
    </Content>
  </div>
</template>

<style scoped>
.center {
  text-align: center;
}
img {
  margin: 0 auto;
  display: block;
  width: 50%;
}
@media screen and (min-width: 1024px) {
  .kaigyou {
    display: none;
  }
}
</style>
