<script>
export default {
  head: {
    title: 'サイくんの部屋',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'こちらはサイくんの部屋です。'
      },
      { hid: 'keyword', name: 'keyword', content: 'サイくん' },
      { hid: 'og:type', property: 'og:type', content: 'article' },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'サイくんの部屋'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'こちらはサイくんの部屋です。'
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
      <Hero>わせだサイくんの部屋</Hero>
    </section>
    <Content class="content">
      <section class="pf_pc">
        <div class="blue">
          <SectionTitle :bg-color="'blue'">プロフィール</SectionTitle>
        </div>
        <div class="sannrennzoku">
          <div class="hako1">
            <Box :rounded="true" :bg-color="'blue'">
              名前：わせだサイくん<br />誕生日:3月1日<br />年齢:永遠の36サイ<br />性別:男<br />
              出身:アフリカサバンナ
            </Box>
            <div class="hakoshita">
              <Box :rounded="true" :bg-color="'yellow'"
                >ポリシー<br />：絶対に角で誰かを傷つけない<br />悩み：サイ近太ってきた<br />座右の銘：猪突猛進</Box
              >
            </div>
          </div>
          <div class="saikunpic">
            <img src="~assets/images/saikuns/24saikun.png" />
          </div>
          <div class="hako2">
            <Box :rounded="true" :bg-color="'purple'">
              長所：多才<br />短所：うるサイ<br />肌色：ブルベ冬<br />すみか：わせだサイくんの部屋＠キャンパスのどこか
            </Box>
            <div class="hakoshita">
              <Box :rounded="true" :bg-color="'red'">
                好きな食べ物：野菜<br />（サイは草食）<br />好きな飲み物：サイダー<br />加入保険：火災保険<br />気になる社会課題：森林伐採
              </Box>
            </div>
          </div>
        </div>
      </section>
      <section class="pf_sp">
        <div class="hakosp">
          <Box :rounded="true" :bg-color="'yellow'"> 性別：男</Box>
          <Box :rounded="true" :bg-color="'red'"> 誕生日：3月1日 </Box>
          <Box :rounded="true" :bg-color="'green'">
            出身：アフリカサバンナ
          </Box>
          <Box :rounded="true" :bg-color="'purple'"> 年齢：永遠の36サイ </Box>
          <Box :rounded="true" :bg-color="'yellow'"> 体重：3100kg</Box>
          <Box :rounded="true" :bg-color="'blue'">長所：多才</Box>
          <Box :rounded="true" :bg-color="'red'"> 短所：うるサイ </Box>
          <Box :rounded="true" :bg-color="'green'"> 肌色：ブルベ冬 </Box>
          <Box :rounded="true" :bg-color="'purple'"
            >すみか：わせだサイくんの部屋＠キャンパスのどこか
          </Box>
          <Box :rounded="true" :bg-color="'yellow'">
            好きな食べ物：野菜（サイは草食）</Box
          >
          <Box :rounded="true" :bg-color="'blue'">好きな飲み物：サイダー</Box>
          <Box :rounded="true" :bg-color="'red'"> 加入保険：火災保険 </Box>
          <Box :rounded="true" :bg-color="'green'">
            気になる社会課題：森林伐採
          </Box>
          <Box :rounded="true" :bg-color="'purple'">
            ポリシー：絶対に角で誰かを傷つけない
          </Box>
          <Box :rounded="true" :bg-color="'yellow'">
            悩み：サイ近太ってきた</Box
          >
          <Box :rounded="true" :bg-color="'blue'">座右の銘：猪突猛進</Box>
        </div>
        <div class="saikunpic">
          <img src="~assets/images/saikuns/24saikun.png" />
        </div>
      </section>

      <section class="kyoutu">
        <Paragraph
          >僕の公式SNSも要チェックツノ！
          <br class="br-sp" />ぜひフォローしてくだサイ！</Paragraph
        >
        <Paragraph
          >「わせだサイくん」公式X：<a href="https://twitter.com/wasedasai_kun"
            >@wasedasai_kun</a
          ><br />
          「わせだサイくん」公式Instagram：<a
            href="https://www.instagram.com/wasedasai_kun?igsh=aGZqdXVpa2d0MXJ2"
            >@wasedasai_kun</a
          >
        </Paragraph>
        <div class="saigo">
          <SectionTitle :bg-color="'blue'"
            >オリジナル総選挙参加中！</SectionTitle
          >
        </div>
        <Paragraph
          >今年もマイナビ学生の窓口主催のオリジナル総選挙（旧学園祭キャラクター総選挙）に参加してるツノ！<br />みなさんの1票が僕の力になるツノ！<br />ぜひ投票してくだサイ！
        </Paragraph>
        <div class="rinku">
          <!-- <slidelink
            :to="'https://gakumado.mynavi.jp/contests/mascot/entries/169'"
            :bg-color="'blue'">
            わせだサイくんへの投票はこちらから
          </slidelink> -->
          <ExternalLink
            class="rinku-sai"
            :bg-color="'skyblue'"
            :rounded="true"
            :url="'https://gakumado.mynavi.jp/contests/mascot/entries/169'"
            :color="'navy'">
            わせだサイくんへの投票はこちらから
          </ExternalLink>
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
  font-family: 'Noto Sans JP', 'Hiragino Kaku Gothic ProN', Meiryo, sans-serif;
}

