<script>
export default {
  head: {
    title: '協賛をご志望の皆様へ',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: '早稲田祭における協賛の手続きを示したページです。'
      },
      {
        hid: 'keyword',
        name: 'keyword',
        content: '早稲田 早稲田大学 早稲田祭 早稲田祭2023 早稲田祭協賛'
      },
      { hid: 'og:type', property: 'og:type', content: 'article' },
      {
        hid: 'og:title',
        property: 'og:title',
        content: '協賛をご志望の皆様へ'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: '早稲田祭における協賛の手続きを示したページです。'
      },
      { hid: 'og:url', property: 'og:url', content: '/kyosanflow' },
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
      <Hero>公式アンケート</Hero>
    </section>

    <Content>
      <section>
        <div class="g_section-content">
          <SectionTitle> 早稲田祭2022公式アンケート </SectionTitle>
          <Paragraph class="sukima">
            早稲田祭2022にご来場いただき、誠にありがとうございます。早稲田祭のさらなる発展のため、公式アンケートへのご協力をお願いいたします。アンケートにお答えいただくと、ご希望の方は抽選会にご参加いただけます。素敵な景品をご用意しておりますので、ぜひご参加ください。
          </Paragraph>
          <Paragraph class="sukima1">
            ※おひとり様1回のご回答にご協力くださいますようよろしくお願いいたします。
          </Paragraph>
          <br /><Paragraph>
            <a href="https://forms.gle/tFX3JMmSERrXY5Es9" class="link"
              ><b>早稲田祭2022公式アンケート</b></a
            >
          </Paragraph>
          <Paragraph class="sukima">
            早稲田キャンパス 3号館1階ラウンジ、戸山キャンパス37号館W
            Space37-2にて、アンケート会場を設置しております。アンケート会場にてアンケート回答終了画面をえんじのはっぴを着たスタッフにお見せいただくと、抽選会にご参加いただけます。また、キャンパスにお越しの方で抽選に参加されない場合も、こちらのアンケートからご回答ください。
          </Paragraph>
        </div>
      </section>
      <section>
        <SectionTitle :bg-color="'pink'">景品一覧（50音順）</SectionTitle>
        <div class="g_section-content">
          <div>
            <Paragraph
              >「PRIDE OF YOKOSUKA スカジャン展」招待券
              ペアチケット(横須賀美術館)</Paragraph
            >
            <Paragraph> 『サヨとコウの出発』(株式会社ヴァル研究所) </Paragraph>
            <Paragraph>
              Clesh(クレッシュ) 超極細毛ハブラシ(株式会社あらた)
            </Paragraph>
            <Paragraph>
              NewsPicksアプリ1ヶ月無料クーポン(株式会社ニューズピックス)
            </Paragraph>
            <Paragraph
              >PORTER / PORTER CURRENT LONG WALLET ネイビー(株式会社
              𠮷田)</Paragraph
            >
            <Paragraph
              >PORTER / PORTER DRAFT 2WAY HELMETBAG ネイビー(株式会社
              𠮷田)</Paragraph
            >
            <Paragraph
              >PORTER / PORTER DRAFT 2WAY HELMETBAG ベージュ(株式会社
              𠮷田)</Paragraph
            >
            <Paragraph
              >RAKUWAネックS スラッシュラインラメタイプ ブラック/レッド
              50cm(ファイテン株式会社)
            </Paragraph>
            <Paragraph
              >RIMMEL プリズムクリームアイカラー
              004(コティジャパン合同会社)</Paragraph
            >
            <Paragraph
              >RIMMEL ロイヤルヴィンテージ アイズ001
              アイカラー(コティジャパン合同会社)</Paragraph
            >
            <Paragraph> SNOW×ZEPETO ボールペン(SNOWJapan 株式会社) </Paragraph>
            <Paragraph> SNOW アプリミラー(SNOWJapan 株式会社) </Paragraph>
            <Paragraph> SNOW クリアファイル(SNOWJapan 株式会社) </Paragraph>
            <Paragraph> SNOW 付箋(SNOWJapan 株式会社) </Paragraph>
            <Paragraph
              >SODA アルコールハンドジェル(SNOWJapan 株式会社)
            </Paragraph>
            <Paragraph
              >アクア シャボン ウォータリーシャンプーの香り
              オードトワレ(株式会社ウエニ貿易)</Paragraph
            >
            <Paragraph
              >アックス フレグランス ボディスプレー
              ユニティ(ユニリーバ・ジャパン株式会社)
            </Paragraph>
            <Paragraph>
              アックス フレグランス ボディミスト
              サボン(ユニリーバ・ジャパン株式会社)
            </Paragraph>
            <Paragraph>
              アックス ポケットミストフレグランス
              キロ(ユニリーバ・ジャパン株式会社)
            </Paragraph>
            <Paragraph> アパガードMプラス2gサンプル(株式会社サンギ) </Paragraph>
            <Paragraph> 天塩のとまと飴74g(株式会社天塩) </Paragraph>
            <Paragraph>アロンアルファ「ミニ×2」(東亞合成株式会社) </Paragraph>
            <Paragraph>
              エルセーヴ エクスト ラオーディナリーオイル ピュア
              セラム(日本ロレアルパリ株式会社)
            </Paragraph>
            <Paragraph
              >オールインワンフェイスジェル 100g(ZIGEN株式会社)
            </Paragraph>
            <Paragraph>
              カールヘアアイロン32mm：巻女32(株式会社KINUJO)
            </Paragraph>
            <Paragraph>
              餃子の王将 割引券(株式会社王将フードサービス)
            </Paragraph>
            <Paragraph
              >ケンミン焼ビーフン 鶏だし醤油(ケンミン食品株式会社)
            </Paragraph>
            <Paragraph
              >玉露園減塩こんぶ茶50g袋(玉露園食品工業株式会社)
            </Paragraph>
            <Paragraph
              >玉露園減塩梅こんぶ茶45g袋(玉露園食品工業株式会社)
            </Paragraph>
            <Paragraph>
              航空科学博物館 招待券(公益財団法人 航空科学博物館)
            </Paragraph>
            <Paragraph
              >ゴーゴーカレー 金沢咖喱(ゴーゴーカレーグループ)
            </Paragraph>
            <Paragraph> ゴーゴーカレー中辛(ゴーゴーカレーグループ) </Paragraph>
            <Paragraph>
              サンメドウズ清里スキー場
              冬のリフト1日招待券(サンメドウズ清里株式会社)
            </Paragraph>
            <Paragraph>
              白樺リゾート池の平ホテル ペア宿泊券(株式会社池の平ホテル&リゾーツ)
            </Paragraph>
            <Paragraph
              >スキンライフ薬用洗顔フォーム(牛乳石鹸共進社株式会社)
            </Paragraph>
            <Paragraph
              >セザンヌ パールグロウチーク P1(株式会社セザンヌ化粧品)
            </Paragraph>
            <Paragraph
              >ダウメン+ケア モイスチャー 化粧水 (ユニリーバ・ジャパン株式会社)
            </Paragraph>
            <Paragraph>ちひろ美術館 招待券(ちひろ美術館) </Paragraph>
            <Paragraph>
              展望台東京シティビューチケット(六本木ヒルズ展望台
              東京シティビュー／スカイデッキ)
            </Paragraph>
            <Paragraph
              >ドーリーウインク サロンアイラッシュ(株式会社コージー本舗)
            </Paragraph>
            <Paragraph>とろけるきなこ 5g 40入(株式会社 真誠) </Paragraph>
            <Paragraph
              >永山健康ランド竹取の湯 招待券(ジョイパックレジャー株式会社)
            </Paragraph>
            <Paragraph>
              永山コパボウル シューズレンタル
              無料券(ジョイパックレジャー株式会社)
            </Paragraph>
            <Paragraph
              >日商簿記2級 工業簿記（テキスト／個別計算問題集）(CPA会計学院)
            </Paragraph>
            <Paragraph>
              日商簿記2級 商業簿記（テキスト／個別計算問題集）(CPA会計学院)
            </Paragraph>
            <Paragraph
              >日商簿記3級（テキスト／個別計算問題集）(CPA会計学院)
            </Paragraph>
            <Paragraph> のと豚カレー(ゴーゴーカレーグループ) </Paragraph>
            <Paragraph
              >榛名湖温泉ゆうすげ元湯 宿泊無料券
              ペアーチケット(榛名湖温泉ゆうすげ元湯)
            </Paragraph>
            <Paragraph
              >ビッグエコー室料50%OFFカラオケパスポート(株式会社第一興商)
            </Paragraph>
            <Paragraph>美YOU人浅草店特別招待券(ファイテン株式会社) </Paragraph>
            <Paragraph>
              ファッションブロウ パウダーインペンシル N BR-3
              明るい茶色(日本ロレアルパリ株式会社)
            </Paragraph>
            <Paragraph
              >ファッションブロウ パウダーインペンシル N BR-4
              黄みのある明るい茶色(日本ロレアルパリ株式会社)
            </Paragraph>
            <Paragraph
              >ファッションブロウ パウダーインペンシル N BR-7
              グレーブラウン(日本ロレアルパリ株式会社)
            </Paragraph>
            <Paragraph>
              富士レークホテル ペア宿泊券(富士レークホテル)
            </Paragraph>
            <Paragraph
              >ブルドック Jソース 500g(ブルドックソース株式会社)
            </Paragraph>
            <Paragraph
              >ベビースターラーメン(株式会社おやつカンパニー)
            </Paragraph>
            <Paragraph
              >星の王子さまミュージアム ペアご招待券(星の王子さまミュージアム)
            </Paragraph>
            <Paragraph>
              ホテルリステル猪苗代 宿泊優待券(ホテルリステル猪苗代)
            </Paragraph>
            <Paragraph>
              ホテルリステル猪苗代 無料宿泊券(ホテルリステル猪苗代)
            </Paragraph>
            <Paragraph
              >マイルーティーン MAX 1050g
              アクセルレモネード風味(株式会社ウエニ貿易)</Paragraph
            >
            <Paragraph
              >マイルーティーン MAX 1050g
              ストイックバニラ風味(株式会社ウエニ貿易)</Paragraph
            >
            <Paragraph
              >マイルーティーン MAX 1050g
              ストロングバナナ風味(株式会社ウエニ貿易)</Paragraph
            >
            <Paragraph
              >マイルーティーン MAX 1050g
              パワーチョコレート風味(株式会社ウエニ貿易)</Paragraph
            >
            <Paragraph
              >マイルーティーン MAX 1050g
              パンプマスカット風味(株式会社ウエニ貿易)</Paragraph
            >
            <Paragraph
              >マイルーティーン MAX 1050g
              マッスルストロベリー風味(株式会社ウエニ貿易)</Paragraph
            >
            <Paragraph
              >マクセル アクアパーク品川 ご招待券(マクセル株式会社)
            </Paragraph>
            <Paragraph>マスク＆ティッシュケース(ヒサゴ株式会社) </Paragraph>
            <Paragraph
              >無料乗船優待券1名分(株式会社ロイヤルウイング)
            </Paragraph>
            <Paragraph
              >郵政博物館オリジナル一付箋とポストカード(郵政博物館)
            </Paragraph>
            <Paragraph>
              ヨード卵厚切りカットバウム(株式会社マルキン)
            </Paragraph>
            <Paragraph>ヨード卵バウムクーヘン(株式会社マルキン) </Paragraph>
            <Paragraph>ヨード卵プチケーキ(株式会社マルキン) </Paragraph>
            <Paragraph>ヨード卵マフィンケーキ(株式会社マルキン) </Paragraph>
            <Paragraph
              >ラッドスカイ スプラッシュタイム オードトワレ(株式会社ウエニ貿易)
            </Paragraph>
            <Paragraph
              >ランチバイキングペアチケット(株式会社ロイヤルウイング)
            </Paragraph>
            <Paragraph
              >留学情報誌『留学ジャーナル』2022年8月号(株式会社留学ジャーナル)
            </Paragraph>
          </div>
        </div>
      </section>
      <section>
        <SectionTitle :bg-color="'purple'">物品協賛企業一覧</SectionTitle>
        <div class="g_section-content">
          <Paragraph class="sukima">協賛企業一覧</Paragraph>
          <Paragraph class="sukima"
            >今年度もご協賛くださり、誠にありがとうございます。
          </Paragraph>
          <Paragraph>CPA会計学院 </Paragraph>
          <Paragraph> SNOWJapan 株式会社 </Paragraph>
          <Paragraph> ZIGEN株式会社 </Paragraph>
          <Paragraph>株式会社KINUJO </Paragraph>
          <Paragraph>株式会社天塩 </Paragraph>
          <Paragraph> 株式会社あらた </Paragraph>
          <Paragraph> 株式会社池の平ホテル&リゾーツ </Paragraph>
          <Paragraph>株式会社ヴァル研究所 </Paragraph>
          <Paragraph> 株式会社ウエニ貿易 </Paragraph>
          <Paragraph>株式会社王将フードサービス </Paragraph>
          <Paragraph>株式会社王将フードサービス </Paragraph>
          <Paragraph>株式会社おやつカンパニー </Paragraph>
          <Paragraph> 株式会社コージー本舗 </Paragraph>
          <Paragraph> 株式会社サンギ </Paragraph>
          <Paragraph>株式会社 真誠 </Paragraph>
          <Paragraph>株式会社セザンヌ化粧品 </Paragraph>
          <Paragraph> 株式会社第一興商 </Paragraph>
          <Paragraph> 株式会社ニューズピックス </Paragraph>
          <Paragraph>株式会社マルキン </Paragraph>
          <Paragraph> 株式会社留学ジャーナル </Paragraph>
          <Paragraph>株式会社ロイヤルウイング </Paragraph>
          <Paragraph>牛乳石鹸共進社株式会社 </Paragraph>
          <Paragraph>玉露園食品工業株式会社 </Paragraph>
          <Paragraph> ケンミン食品株式会社 </Paragraph>
          <Paragraph> 公益財団法人 航空科学博物館 </Paragraph>
          <Paragraph>ゴーゴーカレーグループ </Paragraph>
          <Paragraph> サンメドウズ清里株式会社 </Paragraph>
          <Paragraph>ジョイパックレジャー株式会社 </Paragraph>
          <Paragraph>ちひろ美術館 </Paragraph>
          <Paragraph>東亞合成株式会社 </Paragraph>
          <Paragraph> 日本ロレアルパリ株式会社 </Paragraph>
          <Paragraph>榛名湖温泉ゆうすげ元湯 </Paragraph>
          <Paragraph> ヒサゴ株式会社 </Paragraph>
          <Paragraph> 富士レークホテル </Paragraph>
          <Paragraph>ファイテン株式会社 </Paragraph>
          <Paragraph>ブルドックソース株式会社 </Paragraph>
          <Paragraph>星の王子さまミュージアム </Paragraph>
          <Paragraph> ホテルリステル猪苗代 </Paragraph>
          <Paragraph>マクセル株式会社 </Paragraph>
          <Paragraph>丸眞株式会社</Paragraph>
          <Paragraph>郵政博物館 </Paragraph>
          <Paragraph>ユニリーバ・ジャパン株式会社 </Paragraph>
          <Paragraph>横須賀美術館</Paragraph>
          <Paragraph
            >六本木ヒルズ展望台 東京シティビュー／スカイデッキ</Paragraph
          >
        </div>
      </section>
    </Content>
  </div>
</template>
<style scoped>
.sukima {
  padding-top: 1rem;
}

.sukima1 {
  padding-bottom: 1rem;
}

.sukima2 {
  margin-top: 1rem;
}
a:hover {
  color: #d35b31;
}
</style>
