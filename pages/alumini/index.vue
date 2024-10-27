<script>
export default {
  head: {
    title: '校友の皆様へ',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          '早稲田祭2022へのご支援、心より御礼申し上げます。ご支援いただきました方々への感謝の意を込め、ここにご芳名を掲載させていただきます。'
      },
      {
        hid: 'keyword',
        name: 'keyword',
        content:
          '早稲田 早稲田大学 早稲田祭 早稲田祭2022　早稲田祭aluminiページ'
      },
      { hid: 'og:type', property: 'og:type', content: 'article' },
      { hid: 'og:title', property: 'og:title', content: '校友の皆様へ' },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          '早稲田祭2022へのご支援、心より御礼申し上げます。ご支援いただきました方々への感謝の意を込め、ここにご芳名を掲載させていただきます。'
      },
      { hid: 'og:url', property: 'og:url', content: '/alumini' },
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
      <Hero> 校友の皆様へ </Hero>
    </section>

    <div class="g_background_himo">
      <Content>
        <section>
          <Box :bg-color="'yellow'" :short="true" :rounded="true">
            <Paragraph :align="'center'">
              早稲田祭2022へのご支援、心より御礼申し上げます。
            </Paragraph>
            <Paragraph :align="'center'">
              ご支援いただきました校友の皆様の感謝の意を込め、<br />こちらにご芳名を掲載させていただきます。
            </Paragraph>
          </Box>
        </section>
        <section>
          <div class="g_section-content">
            <div>
              <Paragraph :align="'center'">ご芳名一覧</Paragraph>
              <Paragraph :align="'center'">（敬称略・50音順）</Paragraph>
              <section class="member">
              <Paragraph>1978年次稲門会</Paragraph>
              <Paragraph>1983年次稲門会</Paragraph>
              <Paragraph>1989年次稲門会</Paragraph>
              <Paragraph>1990年次稲門会</Paragraph>
              <Paragraph>1992年次稲門会</Paragraph>
              <Paragraph>1992年次稲門会 WAFC</Paragraph>
              <Paragraph>柏稲門会</Paragraph>
              <Paragraph>校友会 千葉県支部</Paragraph>
              <Paragraph>小平稲門会</Paragraph>
              <Paragraph>立川稲門会</Paragraph>
              <Paragraph>千葉稲門会</Paragraph>
              <Paragraph>西東京稲門会</Paragraph>
              <Paragraph>練馬稲門会</Paragraph>
              <Paragraph>東大和稲門会</Paragraph>
              <Paragraph>町田稲門会</Paragraph>
              <Paragraph>武蔵野稲門会</Paragraph>
              <Paragraph>早稲田大学校友会秋田県支部</Paragraph>
              <Paragraph>早稲田大学校友会埼玉県支部</Paragraph>
              <Paragraph>早稲田大学校友会東村山稲門会</Paragraph>
              <Paragraph>朝田 賢治</Paragraph>
              <Paragraph>岩佐 浩光</Paragraph>
              <Paragraph>有年 義彦</Paragraph>
              <Paragraph>大島 正敬</Paragraph>
              <Paragraph>小野 惣一</Paragraph>
              <Paragraph>羅田 秀顕</Paragraph>
              <Paragraph>佐竹 茂市郎</Paragraph>
              <Paragraph>杉田 純</Paragraph>
              <Paragraph>杉本 祐次郎</Paragraph>
              <Paragraph>すずき☆とおる & ミラン(=^・^=)/</Paragraph>
              <Paragraph>関 政和</Paragraph>
              <Paragraph>関根 愛子</Paragraph>
              <Paragraph>関根 篤史</Paragraph>
              <Paragraph>高橋 淳</Paragraph>
              <Paragraph>高橋 泰正</Paragraph>
              <Paragraph>田村 通信</Paragraph>
              <Paragraph>辻村 義弘</Paragraph>
              <Paragraph>服部 將一</Paragraph>
              <Paragraph>林原 亨</Paragraph>
              <Paragraph>筆谷 敏正</Paragraph>
              <Paragraph>望月 愼一郎</Paragraph>
              <Paragraph>山川 裕美子</Paragraph>
              <Paragraph>山田 眞之助</Paragraph>
              <Paragraph>吉田 郁夫</Paragraph>
              <Paragraph>若山 雄太</Paragraph>
              <Paragraph>渡辺 翔太・茉耶</Paragraph>
              </section>
              <!--Paragraph :align="'center'">
              20広報制作局3年目有志</Paragraph-->
              <!-- 
              <Paragraph :align="'center'"
                >また、本日以降のご支援につきましても10月末日までのご入金でしたら、本ページにお名前を掲載させていただきます。</Paragraph
              >
              <Paragraph :align="'center'"
                >その際はお手数ですが、下記フォームにご記入賜りますようお願い申し上げます。</Paragraph
              >
              <br />
              <Paragraph :align="'center'" class="form"
                >【フォームURL】</Paragraph
              >
              <Paragraph :align="'center'"
                ><a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeDCJNq5v_7jiQevs0fiTMA9nDj9qovvdjKwlAa14myt_MxAg/viewform?usp=sf_link"
                  class="linkcolor"
                  >フォームはこちら</a
                ></Paragraph
              > -->
            </div>
          </div>
        </section>
      </Content>
    </div>
  </div>
</template>

<style scoped>
.member {
  text-align: center;
  margin-top: 3rem;
}
@media screen and (min-width: 1024px){
  .linkcolor:hover{
  color:#d35b31;
}
.content {
  background-image: url('~assets/images/support.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
}

@media screen and (max-width: 1024px) {
  .form {
    display: none;
  }
  .linkcolor {
    display: inline-block;
    padding: 7px 20px;
    border-radius: 30px;
    text-decoration: none;
    color: #ffffff;
    background-color: #eea48b;
  }
}
</style>
