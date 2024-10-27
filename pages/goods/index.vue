<script>
export default {
  layout: 'maintenance',
  head: {
    title: '公式グッズ',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: '早稲田祭2023公式グッズの購入・詳細はこちらから'
      },
      {
        hid: 'keyword',
        name: 'keyword',
        content:
          '早稲田祭2023 早稲田大学 学園祭 早稲田 公式グッズ わせだサイくん'
      },
      { hid: 'og:type', property: 'og:type', content: 'article' },
      {
        hid: 'og:title',
        property: 'og:title',
        content: '早稲田祭2023公式グッズ'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: '早稲田祭2023公式グッズはこちらから購入できます。'
      },
      { hid: 'og:url', property: 'og:url', content: '/goods' },
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
  <div class="goods-body">
    <section>
      <Hero class="goods-hero"> 公式グッズ</Hero>
    </section>
    <Content>
      <section>
        <div :align="'center'" class="goods-attention1">
          <BlockTitle :bg-color="'pink'">※売り切れ次第終了</BlockTitle>
        </div>
        <div :align="'center'" class="goods-katte">
          <Paragraph
            >例年大人気の早稲田祭公式グッズの販売が<br class="goods-kaigyou" />
            今年も決定いたしました！</Paragraph
          >
          <Paragraph>今年度はキャンパス内2箇所で対面販売を行います。</Paragraph>
          <Paragraph
            >洗練されたデザインが魅力の公式グッズは、<br
              class="goods-kaigyou" />実用性もバッチリ！</Paragraph
          >
          <Paragraph
            >早稲田祭2023来場の記念にぜひお買い求めください！
          </Paragraph>
        </div>
        <div :align="'center'" class="goods-unicef">
          <Paragraph class="uniunicef"
            >【日本ユニセフ協会への売上利益寄付について】</Paragraph
          >
          <Paragraph
            >早稲田祭2023では、世界中の子どもたちの明るい未来に向け、公式グッズ販売の売上利益を全額日本ユニセフ協会に寄付させていただきます。</Paragraph
          >
        </div>
      </section>
      <section>
        <div class="goods-sectiontitle">
          <sectionTitle :bg-color="'pink'"> 販売詳細 </sectionTitle>
        </div>
        <div class="goods-text">
          <div class="hanbaijouhou-container">
            <div class="hanbaijouhou hanjou1">
              <div class="hanbai-kikan">販売期間</div>
              <Paragraph class="hanbai-info when-buy-goods hanbaiyohaku"
                >11月4日(土)、5日(日) 10:00～17:00
              </Paragraph>
            </div>
            <div class="hanbaijouhou hanjou2">
              <div class="hanbai-basyo">購入場所</div>
              <div class="where-buy-goods">
                <Paragraph class="hanbai-info hanbaiyohaku"
                  >①早稲田キャンパス 11号館2階ラウンジ前</Paragraph
                >
                <Paragraph class="hanbai-info"
                  >➁戸山キャンパス 37号館ピロティ</Paragraph
                >
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="goods-sectiontitle">
          <sectionTitle :bg-color="'pink'"> グッズ一覧 </sectionTitle>
        </div>
        <div class="goods-container goods-itiran1">
          <div class="item-container">
            <div class="goods-list-number">1</div>
            <img class="seal" src="~assets/images/goods/goods_tatoo2023.jpg" />
            <div class="goods-name">タトゥーシール</div>
            <div class="goods-info goods-centerbun">
              大人気のステッカーが今年も登場！ <br />50円
            </div>
          </div>
          <div class="item-container">
            <div class="goods-list-number">2</div>
            <img class="seal" src="~assets/images/goods/goods-nui2023.jpg" />
            <div class="goods-name">ぬいぐるみ</div>
            <div class="goods-info">
              早稲田祭公式マスコットキャラクターわせだサイくんを連れて帰ろう！
              <br />800円
            </div>
          </div>

          <div class="item-container">
            <div class="goods-list-number">3</div>
            <img class="seal" src="~assets/images/goods/goods-pin2023.jpg" />
            <div class="goods-name">ピンバッジ</div>
            <div class="goods-info goods-centerbun">
              早稲田祭のロゴを身近なものに付けよう！ <br />350円
            </div>
          </div>
          <div class="item-container">
            <div class="goods-list-number">4</div>
            <img class="seal" src="~assets/images/goods/goods-rubber2023.jpg" />
            <div class="goods-name">ラバーバンド</div>
            <div class="goods-info">
              身に付けて早稲田祭を楽しもう！ <br />150円
            </div>
          </div>
          <div class="item-container">
            <div class="goods-list-number">5</div>
            <img
              class="seal"
              src="~assets/images/goods/goods-sticker2023.jpg" />
            <div class="goods-name">ステッカー（L版）</div>
            <div class="goods-info">
              コンビニのネットプリントで簡単に印刷できる！ <br />200円
            </div>
          </div>
          <div class="item-container">
            <div class="goods-list-number">6</div>

            <img
              class="seal"
              src="~assets/images/goods/goods-fileshadow2023.jpg" />
            <div class="goods-name">クリアファイル（3枚セット）</div>
            <div class="goods-info">3種類セットでゲット！ <br />250円</div>
          </div>
        </div>
      </section>
    </Content>
  </div>
</template>

<style scoped>
section {
  text-align: center;
  font-family: 'Zen Kaku Gothic New';
}

.goods-katte {
  padding-top: 30px;
}

.goods-unicef {
  padding: 30px 0;
}
.uniunicef {
  font-weight: 500;
  font-size: 15px;
}
.hanbaijouhou-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  font-size: 14px;
  padding: 2rem 0;
}