.slidelink {
  max-width: 1000px;
}

.hako1 {
  width: 35%;
}
.hako2 {
  width: 35%;
}
.hakoshita {
  margin-top: 10%;
}

img .saikunpic {
  text-align: center;
}
.saikunpic {
  width: 30%;
}
.sannrennzoku {
  display: flex;
  flex-direction: row;
}
.rinku-sai {
  min-width: 440px;
  min-height: 60px;
  font-size: 20px;
  color: #fff;
  font-weight: normal;
  padding-top: 17px;
}
a {
  color: #036eb8;
  font-weight: bold;
}
.saigo {
  margin-top: 10%;
}
.rinku {
  margin-top: 2%;
  margin-bottom: 5%;
}
.pf_sp {
  display: none;
}
.br-sp {
  display: none;
}
@media screen and (max-width: 900px) {
  .content {
    font-family: 'Noto Sans JP', 'Hiragino Kaku Gothic ProN', Meiryo, sans-serif;
    font-size: 14px;
  }
  .hako1 {
    width: 40%;
    font-size: 14px;
  }
  .rinku-sai {
    font-size: 14px;
    min-width: 340px;
    padding-top: 20px;
  }
  a {
    color: #036eb8;
    font-weight: bold;
  }

  .pf_pc {
    display: block;
  }

  .pf_sp {
    display: none;
  }
  .hakosp {
    width: 45%;
  }
  .saikunpic {
    align-items: center;
    width: 40%;
  }
}
@media screen and (max-width: 600px) {
  .content {
    font-family: 'Noto Sans JP', 'Hiragino Kaku Gothic ProN', Meiryo, sans-serif;
    font-size: 14px;
  }
  .hako1 {
    width: 40%;
    font-size: 14px;
  }
  a {
    color: #036eb8;
    font-weight: bold;
  }

  .pf_pc {
    display: none;
  }

  .pf_sp {
    margin-top: 3%;
    display: block;
    display: flex;
  }
  .hakosp {
    width: 45%;
  }
  .saikunpic {
    width: 50%;
    display: flex;
    align-items: center;
  }

  .hakosp {
    margin: 0 auto !important;
    height: fit-content;
    padding: 2px;
    width: 80%;
    height: 300px;
    overflow-y: scroll;
    background-color: #ffff;
    border: solid 4px #ffff;
    border-radius: 5px;
  }
  .hakosp .Box {
    padding: 10px !important;
  }

  .hakosp::-webkit-scrollbar {
    width: 0px;
    background-color: rgb(0 0 0 / 0.5);
  }
  .hakosp:-webkit-scrollbar-thumb {
    background: #faf8d8;
    width: 6px;
    border-radius: 5px;
  }
  .kyoutu {
    margin-top: 5%;
  }
  .br-sp {
    display: block;
  }
}
</style>
