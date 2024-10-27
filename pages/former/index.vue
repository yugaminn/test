<script>
export default {
  head: {
    title: '早稲田祭当日以前の企画',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'こちらのページでは、早稲田祭当日より前に行われているカウントダウンイベント等の詳細を掲載しております。'
      },
      {
        hid: 'keyword',
        name: 'keyword',
        content: '早稲田祭,早稲田祭前日,前夜祭,カウントダウンイベント'
      },
      { hid: 'og:type', property: 'og:type', content: 'article' },
      {
        hid: 'og:title',
        property: 'og:title',
        content: '早稲田祭当日以前の企画'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'こちらのページでは、早稲田祭当日より前に行われているカウントダウンイベント等の詳細を掲載しております。'
      }
    ]
  }
}
</script>

<template>
  <div>
    <section>
      <Hero>早稲田祭当日以前の企画 </Hero>
    </section>

    <Content class="content">
      <section>
        <div class="box1">
          <SectionTitle class="title1" :bg-color="'pink'" :position="'center'">
            Countdown Event 開催のお知らせ
          </SectionTitle>
          <img src="../../assets/images/former/image.png" class="pic1" />
          <div class="g_section-content">
            <Paragraph :align="'center'">
              さぁ早稲田祭の季節が今年もやってきた！！
            </Paragraph>
            <Paragraph :align="'center'">
              早稲田祭をまだ見ぬ者、待ち焦がれる者。
            </Paragraph>
            <Paragraph :align="'center'">
              早稲田祭の訪れを体感せよ。
            </Paragraph>
            <Paragraph :align="'center'"> 【開催場所・日時】</Paragraph>
            <Paragraph :align="'center'">
              10月28日(月) 12:25〜12:55 西早稲田キャンパス 中庭
            </Paragraph>
            <Paragraph :align="'center'">
              10月29日(火) 12:25〜12:55 戸山の丘
            </Paragraph>
            <Paragraph :align="'center'">
              10月30日(水) 12:25〜12:55 3号館前
            </Paragraph>
            <Paragraph :align="'center'">
              10月31日(木) 12:25〜12:55 大隈講堂前
            </Paragraph>
          </div>
        </div>
      </section>

      <section>
        <div class="box">
          <SectionTitle
            class="title2"
            :bg-color="'orange'"
            :position="'center'">
            前夜祭
          </SectionTitle>
          <div class="g_section-content">
            <img src="../../assets/images/former/image copy.png" class="pic2" />
            <div class="nemui">
              <Paragraph :align="'center'">
                寸劇とパフォーマンスを織り交ぜた<br />オリジナルストーリーによる、<br />一夜限りの豪華なステージ。</Paragraph
              >
              <Paragraph :align="'center'">
                早稲田祭への期待感と高揚感が<br />最高潮に達する特別な時間を、<br />共に体感しよう！
              </Paragraph>
              <Paragraph :align="'center'">【開催日時・開催場所】</Paragraph>
              <Paragraph :align="'center'">
                11月1日(金) 17:00～19:00 大隈講堂 大講堂
              </Paragraph>
            </div>
          </div>
        </div>
      </section>
    </Content>
  </div>
</template>

<style scoped>
.corabocontainer {
  margin-top: 10%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
section {
  text-align: center;
}
.sectiontitle[data-v-465d10de] {
  position: relative;
  display: inline-block;
  color: #3e3a39;
  font-family: 'Noto Sans JP', 'Hiragino Kaku Gothic ProN', Meiryo, sans-serif;
  font-weight: normal;
  font-size: 24px;
  background: #aaddee;
  margin: 0 auto 40px;
  padding: 7px 30px 10px 30px;
  width: 500px;
}

.box {
  margin-top: 10%;
}

.nemui {
  margin-top: 2%;
  font-size: 20px;
}

.pic1 {
  width: 50%;
  height: 10%;
  margin: 0 auto;
  margin-top: 2%;
}
.title1 {
  width: 50%;
}
.title2 {
  width: 50%;
}
.pic2 {
  width: 50%;
  height: 2%;
  margin: 0 auto;
}

.box1 {
  margin-top: 5%;
}
.alignCenter[data-v-ac85140e] {
  text-align: center;
  font-size: 20px;
}
.g_section-content {
  font-size: 20px;
  width: 100%;
}

@media screen and (max-width: 1024px) {
  .content {
    background-image: none;
    width: 100%;
  }
  .corabocontainer {
    margin-top: 10%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  section {
    text-align: center;
  }

  .hako {
    width: fit-content;
    margin: 2% auto;
    display: flex;
  }

  .box {
    margin-top: 10%;
  }

  .nemui {
    margin-top: 2%;
    font-size: 20px;
  }

  .pic1 {
    width: 80%;
    height: 10%;
    margin: 0 auto;
    margin-top: 2%;
  }
  .title1 {
    width: 80%;
  }
  .title2 {
    width: 80%;
  }
  .pic2 {
    width: 80%;
    height: 2%;
    margin: 0 auto;
  }

  .box1 {
    margin-top: 5%;
  }
  .alignCenter[data-v-ac85140e] {
    text-align: center;
    font-size: 14px;
  }
  .sectiontitle[data-v-465d10de] {
    font-size: 16px;
    margin: 0 auto 30px;
    width: 100%;
  }
}
</style>
