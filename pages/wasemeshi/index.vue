<script>
export default {
  head: {
    title: 'ワセメシコラボ',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          '早稲田の学生が日々通い親しんでいるキャンパス周辺の飲食店が早稲田祭とコラボ！早稲田生が親しむ「ワセメシ」のコラボの詳細はこちら！！'
      },
      {
        hid: 'keyword',
        name: 'keyword',
        content:
          '早稲田 早稲田大学 早稲田祭 早稲田祭2024 飲食、ワセメシ、早稲田生'
      },
      { hid: 'og:type', property: 'og:type', content: 'article' },
      { hid: 'og:title', property: 'og:title', content: 'ワセメシコラボ' },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          '早稲田の学生が日々通い親しんでいるキャンパス周辺の飲食店が早稲田祭とコラボ！早稲田生が親しむ「ワセメシ」のコラボの詳細はこちら！！'
      },
      { hid: 'og:url', property: 'og:url', content: 'wasemeshi' },
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
      <Hero>ワセメシコラボ</Hero>
    </section>

    <Content class="grand-box">
      <section>
        <div class="center">
          <BlockTitle :bg-color="'pink'" class="block">企画概要</BlockTitle>
        </div>
        <Paragraph class="explanation">
          早稲田大学の周辺にある飲食店は「ワセメシ」と呼ばれ、長い間多くの早大生に親しまれてきました。このたび、合計14軒の飲食店の方々にご協力いただき、早稲田祭2024とのコラボメニューを期間限定で販売することが決定しました！
          各飲食店が工夫を凝らしたコラボメニューは、早稲田祭2024のテーマである「君物語、結集。」をモチーフにしています。ぜひご賞味ください！
        </Paragraph>
        <div class="linkofwasemesi">
          <slidelink
            :to="'wasedasai.net'"
            :bg-color="'blue'"
            :url="'#menushousai'">
            <h2 class="button">コラボメニューをチェック</h2>
          </slidelink>
        </div>
      </section>
    </Content>

    <section>
      <div class="imformationpart_pc">
        <div class="saleinformation_sp">
          <div class="center">
            <BlockTitle :bg-color="'pink'" class="block">販売期間</BlockTitle>
          </div>
          <div class="saleperiod">
            <div class="date">10月21日(月)〜11月3日(日)</div>
            <div>
              ※一部、期間の異なる店舗や店休日の<br class="sp" />場合がございます
            </div>
          </div>
        </div>
        <div class="leftpart">
          <div class="saleinformation">
            <div class="center">
              <BlockTitle :bg-color="'pink'" class="block">販売期間</BlockTitle>
            </div>
            <div class="saleperiod">
              <div class="date">10月21日(月)〜11月3日(日)</div>
              <div>※一部、期間の異なる店舗や定休日の場合がございます</div>
            </div>
          </div>
          <div class="kyoryokutenpo_pc">
            <div class="center">
              <BlockTitle :bg-color="'pink'" class="block"
                >ご協力いただいた店舗</BlockTitle
              >
            </div>
            <div class="shopname">
              油SOBA専門店 図星<br />
              油SOBA・かき氷専門店 図星はなれ<br />
              A&A CAFE<br />
              キッチンミキ<br />
              GOOD MORNING CAFE 早稲田<br />
              炭焼丼専門店 どんぴしゃり<br />
              鉄板肉飯 ハチリキ<br />
              東京麺珍亭本舗 高田馬場店<br />
              東京麺珍亭本舗鶴巻町店<br />
              東京麺珍亭本舗 西早稲田店<br />
              都電テーブル 早稲田<br />
              Whistle CAFE<br />
              ボンボン食堂<br />
              武蔵野アブラ學会 早稲田総本店<br />
              らぁ麺専門店 こころば<br />
              Life is Better...from Yume Wo Katare<br />
              早稲田モンスターズキッチン
            </div>
          </div>
        </div>
        <div class="wasemeshi_map">
          <div class="center">
            <BlockTitle :bg-color="'pink'" class="block"
              >ワセメシマップ</BlockTitle
            >
          </div>
          <img src="~assets/images/wasemeshi/wasemeshi_new.png" />
        </div>
      </div>
    </section>

    <Content class="grand-box">
      <section id="menushousai">
        <div class="center">
          <BlockTitle :bg-color="'pink'" class="block"
            ><h2>メニュー詳細</h2></BlockTitle
          >
        </div>
        <div class="menu">
          <div class="two-shop">
            <div class="shop first-menu">
              <div class="shoptitle">
                <PartTitle :bg-color="'gleen'"
                  >油SOBA専門店 図星<br />油SOBA・かき氷専門店 図星はなれ
                </PartTitle>
              </div>
              <div class="flexbox">
                <div class="img-container">
                  <img
                    src="~assets/images/wasemeshi/zuboshi.png"
                    class="aacafe" />
                </div>
              </div>
              <Paragraph class="menu_title_above2">
                <div class="fontsize_big">
                  「THE濃厚ガーリックバターシュリンプ油そば」<br />
                  〜押し寄せる海老の旨み結集！<br class="sp" />
                  図星本気の刀削麺風モチモチ麺！〜
                </div>
              </Paragraph>
              <div class="nedan">
                【価格】1350円
                <span class="fontsize14">※税込価格</span><br />
                【販売形態】店内、テイクアウト<br />
                【店休日】10月27日(日)
              </div>
              <Box :rounded="true" :bg-color="'green'">
                <Paragraph>
                  大きな海老がドンと乗った油そば！最初に海老の頭を取って箸で潰し、海老の味噌や旨みを出してから混ぜるのがオーナーおすすめの食べ方。ぷりっとした海老ともちもちの刀削麺風の麺に、自家製エビオイルとニンニクが効いていてやみつきになる一杯！
                  レモンや胡椒で味変するのもおすすめ！
                  最後に締めのご飯を混ぜて、海老香るガーリックバターライスを召し上がれ！
                </Paragraph>
              </Box>
            </div>
            <div class="shop">
              <div class="sectiontitle">
                <div class="shoptitle_under12">
                  <PartTitle :bg-color="'blue'"
                    >炭焼き丼専門店 どんぴしゃり</PartTitle
                  >
                </div>
              </div>
              <div class="flexbox">
                <div class="img-container">
                  <img
                    src="~assets/images/wasemeshi/donpishari.png"
                    class="donpi_img" />
                </div>
              </div>
              <Paragraph class="menu_title_above12">
                <div class="fontsize_big">
                  「霜降り牛カルビ、当店自慢の厚切り豚バラ、<br />トリュフ香るネギ塩鶏もも焼き<br
                    class="sp" />
                  THE 3種の炭火肉祭り丼」<br />
                  〜肉・肉・肉・君だけの丼物語！！︎〜
                </div>
              </Paragraph>
              <Paragraph class="nedan">
                【価格】<br class="sp" />店内1500円
                <br />テイクアウト1300円（店内の9割の量）<br />
                <span class="fontsize14">※税込価格</span><br />
                【販売形態】店内、テイクアウト<br />
                【店休日】10月27日(日)
              </Paragraph>
              <Box :rounded="true" :bg-color="'blue'">
                <Paragraph>
                  ついに全部集合！？ どんぴしゃり史上最強肉丼登場！
                  ほかほかご飯の上に牛カルビ、ネギ塩鶏もも、お馴染みの豚バラが乗った究極の丼！
                  肉肉しくてとてもボリューミー、でも自慢の卵でまろやかに！
                  特性タレ、ネギ塩、みつもとソースなどの味変もあり気づいたら完食してる……？
                  テイクアウトもできるので時間がない方でも安心！
                  熱々の絶品肉丼をご賞味あれ！
                </Paragraph>
              </Box>
            </div>
          </div>
          <div class="two-shop">
            <div class="shop first-menu">
              <div class="shoptitle_under12">
                <PartTitle :bg-color="'purple'">鉄皿肉飯 ハチリキ </PartTitle>
              </div>
              <div class="flexbox">
                <div class="img-container">
                  <img
                    src="~assets/images/wasemeshi/hachi_riki_edit.png"
                    class="hachriki_img" />
                </div>
              </div>
              <Paragraph class="menu_title_above18">
                <div class="fontsize_big">
                  「特製ビーフ100%！
                  <br class="iphone-se" />たっぷりチーズのビビンバーグ」<br />
                  〜至高の一皿！ 熱い想いがここに結集。〜
                </div>
              </Paragraph>
              <div class="nedan">
                【価格】1500円（税込）<span class="fontsize14">※税込価格</span
                ><br />
                【販売形態】店内、テイクアウト<br />
                【店休日】10月23日(水)、27日(日)
              </div>
              <Box :rounded="true" :bg-color="'purple'">
                <Paragraph>
                  100%ビーフのハンバーグが<br
                    class="sp" />乗った洋風ビビンバ！<br />
                  鉄皿で熱々なので、肌寒くなってくるこの時期にぴったりな自慢の一品。<br
                    class="sp" />さまざまな種類のチーズや自慢の卵とデミグラスソースで、ピリ辛ながらもまろやかな味わいに。野菜もたっぷり入っているため、栄養バランスも完璧！<br
                    class="sp" />
                  先にハンバーグを切ってから、豪快に混ぜて食べるのがおすすめ！
                  <br class="pc" />あなたもぺろっと完食すること間違いなし！
                </Paragraph>
              </Box>
            </div>
            <div class="shop">
              <div class="sectiontitle">
                <div class="shoptitle">
                  <PartTitle :bg-color="'yellow'"
                    >らぁ麺専門店 こころば</PartTitle
                  >
                </div>
              </div>
              <div class="flexbox">
                <div class="img-container">
                  <img
                    src="~assets/images/wasemeshi/kokoroba.png"
                    class="kokoroba_img" />
                </div>
              </div>
              <Paragraph class="menu_title_above2">
                <div class="fontsize_big">
                  「『スペインの至宝 イベリコ豚』使用！<br class="sp" />
                  濃厚鶏白湯ジェノベカルボナーラ」<br />
                  〜日欧の味覚、この一杯に結集！〜
                </div>
              </Paragraph>
              <Paragraph class="nedan">
                【価格】1300円 <span class="fontsize14">※税込価格</span><br />
                【販売形態】店内のみ<br />
                【店休日】10月27日(日)
              </Paragraph>
              <Box :rounded="true" :bg-color="'yellow'">
                <Paragraph>
                  自慢の鶏白湯スープをカルボナーラ風に仕上げた、新感覚洋風ラーメン！
                  バジルの香り立つ自家製ジェノベーゼソースに、柔らかいイベリコ豚のチャーシューが合わさった最高の一品。最初にそのまま食べてから、黄身を割って食べるのがおすすめの食べ方！
                  そのまま食べるとバジルをよく感じられ、黄身を割るとまろやかに！
                  締めの追い飯はチーズリゾット風にしてどうぞ！
                </Paragraph>
              </Box>
            </div>
          </div>

          <div class="two-shop">
            <div class="shop first-menu">
              <div class="shoptitle">
                <PartTitle :bg-color="'gleen'">A&A CAFE </PartTitle>
              </div>
              <div class="flexbox">
                <div class="img-container">
                  <img
                    src="~assets/images/wasemeshi/aa_cafe.png"
                    class="aacafe" />
                </div>
              </div>
              <Paragraph class="menu_title_above2">
                <div class="fontsize_big">
                  「唯一無二のペスカトーレ
                  <br class="iphone-se" />〜青空カルピスを添えて〜」<br />
                  〜「君物語」、A&Aと共に。〜
                </div>
              </Paragraph>
              <div class="nedan">
                【価格】<br class="sp" />セット1500円、<br
                  class="sp" />パスタ単品1300円、<br />ドリンク単品450円、<br
                  class="sp" />ランチセットドリンク200円<br /><span
                  class="fontsize14"
                  >※税込価格</span
                ><br />
                【販売形態】店内、テイクアウト<br />
                【店休日】10月22日(火)
              </div>
              <Box :rounded="true" :bg-color="'green'">
                <Paragraph>
                  タコ、イカ、ホタテ、えび、あさり、ムール貝など、たくさんの海鮮を使ったトマトソースのペスカトーレ！海鮮の旨みがトマトソースに溶け込んでいて、聞くだけでお腹が減ってくる！
                  甘酸っぱく爽やかで飲みやすいドリンクは、混ぜると早稲田祭2024のテーマカラーを意識した色に！？
                  ︎甘めのシロップなので、グラスに添えられたオレンジと一緒にお楽しみください！
                </Paragraph>
              </Box>
            </div>
            <div class="shop">
              <div class="sectiontitle">
                <div class="shoptitle_miki">
                  <PartTitle :bg-color="'blue'">キッチンミキ</PartTitle>
                </div>
              </div>
              <div class="flexbox">
                <div class="img-container">
                  <img
                    src="~assets/images/wasemeshi/kitchenmiki_edit.png"
                    class="gmc" />
                </div>
              </div>
              <Paragraph class="menu_title_above6">
                <div class="fontsize_big">
                  「君物語バーグ（にんにくバター）」<br />
                  〜学生の心くすぐるハンバーグ。〜
                </div>
              </Paragraph>
              <Paragraph class="nedan">
                【価格】650円 <span class="fontsize14">※税込価格</span><br />
                【販売形態】店内のみ<br />
                【店休日】10月27日(日)、11月1日(金)
              </Paragraph>
              <Box :rounded="true" :bg-color="'blue'">
                <Paragraph>
                  早大生おなじみキッチンミキから、学生の心をくすぐるハンバーグが登場。まず目に飛び込んでくるのは、早稲田祭2024のテーマカラーであるオレンジ色のソース。漂うにんにくとバターの香りにご飯が進む！
                  ハンバーグの中にはチーズも入っていて、大満足の食べごたえに元気をもらえます！
                  誰もが好きなものをつめこんだ一皿、食べれば胃袋をがっちり掴まれるはず！
                </Paragraph>
              </Box>
            </div>
          </div>

          <div class="two-shop">
            <div class="shop first-menu">
              <div class="shoptitle_miki">
                <PartTitle :bg-color="'purple'"
                  >GOOD MORNING CAFE 早稲田
                </PartTitle>
              </div>
              <div class="flexbox">
                <div class="img-container">
                  <img
                    src="~assets/images/wasemeshi/gmc2.png"
                    class="aacafe_img" />
                </div>
              </div>
              <div class="menu_title_above6">
                <div class="fontsize_big">
                  「ズワイガニのトマトクリーム もっちり生パスタ」
                </div>
                <div class="fontsize14">
                  〜テーマカラーのオレンジ、水色を<br
                    class="sp" />イメージしたパスタ。<br
                    class="pc" />カニの濃厚な味わい。〜
                </div>
              </div>
              <div class="nedan">
                【価格】ランチ1600円（学割1400円）、<br />ディナー1800円（学割1600円）<br /><span
                  class="fontsize14"
                  >※税込価格</span
                ><br />
                【販売形態】店内のみ<br />
                【店休日】なし
              </div>
              <Box :rounded="true" :bg-color="'purple'">
                <Paragraph>
                  贅沢にズワイガニがのったパスタが登場！
                  濃厚なカニの旨みと、ほどよいにんにくが香るトマトソースの旨みがマッチしたソースが特徴。季節のグリーン野菜を使い、テーマカラーを意識したオレンジ色のソースはクリーミーで、もちもちの生パスタによく絡みます。一口ひとくちを大切に味わいたい美味しさで、食べ終わるのが惜しいような、そんなパスタです。<br
                    class="pc" />ぜひご賞味ください！
                </Paragraph>
              </Box>
            </div>
            <div class="shop">
              <div class="shoptitle">
                <PartTitle :bg-color="'yellow'"
                  >GOOD MORNING CAFE 早稲田
                </PartTitle>
              </div>
              <div class="flexbox">
                <div class="img-container">
                  <img
                    src="~assets/images/wasemeshi/gmc1.png"
                    class="goodmorning2" />
                </div>
              </div>
              <Paragraph class="menu_title_above6">
                <div class="fontsize_small">
                  <div class="fontsize_big">
                    「若鶏のグリルと白身魚のフリット」
                  </div>
                  <div class="fontsize14">
                    トマトとパセリのビネガーソースと<br
                      class="sp" />スパイシータルタルソースを添えて<br />
                    〜お肉とお魚と数種類のソースの結集！<br class="sp" />
                    よくばりプレート！〜
                  </div>
                </div>
              </Paragraph>
              <Paragraph class="nedan">
                【価格】<br
                  class="sp" />ランチ1400円（学割1200円）、<br />ディナー2000円（学割1800円）<br /><span
                  class="fontsize14"
                  >※税込価格</span
                ><br />
                【販売形態】店内のみ<br />
                【店休日】なし
              </Paragraph>
              <Box :rounded="true" :bg-color="'yellow'">
                <Paragraph>
                  絶妙な焼き加減で皮がパリパリの若鶏のグリルと、炭酸水を使い仕上げたふわっとした食感の白身魚のフリットは食感がそれぞれ違い、飽きずに楽しむことができます。卵を贅沢に使ったタルタルソースも、ビネガーで程よく酸味のあるトマトソースも、こだわりが詰まっていて絶品です！
                  こちらも今年の早稲田祭のテーマカラーを意識したメニューになっています。<br />ぜひご賞味ください！
                </Paragraph>
              </Box>
            </div>
          </div>

          <div class="two-shop">
            <div class="shop first-menu">
              <div class="shoptitle">
                <PartTitle :bg-color="'gleen'"
                  >東京麺珍亭本舗 <br />高田馬場店、鶴巻町店、西早稲田店
                </PartTitle>
              </div>
              <div class="flexbox">
                <div class="img-container">
                  <img
                    src="~assets/images/wasemeshi/menchin_edit.png"
                    class="aacafe" />
                </div>
              </div>
              <Paragraph class="menu_title_above6">
                <div class="fontsize_big">
                  「ヤンニョムチキン風油そば」<br />
                  〜早稲田から韓国までの物語！〜
                </div>
              </Paragraph>
              <div class="nedan">
                【価格】1150円 <span class="fontsize14">※税込価格</span><br />
                【販売形態】店内、テイクアウト<br />
                【店休日】なし
              </div>
              <Box :rounded="true" :bg-color="'green'">
                <Paragraph>
                  油そばに、まさかのヤンニョムチキン！？
                  油そばに合うようにアレンジされたオリジナルソースはピリッとした辛さで万人にお勧めできる一品！
                  調味料もふんだんに使われ、糸唐辛子、オニオンフライ、豚チャーシュー、鶏チャーシューと、贅沢すぎる一品に仕上がっている！
                  日本における韓国ブームの中、<br
                    class="pc" />麺珍亭にしかない贅沢でオリジナルな一品は<br
                    class="pc" />食べないのがもったいない！
                </Paragraph>
              </Box>
            </div>
            <div class="shop">
              <div class="sectiontitle">
                <div class="shoptitle_under12">
                  <PartTitle :bg-color="'blue'">都電テーブル 早稲田</PartTitle>
                </div>
              </div>
              <div class="flexbox">
                <div class="img-container">
                  <img
                    src="~assets/images/wasemeshi/todentable.png"
                    class="gmc" />
                </div>
              </div>
              <Paragraph class="menu_title_above5">
                <div class="fontsize_big">
                  「5種の海鮮定食」<br />
                  〜海の幸、結集！〜
                </div>
              </Paragraph>
              <Paragraph class="nedan">
                【価格】1800円 <span class="fontsize14">※税込価格</span><br />
                【販売形態】店内のみ<br />
                【店休日】10月27日(日)
              </Paragraph>
              <Box :rounded="true" :bg-color="'blue'">
                <Paragraph>
                  その日の朝に豊洲市場で仕入れた、新鮮な海鮮をふんだんに使った海鮮定食！
                  海鮮はマグロ、いくら、しらす、子持ち昆布、サーモンorカンパチの5種。しらすはふわふわで、いくらや子持ち昆布は食感が面白く、味がしっかりついていてご飯が進む！
                  お出汁が効いた大豆のお味噌汁、ほかほかのご飯、日替わり小鉢も2個ついてきて、栄養バランスも良く健康的！<br />
                  ぜひご賞味あれ！
                </Paragraph>
              </Box>
            </div>
          </div>

          <div class="two-shop">
            <div class="shop first-menu">
              <div class="shoptitle_under8">
                <PartTitle :bg-color="'purple'">Ｗhistle CAFE </PartTitle>
              </div>
              <div class="flexbox">
                <div class="img-container">
                  <img
                    src="~assets/images/wasemeshi/Whistle_edit.png"
                    class="aacafe" />
                </div>
              </div>
              <Paragraph class="menu_title_above6">
                <div class="fontsize_big">
                  「唐揚げプレート カルボナーラソース」<br />
                  〜いつまでも変わらぬ唐揚げ物語。〜
                </div>
              </Paragraph>
              <div class="nedan">
                【価格】1100円 <span class="fontsize14">※税込価格</span><br />
                【販売形態】店内、テイクアウト<br />
                【店休日】月曜日
              </div>
              <Box :rounded="true" :bg-color="'purple'">
                <Paragraph>
                  ジューシーな唐揚げに合わせるのは、まさかのカルボナーラソース！？
                  濃厚なカルボナーラソースと唐揚げの組み合わせは予測不可能、でも相性抜群！
                  さっぱりとしたサラダもアクセントに！
                  サラダ、ジューシーな唐揚げ、濃厚なカルボナーラソースのバランスで満足感のあるプレートに仕上がっています。
                  1度食べたらやみつきに！ また食べたくなること間違いなし！
                </Paragraph>
              </Box>
            </div>
            <div class="shop">
              <div class="sectiontitle">
                <div class="shoptitle">
                  <PartTitle :bg-color="'yellow'">ボンボン食堂</PartTitle>
                </div>
              </div>
              <div class="flexbox">
                <div class="img-container">
                  <img
                    src="~assets/images/wasemeshi/bonbonshokudo.png"
                    class="gmc" />
                </div>
              </div>
              <Paragraph class="menu_title_above6">
                <div class="fontsize_big">
                  「トゥルギルムマッククス」<br />
                  〜えごま油とそば、結集！<br class="sp" />
                  爽やかで食べやすいマッククス〜
                </div>
              </Paragraph>
              <Paragraph class="nedan">
                【価格】1000円 <span class="fontsize14">※税込価格</span><br />
                【販売形態】店内のみ<br />
                【店休日】なし
              </Paragraph>
              <Box :rounded="true" :bg-color="'yellow'">
                <Paragraph>
                  トゥルギルムマッククスは、そば粉の麺をエゴマ油で仕上げた韓国の冷たい麺料理！
                  ガッツリ系が多いワセメシですが、本メニューはさっぱりしていて食べやすさ抜群です！
                  韓国のりがたっぷりかかっていて、ランチメニューにはキムチやスープもついてきます。プルコギと一緒に食べるのもおすすめ！
                  普通のお店ではなかなか食べられないそば！
                  ぜひ食べてみてください！
                </Paragraph>
              </Box>
            </div>
          </div>

          <div class="two-shop">
            <div class="shop first-menu">
              <div class="shoptitle">
                <PartTitle :bg-color="'gleen'"
                  >武蔵野アブラ學会 早稲田総本店
                </PartTitle>
              </div>
              <div class="flexbox">
                <div class="img-container">
                  <img
                    src="~assets/images/wasemeshi/gakkai_edit.png"
                    class="aacafe" />
                </div>
              </div>
              <Paragraph class="menu_title_above6">
                <div class="fontsize_big">
                  「シュクメルリ油そば」<br />
                  〜油物語、世界の味が結集。〜
                </div>
              </Paragraph>
              <div class="nedan">
                【価格】950円 <span class="fontsize14">※税込価格</span><br />
                【販売形態】店内のみ<br />
                【店休日】なし
              </div>
              <Box :rounded="true" :bg-color="'green'">
                <Paragraph>
                  にんにくが世界一美味しく食べられる料理であるシュクメルリと油そばが化学反応を起こした、コッテリ濃厚でまろやかな絶品！
                  シュクメルリは鶏肉とキノコとニンニクが入ったシチューで、ジョージアの郷土料理。なんとジョージア大使が2度も店舗に足を運び、召し上がっているとのことで、その美味しさは間違いなし！
                  ジョージア大使が感動した味をみなさんも<br />ぜひご賞味あれ！
                </Paragraph>
              </Box>
            </div>
            <div class="shop">
              <div class="sectiontitle">
                <div class="shoptitle">
                  <PartTitle :bg-color="'blue'"
                    >Life is Better… from Yume Wo Katare</PartTitle
                  >
                </div>
              </div>
              <div class="flexbox">
                <div class="img-container">
                  <img
                    src="~assets/images/wasemeshi/lifeisbetter_edit.png"
                    class="gmc" />
                </div>
              </div>
              <Paragraph class="menu_title_above6">
                <div class="fontsize_big">
                  「沖縄そば風ラーメン」<br />
                  〜これはラーメン？ 沖縄そば？ 君が決めろ！〜
                </div>
              </Paragraph>
              <Paragraph class="nedan">
                【価格】通常メニュー＋150円
                <span class="fontsize14">※税込価格</span><br />
                【販売形態】店内のみ<br />
                【店休日】日曜日
                <span class="fontsize14">※11月3日(日)は営業</span>
              </Paragraph>
              <Box :rounded="true" :bg-color="'blue'">
                <Paragraph>
                  今年も大人気のLife is Better とコラボ！
                  昨年大好評だった沖縄そば風ラーメンが再登場。ここでしか食べれない極太平打ち麺と、豚・塩の旨味が存分に出ていて、鰹節とあおさが効いたスープの相性が抜群。ベースは通常のラーメンながらも、二郎系よりもあっさりとした沖縄そばのようなテイストで誰でも食べやすい！
                  この期間限定の絶品をぜひご賞味あれ！！
                </Paragraph>
              </Box>
            </div>
          </div>
          <div class="two-shop">
            <div class="shop first-menu">
              <div class="shoptitle">
                <PartTitle :bg-color="'purple'"
                  >早稲田モンスターズキッチン
                </PartTitle>
              </div>
              <div class="flexbox">
                <div class="img-container">
                  <img
                    src="~assets/images/wasemeshi/monkichi2.png"
                    class="aacafe" />
                </div>
              </div>
              <Paragraph class="menu_title_above7">
                <div class="fontsize_big">
                  「肉の結集肉祭り定食」<br />
                  〜肉の祭典だ！〜
                </div>
              </Paragraph>
              <div class="nedan">
                【価格】1200円 <span class="fontsize14">※税込価格</span><br />
                【販売形態】店内のみ<br />
                【店休日】日曜日
                <br /><span class="fontsize14">※水曜日はランチ営業のみ</span>
              </div>
              <Box :rounded="true" :bg-color="'purple'">
                <Paragraph>
                  肉の結集肉祭りは、豪華な肉の盛り合わせ！
                  ハンバーグ、フライドチキン、ハーブソーセージ、粗挽きソーセージが載ってこのお値段はお得。お肉たっぷりでも、オニオンソースでさわやかな要素もあるので、さっぱりもガッツリも好き！という欲張りな方にもおすすめ。花火も付いていて写真映えすること間違いなし！サラダ付き、ご飯大盛り無料となっています！
                </Paragraph>
              </Box>
            </div>
            <div class="shop">
              <div class="shoptitle">
                <PartTitle :bg-color="'yellow'"
                  >早稲田モンスターズキッチン
                </PartTitle>
              </div>
              <div class="flexbox">
                <div class="img-container">
                  <img
                    src="~assets/images/wasemeshi/monkichi1.png"
                    class="goodmorning2" />
                </div>
              </div>
              <Paragraph class="menu_title_above6">
                <div class="fontsize_big">
                  「黄身がとろける豚重」<br />
                  〜君の舌もとろけちゃう！〜
                </div>
              </Paragraph>
              <Paragraph class="nedan">
                【価格】900円 <span class="fontsize14">※税込価格</span><br />
                【販売形態】店内のみ<br />
                【店休日】日曜日
                <br /><span class="fontsize14">※水曜日はランチ営業のみ</span>
              </Paragraph>
              <Box :rounded="true" :bg-color="'yellow'">
                <Paragraph>
                  黄身がとろける豚重は、こだわりの低温調理で柔らかく、濃いめの味で仕上げられた豚肉が、上に載った卵のまろやかさで包み込みまれるような一品です。上にのったねぎ、ごま、のりがほどよいアクセントとなり、最後まで飽きずに楽しめます。こちらもサラダがついて、ご飯大盛り無料となっているためガッツリ派のみなさんにもおすすめ！
                  ぜひご賞味ください！
                </Paragraph>
              </Box>
            </div>
          </div>
        </div>
        <div class="kyoryokutenpo_sp">
          <div class="center">
            <BlockTitle :bg-color="'pink'" class="block"
              >ご協力いただいた店舗</BlockTitle
            >
          </div>
          <div class="shopname">
            油SOBA専門店 図星<br />
            油SOBA・かき氷専門店 図星はなれ<br />
            A&A CAFE<br />
            キッチンミキ<br />
            GOOD MORNING CAFE 早稲田<br />
            炭焼丼専門店 どんぴしゃり<br />
            鉄板肉飯 ハチリキ<br />
            東京麺珍亭本舗 高田馬場店<br />
            東京麺珍亭本舗鶴巻町店<br />
            東京麺珍亭本舗 西早稲田店<br />
            都電テーブル 早稲田<br />
            Whistle CAFE<br />
            ボンボン食堂<br />
            武蔵野アブラ學会 早稲田総本店<br />
            らぁ麺専門店 こころば<br />
            Life is Better...from Yume Wo Katare<br />
            早稲田モンスターズキッチン
          </div>
        </div>
      </section>
    </Content>
  </div>
