<script>
export default {
  layout: 'maintenance',
  head: {
    title: '企画観覧チケット一覧',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: '企画観覧チケットの一覧'
      },
      {
        hid: 'keyword',
        name: 'keyword',
        content:
          '早稲田 早稲田大学 早稲田祭 早稲田祭2021 企画観覧チケット 一覧 チケット'
      },
      { hid: 'og:type', property: 'og:type', content: 'article' },
      {
        hid: 'og:title',
        property: 'og:title',
        content: '企画観覧チケット一覧'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: '企画観覧チケットの一覧'
      },
      { hid: 'og:url', property: 'og:url', content: '/kanran' },
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
      <Hero> 企画観覧チケット一覧 </Hero>
    </section>
    <Content>
      <SectionTitle :bg-color="'blue'" :class="'ichiran'">
        早稲田キャンパスの観覧チケット企画 一覧
      </SectionTitle>

      <PartTitle :bg-color="'yellow'">
        <strong>10号館109教室ステージ</strong>
      </PartTitle>
      <table border="1">
        <tr>
          <th class="dantaimei">団体名</th>
          <th class="kikakumei">企画名</th>
          <th class="kikakunittei">企画日程</th>
          <th class="jikan">企画時間</th>
        </tr>
        <tr>
          <td>早稲田大学ジャグリングサークル～infinity～</td>
          <td>
            <kanranLink :event="'29'">ジャグリングステージ企画</kanranLink>
          </td>
          <td>11月6日(土)</td>
          <td>10:15～10:55</td>
        </tr>
        <tr>
          <td>競技ダンス部</td>
          <td>
            <kanranLink :event="'30'">競技ダンス部 早稲田祭2021</kanranLink>
          </td>
          <td>11月6日(土)</td>
          <td>11:25～11:55</td>
        </tr>
        <tr>
          <td>早稲田大学躰道会</td>
          <td><kanranLink :event="'31'">演武</kanranLink></td>
          <td>11月6日(土)</td>
          <td>12:25～12:40</td>
        </tr>
        <tr>
          <td>口笛サークル ことリップ</td>
          <td><kanranLink :event="'32'">口笛アンサンブル♪</kanranLink></td>
          <td>11月6日(土)</td>
          <td>13:10～13:50</td>
        </tr>
        <tr>
          <td>東京中野区新風エイサー</td>
          <td><kanranLink :event="'33'">沖縄伝統舞踊</kanranLink></td>
          <td>11月6日(土)</td>
          <td>14:25～14:45</td>
        </tr>
        <tr>
          <td>早稲田雑種おんがく団体チャモロ・フルーメント</td>
          <td><kanranLink :event="'34'">チャモフル単独ステージ</kanranLink></td>
          <td>11月6日(土)</td>
          <td>15:20～15:40</td>
        </tr>
        <tr>
          <td>下駄っぱーず</td>
          <td>
            <kanranLink :event="'35'">下駄っぱーず109教室ステージ</kanranLink>
          </td>
          <td>11月6日(土)</td>
          <td>16:10～16:50</td>
        </tr>
        <tr>
          <td>早稲田大学お笑い工房LUDO</td>
          <td>
            <kanranLink :event="'36'">
              バッキバキ祭2021（10号館109教室ステージ）
            </kanranLink>
          </td>
          <td>11月7日(日)</td>
          <td>10:15～10:55</td>
        </tr>
        <tr>
          <td>津軽三味線愛好会三津巴</td>
          <td><kanranLink :event="'38'">四津巴</kanranLink></td>
          <td>11月7日(日)</td>
          <td>12:20～13:00</td>
        </tr>
        <tr>
          <td>生徒会長</td>
          <td>
            <kanranLink :event="'39'">
              生徒会長単独ライブ「ぶっつけ本番!!」
            </kanranLink>
          </td>
          <td>11月7日(日)</td>
          <td>13:25～13:45</td>
        </tr>
        <tr>
          <td>Flush Bomb</td>
          <td>
            <kanranLink :event="'40'">Flush Bomb′s Special Showcase</kanranLink>
          </td>
          <td>11月7日(日)</td>
          <td>14:10～14:25</td>
        </tr>
        <tr>
          <td>オムニバス</td>
          <td>
            <kanranLink :event="'41'">
              『The Omnibus Musical』～Brave～（10号館109教室ステージ）
            </kanranLink>
          </td>
          <td>11月7日(日)</td>
          <td>15:00～15:40</td>
        </tr>
        <tr>
          <td>早稲田大学書道パフォーマンスサークル 漣</td>
          <td>
            <kanranLink :event="'42'">
              新章開幕! 漣-SAZANAMI-の新たなる挑戦
            </kanranLink>
          </td>
          <td>11月7日(日)</td>
          <td>16:25～16:50</td>
        </tr>
      </table>

      <PartTitle :bg-color="'yellow'" :class="'sukima'">
        <strong>早稲田キャンパス屋外ステージ</strong>
      </PartTitle>
      <table border="1">
        <tr>
          <th class="dantaimei">団体名</th>
          <th class="kikakumei">企画名</th>
          <th class="kikakunittei">企画日程</th>
          <th class="jikan">企画時間</th>
        </tr>
        <tr>
          <td>早稲田大学チアリーダーズFALCONS</td>
          <td><kanranLink :event="'72'">FALCONS単独ステージ</kanranLink></td>
          <td>11月6日(土)</td>
          <td>10:40〜11:05</td>
        </tr>
        <tr>
          <td>早稲田大学“踊り侍”</td>
          <td>
            <kanranLink :event="'73'">
              「突破」（早稲田キャンパス屋外ステージ）
            </kanranLink>
          </td>
          <td>11月6日(土)</td>
          <td>11:20〜11:55</td>
        </tr>
        <tr>
          <td>単位ブレイカーズ</td>
          <td><kanranLink :event="'74'">一単位(ワンピース)</kanranLink></td>
          <td>11月6日(土)</td>
          <td>12:05〜12:20</td>
        </tr>
        <tr>
          <td>Seiren Musical Project</td>
          <td>
            <kanranLink :event="'75'">
              SEIREN FOR YOU（早稲田キャンパス屋外ステージ）
            </kanranLink>
          </td>
          <td>11月6日(土)</td>
          <td>12:35〜13:10</td>
        </tr>
        <tr>
          <td>早稲田大学男祭り2021実行委員会</td>
          <td>
            <kanranLink :event="'76'">男祭り2021夢叫びステージ</kanranLink>
          </td>
          <td>11月6日(土)</td>
          <td>13:25〜14:00</td>
        </tr>
        <tr>
          <td>早稲田大学アイドルコピーダンスサークル</td>
          <td>
            <kanranLink :event="'77'">WASEDA IDOL FESTIVAL 2021</kanranLink>
          </td>
          <td>11月6日(土)</td>
          <td>14:10〜14:30</td>
        </tr>
        <tr>
          <td>怪獣同盟</td>
          <td><kanranLink :event="'78'">怪獣同盟ヒーローショー</kanranLink></td>
          <td>11月6日(土)</td>
          <td>14:45〜15:05</td>
        </tr>
        <tr>
          <td>WASEDA BALLERS</td>
          <td>
            <kanranLink :event="'79'">
              フリースタイルバスケパフォーマンス（早稲田キャンパス屋外ステージ）
            </kanranLink>
          </td>
          <td>11月6日(土)</td>
          <td>15:20〜15:55</td>
        </tr>
        <tr>
          <td>中夜祭2021実行委員会</td>
          <td><kanranLink :event="'80'">中夜祭2021</kanranLink></td>
          <td>11月6日(土)</td>
          <td>16:10〜16:40</td>
        </tr>
        <tr>
          <td>早稲田大学男子チアリーディングチームSHOCKERS</td>
          <td><kanranLink :event="'81'">SHOCKERS 2021</kanranLink></td>
          <td>11月7日(日)</td>
          <td>10:00〜10:30</td>
        </tr>
        <tr>
          <td>早稲田大学よさこいチーム東京花火</td>
          <td>
            <kanranLink :event="'82'">
              東京花火2021（早稲田キャンパス屋外ステージ）
            </kanranLink>
          </td>
          <td>11月7日(日)</td>
          <td>10:45〜11:20</td>
        </tr>
        <tr>
          <td>早稲田大学放送研究会</td>
          <td><kanranLink :event="'4'">FRESHMAN SHOW</kanranLink></td>
          <td>11月7日(日)</td>
          <td>11:35〜12:05</td>
        </tr>
        <tr>
          <td>Waseda University Breakerz</td>
          <td>
            <kanranLink :event="'83'">W.U.B Dance Performance</kanranLink>
          </td>
          <td>11月7日(日)</td>
          <td>12:20〜12:50</td>
        </tr>
        <tr>
          <td>バンカライズム-万色主義-</td>
          <td><kanranLink :event="'84'">「時代を遊べ」</kanranLink></td>
          <td>11月7日(日)</td>
          <td>13:05〜13:20</td>
        </tr>
        <tr>
          <td>早稲田大学ベリーダンスサークルSARAHbelly</td>
          <td>
            <kanranLink :event="'85'">
              Bellydance Stage ~SARAHbelly~（早稲田キャンパス屋外ステージ）
            </kanranLink>
          </td>
          <td>11月7日(日)</td>
          <td>13:35〜14:00</td>
        </tr>
        <tr>
          <td>4年生でも委員会2021</td>
          <td>
            <kanranLink :event="'86'">
              4年生でも委員会2021 早稲田キャンパス屋外ステージ
            </kanranLink>
          </td>
          <td>11月7日(日)</td>
          <td>14:15〜14:50</td>
        </tr>
        <tr>
          <td>早稲田大学チアダンスチームMYNX</td>
          <td>
            <kanranLink :event="'87'">
              早稲田祭2021 MYNXステージ（早稲田キャンパス屋外ステージ） </kanranLink
            ><br />
            ※当日出演者はキャンパスに訪れずステージでのパフォーマンスはなく、ビジョンでの事前収録映像の放映のみを行います。映像放映の観覧希望の方は、企画観覧チケットが必要です。
          </td>
          <td>11月7日(日)</td>
          <td>15:00〜15:25</td>
        </tr>
        <tr>
          <td>企画集団便利舎</td>
          <td><kanranLink :event="'88'">早稲田王決定戦2021</kanranLink></td>
          <td>11月7日(日)</td>
          <td>15:40〜16:15</td>
        </tr>
        <tr>
          <td>わせプロ</td>
          <td><kanranLink :event="'89'">Waseda Collection 2021</kanranLink></td>
          <td>11月7日(日)</td>
          <td>16:30〜17:00</td>
        </tr>
      </table>

      <PartTitle :bg-color="'yellow'" :class="'sukima'">
        <strong>Ending Festival</strong>
      </PartTitle>
      <table border="1">
        <tr>
          <th class="dantaimei">団体名</th>
          <th class="kikakumei">企画名</th>
          <th class="kikakunittei">企画日程</th>
          <th class="jikan">企画時間</th>
        </tr>
        <tr>
          <td>早稲田祭2021運営スタッフ</td>
          <td><kanranLink :event="'284'">Ending Festival</kanranLink></td>
          <td>11月7日(日)</td>
          <td>17:15〜17:55</td>
        </tr>
      </table>

      <PartTitle :bg-color="'yellow'" :class="'sukima'">
        <strong>WASEDA NiGht ParadiSe</strong>
      </PartTitle>
      <table border="1">
        <tr>
          <th class="dantaimei">団体名</th>
          <th class="kikakumei">企画名</th>
          <th class="kikakunittei">企画日程</th>
          <th class="jikan">企画時間</th>
        </tr>
        <tr>
          <td>早稲田祭2021運営スタッフ</td>
          <td>
            <kanranLink :event="'287'">
              WASEDA NiGht ParadiSe（早稲田キャンパス屋外ステージ）
            </kanranLink>
          </td>
          <td>11月6日(土)</td>
          <td>16:55〜17:25</td>
        </tr>
      </table>

      <SectionTitle :bg-color="'blue'" :class="'ichiran'">
        戸山キャンパスの観覧チケット企画 一覧
      </SectionTitle>
      <PartTitle :bg-color="'yellow'">
        <strong>戸山カフェテリアステージ</strong>
      </PartTitle>
      <table border="1">
        <tr>
          <th class="dantaimei">団体名</th>
          <th class="kikakumei">企画名</th>
          <th class="kikakunittei">企画日程</th>
          <th class="jikan">企画時間</th>
        </tr>
        <tr>
          <td>Twinkle</td>
          <td>
            <kanranLink :event="'14'">
              Twinkle K-POP Cover Dance Show（戸山カフェテリアステージ)
            </kanranLink>
          </td>
          <td>11月6日(土)</td>
          <td>10:55～11:35</td>
        </tr>
        <tr>
          <td>わせだ吹奏楽同好会(緩)</td>
          <td><kanranLink :event="'15'">がっそうぐらし！(ゆる)</kanranLink></td>
          <td>11月6日(土)</td>
          <td>11:55～12:35</td>
        </tr>
        <tr>
          <td>TAP-LOVERS</td>
          <td>
            <kanranLink :event="'16'">
              TAP-LOVERS×早稲田祭special stage（戸山カフェテリアステージ）
            </kanranLink>
          </td>
          <td>11月6日(土)</td>
          <td>13:05～13:40</td>
        </tr>
        <tr>
          <td>津軽三味線愛好会三津巴</td>
          <td>
            <kanranLink :event="'17'">
              三津巴早稲田祭ステージ2021in戸山
            </kanranLink>
          </td>
          <td>11月6日(土)</td>
          <td>14:05～14:35</td>
        </tr>
        <tr>
          <td>早稲田大学ベリーダンスサークルSARAHbelly</td>
          <td>
            <kanranLink :event="'18'">
              Bellydance Stage ~SARAHbelly~（戸山カフェテリアステージ）
            </kanranLink>
          </td>
          <td>11月6日(土)</td>
          <td>15:00～15:25</td>
        </tr>
        <tr>
          <td>D-pop</td>
          <td><kanranLink :event="'19'">D-pop magic!</kanranLink></td>
          <td>11月6日(土)</td>
          <td>15:45～16:00</td>
        </tr>
        <tr>
          <td>早稲田大学K-POPカバーダンスサークルParfum</td>
          <td>
            <kanranLink :event="'20'">
              Parfum ～Prologue Stage～ @Toyama
            </kanranLink>
          </td>
          <td>11月6日(土)</td>
          <td>16:20～17:00</td>
        </tr>
        <tr>
          <td>早稲田大学書道パフォーマンスサークル 漣</td>
          <td>
            <kanranLink :event="'21'">
              初代最終章、漣−SAZANAMI−の大波に乗れ！
            </kanranLink>
          </td>
          <td>11月7日(日)</td>
          <td>10:25～10:50</td>
        </tr>
        <tr>
          <td>Waseda Fes. Research Team</td>
          <td><kanranLink :event="'22'">早稲祭いいとこ選手権</kanranLink></td>
          <td>11月7日(日)</td>
          <td>11:20～11:35</td>
        </tr>
        <tr>
          <td>早稲田大学バレエサークルCiel</td>
          <td>
            <kanranLink :event="'23'">
              ラグタイムを使用したオリジナルパフォーマンス
            </kanranLink>
          </td>
          <td>11月7日(日)</td>
          <td>11:55～12:10</td>
        </tr>
        <tr>
          <td>WASEDA BALLERS</td>
          <td>
            <kanranLink :event="'24'">
              フリースタイルバスケパフォーマンス（戸山カフェテリアステージ）
            </kanranLink>
          </td>
          <td>11月7日(日)</td>
          <td>12:30～13:00</td>
        </tr>
        <tr>
          <td>Dance Team Brilliant Pinks</td>
          <td>
            <kanranLink :event="'25'">
              Brilliant Pinks Perf. 2021（戸山カフェテリアステージ）
            </kanranLink>
          </td>
          <td>11月7日(日)</td>
          <td>13:20～13:45</td>
        </tr>
        <tr>
          <td>Seiren Musical Project</td>
          <td>
            <kanranLink :event="'1'">
              SEIREN FOR YOU（戸山カフェテリアステージ）
            </kanranLink>
          </td>
          <td>11月7日(日)</td>
          <td>14:05～14:40</td>
        </tr>
        <tr>
          <td>WASElele</td>
          <td>
            <kanranLink :event="'26'">Ukulele special performance</kanranLink>
          </td>
          <td>11月7日(日)</td>
          <td>15:00～15:20</td>
        </tr>
        <tr>
          <td>魁響</td>
          <td><kanranLink :event="'27'">魁響2021早稲田祭『祭』</kanranLink></td>
          <td>11月7日(日)</td>
          <td>15:45～16:15</td>
        </tr>
        <tr>
          <td>わせだ男子</td>
          <td>
            <kanranLink :event="'28'">
              わせだ男子 Live 2021 〜その瞬間だけ僕らはジャニーズ〜
            </kanranLink>
          </td>
          <td>11月7日(日)</td>
          <td>16:35～17:00</td>
        </tr>
      </table>

      <PartTitle :bg-color="'yellow'" :class="'sukima'">
        <strong>「つながる願い、紺碧の空へ」</strong>
      </PartTitle>
      <table border="1">
        <tr>
          <th class="dantaimei">団体名</th>
          <th class="kikakumei">企画名</th>
          <th class="kikakunittei">企画日程</th>
          <th class="jikan">企画時間</th>
        </tr>
        <tr>
          <td>早稲田祭2021運営スタッフ</td>
          <td>
            <kanranLink :event="'273'">つながる願い、紺碧の空へ</kanranLink>
          </td>
          <td>11月7日(日)</td>
          <td>16:00～16:15</td>
        </tr>
      </table>

      <SectionTitle :bg-color="'blue'" :class="'ichiran'">
        キャンパス構外の観覧チケット企画 一覧
      </SectionTitle>
      <PartTitle :bg-color="'yellow'">
        <strong>大隈記念講堂大講堂</strong>
      </PartTitle>
      <table border="1">
        <tr>
          <th class="dantaimei">団体名</th>
          <th class="kikakumei">企画名</th>
          <th class="kikakunittei">企画日程</th>
          <th class="jikan">企画時間</th>
        </tr>
        <tr>
          <td>三弦サークル合同演奏会</td>
          <td><kanranLink :event="'2'">三弦サークル合同演奏会</kanranLink></td>
          <td>11月6日(土)</td>
          <td>10:10～11:45</td>
        </tr>
        <tr>
          <td>早稲田大学フィルハーモニー管絃楽団</td>
          <td>
            <kanranLink :event="'90'">
              早稲田祭公演2021 〜ブラームス・ツィクルス〜
            </kanranLink>
          </td>
          <td>11月6日(土)</td>
          <td>14:30～15:15</td>
        </tr>
        <tr>
          <td>早大ピアノの会</td>
          <td>
            <kanranLink :event="'91'">
              わせだカンタービレ2021 ～ピアノで奏でる人生～
            </kanranLink>
          </td>
          <td>11月7日(日)</td>
          <td>10:30～12:40</td>
        </tr>
        <tr>
          <td>早稲田吹奏楽団</td>
          <td>
            <kanranLink :event="'92'">早稲田吹奏楽団 早稲田祭公演</kanranLink>
          </td>
          <td>11月7日(日)</td>
          <td>15:00～16:00</td>
        </tr>
      </table>

      <PartTitle :bg-color="'yellow'" :class="'sukima'">
        <strong>大隈記念講堂小講堂</strong>
      </PartTitle>
      <table border="1">
        <tr>
          <th class="dantaimei">団体名</th>
          <th class="kikakumei">企画名</th>
          <th class="kikakunittei">企画日程</th>
          <th class="jikan">企画時間</th>
        </tr>
        <tr>
          <td>早稲田マンドリン楽部</td>
          <td>
            <kanranLink :event="'93'">
              マンドリンミニコンサート（1日目）
            </kanranLink>
          </td>
          <td>11月6日(土)</td>
          <td>10:00～11:30</td>
        </tr>
        <tr>
          <td>オルケスタ・デ・タンゴ・ワセダ</td>
          <td><kanranLink :event="'94'">Tango2021</kanranLink></td>
          <td>11月6日(土)</td>
          <td>12:40～13:40</td>
        </tr>
        <tr>
          <td>ショパンの会</td>
          <td><kanranLink :event="'95'">早稲田祭特別演奏会</kanranLink></td>
          <td>11月6日(土)</td>
          <td>15:00～17:00</td>
        </tr>
        <tr>
          <td>Swing & Jazz Club</td>
          <td>
            <kanranLink :event="'96'">Swing & Jazz Club 早稲田祭</kanranLink>
          </td>
          <td>11月7日(日)</td>
          <td>10:15～12:45</td>
        </tr>
        <tr>
          <td>ギタークラブ</td>
          <td>
            <kanranLink :event="'97'">
              早稲田大学ギタークラブ 早稲田祭コンサート2021
            </kanranLink>
          </td>
          <td>11月7日(日)</td>
          <td>15:00～16:10</td>
        </tr>
      </table>

      <PartTitle :bg-color="'yellow'" :class="'sukima'">
        <strong>小野記念講堂ステージ</strong>
      </PartTitle>
      <table border="1">
        <tr>
          <th class="dantaimei">団体名</th>
          <th class="kikakumei">企画名</th>
          <th class="kikakunittei">企画日程</th>
          <th class="jikan">企画時間</th>
        </tr>
        <tr>
          <td>オムニバス</td>
          <td>
            <kanranLink :event="'58'">
              『The Omnibus Musical』～Brave～（小野記念講堂ステージ）
            </kanranLink>
          </td>
          <td>11月6日(土)</td>
          <td>11:00～11:40</td>
        </tr>
        <tr>
          <td>aka Wa.Se.Da.</td>
          <td>
            <kanranLink :event="'59'">
              aka Wa.Se.Da.〜早稲田祭2021ver.〜
            </kanranLink>
          </td>
          <td>11月6日(土)</td>
          <td>12:05～12:35</td>
        </tr>
        <tr>
          <td>早稲田大学KPOPカバーダンスサークルParfum</td>
          <td>
            <kanranLink :event="'60'">
              Parfum ～Prologue Stage～ @Ono
            </kanranLink>
          </td>
          <td>11月6日(土)</td>
          <td>13:00～13:40</td>
        </tr>
        <tr>
          <td>早大ピアノの会</td>
          <td>
            <kanranLink :event="'61'">
              野外演奏会WPS Illuminates the world
            </kanranLink>
          </td>
          <td>11月6日(土)</td>
          <td>14:20～14:50</td>
        </tr>
        <tr>
          <td>早稲田☆フェアリーズ</td>
          <td>
            <kanranLink :event="'62'">早稲田☆フェアリーズ2021</kanranLink>
          </td>
          <td>11月6日(土)</td>
          <td>15:15～15:55</td>
        </tr>
        <tr>
          <td>Prismile</td>
          <td><kanranLink :event="'63'">Prismile単独ステージ</kanranLink></td>
          <td>11月6日(土)</td>
          <td>16:20～17:00</td>
        </tr>
        <tr>
          <td>早稲田大学ハワイ民族舞踊研究会</td>
          <td>
            <kanranLink :event="'64'">
              wasehula単独ステージ2021（小野記念講堂ステージ
            </kanranLink>
          </td>
          <td>11月7日(日)</td>
          <td>10:10～10:50</td>
        </tr>
        <tr>
          <td>早稲田大学ディズニー研究会</td>
          <td>
            <kanranLink :event="'65'">
              早稲田大学ディズニー研究会ダンス部
            </kanranLink>
          </td>
          <td>11月7日(日)</td>
          <td>11:15～11:30</td>
        </tr>
        <tr>
          <td>TAP-LOVERS</td>
          <td>
            <kanranLink :event="'66'">
              TAP-LOVERS×早稲田祭special stage（小野記念講堂ステージ）
            </kanranLink>
          </td>
          <td>11月7日(日)</td>
          <td>12:10～12:45</td>
        </tr>
        <tr>
          <td>WEEDL</td>
          <td><kanranLink :event="'67'">WEEDL</kanranLink></td>
          <td>11月7日(日)</td>
          <td>13:10～13:25</td>
        </tr>
        <tr>
          <td>早稲田大学お笑い工房LUDO</td>
          <td>
            <kanranLink :event="'68'">
              バッキバキ祭2021（小野記念講堂ステージ）
            </kanranLink>
          </td>
          <td>11月7日(日)</td>
          <td>13:50～14:30</td>
        </tr>
        <tr>
          <td>早稲田大学バレエサークルCiel</td>
          <td>
            <kanranLink :event="'69'">
              くるみ割り人形よりオリジナルパフォーマンス
            </kanranLink>
          </td>
          <td>11月7日(日)</td>
          <td>14:55～15:10</td>
        </tr>
        <tr>
          <td>早稲田大学居合道部</td>
          <td><kanranLink :event="'70'">早稲田祭演武2021</kanranLink></td>
          <td>11月7日(日)</td>
          <td>15:35～15:55</td>
        </tr>
        <tr>
          <td>早稲田大学よさこいチーム東京花火</td>
          <td>
            <kanranLink :event="'82'">
              東京花火2021（小野記念講堂ステージ）
            </kanranLink>
          </td>
          <td>11月7日(日)</td>
          <td>16:20～17:00</td>
        </tr>
      </table>

      <PartTitle :bg-color="'yellow'" :class="'sukima'">
        <strong>どらま館</strong>
      </PartTitle>
      <table border="1">
        <tr>
          <th class="dantaimei">団体名</th>
          <th class="kikakumei">企画名</th>
          <th class="kikakunittei">企画日程</th>
          <th class="jikan">企画時間</th>
        </tr>
        <tr>
          <td>演劇集団ところで</td>
          <td><kanranLink :event="'98'">告解</kanranLink></td>
          <td>11月6日(土)</td>
          <td>11:00～11:40</td>
        </tr>
        <tr>
          <td>好きでもないのにキスは出来ない</td>
          <td>
            <kanranLink :event="'100'">
              好きでもないのにキスは出来ない 早稲田祭公演
            </kanranLink>
          </td>
          <td>11月6日(土)</td>
          <td>16:00～16:40</td>
        </tr>
        <tr>
          <td>ビーバー、ラムネ瓶をかじる</td>
          <td><kanranLink :event="'101'">日曜日の太陽</kanranLink></td>
          <td>11月7日(日)</td>
          <td>11:30～12:10</td>
        </tr>
        <tr>
          <td>早稲田大学フラメンコ集団¡VAMOS!</td>
          <td><kanranLink :event="'102'">フラメンコパラダイス</kanranLink></td>
          <td>11月7日(日)</td>
          <td>14:00～14:30</td>
        </tr>
      </table>

      <PartTitle :bg-color="'yellow'" :class="'sukima'">
        <strong>WASEDA NiGht ParadiSe</strong>
      </PartTitle>
      <table border="1">
        <tr>
          <th class="dantaimei">団体名</th>
          <th class="kikakumei">企画名</th>
          <th class="kikakunittei">企画日程</th>
          <th class="jikan">企画時間</th>
        </tr>
        <tr>
          <td>早稲田祭2021運営スタッフ</td>
          <td>
            <kanranLink :event="'288'">
              WASEDA NiGht ParadiSe（大隈記念講堂大講堂）
            </kanranLink>
          </td>
          <td>11月6日(土)</td>
          <td>17:30〜18:00</td>
        </tr>
      </table>

      <SectionTitle :bg-color="'blue'" :class="'ichiran'">
        <strong>団体が独自に整理券を発行している企画</strong>
      </SectionTitle>
      <table border="1" class="table-type1">
        <tr>
          <th class="dantaimei1">団体名</th>
          <th class="kikakumei1">企画名</th>
          <th class="kikakunittei1">企画日程</th>
          <th class="jikan1">企画時間</th>
          <th class="bikou1">備考</th>
        </tr>
        <tr>
          <td>ハイソサエティ・オーケストラ</td>
          <td>
            <kanranLink :event="'194'">
              ハイソサエティ・オーケストラ ビッグバンドジャズライブ
            </kanranLink>
          </td>
          <td>11月6日(土)</td>
          <td>13:00〜16:00</td>
          <td>
            無料の整理券が必要です。キャンパス入場チケットを持っている方を対象に、<a
              href="https://forms.gle/DxHUCj2SEeCuJ2vP8"
              target="_blank"
              rel="noopener noreferrer"
              class="link"
              >こちらのサイト</a
            >で11月1日(月)
            よりオンラインにてチケットを配布する予定です。当日は、チケットを所持している方のみ、企画教室での観覧が可能です。
          </td>
        </tr>
        <tr>
          <td>Voice Up Japan Waseda</td>
          <td>
            <kanranLink :event="'182'">
              これってホント？生理と性的同意
            </kanranLink>
          </td>
          <td>11月6日(土)</td>
          <td>14:30～16:30</td>
          <td>
            キャンパス入場チケットを持っている方を対象に、<a
              href="https://peatix.com/event/3023011"
              target="_blank"
              rel="noopener noreferrer"
              class="link"
              >こちらのサイト</a
            >で「これってホント？生理と性的同意 True or False? Period and Sexual
            Consent」企画の整理券配布を事前に行います。なお、当日は「これってホント？生理と性的同意
            True or False? Period and Sexual
            Consent」企画、並びに協賛物の配布・出版物の販売を行なっているため、整理券を所持していない方も企画教室に入退場可能です。
          </td>
        </tr>
        <tr>
          <td>早稲田大学マスコミ研究会</td>
          <td>
            <kanranLink :event="'200'">“あなたの”赤い夢を探そう</kanranLink>
          </td>
          <td>11月6日(土)</td>
          <td>15:00～17:00</td>
          <td>
            無料の整理券が必要です。キャンパス入場チケットを持っている方を対象に事前にオンラインにて配布しておりますので詳細は団体公式SNSをご覧ください。当日は、チケットを所持している方のみ、企画教室での観覧が可能です。
          </td>
        </tr>
        <tr>
          <td>企画集団便利舎</td>
          <td>
            <kanranLink :event="'11'">早稲田まーちゃんクイズ王</kanranLink>
          </td>
          <td>11月6日(土)</td>
          <td>15:30～17:00</td>
          <td>
            キャンパス入場チケットを持っている方を対象に、<a
              href="https://t.livepocket.jp/e/tcgwq"
              target="_blank"
              rel="noopener noreferrer"
              class="link"
              >こちらのサイト</a
            >で事前に整理券の配布を行います。企画当日は整理券を所持している方のみ、企画教室にて観覧可能です。
          </td>
        </tr>
        <tr>
          <td>AGESTOCK2021実行委員会</td>
          <td>
            <kanranLink :event="'9'">AGESTOCK2021 in 早稲田祭</kanranLink>
          </td>
          <td>11月7日(日)</td>
          <td>14:00～15:00／16:00～17:00</td>
          <td>
            無料のチケットが必要です。キャンパス入場チケットを持っている方を対象に、
            <a
              href="https://t.livepocket.jp/e/bkevh"
              target="_blank"
              rel="noopener noreferrer"
              class="link"
              >こちらのサイト</a
            >と<a
              href="https://t.livepocket.jp/e/5gh8p"
              target="_blank"
              rel="noopener noreferrer"
              class="link"
              >こちらのサイト</a
            >で事前にチケットの配布を行います。
          </td>
        </tr>
      </table>

      <SectionTitle :bg-color="'blue'" :class="'ichiran'">
        <strong>早稲田祭2021当日以外の企画</strong>
      </SectionTitle>
      <Paragraph>
        ※<span style="color: red">キャンパス入場チケット</span>は不要
      </Paragraph>
      <Paragraph>
        ※<span style="color: red">Countdown Event（11月2日(火)、3日(水)）</span
        >は企画観覧チケットも不要
      </Paragraph>
      <table border="1">
        <tr>
          <th class="dantaimei2">団体名</th>
          <th class="kikakumei2">企画名</th>
          <th class="basho2">企画場所</th>
          <th class="kikakunittei2">企画日程</th>
          <th class="jikan2">企画時間</th>
          <th class="bikou2">備考</th>
        </tr>
        <tr>
          <td>早稲田祭2021運営スタッフ</td>
          <td>
            <kanranLink :event="'283'">
              Countdown Event（11月4日(木)）
            </kanranLink>
          </td>
          <td>大隈記念講堂大講堂</td>
          <td>11月4日(木)</td>
          <td>18:50～19:30</td>
          <td>
            10月28日 12:00から<a
              href="https://t.livepocket.jp/e/jw08u"
              target="_blank"
              rel="noopener noreferrer"
              class="link"
              >こちらのURL</a
            >から先着でチケットを発行いたします。
          </td>
        </tr>
        <tr>
          <td>早稲田祭2021運営スタッフ</td>
          <td><kanranLink :event="'297'">前夜祭</kanranLink></td>
          <td>大隈記念講堂大講堂</td>
          <td>11月5日(金)</td>
          <td>17:15～18:30</td>
          <td>
            10月28日 12:00から<a
              href="https://u.livepocket.jp/zhmxQ"
              target="_blank"
              rel="noopener noreferrer"
              class="link"
              >こちらのURL</a
            >から先着でチケットを発行いたします。
          </td>
        </tr>
      </table>
    </Content>
  </div>
