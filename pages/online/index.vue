<script>
export default {
  layout: 'maintenance',
  head: {
    title: 'オンラインでお楽しみの方へ',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'オンラインで楽しめる企画の探し方とオススメのオンライン企画を紹介します！'
      },
      {
        hid: 'keyword',
        name: 'keyword',
        content:
          '早稲田 早稲田大学 早稲田祭 早稲田祭2024 オンライン online 企画'
      },
      { hid: 'og:type', property: 'og:type', content: 'article' },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'オンラインでお楽しみの方へ'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'オンラインで楽しめる企画の探し方とオススメのオンライン企画を紹介します！'
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
    <section>
      <Hero>オンラインでお楽しみの方へ</Hero>
    </section>

    <Content>
      <section>
        <Paragraph :align="'center'"
          >早稲田祭2022では、一部企画でオンライン配信を行います！</Paragraph
        >
        <Paragraph :align="'center'"
          >オンラインで視聴可能な企画には、運営スタッフが配信を行う企画、各団体が企画の配信を行う企画がございます。</Paragraph
        >
      </section>

      <section>
        <div class="subtitle">
          <SectionTitle :bg-color="'yellow'"> 視聴方法 </SectionTitle>
        </div>
        <div class="g_section-content">
          <Box :rounded="true" :bg-color="'yellow'">
            <PartTitle class="parttitle">運営スタッフによる配信</PartTitle>
            <Paragraph>
              大隈講堂前ステージチャンネルは<a
                href="https://www.youtube.com/channel/UCdYU3CGWk5rye2w6wS4Zydw"
                class="link"
                >こちら</a
              >
            </Paragraph>
            <Paragraph>
              10号館前ステージチャンネルは<a
                href="https://www.youtube.com/channel/UCDhrZ2rc3pkl1G-luf1tD8Q"
                class="link"
                >こちら</a
              >
            </Paragraph>
            <Paragraph>
              戸山カフェテリアステージチャンネルは<a
                href="https://www.youtube.com/channel/UCR0TqbABBadC-z6ZHb1R_EA"
                class="link"
                >こちら</a
              >
            </Paragraph>
            <Paragraph>
              大隈記念講堂 大講堂チャンネルは<a
                href="https://www.youtube.com/channel/UCPjd8US3EzqRNheHVcBTe4Q"
                class="link"
                >こちら</a
              >
            </Paragraph>
            <Paragraph>
              大隈記念講堂 小講堂チャンネルは<a
                href="https://www.youtube.com/channel/UCOk0UKn1fjKqgKACGa3Zvdw"
                class="link"
                >こちら</a
              >
            </Paragraph>
            <Paragraph>
              3号館 501教室チャンネルは<a
                href="https://www.youtube.com/channel/UCBi060RwXqm7sq1IrRS_2pA"
                class="link"
                >こちら</a
              >
            </Paragraph>
            <Paragraph>
              7号館 205教室チャンネルは<a
                href="https://www.youtube.com/channel/UCYCiqlSzX2dRhhm5h0kYS6Q"
                class="link"
                >こちら</a
              >
            </Paragraph>
            <Paragraph>
              7号館 207教室チャンネルは<a
                href="https://www.youtube.com/channel/UCPl7oQZJiBgVyyRaEBlZOWw"
                class="link"
                >こちら</a
              >
            </Paragraph>
            <Paragraph>
              7号館 212教室チャンネルは<a
                href="https://www.youtube.com/channel/UCaqqNtLEmhY0NVjChbymCgA"
                class="link"
                >こちら</a
              >
            </Paragraph>
            <Paragraph>
              7号館 310教室チャンネルは<a
                href="https://www.youtube.com/channel/UC9PZoiVpPwPu7KYSbLuBu0g"
                class="link"
                >こちら</a
              >
            </Paragraph>
            <Paragraph>
              8号館 106教室チャンネルは<a
                href="https://www.youtube.com/channel/UC9AoCkaH2iOCger7AVNxdRQ"
                class="link"
                >こちら</a
              >
            </Paragraph>
            <Paragraph>
              11号館 501教室チャンネルは<a
                href="https://www.youtube.com/channel/UCxl67d2Ssuq_lnp5cs7hQUQ"
                class="link"
                >こちら</a
              >
            </Paragraph>
            <Paragraph>
              14号館 101教室チャンネルは<a
                href="https://www.youtube.com/channel/UCHUTyvRVScHtJb0VrzO-JhQ"
                class="link"
                >こちら</a
              >
            </Paragraph>
            <Paragraph>
              14号館 402教室チャンネルは<a
                href="https://www.youtube.com/channel/UC6sG3Ms4_iKQLQoLAZv2fJw"
                class="link"
                >こちら</a
              >
            </Paragraph>
            <Paragraph>
              15号館 101教室チャンネルは<a
                href="https://www.youtube.com/channel/UCfsiNVdWpQ6zy1RE7xKZDJg"
                class="link"
                >こちら</a
              >
            </Paragraph>
            <Paragraph>
              15号館 201教室チャンネルは<a
                href="https://www.youtube.com/channel/UCkaU0ZEeyJ6tt74w1tJV_Ug"
                class="link"
                >こちら</a
              >
            </Paragraph>
            <Paragraph>
              32号館 325教室チャンネルは<a
                href="https://www.youtube.com/channel/UCiaEpwVZeHjQIaUr5utaIgg"
                class="link"
                >こちら</a
              >
            </Paragraph>
            <Paragraph>
              32号館 439教室チャンネルは<a
                href="https://www.youtube.com/channel/UCHuQWvwB-GoCav_8O-SSWkg"
                class="link"
                >こちら</a
              >
            </Paragraph>
          </Box>
          <div class="subtitle">
            <Box :rounded="true" :bg-color="'blue'">
              <PartTitle :bg-color="'orange'">各団体による配信</PartTitle>
              <Paragraph>
                <nuxt-link :to="'/search'" class="link">こちら</nuxt-link
                >のページからオンライン配信「あり」を選択し、企画を検索してください。その後、各企画のページに掲載されている参加団体・参加者のSNSから配信をご覧ください。
              </Paragraph>
            </Box>
          </div>
        </div>
      </section>
    </Content>
  </div>
</template>

<style scoped>
.subtitle {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
}
.g_section-content {
  text-align: center;
}
.sukima {
  padding-top: 15px;
}
.link {
  color: #274c82;
}
.link:hover {
  color: #d35b31;
}
</style>
