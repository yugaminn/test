<script>
export default {
  layout: 'maintenance',
  head: {
    title: '地域協賛',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          '早稲田祭2024の開催にあたりまして、ご協賛いただいた早稲田周辺の地域の方々をご紹介しております'
      },
      {
        hid: 'keyword',
        name: 'keyword',
        content: '早稲田祭2024 早稲田祭　協賛 早稲田'
      },
      { hid: 'og:type', property: 'og:type', content: 'article' },
      {
        hid: 'og:title',
        property: 'og:title',
        content: '地域協賛'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'ご協賛いただいた方のご紹介'
      },
      { hid: 'og:url', property: 'og:url', content: '/region' },
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
  <div class="region_top">
    <section>
      <Hero>ご協賛いただいた商店会様へ</Hero>
    </section>
    <Content class="content">
      <section class="region_content">
        <Box :bg-color="'pink'" :short="true" :rounded="true">
          <Paragraph :align="'center'"> ご協賛いただいた商店会様へ</Paragraph>
          <Paragraph :align="'center'">
            早稲田祭2024へのご協賛、心より御礼申し上げます。
          </Paragraph>
          <Paragraph :align="'center'">
            ご協賛いただきました商店会様に感謝の意を込め、以下に商店会名を掲載させていただきます。
          </Paragraph>
          <Paragraph :align="'center'"> （50音順） </Paragraph>
        </Box>
      </section>
      <section class="region_content">
        <Paragraph> 大隈通り商店会様 </Paragraph>
        <Paragraph> 早大通り商栄会様 </Paragraph>
        <Paragraph> 早大南門通り商店会様 </Paragraph>
        <Paragraph> 早大西門通り商店会様 </Paragraph>
        <Paragraph> 早稲田駅前商店会様 </Paragraph>
        <Paragraph> ワセダグランド商店会様 </Paragraph>
        <Paragraph> 早稲田商店会様 </Paragraph>
      </section>
    </Content>
  </div>
</template>

<style scoped>
.region_content {
  text-align: center;
  margin-top: 40px;
}
</style>
