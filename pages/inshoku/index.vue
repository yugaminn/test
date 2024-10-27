<script>
export default {
  head: {
    title: '飲食屋台',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'こちらは早稲田祭における飲食物販売企画に関するページです。'
      },
      {
        hid: 'keyword',
        name: 'keyword',
        content:
          '早稲田 早稲田大学 早稲田祭 早稲田祭2024 飲食、早稲田祭屋台、早稲田生'
      },
      { hid: 'og:type', property: 'og:type', content: 'article' },
      { hid: 'og:title', property: 'og:title', content: '飲食屋台' },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'こちらは早稲田祭における飲食物販売企画に関するページです。'
      },
      { hid: 'og:url', property: 'og:url', content: '/inshoku' },
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
      <Hero>屋台コンテスト2024</Hero>
    </section>
    <Content>
      <section>
        <div :align="'center'" class="sukima_ue">
          <SectionTitle :bg-color="'yellow'"
            >あなたの推し屋台を見つけよう！</SectionTitle
          >
        </div>
        <div class="inshoku_icon">
          <img src="~assets/images/inshoku/inshoku_icon.png" />
        </div>
        <Paragraph :align="'center'" class="sukima size">
          <Paragraph>
            早稲田祭2024では早稲田キャンパス・戸山キャンパスの屋内・屋外合わせて85軒もの飲食屋台が<br
              class="br-sp" />出店します！
          </Paragraph>
          <Paragraph>
            キャンパスの至る所で早稲田祭を盛り上げてくれる飲食屋台ですが、ただ屋台を見て食べ物を食べて<br />「美味しかった！」という感想だけで終わっていいのでしょうか……いや、良いわけがない！
          </Paragraph>
          <Paragraph>
            そこで！ 早稲田祭2024では屋台コンテスト<br
              class="br-sp" />（やたコン）を行います！<br />
            やたコンが掲げるテーマは<br
              class="br-sp" />【あなたの推し屋台を見つけよう！】です。
          </Paragraph>
          <Paragraph>
            来場者のみなさまは、早稲田祭期間中にさまざまな<br
              class="br-sp" />屋台を見て回り、<br
              class="br-pc" />ぜひあなただけの【推し屋台】を見つけてください！<br />
            どの屋台もその団体だけが持つ、個性豊かな早稲田文化を見せてくれることでしょう。
          </Paragraph>
          <Paragraph>
            また、来場者のみなさまは投票という形で自分だけの【推し屋台】を応援することができます。<br />あなたの1票で【推し屋台】をさらなる高みへ<br
              class="br-sp" />押し上げましょう！
          </Paragraph>
          <Paragraph> 投票、よろしくお願いいたします！ </Paragraph>
        </Paragraph>
      </section>
      <section>
        <div :align="'center'" class="sukima">
          <BlockTitle :bg-color="'pink'"> 投票方法・プレゼント企画 </BlockTitle>
        </div>
        <div :align="'center'" class="size">
          <Paragraph>
            来場者のみなさまは、商品（味・見た目）、<br
              class="br-sp" />屋台装飾、接客態度などの観点から<br />【推し屋台】を3軒まで選ぶことができます！
          </Paragraph>
          <Paragraph
            >選ぶ【推し屋台】の数は、1軒でも2軒でも<br
              class="br-sp" />3軒でもかまいません。<br />（最低でも1つは【推し屋台】を選択してください。）
          </Paragraph>
          <Paragraph class="inshoku_a">
            投票は<a href="https://forms.gle/AidU28EKuVHzbTij8">こちら</a>から！
          </Paragraph>
          <div class="inshoku_img">
            <img src="~assets/images/inshoku/inshoku_qr.png" />
          </div>
          <Paragraph
            >また、屋台コンテストに参加してくれたみなさまにささやかながら景品をご用意しております。早稲田キャンパス
            3号館1階ラウンジにて、担当者に投票フォームの完了ページを提示してください。<br />なお、景品は1人1つまでとさせていただきます。</Paragraph
          >
        </div>
      </section>
      <section class="size">
        <div :align="'center'" class="sukima">
          <BlockTitle :bg-color="'green'">結果発表方法</BlockTitle>
        </div>
        <Paragraph :align="'center'">
          結果発表は、11月2日(土)の早稲田祭1日目の企画時間終了後に行う中間発表と、11月3日(日)の早稲田祭2日目の企画時間終了後に行う最終結果発表の計2回行います。
        </Paragraph>
        <Paragraph :align="'center'">
          最終結果発表の段階で得票数の最も多かった屋台が優勝となります。
        </Paragraph>
        <Paragraph :align="'center'">
          中間発表においては各エリアの1位と総合3位までが発表され、最終結果発表においては
          各エリアの<br class="br-sp" />1〜3位と総合順位1〜3位が発表されます。
        </Paragraph>
        <Paragraph :align="'center'">
          ※全ての飲食屋台は、各屋台に設置されている屋台番号札のカラーによって4エリアに分かれています。
        </Paragraph>
        <div class="size number_yatai">
          <Paragraph
            >・早稲田キャンパス 屋外中央ストリートエリア<br />
            ・早稲田キャンパス 屋外東ストリートエリア<br />
            ・早稲田キャンパス 西ストリートエリア<br />
            ・戸山キャンパス 屋外エリア
          </Paragraph>
        </div>
        <Paragraph :align="'center'" class="sukima">
          結果発表は、公式サイトと公式SNSにて行います。<br class="br-sp" />
          ぜひチェックしてみてください！
        </Paragraph>
      </section>
      <!-- <section id="chukan">
        <div :align="'center'" class="sukima">
          <BlockTitle :bg-color="'pink'">中間結果発表</BlockTitle>
        </div>
        <div :align="'center'" class="sukima">
          <Paragraph>
            早稲田祭1日目お疲れ様でした！
            早稲田祭2023もあっという間に折り返し地点となりました！
            気になる中間結果を発表していきたいと思います！
          </Paragraph>
          <br />
          <Paragraph>はじめに総合順位から…… </Paragraph>
          <Paragraph> 第1位ツェルマットスキークラブ </Paragraph>
          <Paragraph> 第2位 DA早稲田大学ハリー・ポッター研究会 </Paragraph>
          <Paragraph> 第3位WHABITAT </Paragraph>
          <br />
          <Paragraph>次に各エリア別順位は……</Paragraph>
          <Paragraph class="yuushou"
            >早稲田キャンパス中央ストリートエリア</Paragraph
          >
          <Paragraph> 第1位ツェルマットスキークラブ </Paragraph>
          <Paragraph> 第2位モンブランスキークラブ </Paragraph>
          <Paragraph> 第3位早稲田大学弓道同好会 </Paragraph>
          <br />
          <Paragraph class="yuushou"
            >早稲田キャンパス東ストリートエリア</Paragraph
          >
          <Paragraph> 第1位Set Point T.C. </Paragraph>
          <Paragraph> 第2位ドラえもん研究会</Paragraph>
          <Paragraph> 第3位早稲田大学 気仙沼チーム </Paragraph>
          <br />
          <Paragraph class="yuushou"
            >早稲田キャンパス西ストリート＆屋内エリア</Paragraph
          >
          <Paragraph> 第1位DA早稲田大学ハリー・ポッター研究会 </Paragraph>
          <Paragraph> 第2位タッチ☆ネッツ </Paragraph>
          <Paragraph> 第3位岳文会</Paragraph>
          <br />
          <Paragraph class="yuushou">戸山キャンパス屋外エリア</Paragraph>
          <Paragraph> 第1位WHABITAT </Paragraph>
          <Paragraph> 第2位早稲田大学マーケティング研究会 </Paragraph>
          <Paragraph> 第3位WASEDAリベンジャーズ </Paragraph>
          <br />
          <Paragraph>
            まだまだ結果は分かりません！
            栄光の【推し屋台】に選ばれるのはどの屋台なのか？！
            早稲田祭2日目も投票よろしくお願いします！！
          </Paragraph>
        </div>
      </section> -->
      <!-- <section id="kekka">
        <div :align="'center'" class="sukima">
          <BlockTitle :bg-color="'green'">最終結果発表</BlockTitle>
        </div>
        <div :align="'center'" class="sukima">
          <Paragraph>
            早稲田祭2023お疲れ様でした！
            どの屋台もこの2日間でその団体にしかない特別な早稲田文化を披露してくれたことだろうと思います。
            みなさまだけの【推し屋台】は見つかりましたか？
            たくさんの応援ありがとうございました！
            【推し屋台】の頂点に輝いたのはどの屋台なのでしょうか！
            それではお待ちかね、運命の最終結果発表を行います！
          </Paragraph>
          <Paragraph>
            まずは総合順位！！<br />
            「屋台コンテスト2023～あなたの推し屋台を見つけよう！～」
          </Paragraph>
          <Paragraph class="sukima_ue"> 栄えある総合優勝は…… </Paragraph>
          <Paragraph class="yuushou_inshoku"
            >「DA早稲田大学ハリー・ポッター研究会」
          </Paragraph>
          <div class="inshoku_photo">
            <img src="~assets/images/inshoku_sogo.jpeg" />
          </div>
          <Paragraph class="sukima_ue"> 総合第2位は</Paragraph>
          <Paragraph class="yuushou_inshoku"> 「WHABITAT」 </Paragraph>
          <div class="inshoku_photo">
            <img src="~assets/images/inshoku_okugai.png" />
          </div>
          <Paragraph class="sukima_ue">総合第3位は</Paragraph>
          <Paragraph class="yuushou_inshoku">
            「ツェルマットスキークラブ」
          </Paragraph>
          <div class="inshoku_photo">
            <img src="~assets/images/inshoku_chuo.jpeg" />
          </div>
          <br />
          <Paragraph>次に各エリア別順位！！</Paragraph>
          <Paragraph> 栄光の各エリアの第1位は… </Paragraph>
          <Paragraph class="sukima_ue">
            早稲田キャンパス中央ストリートエリア第1位
          </Paragraph>
          <Paragraph class="yuushou_inshoku">
            「ツェルマットスキークラブ」
          </Paragraph>
          <Paragraph class="sukima_ue">
            早稲田キャンパス東ストリートエリア第1位
          </Paragraph>
          <Paragraph class="yuushou_inshoku">
            「早稲田クッキングサークル」
          </Paragraph>
          <Paragraph class="sukima_ue">
            早稲田キャンパス西ストリート＆屋内エリア第1位
          </Paragraph>
          <Paragraph class="yuushou_inshoku">
            「DA早稲田大学ハリー・ポッター研究会」
          </Paragraph>
          <Paragraph class="sukima_ue">
            戸山キャンパス屋外エリア第1位
          </Paragraph>
          <Paragraph class="yuushou_inshoku"> 「WHABITAT」 </Paragraph>
          <br />
          <Paragraph> 以下からエリアごとの順位を発表していきます！ </Paragraph>
          <Paragraph class="yuushou iro sukima_ue">
            早稲田キャンパス中央ストリートエリア
          </Paragraph>
          <Paragraph> 第1位「ツェルマットスキークラブ」 </Paragraph>
          <Paragraph> 第2位「モンブランスキークラブ」 </Paragraph>
          <Paragraph> 第3位「早稲田大学弓道同好会」 </Paragraph>
          <Paragraph class="yuushou sukima_ue iro">
            早稲田キャンパス東ストリートエリア</Paragraph
          >
          <Paragraph> 第1位「早稲田クッキングサークル」 </Paragraph>
          <Paragraph> 第2位「Set Point T.C」 </Paragraph>
          <Paragraph> 第3位「ドラえもん研究会」 </Paragraph>
          <Paragraph class="yuushou sukima_ue iro">
            早稲田キャンパス西ストリート＆屋内エリア</Paragraph
          >
          <Paragraph> 第1位「DA早稲田大学ハリー・ポッター研究会」 </Paragraph>
          <Paragraph> 第2位「タッチ☆ネッツ」 </Paragraph>
          <Paragraph> 第3位「岳文会」 </Paragraph>
          <Paragraph class="yuushou sukima_ue iro">
            戸山キャンパス屋外エリア</Paragraph
          >
          <Paragraph> 第1位「WHABITAT」 </Paragraph>
          <Paragraph> 第2位「早稲田大学マーケティング研究会」 </Paragraph>
          <Paragraph> 第3位「WASEDAリベンジャーズ」 </Paragraph>
          <Paragraph class="sukima_ue"
            >屋台コンテストに参加いただいた全ての参加団体のみなさま、ご協力ありがとうございました！<br />
            そして、投票していただいた来場者のみなさまも本当にありがとうございました！
          </Paragraph>
        </div>
      </section> -->

      <section class="size">
        <div :align="'center'" class="section_sukima">
          <SectionTitle :bg-color="'yellow'">飲食屋台一覧</SectionTitle>
        </div>

        <div :align="'center'" class="sukima_ue">
          <BlockTitle :bg-color="'pink'">早稲田キャンパス</BlockTitle>
        </div>

        <div :align="'center'" class="acordion_inshoku">
          <details class="accordion-003 inshoku_blue">
            <summary>
              <span class="hidari">飲み物</span
              ><!--完了-->
              <div class="sankaku" />
            </summary>
            <div class="menuparent">
              <p class="yataicontainer">
                <!--済-->
                <Paragraph class="menu_content">
                  屋台番号：12<br />
                  団体名：ヤング庭球同好会(硬式部)<br />
                  企画名：もちもち飲むわらび餅<br />
                  販売物：わらび餅ドリンク
                </Paragraph>
                <img src="~assets/images/inshoku/logo12.png" />
              </p>
              <p class="yataicontainer">
                <Paragraph class="menu_content"
                  ><!--済-->
                  屋台番号： 19<br />
                  団体名：A.C.Campione<br />
                  企画名：カンピのフルーツサイダー<br />
                  販売物：冷凍ベリーサイダー、冷凍トロピカルサイダー、鈴カステラ
                </Paragraph>
                <img src="~assets/images/inshoku/logo19.jpg" />
              </p>
              <p class="yataicontainer">
                <!--済-->
                <Paragraph class="menu_content">
                  屋台番号：27<br />
                  団体名：ロータリーの会<br />
                  企画名：シンボルの饗宴<br />
                  販売物：ノンアルカシオレ
                </Paragraph>
                <img src="~assets/images/inshoku/logo27.jpg" />
              </p>
              <p class="yataicontainer">
                <!--済-->
                <Paragraph class="menu_content">
                  屋台番号：32<br />
                  団体名：東京花火OBOG<br />
                  企画名：喫茶花火<br />
                  販売物：ゼリーサイダー
                </Paragraph>
                <img src="~assets/images/inshoku/logo32.jpg" />
              </p>
              <p class="yataicontainer">
                <!--済-->
                <Paragraph class="menu_content">
                  屋台番号：42<br />
                  団体名：ギャラクシーテニスクラブ<br />
                  企画名：ギャラの実<br />
                  販売物：ジュース
                </Paragraph>
                <img src="~assets/images/inshoku/logo42.jpg" />
              </p>
              <p class="yataicontainer">
                <!--済-->
                <Paragraph class="menu_content">
                  屋台番号：47<br />
                  団体名：わせめし食べてこ会<br />
                  企画名：わせだでタピろう会<br />
                  販売物：タピオカドリンク
                </Paragraph>
                <img src="~assets/images/inshoku/logo47.jpg" />
              </p>
              <p class="yataicontainer">
                <!--済-->
                <Paragraph class="menu_content">
                  屋台番号：49<br />
                  団体名：模擬国連早稲田研究会<br />
                  企画名：模擬国連早稲田研究会<br />
                  販売物：サイダー
                </Paragraph>
                <img src="~assets/images/inshoku/logo49.jpeg" />
              </p>
              <p class="yataicontainer">
                <!--済-->
                <Paragraph class="menu_content">
                  屋台番号：59<br />
                  団体名：DA早稲田大学ハリー・ポッター研究会<br />
                  企画名： 三本の箒&nbsp;&nbsp;&nbsp;ワセダトコロ店
                  <br />
                  販売物：飲料物
                </Paragraph>
                <img src="~assets/images/inshoku/logo59.jpg" />
              </p>
            </div>
          </details>

          <details class="accordion-003 inshoku_blue">
            <summary>
              <span class="hidari">ホットスナック</span>
              <!--完了-->
              <div class="sankaku" />
            </summary>
            <div class="menuparent">
              <p class="yataicontainer">
                <!--済-->
                <Paragraph class="menu_content">
                  屋台番号：01<br />
                  団体名：Tonsoku<br />
                  企画名：トンソクの豚角煮まん<br />
                  販売物：豚角煮まん
                </Paragraph>
                <img src="~assets/images/inshoku/logo1.jpg" />
              </p>
              <p class="yataicontainer">
                <!--済-->
                <Paragraph class="menu_content">
                  屋台番号：04<br />
                  団体名：ザ・ワセダ・ガーディアン<br />
                  企画名：ザ・ポテト・ガーディアン<br />
                  販売物：ポテト・飲み物
                </Paragraph>
                <img src="~assets/images/inshoku/logo4.jpg" />
              </p>
              <p class="yataicontainer">
                <!--済-->
                <Paragraph class="menu_content">
                  屋台番号：06<br />
                  団体名：稲門シナリオ研究会<br />
                  企画名：シネマホットドッグ<br />
                  販売物：ホットドッグ
                </Paragraph>
                <img src="~assets/images/inshoku/logo6.jpg" />
              </p>
              <p class="yataicontainer">
                <Paragraph class="menu_content"
                  ><!--済-->
                  屋台番号：09<br />
                  団体名：蹴球同好会<br />
                  企画名：ホットドッグ<br />
                  販売物：ホットドッグ、レモネード
                </Paragraph>
                <img src="~assets/images/inshoku/logo9.jpg" />
              </p>
              <p class="yataicontainer">
                <!--済-->
                <Paragraph class="menu_content">
                  屋台番号：15<br />
                  団体名：早稲田大学弓道同好会<br />
                  企画名：あげおさつ<br />
                  販売物：サツマイモのフライドポテト
                </Paragraph>
                <img src="~assets/images/inshoku/logo15.jpg" />
              </p>
              <p class="yataicontainer">
                <!--済-->
                <Paragraph class="menu_content">
                  屋台番号：16<br />
                  団体名：サジテリアスアーチェリークラブ<br />
                  企画名：シャカシャカサジポテト<br />
                  販売物：シャカシャカポテト
                </Paragraph>
                <img src="~assets/images/inshoku/logo16.jpg" />
              </p>
              <p class="yataicontainer">
                <!--済-->
                <Paragraph class="menu_content">
                  屋台番号：31<br />
                  団体名：映画研究会<br />
                  企画名：映研キッチン<br />
                  販売物：ポテト、コーラ
                </Paragraph>
                <img src="~assets/images/inshoku/logo31_syusei.png" />
              </p>
              <p class="yataicontainer">
                <!--済-->
                <Paragraph class="menu_content">
                  屋台番号：39<br />
                  団体名：ワンダーサイクリング同好会<br />
                  企画名：君の想いをそっとサンド<br />
                  販売物：ホットサンド
                </Paragraph>
                <img src="~assets/images/inshoku/logo39.jpg" />
              </p>
              <p class="yataicontainer">
                <!--済-->
                <Paragraph class="menu_content">
                  屋台番号：41<br />
                  団体名：Waseminton<br />
                  企画名：シャカポテminton<br />
                  販売物：シャカシャカポテト
                </Paragraph>
                <img src="~assets/images/inshoku/logo41.jpg" />
              </p>
              <p class="yataicontainer">
                <!--済-->
                <Paragraph class="menu_content">
                  屋台番号：43<br />
                  団体名：いすみっこ<br />
                  企画名：ブダイって知ってる？<br />
                  販売物：ブダイの唐揚げ
                </Paragraph>
                <img src="~assets/images/inshoku/logo43.jpg" />
              </p>
              <p class="yataicontainer">
                <!--済-->
                <Paragraph class="menu_content">
                  屋台番号：54<br />
                  団体名：おはじきサークル<br />
                  企画名：ポテトパラダイス<br />
                  販売物：じゃがバター
                </Paragraph>
                <img src="~assets/images/inshoku/logo54.png" />
              </p>
            </div>
          </details>

          <details class="accordion-003 inshoku_blue">
            <summary>
              <span class="hidari">おやつ（しょっぱい）</span>
              <!--完了-->
              <div class="sankaku" />
            </summary>
            <div class="menuparent">
              <p class="yataicontainer">
                <!--済-->
                <Paragraph class="menu_content">
                  屋台番号：10<br />
                  団体名：早稲田クッキングサークル<br />
                  企画名：のりしお揚げパン<br />
                  販売物：ゼッポリーニ
                </Paragraph>
                <img src="~assets/images/inshoku/logo10.jpg" />
              </p>
              <p class="yataicontainer">
                <!--済-->
                <Paragraph class="menu_content">
                  屋台番号：53<br />
                  団体名：史学舎<br />
                  企画名：史学茶屋 五平餅・台湾茶<br />
                  販売物：五平餅、台湾茶
                </Paragraph>
                <img src="~assets/images/inshoku/logo53.jpg" />
              </p>
            </div>
          </details>

          <details class="accordion-003 inshoku_blue">
            <summary>
              <span class="hidari">おやつ（甘い）</span>
              <!--完了（未1）-->
              <div class="sankaku" />
            </summary>
            <div class="menuparent">
              <p class="yataicontainer">
                <Paragraph class="menu_content"
                  ><!--済-->
                  屋台番号：05<br />
                  団体名：早稲田大学バドミントンの会 Oasis<br />
                  企画名：クロッフルジッパー♡わたしの一番おいしいところに気付いてる？<br />
                  販売物：クロッフル
                </Paragraph>
                <img src="~assets/images/inshoku/logo5.png" />
              </p>
              <p class="yataicontainer">
                <Paragraph class="menu_content"
                  ><!--済-->
                  屋台番号：08<br />
                  団体名：平野ゼミ<br />
                  企画名：BananaReal.<br />
                  販売物：チョコバナナ
                </Paragraph>
                <img src="~assets/images/inshoku/logo8.jpeg" />
              </p>
              <p class="yataicontainer">
                <!--済-->
                <Paragraph class="menu_content">
                  屋台番号：11<br />
                  団体名：早稲田大学弓道サークル本陣<br />
                  企画名：矢場い団子屋さん<br />
                  販売物：お団子、お茶
                </Paragraph>
                <img src="~assets/images/inshoku/logo11.jpg" />
              </p>
              <p class="yataicontainer">
                <!--no image-->
                <Paragraph class="menu_content">
                  屋台番号：13<br />
                  団体名：エンカレッジ早稲田支部<br />
                  企画名：エンチュロッジ<br />
                  販売物：チュロス
                </Paragraph>
                <img src="~assets/images/inshoku/logo13.jpg" />
              </p>
              <p class="yataicontainer">
                <!--済-->
                <Paragraph class="menu_content">
                  屋台番号：23<br />
                  団体名：経済学会<br />
                  企画名：churros_mania<br />
                  販売物：チュロス
                </Paragraph>
                <img src="~assets/images/inshoku/logo23.jpg" />
              </p>
              <p class="yataicontainer">
                <!--済-->
                <Paragraph class="menu_content">
                  屋台番号：36<br />
                  団体名：早稲田大学所沢キャンパス祭実行委員会<br />
                  企画名：とこみどりのベビーカステラ<br />
                  販売物：ベビーカステラ
                </Paragraph>
                <img src="~assets/images/inshoku/logo36.jpg" />
              </p>
              <p class="yataicontainer">
                <!--済-->
                <Paragraph class="menu_content">
                  屋台番号：37<br />
                  団体名：早稲田大学空手道誠心会<br />
                  企画名：やきもち<br />
                  販売物：焼きもち
                </Paragraph>
                <img src="~assets/images/inshoku/logo37.jpg" />
              </p>
              <p class="yataicontainer">
                <!--済-->
                <Paragraph class="menu_content">
                  屋台番号：38<br />
                  団体名：森山ゼミ2024<br />
                  企画名：チンチロチュロス<br />
                  販売物：チュロス、ラムネ
                </Paragraph>
                <img src="~assets/images/inshoku/logo38.jpg" />
              </p>
              <p class="yataicontainer">
                <!--済-->
                <Paragraph class="menu_content">
                  屋台番号：40<br />
                  団体名：緑法会<br />
                  企画名：法の甘味&nbsp;&nbsp;&nbsp;&nbsp;Chulaws<br />
                  販売物：チュロス、グリーンダカラ(麦茶と無印)
                </Paragraph>
                <img src="~assets/images/inshoku/logo40.jpg" />
              </p>
              <p class="yataicontainer">
                <!--済-->
                <Paragraph class="menu_content">
                  屋台番号：44<br />
                  団体名：早稲田の愉快な仲間たち<br />
                  企画名：早稲田愛チュロス<br />
                  販売物：チュロス
                </Paragraph>
                <img src="~assets/images/inshoku/logo44.jpg" />
              </p>
              <p class="yataicontainer">
                <!--済-->
                <Paragraph class="menu_content">
                  屋台番号：45<br />
                  団体名：でぃーあんど<br />
                  企画名：でぃーずキッチン<br />
                  販売物：揚げパン
                </Paragraph>
                <img src="~assets/images/inshoku/logo45.jpg" />
              </p>
              <p class="yataicontainer">
                <!--済-->
                <Paragraph class="menu_content">
                  屋台番号：48<br />
                  団体名：姿勢会/早健会 feat. いちご大福研究会<br />
                  企画名：健康ってなんぞ屋<br />
                  販売物：揚げ大福とソイラテ
                </Paragraph>
                <img src="~assets/images/inshoku/logo48.jpg" />
              </p>
              <p class="yataicontainer">
                <!--済-->
                <Paragraph class="menu_content">
                  屋台番号：50<br />
                  団体名：スクーバダイビングチームあんこう<br />
                  企画名：海のあげばななやさん<br />
                  販売物：揚げバナナ
                </Paragraph>
                <img src="~assets/images/inshoku/logo50.jpg" />
              </p>
              <p class="yataicontainer">
                <!--済-->
                <Paragraph class="menu_content">
                  屋台番号：51<br />
                  団体名：早稲田キャリア研究会<br />
                  企画名：ちょこまろ<br />
                  販売物：チョコマシュマロ
                </Paragraph>
                <img src="~assets/images/inshoku/logo51.jpg" />
              </p>
              <p class="yataicontainer">
                <!--済-->
                <Paragraph class="menu_content">
                  屋台番号：56<br />
                  団体名：堀ゼミ<br />
                  企画名：堀ゼミの移民難民チャリティーバザー<br />
                  販売物：焼き菓子
                </Paragraph>
                <img src="~assets/images/inshoku/logo56.jpg" />
              </p>
              <p class="yataicontainer">
                <!--済-->
                <Paragraph class="menu_content">
                  屋台番号：57<br />
                  団体名：Set Point T.C.<br />
                  企画名：テニスモア〜チョコとマシュマロのグランドスラム〜<br />
                  販売物：スモア
                </Paragraph>
                <img src="~assets/images/inshoku/logo57.jpg" />
              </p>
              <p class="yataicontainer">
                <!--済-->
                <Paragraph class="menu_content">
                  屋台番号：60<br />
                  団体名：スポーツチャンバラ剣隼会<br />
                  企画名：隼庵<br />
                  販売物：豆腐ドーナツ、ソフトドリンク
                </Paragraph>
                <img src="~assets/images/inshoku/logo60.jpg" />
              </p>
              <p class="yataicontainer">
                <!--済-->
                <Paragraph class="menu_content">
                  屋台番号：61<br />
                  団体名：思惟の森の会<br />
                  企画名：森のパンケーキ<br />
                  販売物：パンケーキ
                </Paragraph>
                <img src="~assets/images/inshoku/logo61.png" />
              </p>
            </div>
          </details>

          <details class="accordion-003 inshoku_blue">
            <summary>
              <span class="hidari">ごはん（屋台グルメ）</span>
              <!--完了-->
              <div class="sankaku" />
            </summary>
            <div class="menuparent">
              <p class="yataicontainer">
                <!--済-->
                <Paragraph class="menu_content">
                  屋台番号：02<br />
                  団体名：FC.FALTA<br />
                  企画名：Mr.Flankfurt<br />
                  販売物：フランクフルト
                </Paragraph>
                <img src="~assets/images/inshoku/logo2.jpg" />
              </p>
              <p class="yataicontainer">
                <!--済-->
                <Paragraph class="menu_content">
                  屋台番号：20<br />
                  団体名：早大プロ野球応援歌熱唱部<br />
                  企画名：みそポテ販売部<br />
                  販売物：みそポテト
                </Paragraph>
                <img src="~assets/images/inshoku/logo20.jpg" />
              </p>
              <P class="yataicontainer">
                <!--済-->
                <Paragraph class="menu_content">
                  屋台番号：22<br />
                  団体名：Espiga<br />
                  企画名：Espigaのトルネードポテト<br />
                  販売物：トルネードポテト
                </Paragraph>
                <img src="~assets/images/inshoku/logo22.png" />
              </P>
              <P class="yataicontainer">
                <!--済-->
                <Paragraph class="menu_content">
                  屋台番号：24<br />
                  団体名：プロ野球ファンサークルセレクト<br />
                  企画名：炎の豪速球焼きそば<br />
                  販売物：焼きそば
                </Paragraph>
                <img src="~assets/images/inshoku/logo24.jpeg" />
              </P>
              <P class="yataicontainer">
                <!--済-->
                <Paragraph class="menu_content">
                  屋台番号：25<br />
                  団体名：やきそば屋さん<br />
                  企画名：やきそば屋さん<br />
                  販売物：やきそば
                </Paragraph>
                <img src="~assets/images/inshoku/logo25.jpg" />
              </P>
              <P class="yataicontainer">
                <!--済-->
                <Paragraph class="menu_content">
                  屋台番号：29<br />
                  団体名：早稲田大学宇宙航空研究会電装プロジェクト<br />
                  企画名：焼き鳥人間コンテスト2024<br />
                  販売物：焼き鳥
                </Paragraph>
                <img src="~assets/images/inshoku/logo29.jpg" />
              </P>
              <P class="yataicontainer">
                <!--済-->
                <Paragraph class="menu_content">
                  屋台番号：30<br />
                  団体名：ARROZ.F.C 9期<br />
                  企画名：アローズキッチン<br />
                  販売物：焼きそば
                </Paragraph>
                <img src="~assets/images/inshoku/logo30.jpg" />
              </P>
              <P class="yataicontainer">
                <!--済-->
                <Paragraph class="menu_content">
                  屋台番号：34<br />
                  団体名：荒友キッカーズ<br />
                  企画名：荒友のたこ焼き<br />
                  販売物：たこ焼き
                </Paragraph>
                <img src="~assets/images/inshoku/logo34.jpg" />
              </P>
              <P class="yataicontainer">
                <!--済-->
                <Paragraph class="menu_content">
                  屋台番号：55<br />
                  団体名：経済学会107期<br />
                  企画名：フランクフル党<br />
                  販売物：フランクフルト
                </Paragraph>
                <img src="~assets/images/inshoku/logo55.jpeg" />
              </P>
            </div>
          </details>

          <details class="accordion-003 inshoku_blue">
            <summary>
              <span class="hidari">ごはん（韓国）</span>
              <!--完了-->
              <div class="sankaku" />
            </summary>
            <div class="menuparent">
              <p class="yataicontainer">
                <!--済-->
                <Paragraph class="menu_content">
                  屋台番号：03<br />
                  団体名：アップセッターズ<br />
                  企画名：俺たちのチヂミ<br />
                  販売物：チヂミ
                </Paragraph>
                <img src="~assets/images/inshoku/logo3.jpeg" />
              </p>
            </div>
          </details>

          <details class="accordion-003 inshoku_blue">
            <summary>
              <span class="hidari">ごはん（中華）</span>
              <!--完了-->
              <div class="sankaku" />
            </summary>
            <div class="menuparent">
              <p class="yataicontainer">
                <!--済-->
                <Paragraph class="menu_content">
                  屋台番号：14<br />
                  団体名：モンブランスキークラブ<br />
                  企画名：早稲田餃子もんもん<br />
                  販売物：餃子
                </Paragraph>
                <img src="~assets/images/inshoku/logo14.jpg" />
              </p>
              <p class="yataicontainer">
                <!--済-->
                <Paragraph class="menu_content">
                  屋台番号：52<br />
                  団体名：KatZwei<br />
                  企画名：猫猫餃子<br />
                  販売物：餃子
                </Paragraph>
                <img src="~assets/images/inshoku/logo52.jpg" />
              </p>
              <p class="yataicontainer">
                <!--済-->
                <Paragraph class="menu_content">
                  屋台番号：58<br />
                  団体名：Walkin'<br />
                  企画名：中華料理 紅太陽<br />
                  販売物：水餃子、ジャスミン茶、パインソーダ
                </Paragraph>
                <img src="~assets/images/inshoku/logo58.jpg" />
              </p>
            </div>
          </details>

          <details class="accordion-003 inshoku_blue">
            <summary>
              <span class="hidari">ごはん（和・洋）</span>
              <!--完了-->
              <div class="sankaku" />
            </summary>
            <div class="menuparent">
              <p class="yataicontainer">
                <!--済-->
                <Paragraph class="menu_content">
                  屋台番号：26<br />
                  団体名：RIDE2023・2024運営<br />
                  企画名：はみだすチーズピザ<br />
                  販売物：ピザ
                </Paragraph>
                <img src="~assets/images/inshoku/logo26.jpg" />
              </p>
              <p class="yataicontainer">
                <!--済-->
                <Paragraph class="menu_content">
                  屋台番号：46<br />
                  団体名：志乃ぶおでん屋<br />
                  企画名：美味しいおでんを早稲田に<br />
                  販売物：おでん
                </Paragraph>
                <img src="~assets/images/inshoku/logo46.png" />
              </p>
            </div>
          </details>

          <details class="accordion-003 inshoku_blue kasen">
            <summary>
              <span class="hidari">ごはん（その他）</span>
              <!--完了-->
              <div class="sankaku" />
            </summary>
            <div class="menuparent">
              <p class="yataicontainer">
                <!--済-->
                <Paragraph class="menu_content">
                  屋台番号：07<br />
                  団体名：タネと散歩<br />
                  企画名：タネと散歩<br />
                  販売物：パッタイ、精米
                </Paragraph>
                <img src="~assets/images/inshoku/logo7_syusei.jpg" />
              </p>
              <p class="yataicontainer">
                <!--済-->
                <Paragraph class="menu_content">
                  屋台番号：17<br />
                  団体名：早稲田大学英語部（WESA）<br />
                  企画名：Be なちょる<br />
                  販売物：ナチョスチップス
                </Paragraph>
                <img src="~assets/images/inshoku/logo17.jpg" />
              </p>
              <p class="yataicontainer">
                <Paragraph class="menu_content">
                  <!--済-->
                  屋台番号：18<br />
                  団体名：早稲田大学合唱団<br />
                  企画名：あつあつ！お好み焼き粉<br />
                  販売物：はしまき
                </Paragraph>
                <img src="~assets/images/inshoku/logo18.jpg" />
              </p>
              <p class="yataicontainer">
                <!--済-->
                <Paragraph class="menu_content">
                  屋台番号：21<br />
                  団体名：気仙沼チーム<br />
                  企画名：メカステーキ<br />
                  販売物：メカジキのステーキ
                </Paragraph>
                <img src="~assets/images/inshoku/logo21.jpg" />
              </p>
              <p class="yataicontainer">
                <!--済-->
                <Paragraph class="menu_content">
                  屋台番号：28<br />
                  団体名：早稲田大学紅葉会<br />
                  企画名：紅葉食堂<br />
                  販売物：お肉の味付け揚げとレモンコーラ
                </Paragraph>
                <img src="~assets/images/inshoku/logo28.jpg" />
              </p>
              <p class="yataicontainer">
                <!--済-->
                <Paragraph class="menu_content">
                  屋台番号：33<br />
                  団体名：安達ゼミ<br />
                  企画名：小さいサバの大きなカレーパン<br />
                  販売物：さばカレーパン、飲み物（オレンジジュース、水、お茶）
                </Paragraph>
                <img src="~assets/images/inshoku/logo33.jpg" />
              </p>
              <p class="yataicontainer">
                <!--済-->
                <Paragraph class="menu_content">
                  屋台番号：35<br />
                  団体名：タコス研究会<br />
                  企画名：タコス研究会【研究発表】<br />
                  販売物：タコス・ナチョス
                </Paragraph>
                <img src="~assets/images/inshoku/logo35.png" />
              </p>
            </div>
          </details>
        </div>

        <div :align="'center'" class="sukima_ue">
          <BlockTitle :bg-color="'green'">戸山キャンパス</BlockTitle>
        </div>

        <div :align="'center'" class="acordion_inshoku">
          <details class="accordion-003 inshoku_blue">
            <summary>
              <span class="hidari">飲み物</span>
              <!--完了-->
              <div class="sankaku" />
            </summary>
            <div class="menuparent">
              <p class="yataicontainer">
                <!--済-->
                <Paragraph class="menu_content">
                  屋台番号：64<br />
                  団体名：イベント桜【改】<br />
                  企画名：先輩がやってるタピオカ屋<br />
                  販売物：タピオカ
                </Paragraph>
                <img src="~assets/images/inshoku/logo64.png" />
              </p>
              <p class="yataicontainer">
                <!--済-->
                <Paragraph class="menu_content">
                  屋台番号：71<br />
                  団体名：セ・リーグ応援サークル有志<br />
                  企画名：セ界のKitchenから<br />
                  販売物：ナタデココ入りゼリードリンク
                </Paragraph>
                <img src="~assets/images/inshoku/logo71.jpg" />
              </p>
            </div>
          </details>

          <details class="accordion-003 inshoku_blue">
            <summary>
              <span class="hidari">ホットスナック</span>
              <!--完了-->
              <div class="sankaku" />
            </summary>
            <div class="menuparent">
              <p class="yataicontainer">
                <!--済-->
                <Paragraph class="menu_content">
                  屋台番号：66<br />
                  団体名：早稲田大学スカッシュクラブ<br />
                  企画名：ふりふりポテトとスカッシュ<br />
                  販売物：ポテト
                </Paragraph>
                <img src="~assets/images/inshoku/logo66.png" />
              </p>
              <p class="yataicontainer">
                <!--済-->
                <Paragraph class="menu_content">
                  屋台番号：81<br />
                  団体名：HEARTS<br />
                  企画名：愛のロングポテト<br />
                  販売物：ロングポテト
                </Paragraph>
                <img src="~assets/images/inshoku/logo81.jpg" />
              </p>
            </div>
          </details>

          <details class="accordion-003 inshoku_blue">
            <summary>
              <span class="hidari">おやつ（しょっぱい）</span>
              <!--完了-->
              <div class="sankaku" />
            </summary>
            <div class="menuparent">
              <p class="yataicontainer">
                <!--済-->
                <Paragraph class="menu_content">
                  屋台番号：85<br />
                  団体名：環境ロドリゲス<br />
                  企画名：べじべじチップスわせだ<br />
                  販売物：野菜チップス
                </Paragraph>
                <img src="~assets/images/inshoku/logo85.jpg" />
              </p>
            </div>
          </details>

          <details class="accordion-003 inshoku_blue">
            <summary>
              <span class="hidari">おやつ（甘い）</span>
              <!--完了（未1）-->
              <div class="sankaku" />
            </summary>
            <div class="menuparent">
              <p class="yataicontainer">
                <!--済-->
                <Paragraph class="menu_content">
                  屋台番号：63<br />
                  団体名：早稲田大学バドミントン同好会<br />
                  企画名：Chillする？いやいやチュロでしょ<br />
                  販売物：チュロス
                </Paragraph>
                <img src="~assets/images/inshoku/logo63.jpg" />
              </p>
              <p class="yataicontainer">
                <!--済-->
                <Paragraph class="menu_content">
                  屋台番号：67<br />
                  団体名：F.S.Sテニスクラブ<br />
                  企画名：あま〜いすい〜つ<br />
                  販売物：ワッフル
                </Paragraph>
                <img src="~assets/images/inshoku/logo67_syusei.jpg" />
              </p>
              <p class="yataicontainer">
                <!--済-->
                <Paragraph class="menu_content">
                  屋台番号：70<br />
                  団体名：ちょこLet's<br />
                  企画名：ちょこっとモッフル<br />
                  販売物：モッフル、ペットボトル飲料
                </Paragraph>
                <img src="~assets/images/inshoku/logo70.jpg" />
              </p>
              <p class="yataicontainer">
                <!--済-->
                <Paragraph class="menu_content">
                  屋台番号：73<br />
                  団体名：WHABITAT<br />
                  企画名：HALOTAT<br />
                  販売物：ハロハロ、ジュース
                </Paragraph>
                <img src="~assets/images/inshoku/logo73.png" />
              </p>
              <p class="yataicontainer">
                <!--済 -->
                <Paragraph class="menu_content">
                  屋台番号：78<br />
                  団体名：早稲田大学広域BBS会<br />
                  企画名：ふわモコBBS串<br />
                  販売物：バウムクーヘンと鈴カステラとマシュマロのお菓子串
                </Paragraph>
                <img src="~assets/images/inshoku/logo78.jpg" />
              </p>
              <p class="yataicontainer">
                <!--no image-->
                <Paragraph class="menu_content">
                  屋台番号：80<br />
                  団体名：空手道糸東会<br />
                  企画名：チュロス道場<br />
                  販売物：チュロス
                </Paragraph>
                <img src="~assets/images/inshoku/logo_no_img.png" />
              </p>
              <p class="yataicontainer">
                <!--済-->
                <Paragraph class="menu_content">
                  屋台番号：82<br />
                  団体名：DIENTE早稲田<br />
                  企画名：スモア<br />
                  販売物：スモア
                </Paragraph>
                <img src="~assets/images/inshoku/logo82_syusei.jpg" />
              </p>
              <p class="yataicontainer">
                <!--済-->
                <Paragraph class="menu_content">
                  屋台番号：83<br />
                  団体名：メインストリートFC<br />
                  企画名：メインチョコバナナ<br />
                  販売物：チョコバナナ
                </Paragraph>
                <img src="~assets/images/inshoku/logo83.png" />
              </p>
              <p class="yataicontainer">
                <!--済-->
                <Paragraph class="menu_content">
                  屋台番号：84<br />
                  団体名：鵬志会<br />
                  企画名：鵬志会スイーツ部<br />
                  販売物：フルーツ飴
                </Paragraph>
                <img src="~assets/images/inshoku/logo84.jpg" />
              </p>
            </div>
          </details>

          <details class="accordion-003 inshoku_blue">
            <summary>
              <span class="hidari">ごはん（屋台グルメ）</span>
              <!--完了（未1）-->
              <div class="sankaku" />
            </summary>
            <div class="menuparent">
              <p class="yataicontainer">
                <!--済-->
                <Paragraph class="menu_content">
                  屋台番号：62<br />
                  団体名：WSDP<br />
                  企画名：カジノ＆グリル<br />
                  販売物：フランクフルト
                </Paragraph>
                <img src="~assets/images/inshoku/logo62.jpg" />
              </p>
              <p class="yataicontainer">
                <!--済-->
                <Paragraph class="menu_content">
                  屋台番号：68<br />
                  団体名：CHUTAR<br />
                  企画名：俺のフランクフルト<br />
                  販売物：フランクフルト
                </Paragraph>
                <img src="~assets/images/inshoku/logo68.jpg" />
              </p>
              <p class="yataicontainer">
                <!--済-->
                <Paragraph class="menu_content">
                  屋台番号：72<br />
                  団体名：早稲田大学マーケティング研究会<br />
                  企画名：まーけん屋台<br />
                  販売物：トルネードポテト
                </Paragraph>
                <img src="~assets/images/inshoku/logo72.jpg" />
              </p>
              <p class="yataicontainer">
                <!--済-->
                <Paragraph class="menu_content">
                  屋台番号：74<br />
                  団体名：cossAck<br />
                  企画名：cossAckのサクサク焼きそば<br />
                  販売物：焼きそば、飲み物
                </Paragraph>
                <img src="~assets/images/inshoku/logo74.jpg" />
              </p>
              <p class="yataicontainer">
                <!--済-->
                <Paragraph class="menu_content">
                  屋台番号：76<br />
                  団体名：早稲田大学女子軟式野球部ＷＡＳＥＢＩ<br />
                  企画名：焼きそば屋WASEBI<br />
                  販売物：焼きそば
                </Paragraph>
                <img src="~assets/images/inshoku/logo76.jpg" />
              </p>
              <p class="yataicontainer">
                <!--済-->
                <Paragraph class="menu_content">
                  屋台番号：77<br />
                  団体名：GIOCATORE<br />
                  企画名：GIOCATORE焼きそば<br />
                  販売物：焼きそば
                </Paragraph>
                <img src="~assets/images/inshoku/logo77.jpg" />
              </p>
            </div>
          </details>

          <details class="accordion-003 inshoku_blue kasen">
            <summary>
              <span class="hidari">ごはん（その他）</span>
              <!--完了-->
              <div class="sankaku" />
            </summary>
            <div class="menuparent">
              <p class="yataicontainer">
                <!--済-->
                <Paragraph class="menu_content">
                  屋台番号：65<br />
                  団体名：QOL向上委員会<br />
                  企画名：コルケバブ<br />
                  販売物：ケバブサンド
                </Paragraph>
                <img src="~assets/images/inshoku/logo65.jpg" />
              </p>
              <p class="yataicontainer">
                <!--要確認-->
                <Paragraph class="menu_content">
                  屋台番号：69<br />
                  団体名：LAVAS<br />
                  企画名：LAVAS チキンステーキ<br />
                  販売物：チキンステーキ
                </Paragraph>
                <img src="~assets/images/inshoku/logo69.png" />
              </p>
              <p class="yataicontainer">
                <!--済-->
                <Paragraph class="menu_content">
                  屋台番号：75<br />
                  団体名：Hoops<br />
                  企画名：みんなダイスき！～サイコロってすてーき～<br />
                  販売物：サイコロステーキ、ドリンク
                </Paragraph>
                <img src="~assets/images/inshoku/logo75.jpg" />
              </p>
              <p class="yataicontainer">
                <!--済-->
                <Paragraph class="menu_content">
                  屋台番号：79<br />
                  団体名：早稲田大学ヤングテニス同好会軟式部<br />
                  企画名：すてーきおぶやんぐ<br />
                  販売物：サイコロステーキ
                </Paragraph>
                <img src="~assets/images/inshoku/logo79.png" />
              </p>
            </div>
          </details>
        </div>
      </section>
    </Content>
  </div>
