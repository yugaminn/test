<script>
export default {
  layout: 'maintenance',
  head: {
    title: 'よくあるご質問',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: '早稲田祭におけるよくある質問をまとめております。'
      },
      { hid: 'keyword', name: 'keyword', content: 'よくあるご質問 Q&A' },
      { hid: 'og:type', property: 'og:type', content: 'article' },
      { hid: 'og:title', property: 'og:title', content: 'よくあるご質問' },
      {
        hid: 'og:description',
        property: 'og:description',
        content: '早稲田祭におけるよくある質問をまとめております。'
      },
      { hid: 'og:url', property: 'og:url', content: '/inquiry' },
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
      <Hero> よくあるご質問 </Hero>
    </section>

    <div class="g_background_himo">
      <div class="center1">
        <PartTitle :bg-color="'pink'">Q1</PartTitle>
        <Paragraph class="q"
          >早稲田祭2023の企画時間を教えてください。</Paragraph
        >
      </div>

      <div class="center2">
        <PartTitle :bg-color="'purple'">A1</PartTitle>
        <p>
          早稲田祭2023における企画時間は10:00～17:00です。<br />
          11月4日(土) 16:25～17:40の「WASEDA PARADE 2023 -Be Yourself- 」、<br />
          11月5日(日) 17:15～17:55の「Ending
          Festival」につきましては例外となります。
        </p>
      </div>

      <div class="center1">
        <PartTitle :bg-color="'red'">Q2</PartTitle>
        <Paragraph>早稲田祭2023への入場にはチケットが必要ですか。</Paragraph>
      </div>
      <div class="center2">
        <PartTitle :bg-color="'blue'">A2</PartTitle>
        <p>
          キャンパス入場チケットは不要です。 <br />
          入場・退場は自由となります。（一部企画の観覧においてはチケットが必要になります。）
          <br />
        </p>
      </div>

      <div class="one">
        <div class="center1">
          <PartTitle :bg-color="'pink'">Q3</PartTitle>
          <Paragraph> 会場での飲酒は可能ですか？</Paragraph>
        </div>
        <div class="center2">
          <PartTitle :bg-color="'purple'">A3</PartTitle>
          <p>
            <br />
            会場へのアルコール類の持ち込みおよび飲酒はお断りしております。<br />
          </p>
        </div>

        <div class="center1">
          <PartTitle :bg-color="'red'">Q4</PartTitle>
          <Paragraph>荷物の預かりはありますか？</Paragraph>
        </div>
        <div class="center2">
          <PartTitle :bg-color="'blue'">A4</PartTitle>
          <p>
            早稲田キャンパス、戸山キャンパスに手荷物預かり所を設置し、 <br />
            ご遊覧の妨げとなる荷物をお預かりしております。（ご利用は無料となります。）
            <br />
          </p>
        </div>

        <div class="center1">
          <PartTitle :bg-color="'pink'">Q5</PartTitle>
          <Paragraph>会場内でのマスクの着用は必要ですか？</Paragraph>
        </div>
        <div class="center2">
          <PartTitle :bg-color="'purple'">A5</PartTitle>
          <p>
            マスクの着用義務はございません。 <br />
            来場者のみなさま一人ひとりの判断とさせていただいております。<br />
            <br />
          </p>
        </div>

        <div class="center1">
          <PartTitle :bg-color="'red'">Q6</PartTitle>
          <Paragraph> 自転車・バイクでの入場は可能ですか？</Paragraph>
        </div>
        <div class="center2">
          <PartTitle :bg-color="'blue'">A6</PartTitle>
          <p>
            <br />
            会場の混雑に繋がるため、自転車・バイクでのご来場はお控えください。
            <br />
            <br />
          </p>
        </div>

        <div class="center1">
          <PartTitle :bg-color="'pink'">Q7</PartTitle>
          <Paragraph>ペットや補助犬を連れての入場は可能ですか？ </Paragraph>
        </div>
        <div class="center2">
          <PartTitle :bg-color="'purple'">A7</PartTitle>
          <p>
            トラブルに繋がる恐れがあるため、ペットを連れてのご来場はお控えください。
            <br />
            なお、ケージなどで体が隠れている場合、 <br />
            またハーネスなどの目印をつけている補助犬は入場可能です。 <br />
          </p>
        </div>
      </div>
    </div>

    <div class="one">
      <div class="center1">
        <PartTitle :bg-color="'red'">Q8</PartTitle>
        <Paragraph> バリアフリールームの用意はありますか。</Paragraph>
      </div>

      <div class="center2">
        <PartTitle :bg-color="'blue'">A8</PartTitle>
        <Paragraph>
          バリアフリールーム（車椅子・ガイドヘルプ・触知案内図・手話案内等）
          <br />
          のご利用を希望される方は、以下のメールアドレスよりご連絡ください。<br />
          barrierfree@wasedasai.net
        </Paragraph>
      </div>

      <div class="one">
        <div class="center1">
          <PartTitle :bg-color="'red'">Q9</PartTitle>
          <Paragraph
            >「WASEDA PARADE 2023 -Be Yourself-
            」の出演団体を教えてください。</Paragraph
          >
        </div>

        <div class="center2">
          <PartTitle :bg-color="'blue'">A9</PartTitle>
          <p>
            「WASEDA PARADE 2023 -Be Yourself- 」の出演団体は <br />
            ・カラーガードサークルワセガシラ<br />
            ・バンカライズム－万色主義－<br />
            ・早稲田大学”踊り侍” <br />
            ・早稲田大学ジャズダンスサークルOasis <br />
            ・早稲田大学チアリーダーズFALCONS <br />
            ・早稲田大学男子チアリーディングチームSHOCKERS <br />
            ・早稲田大学ハワイ民族舞踊研究会 <br />
            ・早稲田大学フラッシュモ部 <br />
            ・WASEDA BALLERS
            <br />
            ・早稲田大学よさこいチーム東京花火 <br />
            ・Dance Team Brilliant Pinks <br />
            ・Furry研究会 <br />
            ・Twinkle <br />
            ・早稲田大学応援部吹奏楽団 <br />
          </p>
        </div>

        <div class="center1">
          <PartTitle :bg-color="'pink'">Q9</PartTitle>
          <Paragraph> 中間決起2023の出演団体を教えてください。</Paragraph>
        </div>

        <div class="center2">
          <PartTitle :bg-color="'purple'">A9</PartTitle>
          <p>
            中間決起2023の出演団体は<br />
            ・早稲田大学フラメンコ集団¡VAMOS!<br />
            ・早稲田大学 下駄っぱーず<br />
            ・早稲田大学ケルト音楽同好会<br />
            ・早稲田大学チアダンスチームMYNX<br />
            ・早稲田大学ベリーダンスサークルSARAHbelly<br />
            ・Dance Team Brilliant Pinks
          </p>
        </div>

        <div class="center1">
          <PartTitle :bg-color="'red'">Q10</PartTitle>
          <Paragraph> Opening Festivalの出演団体を教えてください。</Paragraph>
        </div>

        <div class="center2">
          <PartTitle :bg-color="'blue'">A10</PartTitle>
          <p>
            Opening Festivalの出演団体は <br />
            【Opening Festival in 早稲田】 <br />
            ・バンカライズム－万色主義－<br />
            ・ももキュン☆<br />
            ・わせだ吹奏楽同好会(緩) <br />
            ・早稲田大学男祭り2023<br />
            ・早稲田大学"踊り侍"<br />
            ・早稲田大学チアリーダーズFALCONS<br />
            ・津軽三味線愛好会三津巴<br />
            <br />
            【Opening Festival in 戸山】<br />
            ・テーマソング団体<br />
            ・Twinkle<br />
            ・早稲田大学 下駄っぱーず<br />
            ・早稲田大学ジャグリングサークル~infinity~<br />
            ・早稲田大学ジャズダンスサークルOasis<br />
            ・早稲田大学男子チアリーディングチームSHOCKERS<br />
            ・早稲田大学和太鼓サークル魁響<br />
          </p>
        </div>

        <div class="center1">
          <PartTitle :bg-color="'pink'">Q11</PartTitle>
          <Paragraph> Ending Festivalの出演団体を教えてください。</Paragraph>
        </div>

        <div class="center2">
          <PartTitle :bg-color="'purple'">A11</PartTitle>
          <p>
            Ending Festivalの出演団体は <br />
            ・津軽三味線愛好会三津巴 <br />
            ・バンカライズム－万色主義－ <br />
            ・早稲田大学"踊り侍" <br />
            ・早稲田大学 下駄っぱーず<br />
            ・早稲田大学男子チアリーディングチームSHOCKERS<br />
            ・早稲田大学ハワイ民族舞踊研究会<br />
            ・Waseda University Breakerz<br />
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.g_background_himo {
  margin-top: 10%;
}
.block-title1 {
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10%;
}

.block-title2 {
  width: fit-content;
  margin: 0 auto;
}

.block-title3 {
  width: fit-content;
  margin: 0 auto;
}
.content {
  text-align: center;
}

.one {
  margin-top: 2%;
}

.sukima {
  margin-top: 3rem;
}
.content section {
  text-align: center;
}

.center1 {
  margin-top: 3%;
  text-align: left;
  margin-left: 10%;
  display: flex;
  align-items: center;
  justify-content: left;
  gap: 6px 4px;
}

.center2 {
  margin-top: 1%;
  text-align: left;
  margin-left: 10%;
  display: flex;
  justify-content: left;
  gap: 6px 4px;
}
.center p {
  align-items: stretch;
  text-align: center;
  flex-direction: column;
}

.staff {
  font-size: 16px;
  padding-top: 8rem;
}

.Paragraph {
  margin: auto;
  position: absolute;
  bottom: 0;
}
</style>