.hanbaijouhou {
  text-align: left;
}

.hanjou1 {
  padding-left: 90px;
}

.hanjou2 {
  padding-right: 70px;
}
.hanbai-kikan,
.hanbai-basyo {
  font-weight: bold;
  text-align: center;
  color: #1b1725;
  border-bottom: 1.8px solid;
  border-bottom-color: #a3298a;
  width: 100%;
}

.hanbaiyohaku {
  padding-top: 8px;
}

.goods-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 8px;
  width: 100%;
}

.goods-itiran1 {
  padding-top: 1rem;
}

.item-container {
  position: relative;
  border-bottom: 3px solid;
  border-color: #f268a7;
}

.goods-name {
  color: #cc3399;
  font-size: 20px;
  font-weight: bold;
}

.goods-info {
  color: #1b1725;
  font-size: 14px;
  font-weight: 600;
  line-height: 2rem;
}

.goods-centerbun {
  padding: 15px 0;
}

.goods-list-number {
  position: absolute;
  top: 0;
  left: 5%;
  width: 45px;
  height: 45px;
  line-height: 45px;
  background-color: #f268a7;
  border-radius: 50%;
  color: #fff;
  font-size: 14px;
  text-align: center;
}

.goods-container img {
  width: 100%;
}

.item-container {
  width: 30%;
  margin: 10px;
}
.goods-body {
  width: 100%;
  margin: 0;
}

@media screen and (max-width: 768px) {
  .hanbaijouhou-container {
    display: flex;
    flex-direction: column;
    padding-top: 1rem;
  }

  .hanbaistop,
  .hanbaijouhou {
    text-align: center;
    padding: 1rem 0;
  }

  .hanbai-kikan,
  .hanbai-basyo {
    display: inline-block;
    width: 100px;
  }

  .when-buy-goods,
  .where-buy-goods {
    padding-top: 1rem;
  }
  .goods-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
  }
  .item-container {
    display: inline-block;
    margin: 0 auto;
    width: 100%;
    margin-top: 1rem;
  }

  .goods-container img {
    width: 70%;
    margin: 0 auto;
  }

  .goods-centerbun {
    padding: 0;
  }
}

@media screen and (min-width: 451px) {
  .goods-kaigyou {
    display: none;
  }
}
</style>