</template>

<style scoped>
.wasemeshi_map {
  display: none;
}
.explanation {
  padding-top: 1%;
}
section {
  padding-bottom: 25px;
}
.buttonsentence {
  font-size: 16px;
  text-align: center;
}
.linkofwasemesi {
  text-align: center;
}
.block {
  margin: 0 auto;
}
.button {
  font-size: 70%;
}
.imformationpart_pc {
  display: flex;
  background-color: #ebf6fb;
  padding-left: 10%;
  padding-right: 10%;
  padding-bottom: 3rem;
  justify-content: space-around;
}
.kyoryokutenpo_pc {
  padding-top: 7%;
}
.saleinformation {
  padding-top: 8%;
}
.date {
  font-size: 30px;
  font-weight: 400;
  letter-spacing: 0.01em;
}
.shopname {
  padding-top: 5%;
  text-align: center;
}
.menu_title {
  margin-bottom: 8px;
  font-weight: bold;
}
.detail {
  text-align: center;
}
.nedan {
  font-size: 16px;
  text-align: center;
  padding-bottom: 3%;
}
.center {
  text-align: center;
}
.kyoryokutenpo {
  padding-top: 8%;
}
.shoptitle {
  text-align: left;
}
.shop {
  margin: 3rem 0 0 0;
  text-align: center;
}
.shop img {
  max-width: 540px;
  width: 100%;
}
.wasemeshi_map {
  width: 58%;
  text-align: center;
  padding-left: 5%;
  padding-top: 5%;
}
.wasemeshi_map img {
  padding-top: 10%;
  width: 100%;
}
.img-container {
  margin: 0 auto;
}
.donpi_img {
  width: 110%;
  height: 80%;
}
.shoptitle_under12 {
  padding-bottom: 12%;
  text-align: left;
}
.shoptitle_under8 {
  padding-bottom: 8%;
  text-align: left;
}
.hachriki_img {
  width: 110%;
  height: 65%;
}
.aacafe_img {
  height: 80%;
}
.shoptitle_miki {
  padding-bottom: 8%;
  text-align: left;
}
.menu_title_above12 {
  margin-bottom: 8px;
  font-weight: bold;
  padding-top: 12%;
}
.menu_title_above6 {
  margin-bottom: 8px;
  font-weight: bold;
  padding-top: 6%;
}
.menu_title_above5 {
  margin-bottom: 8px;
  font-weight: bold;
  padding-top: 5%;
}
.menu_title_above7 {
  margin-bottom: 8px;
  font-weight: bold;
  padding-top: 7%;
}
.menu_title_above14 {
  margin-bottom: 8px;
  font-weight: bold;
  padding-top: 14%;
}
.menu_title_above18 {
  margin-bottom: 8px;
  font-weight: bold;
  padding-top: 18%;
}
.menu_title_above2 {
  margin-bottom: 8px;
  font-weight: bold;
  padding-top: 2%;
}
.fontsize_big {
  font-size: 15px;
  white-space: nowrap;
}
.fontsize14 {
  font-size: 14px;
  padding-top: 2px;
}
.iphone-se {
  display: none;
}
@media screen and (max-width: 1200px) {
  /* .grand-box {
    padding: 0 2rem 0 2rem;
  } */
  .informationpart_pc {
    display: block;
  }
  .leftpart {
    display: none;
  }
  .date {
    font-size: 22px;
    padding-top: 3%;
  }
  .kyoryokutenpo_sp {
    padding-top: 10%;
  }
  .wasemesi_map_sp {
    display: none;
    padding-top: 10%;
  }
  .wasemeshi_map {
    display: none;
  }
  .img-container > img {
    display: block;
    margin: 0 auto;
  }
  .first-menu {
    margin-top: 0rem; /* shopのmargin: 1rem auto;を打ち消す */
  }

  .detail {
    text-align: left;
    padding-left: 5%;
  }

  .goodmorning2 {
    padding-top: 3%;
  }
  .fontsize_big {
    font-size: 14px;
  }
  .fontsize_small {
    font-size: 14px;
  }
  .sp {
    display: block;
  }
  .pc {
    display: none;
  }
  .iphone-se {
    display: none;
  }
}
@media screen and (min-width: 1199px) {
  .saleinformation_sp {
    display: none;
  }
  .kyoryokutenpo_sp {
    display: none;
  }
  .sectiontitle {
    text-align: center;
  }
  .two-shop {
    display: flex;
    justify-content: space-between;
  }
  .shop {
    width: 45%;
    flex-flow: column;
    justify-content: space-between;
    display: flex;
  }
  .flexbox {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .img-container {
    width: 300px;
  }
  .detail {
    width: 200px;
  }
  .goodmorning2 {
    padding-top: 10%;
  }

  .sp {
    display: none;
  }
  .pc {
    display: block;
  }
  .two-shop {
    display: flex;
  }
}
@media screen and (max-width: 376px) {
  .iphone-se {
    display: block;
  }
}
</style>