</template>

<style scoped>
pre {
  display: block;
  font-family: monospace;
  unicode-bidi: isolate;
  white-space: pre;
  margin: 0;
}
.size > .paragraph {
  font-size: 20px;
}
@media screen and (max-width: 768px) {
  .size > .paragraph {
    font-size: 14px;
  }
}
.iro {
  color: #036eb8;
}
.inshoku_img img {
  margin: 0 auto;
  width: 25vw;
}
.inshoku_icon img {
  margin: 0 auto;
  width: 30vw;
  margin-bottom: 10px;
}
.sukima {
  margin-top: 30px;
}
.section_sukima {
  padding-top: 50px;
}
.sukima_shita {
  padding-bottom: 20px;
}
.sukima_ue {
  padding-top: 20px;
}
.inshoku_a a {
  text-decoration: none;
  color: #036eb8;
  font-weight: bold;
}
.number_yatai {
  text-align: center;
  margin-top: 10px;
}
.number_yatai > .paragraph {
  display: inline-block;
  text-align: left;
}
@media screen and (max-width: 1024px) {
  .inshoku_icon img {
    width: 50%;
  }
  .yuushou_inshoku {
    font-size: 5vw;
  }
}
.yuushou {
  font-weight: bold;
}
.yuushou_inshoku {
  font-weight: bold;
  font-size: 3vw;
}