</template>

<style scoped>
/* SectionTitle */
.ichiran {
  margin-top: 1rem;
}

.PartTitle {
  font-size: 15px;
}

.sukima {
  padding-top: 2rem;
}

.link {
  color: #274c82;
}

table {
  border-collapse: collapse;
  width: 100%;
  max-width: 100%;
}

table th {
  /*table内のthに対して*/
  padding: 8px; /*上下左右10pxずつ*/
  background: #e8b7c7;
  color: white;
  font-size: 15px;
}

table td {
  /*table内のtdに対して*/
  padding: 3px 10px; /*上下3pxで左右10px*/
  font-size: 15px;
}

@media screen and (max-width: 920px) {
  table td {
    font-size: 12px;
    padding: 4px 6px;
  }
}

/*
TYPE0
 */
.dantaimei {
  width: 25%;
}
.kikakumei {
  width: 25%;
}
.kikakunittei {
  width: 25%;
}
.jikan {
  width: 25%;
}

/*
TYPE1
 */
.dantaimei1 {
  width: 20%;
}
.kikakumei1 {
  width: 20%;
}
.kikakunittei1 {
  width: 10%;
}
.jikan1 {
  width: 10%;
}
.bikou1 {
  width: 40%;
}
@media screen and (max-width: 500px) {
  .table-type1 {
    display: block;
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
  }

  .dantaimei1 {
    width: 15%;
  }

  .kikakumei1 {
    width: 15%;
  }

  .kikakunittei1 {
    width: 10%;
    min-width: 80px;
  }

  .jikan1 {
    width: 25%;
    min-width: 80px;
  }

  .bikou1 {
    width: 45%;
    min-width: 240px;
  }
}

/*
TYPE2
*/
.dantaimei2 {
  width: 15%;
}
.kikakumei2 {
  width: 15%;
}
.basho2 {
  width: 15%;
}
.kikakunittei2 {
  width: 15%;
}
.jikan2 {
  width: 15%;
}
.bikou2 {
  width: 25%;
}
</style>
