<script>
export default {
  layout: 'maintenance',
  head: {
    title: '2022早稲田祭公式テーマソング決定',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: '早稲田祭2022公式テーマソングの募集詳細を記載しています。'
      },
      {
        hid: 'keyword',
        name: 'keyword',
        content:
          '早稲田 早稲田大学 早稲田祭 早稲田祭2022 公式テーマソング 公式テーマソング募集要項'
      },
      { hid: 'og:type', property: 'og:type', content: 'article' },
      {
        hid: 'og:title',
        property: 'og:title',
        content: '早稲田祭2021について'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: '早稲田祭2022公式テーマソングの募集詳細を記載しています。'
      },
      { hid: 'og:url', property: 'og:url', content: '/about' },
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
      <Hero> 早稲田祭2022公式テーマソング決定！ </Hero>
    </section>

    <Content>
      <section>
        <div class="sukima">
          <SectionTitle :bg-color="'pink'"> テーマソング募集！ </SectionTitle>
        </div>
        <div class="section-content">
          <Paragraph> 今年度もテーマソングを募集いたします！ </Paragraph>
          <Paragraph>
            応募に関していくつか確認していただきたい事項がございます。
          </Paragraph>
          <Paragraph> 下記をよくお読みの上、ご応募ください。 </Paragraph>
          <Paragraph>
            みなさまのクリエイティブな楽曲をお待ちしております！
          </Paragraph>
        </div>
        <div class="sukima">
          <SectionTitle :bg-color="'yellow'"> 募集要項 </SectionTitle>
        </div>
        <div class="section-content">
          <Paragraph>
            この度は、早稲田祭2022公式テーマソングへの応募にご興味・ご関心をお寄せいただきありがとうございます。以下に公式テーマソングエントリーに関する要項を記載いたしますので、ご参照の上、応募の検討やエントリーに必要な書類の記入などを行ってください。
          </Paragraph>
          <Paragraph> みなさまのご応募、心よりお待ちしております！ </Paragraph>
          <Paragraph class="mokuji">
            <strong>～目次～</strong>
          </Paragraph>
          <Paragraph> 1．公式テーマソングとは </Paragraph>
          <Paragraph> 2．エントリー条件 </Paragraph>
          <Paragraph> 3．楽曲条件 </Paragraph>
          <Paragraph>
            4．エントリーに必要な書類・データ
            <Paragraph>
              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;ｰアーティスト情報登録シート
            </Paragraph>
            <Paragraph>
              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;ｰ楽曲情報登録シート
            </Paragraph>
            <Paragraph> &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;ｰ同意書 </Paragraph>
            <Paragraph>
              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;ｰエントリー楽曲
            </Paragraph>
          </Paragraph>
          <Paragraph> 5．エントリー方法 </Paragraph>
          <Paragraph> 6．今後の予定・楽曲発表までの流れ </Paragraph>
          <Paragraph> 7．諸注意 </Paragraph>
        </div>
        <div>
          <Paragraph class="sukima">
            <PartTitle :bg-color="'blue'">
              <strong>1．公式テーマソングとは</strong>
            </PartTitle>
          </Paragraph>
          <Paragraph>
            &emsp;早稲田祭は来場者数、企画数共に日本最大級の学園祭です。その運営を担う私たち早稲田祭2022運営スタッフは、毎年公式テーマソングを定めております。その年の早稲田祭のテーマに沿った楽曲を早大生から募集し、YouTube上での投票を通して、公式テーマソングを決定してきました。公式テーマソングは、ロゴ・キャッチコピーに並ぶ早稲田祭のテーマの体現手段のひとつです。SNSなどの各種広報媒体に使用されるほか、早稲田祭当日のステージ企画や運営スタッフ企画にも使用され、早稲田祭を彩る役割があります。
          </Paragraph>
          <Paragraph> 【過去の楽曲】（敬称略） </Paragraph>
          <Paragraph>
            ｢早稲田祭2013｣&emsp;&emsp;Dive into the blue/The Lime Light
          </Paragraph>
          <Paragraph> ｢早稲田祭2014｣&emsp;&emsp;HERO/LJY </Paragraph>
          <Paragraph>
            ｢早稲田祭2015｣&emsp;&emsp;星空協奏曲/ハジマリノマチ
          </Paragraph>
          <Paragraph>
            ｢早稲田祭2016｣&emsp;&emsp;スタートライン/PLUS ONE
          </Paragraph>
          <Paragraph> ｢早稲田祭2017｣&emsp;&emsp;閃光華/sprout </Paragraph>
          <Paragraph>
            ｢早稲田祭2018｣&emsp;&emsp;スターライト/Lucille
          </Paragraph>
          <Paragraph> ｢早稲田祭2019｣&emsp;&emsp;道/BASELAND </Paragraph>
          <Paragraph> ｢早稲田祭2020｣&emsp;&emsp;夜明け/ご自愛。 </Paragraph>
          <Paragraph>
            ｢早稲田祭2021｣&emsp;&emsp;Newハーモナイズ/まほろば
          </Paragraph>
        </div>
        <div>
          <Paragraph class="sukima">
            <PartTitle :bg-color="'blue'">
              <strong>2．エントリー条件</strong>
            </PartTitle>
          </Paragraph>
          <Paragraph class="sukima">
            エントリー条件は以下の通りです。
          </Paragraph>
          <Paragraph>
            ・早大生である、もしくは早大生を1人以上含むグループであること。
          </Paragraph>
          <Paragraph>
            ・【早稲田祭2022公式テーマソング
            楽曲エントリーにあたっての同意書】を提出すること。
          </Paragraph>
          <Paragraph>
            ・10月6日(木)にPV撮影に協力していただけること。
          </Paragraph>
          <Paragraph>
            ・早稲田祭2022開催日である11月5日(土)、6日(日)ともに都合がつくこと。
          </Paragraph>
          <Paragraph>
            ・楽曲が選ばれた際に、カラオケでの配信や三田祭とのコラボを行うことに同意していただけること。（過去には｢テマソン早慶戦｣と題して、SNSを用いた対決を行いました。）
          </Paragraph>
          <Paragraph>
            ・PV撮影・当日ライブの際の楽器をアーティスト側で用意していただくこと。（アマチュア・プロなどの条件を問いません。どなたでも歓迎いたします。）
          </Paragraph>
          <Paragraph>
            ※原則として、過去に早稲田祭の公式テーマソングに選ばれた楽曲を作成されたことのあるグループの方は、エントリーが認められませんのでご注意ください。
          </Paragraph>
        </div>
        <div>
          <Paragraph class="sukima">
            <PartTitle :bg-color="'blue'">
              <strong>3．楽曲条件</strong>
            </PartTitle>
          </Paragraph>
          <Paragraph class="sukima">
            テーマソングとして認められる楽曲の条件は以下の通りです。
          </Paragraph>
          <Paragraph> ・歌詞のある楽曲である。 </Paragraph>
          <Paragraph> ・オリジナル楽曲である。 </Paragraph>
          <Paragraph>
            ・早稲田祭2022のキャッチコピー「想いの照らす、その先を。」からインスピレーションを受けた楽曲である。
          </Paragraph>
          <Paragraph>
            ・歌詞の中に｢想い｣などテーマやキャッチコピーをイメージさせる文言が含まれている。
          </Paragraph>
          <Paragraph class="sukima">
            以上の要件を全て満たしていればジャンル／形態は問いません。
          </Paragraph>
        </div>
        <div>
          <Paragraph class="sukima">
            <PartTitle :bg-color="'blue'">
              <strong>4. エントリーに必要な書類・データ</strong>
            </PartTitle>
          </Paragraph>
          <Paragraph class="entry"> ①アーティスト情報登録シート </Paragraph>
          <Paragraph> ・アーティスト情報 </Paragraph>
          <Paragraph>
            &emsp;アーティストのプロフィールを記入してください。
          </Paragraph>
          <Paragraph>
            &emsp;（※楽曲紹介の際などに、全文あるいは抜粋したものを掲載させていただく場合がございます。）
          </Paragraph>
          <Paragraph>
            &emsp;&emsp;例：2021年に結成した○○サークルの4人組からなるバンド。現在都内のライブハウスを中心に精力的に活動中。○○フェスなどにおいては、○○という実績を収めている。
          </Paragraph>
          <Paragraph> ・代表者 </Paragraph>
          <Paragraph> &emsp;代表者の方の情報を記入してください。 </Paragraph>
          <Paragraph>
            &emsp;間違いがあった場合こちらから連絡が取れなくなってしまう可能性があるため、正確に記入してください。
          </Paragraph>
          <Paragraph>
            &emsp;代表者の方は必ず早大生の方にしてください。
          </Paragraph>
          <Paragraph> ・メンバーリスト </Paragraph>
          <Paragraph> &emsp;メンバーの方の情報を記入してください。 </Paragraph>
          <Paragraph>
            &emsp;“早大生・他大生・その他”の欄は、メンバーごとに当てはまる項目に丸をつけてください。
          </Paragraph>
          <Paragraph class="entry"> ②楽曲情報登録シート </Paragraph>
          <Paragraph> ・楽曲情報 </Paragraph>
          <Paragraph> &emsp;楽曲の情報を記入してください。 </Paragraph>
          <Paragraph>
            &emsp;「楽曲説明」の項目は、楽曲のコンセプトや曲を通じて表現したいことなどを記入してください。
          </Paragraph>
          <Paragraph>
            &emsp;（※楽曲紹介の際などに、全文あるいは抜粋したものを掲載させていただく場合がございます。）
          </Paragraph>
          <Paragraph> ・歌詞 </Paragraph>
          <Paragraph>
            &emsp;楽曲の歌詞を全文掲載してください。楽曲紹介の際に公開させていただく場合がございます。
          </Paragraph>
          <Paragraph class="entry"> ③同意書 </Paragraph>
          <Paragraph>
            サイト掲載の【早稲田祭2022公式テーマソング
            楽曲エントリーにあたっての同意書】の記入が必要となります。
          </Paragraph>
          <Paragraph> よくお読みいただき、同意の上ご応募ください。 </Paragraph>
          <Paragraph class="entry"> ④エントリー楽曲 </Paragraph>
          <Paragraph>
            mp3ファイルの音声データのみ受け付けます。通常の歌音源とオフヴォーカルver.の2種類を送付してください。
          </Paragraph>
          <Paragraph class="entry"> ⑤ジャケット写真 </Paragraph>
          <Paragraph>
            ジャケット写真は1次選考を通過した場合にご提出いただきます。候補曲のYouTube投票、および広報を行う際に必要となりますので、ご応募いただく時点で作成していただくようお願いいたします。なお、提出する際の画像のサイズは1280px×1280px以上のものでお願いいたします。
          </Paragraph>
          <Paragraph class="sukima1">
            書類は<a
              href="https://drive.google.com/file/d/1DRI9FjMuUAQ8A58JgYWyFoJ9FefIpv8d/view?usp=sharing"
              target="_blank"
              class="link"
              >こちら</a
            >からダウンロードできます。
          </Paragraph>
        </div>
        <div>
          <Paragraph class="sukima">
            <PartTitle :bg-color="'blue'">
              <strong>5. エントリー方法</strong>
            </PartTitle>
          </Paragraph>
          <Paragraph>
            <strong>【8月30日(火) 23:59】までに</strong>
          </Paragraph>
          <Paragraph>
            themesong@wasedasai.netへ必要書類を添付したメールを送信してください。
          </Paragraph>
          <Paragraph>
            メール内容は下記のフォーマットに沿って記入してください。
          </Paragraph>
          <Paragraph>
            件名：公式テーマソングエントリー（アーティスト名／楽曲名）
          </Paragraph>
          <Paragraph> 本文： </Paragraph>
          <Paragraph> &emsp;①アーティスト名／楽曲名 </Paragraph>
          <Paragraph>
            &emsp;②代表者（※早大生に限る）の氏名、学部、学年
          </Paragraph>
          <Paragraph> &emsp;③代表者の連絡先 </Paragraph>
          <Paragraph> 添付ファイル： </Paragraph>
          <Paragraph> &emsp;①アーティスト情報登録シート </Paragraph>
          <Paragraph> &emsp;②楽曲情報登録シート </Paragraph>
          <Paragraph> &emsp;③同意書 </Paragraph>
          <Paragraph> &emsp;④エントリーする楽曲（mp3形式） </Paragraph>
        </div>
        <div>
          <Paragraph class="sukima">
            <PartTitle :bg-color="'blue'">
              <strong>6．当日ライブに関して</strong>
            </PartTitle>
          </Paragraph>
          <Paragraph>
            &emsp;早稲田祭2022当日に、テーマソングライブ（以下、当日ライブ）を運営スタッフ企画として実施予定です。今年度は、当日ライブを屋外ステージで実施することを予定しています。屋外ステージで行うことによって、より多くの人に公式テーマソングを聞いてもらうことが可能となり、結果として、早稲田祭2022のテーマを広く浸透させることに繋がることが期待されます。
          </Paragraph>
          <Paragraph>
            &emsp;しかし、周辺地域への騒音配慮の観点から屋外ステージにおいてアンプの使用は認められていません。したがって、当日ライブにおいてもアンプは使用せず、事前収録を行ったインストゥルメンタルをステージのスピーカーで流し、ヴォーカルマイクのみスピーカーにつなげて歌う形式をとっていただきます。費用面においてもアーティスト様のご負担を軽減することができるため、こちらの方法を採用させていただきました。
          </Paragraph>
          <Paragraph>
            &emsp;ご理解のほど、よろしくお願いいたします。
          </Paragraph>
        </div>
        <div>
          <Paragraph class="sukima">
            <PartTitle :bg-color="'blue'">
              <strong>7. 今後の予定・楽曲決定までの流れ</strong>
            </PartTitle>
          </Paragraph>
          <Paragraph> 6月30日(木) 9:00 エントリー開始 </Paragraph>
          <Paragraph> ↓ </Paragraph>
          <Paragraph> 8月30日(火) 23:59 エントリー締め切り </Paragraph>
          <Paragraph> ↓ </Paragraph>
          <Paragraph> 【早稲田祭2022運営スタッフ内での1次審査】 </Paragraph>
          <Paragraph> ↓ </Paragraph>
          <Paragraph> 9月3日(土) 最終候補楽曲発表・一般投票開始 </Paragraph>
          <Paragraph> ↓ </Paragraph>
          <Paragraph> 9月16日(金) 一般投票締め切り </Paragraph>
          <Paragraph> ↓ </Paragraph>
          <Paragraph>
            9月19日(月) 早稲田祭2022公式テーマソング決定・発表
          </Paragraph>
          <Paragraph class="sukima1">
            ※決定方法・選考日時については変更の可能性がございます。あらかじめご了承ください。
          </Paragraph>
        </div>
        <div>
          <Paragraph class="sukima">
            <PartTitle :bg-color="'blue'">
              <strong>8. 諸注意</strong>
            </PartTitle>
          </Paragraph>
          <Paragraph>
            ※エントリー楽曲が2曲以上になる場合は、楽曲情報登録シートと楽曲データのみ曲数分、アーティスト情報登録シートと同意書は楽曲数にかかわらずそれぞれ1枚のみ提出してください。
          </Paragraph>
          <Paragraph>
            ※メール容量などの関係で書類やデータを1通にまとめて送れない場合、複数回に分けて送っていただいても構いません。
          </Paragraph>
          <Paragraph>
            ※やむを得ない事情でメールでのエントリーができず、紙媒体・CD媒体でエントリーを希望する場合は、期日までに下記連絡先までご相談ください。
          </Paragraph>
          <Paragraph>
            ※ご応募いただいた楽曲は早稲田祭2022における各種広報媒体で使用させていただきます。
          </Paragraph>
          <Paragraph>
            ※広報企画の一環として、早稲田祭2022運営スタッフの許可を取った上で他の団体がテーマソングを使用する可能性もございます。
          </Paragraph>
          <Paragraph>
            ※ご応募いただいた楽曲が公式テーマソングに選ばれた場合は、直前PVの撮影にご協力いただきます。撮影日は10月6日(木)を予定しております。
          </Paragraph>
          <Paragraph class="sukima1">
            ご不明点などございましたら、お気軽に下記の連絡先までご相談ください。
          </Paragraph>
          <Paragraph> 早稲田祭2022運営スタッフ </Paragraph>
          <Paragraph> 公式テーマソング担当&emsp;山田創介 </Paragraph>
          <Paragraph> TEL：090-3839-7041 </Paragraph>
          <Paragraph> E-mail：themesong@wasedasai.net </Paragraph>
        </div>
      </section>
    </Content>
  </div>
</template>
<style scoped>
.mokuji {
  padding-top: 20px;
  color: #224786;
  font-size: 20px;
}
.sukima {
  padding-top: 20px;
  padding-bottom: 20px;
}

.entry {
  font-size: 20px;
  padding-top: 20px;
}
.sukima1 {
  padding-top: 30px;
  padding-bottom: 20px;
}
</style>