.br-sp {
  display: none;
}

/*acordion */
.hidari {
  border-left: 6px double #59c3e1;
  padding: 0 0.5em;
}
.accordion-003 {
  margin-bottom: 7px;
}
.inshoku_blue {
  border-top: 2px solid #036eb8;
}
.kasen {
  border-bottom: 2px solid #036eb8;
}
@media screen and (max-width: 768px) {
  .inshoku_blue,
  .kasen {
    border: none;
  }
}
@media screen and (max-width: 500px) {
  .br-sp {
    display: block;
  }
  .br-pc {
    display: none;
  }
}
summary {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 1em 2em 1em 1.5em;
  color: #3e3a39;
  font-weight: 600;
  cursor: pointer;
}
summary::-webkit-details-marker {
  display: none;
}
.sankaku,
.sankaku::before,
.sankaku::after {
  width: 8px;
  height: 8px;
  background-color: #59c3e1;
  transition: transform 0.3s;
}
.sankaku {
  position: relative;
  transform: rotate(-30deg) skewY(30deg) scaleX(0.86666);
  border-top-left-radius: 4px;
}
.sankaku::before,
.sankaku::after {
  content: '';
  position: absolute;
  right: 0;
  transition: transform 0.3s;
}
.sankaku::before {
  transform: translateX(50%) skewX(-45deg);
  border-top-right-radius: 4px;
}
.sankaku::after {
  transform: translateY(50%) skewY(-45deg);
  border-bottom-left-radius: 4px;
}
.accordion-003[open] .sankaku {
  transform: rotate(30deg) skewY(30deg) scaleX(0.86666);
}
.accordion-003[open] .sankaku::before {
  transform: translateX(50%) skewX(-45deg);
}
.accordion-003[open] .sankaku::after {
  transform: translateY(50%) skewY(-45deg);
}

.accordion-003 p {
  transform: translateY(-10px);
  opacity: 0;
  margin: 0;
  padding: 0.3em 1.7em 1.5em;
  color: #3e3a39;
  transition: transform 0.5s, opacity 0.5s;
}

.accordion-003[open] p {
  transform: none;
  opacity: 1;
}

@media screen and (min-width: 768px) {
  .menuparent {
    display: flex;
    flex-flow: row wrap;
  }
  .yataicontainer {
    width: 50%;
  }
}

.yataicontainer {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-around;
}
.yataicontainer img {
  width: 30%;
}
.menu_content {
  text-align: left;
  width: 60%;
}
.inshoku_photo {
  width: 50%;
}
</style>
