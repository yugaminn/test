<script>
import ScrollHint from 'scroll-hint'
const $ = require('jquery')
export default {
  layout: 'maintenance',
  head: {
    title: 'タイムテーブル',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          '早稲田祭のタイムテーブルです。こちらからは、各ステージのタイムテーブルがご覧いただけます。'
      },
      {
        hid: 'keyword',
        name: 'keyword',
        content: '早稲田祭2023,タイムテーブル,時間,ステージ'
      },
      { hid: 'og:type', property: 'og:type', content: 'article' },
      { hid: 'og:title', property: 'og:title', content: 'タイムテーブル' },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          '早稲田祭のタイムテーブルです。こちらからは、各ステージのタイムテーブルがご覧いただけます。'
      },
      { hid: 'og:url', property: 'og:url', content: '/timetable' },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://wasedasai.net/images/logo.png'
      }
    ]
  },

  mounted() {
    $(function () {
      // タブ切り替え
      $('.date li').click(function () {
        const index = $('.date li').index(this)
        $('.date li, .panel').removeClass('active')
        $(this).addClass('active')
        $('.panel').eq(index).addClass('active')
      })
      // 会場切り替え
      $('.date .first').click(function () {
        $('.case1').addClass('active')
        $('.map-img').removeClass('active')
        $('.waseda').addClass('active')
        $('.panelsp1').removeClass('activesp')
        $('.panelsp2').removeClass('activesp')
        $('.day1_sp1').addClass('activesp')
        $('.swremover').removeClass('activeswitch')
        $('.switch_sp-1').addClass('activeswitch')
      })
      $('.date .second').click(function () {
        $('.timetable').removeClass('active')
        $('.case4').addClass('active')
        $('.map-img').removeClass('active')
        $('.waseda').addClass('active')
        $('.panelsp1').removeClass('activesp')
        $('.panelsp2').removeClass('activesp')
        $('.day2_sp1').addClass('activesp')
        $('.swremover').removeClass('activeswitch')
        $('.switch_sp-4').addClass('activeswitch')
      })

      $('.switch_sp-1').click(function () {
        $('.panelsp1').removeClass('activesp')
        $('.day1_sp5').addClass('activesp')
        $('.map-img').removeClass('active')
        $('.kougai').addClass('active')
        $('.swremover').removeClass('activeswitch')
        $('.switch_sp-7').addClass('activeswitch')
        $('.switch_sp-8').addClass('activeswitch')
      })
      $('.switch_sp-2').click(function () {
        $('.panelsp1').removeClass('activesp')
        $('.day1_sp2').addClass('activesp')
        $('.map-img').removeClass('active')
        $('.toyama').addClass('active')
        $('.swremover').removeClass('activeswitch')
        $('.switch_sp-3').addClass('activeswitch')
        $('.switch_sp-4').addClass('activeswitch')
      })
      $('.switch_sp-3').click(function () {
        $('.panelsp1').removeClass('activesp')
        $('.day1_sp1').addClass('activesp')
        $('.map-img').removeClass('active')
        $('.waseda').addClass('active')
        $('.swremover').removeClass('activeswitch')
        $('.switch_sp-1').addClass('activeswitch')
        $('.switch_sp-2').addClass('activeswitch')
      })
      $('.switch_sp-4').click(function () {
        $('.panelsp1').removeClass('activesp')
        $('.day1_sp3').addClass('activesp')
        $('.map-img').removeClass('active')
        $('.kougai').addClass('active')
        $('.swremover').removeClass('activeswitch')
        $('.switch_sp-5').addClass('activeswitch')
        $('.switch_sp-6').addClass('activeswitch')
      })

      $('.switch_sp-5').click(function () {
        $('.panelsp1').removeClass('activesp')
        $('.day1_sp2').addClass('activesp')
        $('.map-img').removeClass('active')
        $('.toyama').addClass('active')
        $('.swremover').removeClass('activeswitch')
        $('.switch_sp-3').addClass('activeswitch')
        $('.switch_sp-4').addClass('activeswitch')
      })

      $('.switch_sp-6').click(function () {
        $('.panelsp1').removeClass('activesp')
        $('.day1_sp4').addClass('activesp')
        $('.map-img').removeClass('active')
        $('.kougai').addClass('active')
        $('.swremover').removeClass('activeswitch')
        $('.switch_sp-7').addClass('activeswitch')
        $('.switch_sp-8').addClass('activeswitch')
      })

      $('.switch_sp-7').click(function () {
        $('.panelsp1').removeClass('activesp')
        $('.day1_sp3').addClass('activesp')
        $('.map-img').removeClass('active')
        $('.kougai').addClass('active')
        $('.swremover').removeClass('activeswitch')
        $('.switch_sp-5').addClass('activeswitch')
        $('.switch_sp-6').addClass('activeswitch')
      })

      $('.switch_sp-8').click(function () {
        $('.panelsp1').removeClass('activesp')
        $('.day1_sp5').addClass('activesp')
        $('.map-img').removeClass('active')
        $('.kougai').addClass('active')
        $('.swremover').removeClass('activeswitch')
        $('.switch_sp-9').addClass('activeswitch')
        $('.switch_sp-10').addClass('activeswitch')
      })

      $('.switch_sp-9').click(function () {
        $('.panelsp1').removeClass('activesp')
        $('.day1_sp4').addClass('activesp')
        $('.map-img').removeClass('active')
        $('.kougai').addClass('active')
        $('.swremover').removeClass('activeswitch')
        $('.switch_sp-7').addClass('activeswitch')
        $('.switch_sp-8').addClass('activeswitch')
      })

      $('.switch_sp-10').click(function () {
        $('.panelsp1').removeClass('activesp')
        $('.day1_sp1').addClass('activesp')
        $('.map-img').removeClass('active')
        $('.waseda').addClass('active')
        $('.swremover').removeClass('activeswitch')
        $('.switch_sp-1').addClass('activeswitch')
        $('.switch_sp-2').addClass('activeswitch')
      })

      $('.switch_sp-11').click(function () {
        $('.panelsp1').removeClass('activesp')
        $('.day2_sp5').addClass('activesp')
        $('.map-img').removeClass('active')
        $('.kougai').addClass('active')
        $('.swremover').removeClass('activeswitch')
        $('.switch_sp-19').addClass('activeswitch')
        $('.switch_sp-20').addClass('activeswitch')
      })

      $('.switch_sp-12').click(function () {
        $('.panelsp1').removeClass('activesp')
        $('.day2_sp2').addClass('activesp')
        $('.map-img').removeClass('active')
        $('.toyama').addClass('active')
        $('.swremover').removeClass('activeswitch')
        $('.switch_sp-13').addClass('activeswitch')
        $('.switch_sp-14').addClass('activeswitch')
      })

      $('.switch_sp-13').click(function () {
        $('.panelsp1').removeClass('activesp')
        $('.day2_sp1').addClass('activesp')
        $('.map-img').removeClass('active')
        $('.waseda').addClass('active')
        $('.swremover').removeClass('activeswitch')
        $('.switch_sp-11').addClass('activeswitch')
        $('.switch_sp-12').addClass('activeswitch')
      })

      $('.switch_sp-14').click(function () {
        $('.panelsp1').removeClass('activesp')
        $('.day2_sp3').addClass('activesp')
        $('.map-img').removeClass('active')
        $('.kougai').addClass('active')
        $('.swremover').removeClass('activeswitch')
        $('.switch_sp-15').addClass('activeswitch')
        $('.switch_sp-16').addClass('activeswitch')
      })

      $('.switch_sp-15').click(function () {
        $('.panelsp1').removeClass('activesp')
        $('.day2_sp2').addClass('activesp')
        $('.map-img').removeClass('active')
        $('.toyama').addClass('active')
        $('.swremover').removeClass('activeswitch')
        $('.switch_sp-13').addClass('activeswitch')
        $('.switch_sp-14').addClass('activeswitch')
      })

      $('.switch_sp-16').click(function () {
        $('.panelsp1').removeClass('activesp')
        $('.day2_sp4').addClass('activesp')
        $('.map-img').removeClass('active')
        $('.kougai').addClass('active')
        $('.swremover').removeClass('activeswitch')
        $('.switch_sp-17').addClass('activeswitch')
        $('.switch_sp-18').addClass('activeswitch')
      })

      $('.switch_sp-17').click(function () {
        $('.panelsp1').removeClass('activesp')
        $('.day2_sp3').addClass('activesp')
        $('.map-img').removeClass('active')
        $('.kougai').addClass('active')
        $('.swremover').removeClass('activeswitch')
        $('.switch_sp-15').addClass('activeswitch')
        $('.switch_sp-16').addClass('activeswitch')
      })

      $('.switch_sp-18').click(function () {
        $('.panelsp1').removeClass('activesp')
        $('.day2_sp5').addClass('activesp')
        $('.map-img').removeClass('active')
        $('.kougai').addClass('active')
        $('.swremover').removeClass('activeswitch')
        $('.switch_sp-19').addClass('activeswitch')
        $('.switch_sp-20').addClass('activeswitch')
      })

      $('.switch_sp-19').click(function () {
        $('.panelsp1').removeClass('activesp')
        $('.day2_sp4').addClass('activesp')
        $('.map-img').removeClass('active')
        $('.kougai').addClass('active')
        $('.swremover').removeClass('activeswitch')
        $('.switch_sp-17').addClass('activeswitch')
        $('.switch_sp-18').addClass('activeswitch')
      })

      $('.switch_sp-20').click(function () {
        $('.panelsp1').removeClass('activesp')
        $('.day2_sp1').addClass('activesp')
        $('.map-img').removeClass('active')
        $('.waseda').addClass('active')
        $('.swremover').removeClass('activeswitch')
        $('.switch_sp-11').addClass('activeswitch')
        $('.switch_sp-12').addClass('activeswitch')
      })
    })
    this.$nextTick(() => {
      /* eslint-disable no-new */
      new ScrollHint('.js-scrollable', {
        i18n: {
          scrollable: 'スクロールできます'
        }
      })
    })
  }
}
</script>

<template>
  <div>
    <Hero>タイムテーブル</Hero>

    <div class="map">
      <img
        src="~/assets/images/waseda.png"
        alt=""
        class="map-img waseda active" />

      <img src="~/assets/images/toyama.png" alt="" class="map-img toyama" />

      <img src="~/assets/images/koiki.png" alt="" class="map-img kougai" />
    </div>
    <div class="haishin">
      <Paragraph
        >大隈講堂前ステージの配信は<a
          href="https://www.youtube.com/@user-sd2lt1rm4t"
          >こちら</a
        >から</Paragraph
      >
      <Paragraph
        >戸山カフェテリアステージの配信は<a
          href="https://www.youtube.com/@user-hc3bq4qb2x"
          >こちら</a
        >から</Paragraph
      >
    </div>
    <ul class="date">
      <li class="active first">11月4日（土）</li>
      <li class="second">11月5日（日）</li>
    </ul>

    <div class="day1_sp1 activesp panelsp1">
      <!--ここから-->

      <div class="buttoncontainer">
        <div class="button switch_sp-1 activeswitch swremover">
          <img src="../../assets/images/timetable/button.png" />
        </div>

        <div class="buttoncontainer1">
          <div class="spacer" />
          <div class="syurui1">
            <img src="../../assets/images/timetable/3gokan.png" />
          </div>
          <div class="syurui2">
            <img src="../../assets/images/timetable/5gokan.png" />
          </div>
        </div>

        <div class="button2 switch_sp-2 activeswitch swremover">
          <img src="../../assets/images/timetable/button2.png" />
        </div>
      </div>
      <div class="forwindow">
        <div class="ttcontainer">
          <div class="ttbox">
            <div class="timearea">10</div>
            <div class="timeline">
              <div class="line1" />
              <div class="line2" />
              <div class="line3" />
            </div>
          </div>

          <div class="contents1-1 w1-1-1-1">
            <a
              href="https://platinumaps.jp/d/wasedasai?s=220402&lm=142&modal=list&floor=G">
              <div class="time">10:00~10:40</div>
              <div class="name">Parfum stage ~mirage~ @Waseda</div>
            </a>
          </div>

          <div class="contents1-2 w1-1-2-1">
            <a
              href="https://platinumaps.jp/d/wasedasai?s=220564&lm=144&modal=list&floor=G">
              <div class="time">10:00~10:30</div>
              <div class="name">書道パフォーマンス</div>
            </a>
          </div>

          <div class="contents1-2 w1-1-2-2 layouts">
            <a
              href="https://platinumaps.jp/d/wasedasai?s=220565&lm=144&modal=list&floor=G">
              <div class="time">10:40~10:50</div>
              <div class="name">バレエサークルCiel</div>
            </a>
          </div>

          <div class="contents1-1 w1-1-1-2">
            <a
              href="https://platinumaps.jp/d/wasedasai?s=220403&lm=142&modal=list&floor=G">
              <div class="time">10:50~11:05</div>
              <div class="name">
                旗と共に舞う！ワセガシラ早稲田祭ステージ2023
              </div>
            </a>
          </div>

          <div class="ttbox">
            <div class="timearea">11</div>
            <div class="timeline">
              <div class="line1" />
              <div class="line2" />
              <div class="line3" />
            </div>
          </div>

          <div class="contents1-1 w1-1-1-3">
            <a
              href="https://platinumaps.jp/d/wasedasai?s=220404&lm=142&modal=list&floor=G">
              <div class="time">11:15~11:40</div>
              <div class="name">WASEDA BALLERS 早稲田祭スペシャルステージ</div>
            </a>
          </div>

          <div class="contents1-2 w1-1-2-3 layouts">
            <a
              href="https://platinumaps.jp/d/wasedasai?s=220602&lm=144&modal=list&floor=G">
              <div class="time">11:05~11:15</div>
              <div class="name">沖縄伝統エイサー</div>
            </a>
          </div>

          <div class="contents1-1 w1-1-1-4">
            <a
              href="https://platinumaps.jp/d/wasedasai?s=220405&lm=142&modal=list&floor=G">
              <div class="time">11:50~12:10</div>
              <div class="name">WASEDAN Festival</div>
            </a>
          </div>

          <div class="contents1-2 w1-1-2-4">
            <a
              href="https://platinumaps.jp/d/wasedasai?s=220603&lm=144&modal=list&floor=G">
              <div class="time">11:30~11:45</div>
              <div class="name">Choco Crunchアカペラステージ2023</div>
            </a>
          </div>

          <div class="ttbox">
            <div class="timearea">12</div>
            <div class="timeline">
              <div class="line1" />
              <div class="line2" />
              <div class="line3" />
            </div>
          </div>

          <div class="contents1-1 w1-1-1-5 layouts">
            <a
              href="https://platinumaps.jp/d/wasedasai?s=220406&lm=142&modal=list&floor=G">
              <div class="time">12:25~12:35</div>
              <div class="name">演武</div>
            </a>
          </div>

          <div class="contents1-2 w1-1-2-5">
            <a
              href="https://platinumaps.jp/d/wasedasai?s=220606&lm=144&modal=list&floor=G">
              <div class="time">12:00~12:30</div>
              <div class="name">SARAHbelly ~Belly Dance Stage~</div>
            </a>
          </div>

          <div class="contents1-1 w1-1-1-6">
            <a
              href="https://platinumaps.jp/d/wasedasai?s=220407&lm=142&modal=list&floor=G">
              <div class="time">12:45~13:00</div>
              <div class="name">８代目バンカライズム～抗え、君のままで～</div>
            </a>
          </div>

          <div class="contents1-2 w1-1-2-6">
            <a
              href="https://platinumaps.jp/d/wasedasai?s=220607&lm=144&modal=list&floor=G">
              <div class="time">12:45~13:00</div>
              <div class="name">君はトキシック単独ステージ</div>
            </a>
          </div>

          <div class="ttbox">
            <div class="timearea">13</div>
            <div class="timeline">
              <div class="line1" />
              <div class="line2" />
              <div class="line3" />
            </div>
          </div>

          <div class="contents1-1 w1-1-1-7">
            <a
              href="https://platinumaps.jp/d/wasedasai?s=220408&lm=142&modal=list&floor=G">
              <div class="time">13:10~13:40</div>
              <div class="name">Waseda University Breakerz</div>
            </a>
          </div>

          <div class="contents1-2 w1-1-2-7">
            <a
              href="https://platinumaps.jp/d/wasedasai?s=220843&lm=144&modal=list&floor=G">
              <div class="time">13:15~13:35</div>
              <div class="name">FALCONS2023~好きこそ無敵~</div>
            </a>
          </div>

          <div class="ttbox">
            <div class="timearea">14</div>
            <div class="timeline">
              <div class="line1" />
              <div class="line2" />
              <div class="line3" />
            </div>
          </div>

          <div class="contents1-1 w1-1-1-8">
            <a
              href="https://platinumaps.jp/d/wasedasai?s=220409&lm=142&modal=list&floor=G">
              <div class="time">13:50~14:25</div>
              <div class="name">
                人気インフルエンサーが集うファッションショー
              </div>
            </a>
          </div>

          <div class="contents1-2 w1-1-2-8">
            <a
              href="https://platinumaps.jp/d/wasedasai?s=220845&lm=144&modal=list&floor=G">
              <div class="time">13:50~14:15</div>
              <div class="name">
                早稲田大学フリースタイルバスケットボールチーム WASEDA BALLERS
              </div>
            </a>
          </div>

          <div class="contents1-1 w1-1-1-9">
            <a
              href="https://platinumaps.jp/d/wasedasai?s=220410&lm=142&modal=list&floor=G">
              <div class="time">14:35~14:55</div>
              <div class="name">合氣道演武</div>
            </a>
          </div>

          <div class="ttbox">
            <div class="timearea">15</div>
            <div class="timeline">
              <div class="line1" />
              <div class="line2" />
              <div class="line3" />
            </div>
          </div>

          <div class="contents1-1 w1-1-1-10">
            <a
              href="https://platinumaps.jp/d/wasedasai?s=220412&lm=142&modal=list&floor=G&gm=64">
              <div class="time">15:10~15:40</div>
              <div class="name">早稲田☆フェアリーズ2023</div>
            </a>
          </div>

          <div class="contents1-2 w1-1-2-9">
            <a
              href="https://platinumaps.jp/d/wasedasai?s=220846&lm=144&modal=list&floor=G">
              <div class="time">14:25~15:00</div>
              <div class="name">KPOP DANCE SHOW ~nova planet ~</div>
            </a>
          </div>

          <div class="contents1-1 w1-1-1-11">
            <a
              href="https://platinumaps.jp/d/wasedasai?s=220413&lm=142&modal=list&floor=G">
              <div class="time">15:50~16:15</div>
              <div class="name">WEEDL －K-POP Dance Cover－</div>
            </a>
          </div>

          <div class="contents1-2 w1-1-2-10">
            <a
              href="https://platinumaps.jp/d/wasedasai?s=220847&lm=144&modal=list&floor=G">
              <div class="time">15:15~15:35</div>
              <div class="name">マイケル・ジャクソン LIVE 2023</div>
            </a>
          </div>

          <div class="ttbox">
            <div class="timearea">16</div>
            <div class="timeline">
              <div class="line1" />
              <div class="line2" />
              <div class="line3" />
            </div>
          </div>

          <div class="contents1-2 w1-1-2-11">
            <a
              href="https://platinumaps.jp/d/wasedasai?s=220850&lm=144&modal=list&floor=G">
              <div class="time">15:50~16:20</div>
              <div class="name">Brilliant Pinks 5号館前ステージ 2023</div>
            </a>
          </div>

          <div class="contents1-1 w1-1-1-12">
            <a
              href="https://platinumaps.jp/d/wasedasai?s=220414&lm=142&modal=list&floor=G">
              <div class="time">16:25~17:00</div>
              <div class="name">全7ジャンルによるダンスパフォーマンス</div>
            </a>
          </div>

          <div class="contents1-2 w1-1-2-12">
            <a
              href="https://platinumaps.jp/d/wasedasai?s=220851&lm=144&modal=list&floor=G">
              <div class="time">16:30~17:00</div>
              <div class="name">Break a Leg!</div>
            </a>
          </div>

          <div class="ttbox">
            <div class="timearea">17</div>
            <div class="timeline">
              <div class="line1" />
              <div class="line2" />
              <div class="line3" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--触らない-->
    <div class="day1_sp2 panelsp1">
      <div class="buttoncontainer">
        <div class="button switch_sp-3 swremover">
          <img src="../../assets/images/timetable/button.png" />
        </div>

        <div class="buttoncontainer1">
          <div class="spacer" />
          <div class="syurui1">
            <img src="../../assets/images/timetable/arena.png" />
          </div>
          <div class="syurui2">
            <img src="../../assets/images/timetable/buncafe.png" />
          </div>
        </div>

        <div class="button2 switch_sp-4 swremover">
          <img src="../../assets/images/timetable/button2.png" />
        </div>
      </div>
      <div class="forwindow">
        <div class="ttcontainer">
          <div class="ttbox">
            <div class="timearea">10</div>
            <div class="timeline">
              <div class="line1" />
              <div class="line2" />
              <div class="line3" />
            </div>
          </div>

          <div class="contents1-1 w1-2-1-1">
            <a
              href="https://platinumaps.jp/d/wasedasai?s=221443&lm=150&modal=list&floor=G">
              <div class="time">12:00~13:00</div>
              <div class="name">藍 LIVE IN 早稲田</div>
            </a>
          </div>

          <div class="contents1-2 w1-2-2-1">
            <a
              href="https://platinumaps.jp/d/wasedasai?s=221633&lm=151&modal=list&floor=G&gm=64">
              <div class="time">10:00~10:25</div>
              <div class="name">Opening Festival in戸山</div>
            </a>
          </div>

          <div class="contents1-2 w1-2-2-2">
            <a
              href="https://platinumaps.jp/d/wasedasai?s=221635&lm=151&modal=list&floor=G&gm=64">
              <div class="time">10:35~11:15</div>
              <div class="name">口笛アンサンブル</div>
            </a>
          </div>

          <div class="contents1-2 w1-2-2-3">
            <a
              href="https://platinumaps.jp/d/wasedasai?s=221636&lm=151&modal=list&floor=G&gm=64">
              <div class="time">11:25~11:55</div>
              <div class="name">おたく・ざ・だんす！</div>
            </a>
          </div>

          <div class="ttbox">
            <div class="timearea">11</div>
            <div class="timeline">
              <div class="line1" />
              <div class="line2" />
              <div class="line3" />
            </div>
          </div>

          <div class="ttbox">
            <div class="timearea">12</div>
            <div class="timeline">
              <div class="line1" />
              <div class="line2" />
              <div class="line3" />
            </div>
          </div>

          <div class="contents1-2 w1-2-2-4">
            <a
              href="https://platinumaps.jp/d/wasedasai?s=221638&lm=151&modal=list&floor=G&gm=64">
              <div class="time">12:05~12:50</div>
              <div class="name">Oasis早稲田祭ステージ2023</div>
            </a>
          </div>

          <div class="ttbox">
            <div class="timearea">13</div>
            <div class="timeline">
              <div class="line1" />
              <div class="line2" />
              <div class="line3" />
            </div>
          </div>

          <div class="contents1-2 w1-2-2-5">
            <a
              href="https://platinumaps.jp/d/wasedasai?s=221639&lm=151&modal=list&floor=G&gm=64">
              <div class="time">13:05~13:30</div>
              <div class="name">“HIGH VOLTAGE" SHOCKERS 2023</div>
            </a>
          </div>

          <div class="contents1-2 w1-2-2-6">
            <a
              href="https://platinumaps.jp/d/wasedasai?s=221640&lm=151&modal=list&floor=G&gm=64">
              <div class="time">13:40~14:25</div>
              <div class="name">下駄っぱーず戸山カフェテリアステージ2023</div>
            </a>
          </div>

          <div class="contents1-2 w1-2-2-7">
            <a
              href="https://platinumaps.jp/d/wasedasai?s=221645&lm=151&modal=list&floor=G&gm=64">
              <div class="time">14:40~15:10</div>
              <div class="name">
                アイドルサークル早稲田2ndコンサートーあなたと叶えたい夢ー
              </div>
            </a>
          </div>

          <div class="ttbox">
            <div class="timearea">14</div>
            <div class="timeline">
              <div class="line1" />
              <div class="line2" />
              <div class="line3" />
            </div>
          </div>

          <div class="contents1-2 w1-2-2-8">
            <a
              href="https://platinumaps.jp/d/wasedasai?s=221646&lm=151&modal=list&floor=G&gm=64">
              <div class="time">15:20~15:40</div>
              <div class="name">shuri Live in Waseda University Festival</div>
            </a>
          </div>

          <div class="ttbox">
            <div class="timearea">15</div>
            <div class="timeline">
              <div class="line1" />
              <div class="line2" />
              <div class="line3" />
            </div>
          </div>

          <div class="ttbox">
            <div class="timearea">16</div>
            <div class="timeline">
              <div class="line1" />
              <div class="line2" />
              <div class="line3" />
            </div>
          </div>

          <div class="contents1-2 w1-2-2-9">
            <a
              href="https://platinumaps.jp/d/wasedasai?s=221648&lm=151&modal=list&floor=G&gm=64">
              <div class="time">15:50~16:15</div>
              <div class="name">わせだんCAMP</div>
            </a>
          </div>

          <div class="contents1-2 w1-2-2-10">
            <a
              href="https://platinumaps.jp/d/wasedasai?s=221656&lm=151&modal=list&floor=G&gm=64">
              <div class="time">16:25~16:50</div>
              <div class="name">Start Fes.</div>
            </a>
          </div>

          <div class="ttbox">
            <div class="timearea">17</div>
            <div class="timeline">
              <div class="line1" />
              <div class="line2" />
              <div class="line3" />
            </div>
          </div>

          <div class="contents1-1 w1-2-1-2">
            <a
              href="https://platinumaps.jp/d/wasedasai?s=221460&lm=150&modal=list&floor=G">
              <div class="time">17:00~18:00</div>
              <div class="name">学祭JACK2023 in WASEDA ARENA #1</div>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="day1_sp3 panelsp1">
      <div class="buttoncontainer">
        <div class="button switch_sp-5 swremover">
          <img src="../../assets/images/timetable/button.png" />
        </div>

        <div class="buttoncontainer1">
          <div class="spacer" />
          <div class="syurui1">
            <img src="../../assets/images/timetable/daikodo.png" />
          </div>
          <div class="syurui2">
            <img src="../../assets/images/timetable/syokodo.png" />
          </div>
        </div>

        <div class="button2 switch_sp-6 swremover">
          <img src="../../assets/images/timetable/button2.png" />
        </div>
      </div>
      <div class="forwindow">
        <div class="ttcontainer">
          <div class="ttbox">
            <div class="timearea">10</div>
            <div class="timeline">
              <div class="line1" />
              <div class="line2" />
              <div class="line3" />
            </div>
          </div>

          <div class="contents1-1 w1-3-1-1">
            <a
              href="https://platinumaps.jp/d/wasedasai?s=221222&lm=146&modal=list&floor=G">
              <div class="time">11:00~12:00</div>
              <div class="name">
                早稲田大学グリークラブ 早稲田祭スペシャルコンサート
              </div>
            </a>
          </div>

          <div class="contents1-1 w1-3-1-2">
            <a
              href="https://platinumaps.jp/d/wasedasai?s=221223&lm=146&modal=list&floor=G">
              <div class="time">15:30~16:25</div>
              <div class="name">早稲田吹奏楽団大隈講堂コンサート</div>
            </a>
          </div>

          <div class="ttbox">
            <div class="timearea">11</div>
            <div class="timeline">
              <div class="line1" />
              <div class="line2" />
              <div class="line3" />
            </div>
          </div>

          <div class="ttbox">
            <div class="timearea">12</div>
            <div class="timeline">
              <div class="line1" />
              <div class="line2" />
              <div class="line3" />
            </div>
          </div>

          <div class="ttbox">
            <div class="timearea">13</div>
            <div class="timeline">
              <div class="line1" />
              <div class="line2" />
              <div class="line3" />
            </div>
          </div>

          <div class="contents1-2 w1-3-2-1">
            <a
              href="https://platinumaps.jp/d/wasedasai?s=221227&lm=147&modal=list&floor=G">
              <div class="time">13:15~15:45</div>
              <div class="name">モダンジャズコンサート</div>
            </a>
          </div>

          <div class="ttbox">
            <div class="timearea">14</div>
            <div class="timeline">
              <div class="line1" />
              <div class="line2" />
              <div class="line3" />
            </div>
          </div>

          <div class="contents1-2 w1-3-2-2">
            <a
              href="https://platinumaps.jp/d/wasedasai?s=221226&lm=147&modal=list&floor=G">
              <div class="time">11:00~11:30</div>
              <div class="name">
                野外演奏会2023 ～そうだ、思い出のピアニカ、吹こう。～
              </div>
            </a>
          </div>

          <div class="ttbox">
            <div class="timearea">15</div>
            <div class="timeline">
              <div class="line1" />
              <div class="line2" />
              <div class="line3" />
            </div>
          </div>

          <div class="ttbox">
            <div class="timearea">16</div>
            <div class="timeline">
              <div class="line1" />
              <div class="line2" />
              <div class="line3" />
            </div>
          </div>

          <div class="ttbox">
            <div class="timearea">17</div>
            <div class="timeline">
              <div class="line1" />
              <div class="line2" />
              <div class="line3" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="day1_sp4 panelsp1">
      <div class="buttoncontainer">
        <div class="button switch_sp-7 swremover">
          <img src="../../assets/images/timetable/button.png" />
        </div>

        <div class="buttoncontainer1">
          <div class="spacer" />
          <div class="syurui1">
            <img src="../../assets/images/timetable/kumasute.png" />
          </div>
          <div class="syurui2">
            <img src="../../assets/images/timetable/onokinen.png" />
          </div>
        </div>

        <div class="button2 switch_sp-8 swremover">
          <img src="../../assets/images/timetable/button2.png" />
        </div>
      </div>
      <div class="forwindow">
        <div class="ttcontainer">
          <div class="ttbox">
            <div class="timearea">10</div>
            <div class="timeline">
              <div class="line1" />
              <div class="line2" />
              <div class="line3" />
            </div>
          </div>

          <div class="contents1-1 w1-4-1-1">
            <a
              href="https://platinumaps.jp/d/wasedasai?s=220888&lm=145&modal=list&floor=G">
              <div class="time">10:00~10:25</div>
              <div class="name">Opening Festival in早稲田</div>
            </a>
          </div>

          <div class="contents1-1 w1-4-1-2">
            <a
              href="https://platinumaps.jp/d/wasedasai?s=220889&lm=145&modal=list&floor=G">
              <div class="time">10:35~10:50</div>
              <div class="name">MYNX単独ステージ</div>
            </a>
          </div>

          <div class="ttbox">
            <div class="timearea">11</div>
            <div class="timeline">
              <div class="line1" />
              <div class="line2" />
              <div class="line3" />
            </div>
          </div>

          <div class="contents1-1 w1-4-1-3">
            <a
              href="https://platinumaps.jp/d/wasedasai?s=220890&lm=145&modal=list&floor=G">
              <div class="time">11:00~11:35</div>
              <div class="name">四年生でも委員会2023 "SPIN OFF"</div>
            </a>
          </div>

          <div class="contents1-1 w1-4-1-4">
            <a
              href="https://platinumaps.jp/d/wasedasai?s=220891&lm=145&modal=list&floor=G">
              <div class="time">11:50~12:25</div>
              <div class="name">TAP-LOVERS Special stage2023</div>
            </a>
          </div>

          <div class="contents1-1 w1-4-1-5">
            <a
              href="https://platinumaps.jp/d/wasedasai?s=220892&lm=145&modal=list&floor=G">
              <div class="time">12:35~12:50</div>
              <div class="name">
                アイドルコピーダンスステージ 〜どうしてもプリスマが好きだ〜
              </div>
            </a>
          </div>

          <div class="ttbox">
            <div class="timearea">12</div>
            <div class="timeline">
              <div class="line1" />
              <div class="line2" />
              <div class="line3" />
            </div>
          </div>

          <div class="contents1-1 w1-4-1-6">
            <a
              href="https://platinumaps.jp/d/wasedasai?s=221190&lm=145&modal=list&floor=G">
              <div class="time">13:00~13:35</div>
              <div class="name">Twinkle 大隈講堂前ステージ</div>
            </a>
          </div>

          <div class="contents1-1 w1-4-1-7">
            <a
              href="https://platinumaps.jp/d/wasedasai?s=221191&lm=145&modal=list&floor=G">
              <div class="time">13:45~14:10</div>
              <div class="name">aka Wa.Se.Da.ダンスパフォーマンス</div>
            </a>
          </div>

          <div class="contents1-1 w1-4-1-8">
            <a
              href="https://platinumaps.jp/d/wasedasai?s=221192&lm=145&modal=list&floor=G">
              <div class="time">14:20~14:40</div>
              <div class="name">夏目共和国2023</div>
            </a>
          </div>
          <!--
          <div class="contents1-2 w1-4-2-1">
            <a
              href="https://platinumaps.jp/d/wasedasai?s=221230&lm=148&modal=list&floor=G">
              <div class="time">11:30~12:30</div>
              <div class="name">タンゴワセダ2023 早稲田祭特別ステージ</div>
            </a>
          </div>

        -->

          <div class="ttbox">
            <div class="timearea">13</div>
            <div class="timeline">
              <div class="line1" />
              <div class="line2" />
              <div class="line3" />
            </div>
          </div>

          <div class="contents1-1 w1-4-1-9">
            <a
              href="https://platinumaps.jp/d/wasedasai?s=221193&lm=145&modal=list&floor=G">
              <div class="time">14:55~15:30</div>
              <div class="name">早稲田王決定戦2023</div>
            </a>
          </div>

          <div class="ttbox">
            <div class="timearea">14</div>
            <div class="timeline">
              <div class="line1" />
              <div class="line2" />
              <div class="line3" />
            </div>
          </div>

          <div class="contents1-1 w1-4-1-10">
            <a
              href="https://platinumaps.jp/d/wasedasai?s=221194&lm=145&modal=list&floor=G">
              <div class="time">15:45~16:10</div>
              <div class="name">魁響2023大隈講堂前ステージ～神楽～</div>
            </a>
          </div>

          <div class="ttbox">
            <div class="timearea">15</div>
            <div class="timeline">
              <div class="line1" />
              <div class="line2" />
              <div class="line3" />
            </div>
          </div>

          <div class="contents1-2 w1-4-2-2">
            <a
              href="https://platinumaps.jp/d/wasedasai?s=221231&lm=148&modal=list&floor=G">
              <div class="time">15:00~16:15</div>
              <div class="name">早稲田祭コンサート2023</div>
            </a>
          </div>

          <div class="contents1-1 w1-4-1-11">
            <a
              href="https://platinumaps.jp/d/wasedasai?s=221195&lm=145&modal=list&floor=G">
              <div class="time">16:25~17:00</div>
              <div class="name">中夜祭2023</div>
            </a>
          </div>

          <div class="ttbox">
            <div class="timearea">16</div>
            <div class="timeline">
              <div class="line1" />
              <div class="line2" />
              <div class="line3" />
            </div>
          </div>

          <div class="contents1-1 w1-4-1-12">
            <a
              href="https://platinumaps.jp/d/wasedasai?s=221196&lm=145&modal=list&floor=G">
              <div class="time">17:15~17:40</div>
              <div class="name">Goal Fes.</div>
            </a>
          </div>

          <div class="ttbox">
            <div class="timearea">17</div>
            <div class="timeline">
              <div class="line1" />
              <div class="line2" />
              <div class="line3" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="day1_sp5 panelsp1">
      <div class="buttoncontainer">
        <div class="button switch_sp-9 swremover">
          <img src="../../assets/images/timetable/button.png" />
        </div>

        <div class="buttoncontainer1">
          <div class="spacer2" />
          <div class="syurui3">
            <img src="../../assets/images/timetable/drama.png" />
          </div>
        </div>

        <div class="button2 switch_sp-10 swremover">
          <img src="../../assets/images/timetable/button2.png" />
        </div>
      </div>
      <div class="forwindow">
        <div class="ttcontainer2">
          <div class="ttbox">
            <div class="timearea2">10</div>
            <div class="timeline">
              <div class="line1" />
              <div class="line2" />
              <div class="line3" />
            </div>
          </div>

          <div class="contents1-3 w1-5-1-1">
            <a
              href="https://platinumaps.jp/d/wasedasai?s=221236&lm=149&modal=list&floor=G">
              <div class="time">11:30~12:00</div>
              <div class="name">演劇集団ところで2023年度早稲田祭公演</div>
            </a>
          </div>

          <div class="ttbox">
            <div class="timearea2">11</div>
            <div class="timeline">
              <div class="line1" />
              <div class="line2" />
              <div class="line3" />
            </div>
          </div>

          <div class="ttbox">
            <div class="timearea2">12</div>
            <div class="timeline">
              <div class="line1" />
              <div class="line2" />
              <div class="line3" />
            </div>
          </div>

          <div class="ttbox">
            <div class="timearea2">13</div>
            <div class="timeline">
              <div class="line1" />
              <div class="line2" />
              <div class="line3" />
            </div>
          </div>

          <div class="ttbox">
            <div class="timearea2">14</div>
            <div class="timeline">
              <div class="line1" />
              <div class="line2" />
              <div class="line3" />
            </div>
          </div>

          <div class="contents1-3 w1-5-1-2">
            <a
              href="https://platinumaps.jp/d/wasedasai?s=221237&lm=149&modal=list&floor=G">
              <div class="time">14:00~14:30</div>
              <div class="name">改竄・『銀河鉄道の夜』</div>
            </a>
          </div>

          <div class="ttbox">
            <div class="timearea2">15</div>
            <div class="timeline">
              <div class="line1" />
              <div class="line2" />
              <div class="line3" />
            </div>
          </div>

          <div class="ttbox">
            <div class="timearea2">16</div>
            <div class="timeline">
              <div class="line1" />
              <div class="line2" />
              <div class="line3" />
            </div>
          </div>

          <div class="contents1-3 w1-5-1-3">
            <a
              href="https://platinumaps.jp/d/wasedasai?s=221238&lm=149&modal=list&floor=G">
              <div class="time">16:30~17:00</div>
              <div class="name">かもめの本棚 企画公演</div>
            </a>
          </div>

          <div class="ttbox">
            <div class="timearea2">17</div>
            <div class="timeline">
              <div class="line1" />
              <div class="line2" />
              <div class="line3" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--ここから2日目-->

    <div class="day2_sp1 panelsp1">
      <div class="buttoncontainer">
        <div class="button switch_sp-11 activeswitch swremover">
          <img src="../../assets/images/timetable/button.png" />
        </div>

        <div class="buttoncontainer1">
          <div class="spacer" />
          <div class="syurui1">
            <img src="../../assets/images/timetable/3gokan.png" />
          </div>
          <div class="syurui2">
            <img src="../../assets/images/timetable/5gokan.png" />
          </div>
        </div>

        <div class="button2 switch_sp-12 activeswitch swremover">
          <img src="../../assets/images/timetable/button2.png" />
        </div>
      </div>
      <div class="forwindow">
        <div class="ttcontainer">
          <div class="ttbox">
            <div class="timearea">10</div>
            <div class="timeline">
              <div class="line1" />
              <div class="line2" />
              <div class="line3" />
            </div>
          </div>

          <div class="contents1-1 w2-1-1-1">
            <a
              href="https://platinumaps.jp/d/wasedasai?s=220415&lm=142&modal=list&floor=G">
              <div class="time">10:00~10:30</div>
              <div class="name">書道パフォーマンス</div>
            </a>
          </div>

          <div class="contents1-1 w2-1-1-2">
            <a
              href="https://platinumaps.jp/d/wasedasai?s=220417&lm=142&modal=list&floor=G">
              <div class="time">10:45~11:00</div>
              <div class="name">君はトキシック単独ステージ</div>
            </a>
          </div>

          <div class="contents1-2 w2-1-2-1">
            <a
              href="https://platinumaps.jp/d/wasedasai?s=220855&lm=144&modal=list&floor=G">
              <div class="time">10:00~10:35</div>
              <div class="name">TAP-LOVERS Special stage2023</div>
            </a>
          </div>

          <div class="contents1-2 w2-1-2-2">
            <a
              href="https://platinumaps.jp/d/wasedasai?s=220856&lm=144&modal=list&floor=G">
              <div class="time">10:50~11:30</div>
              <div class="name">谺</div>
            </a>
          </div>

          <div class="ttbox">
            <div class="timearea">11</div>
            <div class="timeline">
              <div class="line1" />
              <div class="line2" />
              <div class="line3" />
            </div>
          </div>

          <div class="contents1-1 w2-1-1-3">
            <a
              href="https://platinumaps.jp/d/wasedasai?s=220418&lm=142&modal=list&floor=G">
              <div class="time">11:15~11:45</div>
              <div class="name">彩</div>
            </a>
          </div>

          <div class="contents1-2 w2-1-2-3">
            <a
              href="https://platinumaps.jp/d/wasedasai?s=220857&lm=144&modal=list&floor=G">
              <div class="time">11:40~12:25</div>
              <div class="name">Oasis早稲田祭ステージ2023</div>
            </a>
          </div>

          <div class="contents1-2 w2-1-2-4">
            <a
              href="https://platinumaps.jp/d/wasedasai?s=220862&lm=144&modal=list&floor=G">
              <div class="time">12:40~12:55</div>
              <div class="name">8代目バンカライズム～抗え、君のままで～</div>
            </a>
          </div>

          <div class="contents1-1 w2-1-1-4 layouts">
            <a
              href="https://platinumaps.jp/d/wasedasai?s=220419&lm=142&modal=list&floor=G">
              <div class="time">11:55~12:05</div>
              <div class="name">沖縄伝統エイサー</div>
            </a>
          </div>

          <div class="ttbox">
            <div class="timearea">12</div>
            <div class="timeline">
              <div class="line1" />
              <div class="line2" />
              <div class="line3" />
            </div>
          </div>

          <div class="contents1-1 w2-1-1-5">
            <a
              href="https://platinumaps.jp/d/wasedasai?s=220420&lm=142&modal=list&floor=G">
              <div class="time">12:20~12:35</div>
              <div class="name">公式テーマソング企画</div>
            </a>
          </div>

          <div class="contents1-2 w2-1-2-5">
            <a
              href="https://platinumaps.jp/d/wasedasai?s=220864&lm=144&modal=list&floor=G">
              <div class="time">13:05~13:25</div>
              <div class="name">早稲田大学居合道部 演武</div>
            </a>
          </div>

          <div class="contents1-2 w2-1-2-6">
            <a
              href="https://platinumaps.jp/d/wasedasai?s=220869&lm=144&modal=list&floor=G">
              <div class="time">13:35~13:55</div>
              <div class="name">OurZ Special</div>
            </a>
          </div>

          <div class="contents1-1 w2-1-1-6">
            <a
              href="https://platinumaps.jp/d/wasedasai?s=220421&lm=142&modal=list&floor=G">
              <div class="time">12:50~13:10</div>
              <div class="name">仮名</div>
            </a>
          </div>

          <div class="ttbox">
            <div class="timearea">13</div>
            <div class="timeline">
              <div class="line1" />
              <div class="line2" />
              <div class="line3" />
            </div>
          </div>

          <div class="contents1-1 w2-1-1-7">
            <a
              href="https://platinumaps.jp/d/wasedasai?s=220554&lm=142&modal=list&floor=G">
              <div class="time">13:25~14:10</div>
              <div class="name">ゆるすい 吹奏楽パフォーマンス</div>
            </a>
          </div>

          <div class="contents1-2 w2-1-2-7">
            <a
              href="https://platinumaps.jp/d/wasedasai?s=220870&lm=144&modal=list&floor=G">
              <div class="time">14:10~14:55</div>
              <div class="name">下駄っぱーず5号館前ステージ2023</div>
            </a>
          </div>

          <div class="contents1-2 w2-1-2-8">
            <a
              href="https://platinumaps.jp/d/wasedasai?s=220871&lm=144&modal=list&floor=G">
              <div class="time">15:05~15:20</div>
              <div class="name">Prismileコピーダンス部アイドルステージ</div>
            </a>
          </div>

          <div class="contents1-1 w2-1-1-8">
            <a
              href="https://platinumaps.jp/d/wasedasai?s=220555&lm=142&modal=list&floor=G">
              <div class="time">14:25~14:45</div>
              <div class="name">怪獣同盟ヒーローショー2023</div>
            </a>
          </div>

          <div class="contents1-1 w2-1-1-9">
            <a
              href="https://platinumaps.jp/d/wasedasai?s=220556&lm=142&modal=list&floor=G">
              <div class="time">15:00~15:40</div>
              <div class="name">infinity main performance</div>
            </a>
          </div>

          <div class="contents1-2 w2-1-2-9">
            <a
              href="https://platinumaps.jp/d/wasedasai?s=220557&lm=142&modal=list&floor=G">
              <div class="time">15:30~16:00</div>
              <div class="name">WEEDL －K-POP Dance Cover－</div>
            </a>
          </div>

          <div class="contents1-2 w2-1-2-10 layouts">
            <a
              href="https://platinumaps.jp/d/wasedasai?s=220875&lm=144&modal=list&floor=G">
              <div class="time">16:15~16:25</div>
              <div class="name wasehura">
                早稲田にハワイの風を吹かせよう！ハワイアンステージ
              </div>
            </a>
          </div>

          <div class="contents1-1 w2-1-1-10">
            <a
              href="https://platinumaps.jp/d/wasedasai?s=220557&lm=142&modal=list&floor=G">
              <div class="time">15:55~16:20</div>
              <div class="name">「奇跡の歌声」SSTミュージカル夢の特別公演</div>
            </a>
          </div>

          <div class="contents1-2 w2-1-2-11">
            <a
              href="https://platinumaps.jp/d/wasedasai?s=220876&lm=144&modal=list&floor=G">
              <div class="time">16:35~17:00</div>
              <div class="name">Timeless Tunes</div>
            </a>
          </div>

          <div class="contents1-1 w2-1-1-11">
            <a
              href="https://platinumaps.jp/d/wasedasai?s=220558&lm=142&modal=list&floor=G">
              <div class="time">16:30~17:00</div>
              <div class="name">Break a Leg!</div>
            </a>
          </div>

          <div class="ttbox">
            <div class="timearea">14</div>
            <div class="timeline">
              <div class="line1" />
              <div class="line2" />
              <div class="line3" />
            </div>
          </div>

          <div class="ttbox">
            <div class="timearea">15</div>
            <div class="timeline">
              <div class="line1" />
              <div class="line2" />
              <div class="line3" />
            </div>
          </div>

          <div class="ttbox">
            <div class="timearea">16</div>
            <div class="timeline">
              <div class="line1" />
              <div class="line2" />
              <div class="line3" />
            </div>
          </div>

          <div class="ttbox">
            <div class="timearea">17</div>
            <div class="timeline">
              <div class="line1" />
              <div class="line2" />
              <div class="line3" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="day2_sp2 panelsp1">
      <div class="buttoncontainer">
        <div class="button switch_sp-13 activeswitch swremover">
          <img src="../../assets/images/timetable/button.png" />
        </div>

        <div class="buttoncontainer1">
          <div class="spacer" />
          <div class="syurui1">
            <img src="../../assets/images/timetable/arena.png" />
          </div>
          <div class="syurui2">
            <img src="../../assets/images/timetable/buncafe.png" />
          </div>
        </div>

        <div class="button2 switch_sp-14 activeswitch swremover">
          <img src="../../assets/images/timetable/button2.png" />
        </div>
      </div>
      <div class="forwindow">
        <div class="ttcontainer">
          <div class="ttbox">
            <div class="timearea">10</div>
            <div class="timeline">
              <div class="line1" />
              <div class="line2" />
              <div class="line3" />
            </div>
          </div>

          <div class="contents1-2 w2-2-1-1">
            <a
              href="https://platinumaps.jp/d/wasedasai?s=221657&lm=151&modal=list&floor=G&gm=64">
              <div class="time">10:00~10:30</div>
              <div class="name">爆音響かせ！どもえステージin戸山</div>
            </a>
          </div>

          <div class="contents1-2 w2-2-1-2 layouts">
            <a
              href="https://platinumaps.jp/d/wasedasai?s=221659&lm=151&modal=list&floor=G&gm=64">
              <div class="time">10:40~10:50</div>
              <div class="name">歌のパフォーマンス</div>
            </a>
          </div>

          <div class="contents1-2 w2-2-1-3">
            <a
              href="https://platinumaps.jp/d/wasedasai?s=221670&lm=151&modal=list&floor=G&gm=64">
              <div class="time">11:05~11:40</div>
              <div class="name">KPOP DANCE SHOW ~nova planet~</div>
            </a>
          </div>

          <div class="contents1-2 w2-2-1-4">
            <a
              href="https://platinumaps.jp/d/wasedasai?s=221671&lm=151&modal=list&floor=G&gm=64">
              <div class="time">11:50~12:25</div>
              <div class="name">wasehula2023早稲田祭ステージ</div>
            </a>
          </div>

          <div class="ttbox">
            <div class="timearea">11</div>
            <div class="timeline">
              <div class="line1" />
              <div class="line2" />
              <div class="line3" />
            </div>
          </div>

          <div class="contents1-2 w2-2-1-5">
            <a
              href="https://platinumaps.jp/d/wasedasai?s=221672&lm=151&modal=list&floor=G&gm=64">
              <div class="time">12:35~13:00</div>
              <div class="name">Timeless Tunes</div>
            </a>
          </div>

          <div class="ttbox">
            <div class="timearea">12</div>
            <div class="timeline">
              <div class="line1" />
              <div class="line2" />
              <div class="line3" />
            </div>
          </div>

          <div class="contents1-1 w2-2-2-1">
            <a
              href="https://platinumaps.jp/d/wasedasai?s=221503&lm=150&modal=list&floor=G&gm=64">
              <div class="time">12:00~13:00</div>
              <div class="name">
                WASEDA ARENA SUMMIT vol.4 supported by teket
              </div>
            </a>
          </div>

          <div class="contents1-2 w2-2-1-6 layouts">
            <a
              href="https://platinumaps.jp/d/wasedasai?s=221677&lm=151&modal=list&floor=G&gm=64">
              <div class="time">13:10~13:20</div>
              <div class="name">バレエサークルCiel</div>
            </a>
          </div>

          <div class="ttbox">
            <div class="timearea">13</div>
            <div class="timeline">
              <div class="line1" />
              <div class="line2" />
              <div class="line3" />
            </div>
          </div>

          <div class="contents1-2 w2-2-1-7">
            <a
              href="https://platinumaps.jp/d/wasedasai?s=221678&lm=151&modal=list&floor=G&gm=64">
              <div class="time">13:30~13:50</div>
              <div class="name">WASElele 2023 ウクレレステージ</div>
            </a>
          </div>

          <div class="contents1-2 w2-2-1-8">
            <a
              href="https://platinumaps.jp/d/wasedasai?s=221679&lm=151&modal=list&floor=G&gm=64">
              <div class="time">14:00~14:30</div>
              <div class="name">SARAHbelly 〜Belly Dance Stage〜</div>
            </a>
          </div>

          <div class="contents1-2 w2-2-1-9">
            <a
              href="https://platinumaps.jp/d/wasedasai?s=221714&lm=151&modal=list&floor=G&gm=64">
              <div class="time">14:40~15:15</div>
              <div class="name">マイケル・ジャクソン LIVE 2023</div>
            </a>
          </div>

          <div class="ttbox">
            <div class="timearea">14</div>
            <div class="timeline">
              <div class="line1" />
              <div class="line2" />
              <div class="line3" />
            </div>
          </div>

          <div class="contents1-2 w2-2-1-10">
            <a
              href="https://platinumaps.jp/d/wasedasai?s=221715&lm=151&modal=list&floor=G&gm=64">
              <div class="time">15:30~16:00</div>
              <div class="name">和太鼓サークル樂華</div>
            </a>
          </div>

          <div class="ttbox">
            <div class="timearea">15</div>
            <div class="timeline">
              <div class="line1" />
              <div class="line2" />
              <div class="line3" />
            </div>
          </div>

          <div class="ttbox">
            <div class="timearea">16</div>
            <div class="timeline">
              <div class="line1" />
              <div class="line2" />
              <div class="line3" />
            </div>
          </div>

          <div class="contents1-2 w2-2-1-11">
            <a
              href="https://platinumaps.jp/d/wasedasai?s=221716&lm=151&modal=list&floor=G&gm=64">
              <div class="time">16:10~16:30</div>
              <div class="name">ももキュン☆ 単独ステージ</div>
            </a>
          </div>

          <div class="contents1-2 w2-2-1-12">
            <a
              href="https://platinumaps.jp/d/wasedasai?s=221717&lm=151&modal=list&floor=G&gm=64">
              <div class="time">16:40~17:00</div>
              <div class="name">FALCONS2023〜好きこそ無敵〜</div>
            </a>
          </div>

          <div class="ttbox">
            <div class="timearea">17</div>
            <div class="timeline">
              <div class="line1" />
              <div class="line2" />
              <div class="line3" />
            </div>
          </div>

          <div class="contents1-1 w2-2-2-2">
            <a href="/">
              <div class="time">17:00~18:00</div>
              <div class="name">学祭JACK2023 in WASEDA ARENA #2</div>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="day2_sp3 panelsp1">
      <div class="buttoncontainer">
        <div class="button switch_sp-15 swremover">
          <img src="../../assets/images/timetable/button.png" />
        </div>

        <div class="buttoncontainer1">
          <div class="spacer" />
          <div class="syurui1">
            <img src="../../assets/images/timetable/daikodo.png" />
          </div>
          <div class="syurui2">
            <img src="../../assets/images/timetable/syokodo.png" />
          </div>
        </div>

        <div class="button2 switch_sp-16 swremover">
          <img src="../../assets/images/timetable/button2.png" />
        </div>
      </div>

      <div class="forwindow">
        <div class="ttcontainer">
          <div class="ttbox">
            <div class="timearea">10</div>
            <div class="timeline">
              <div class="line1" />
              <div class="line2" />
              <div class="line3" />
            </div>
          </div>

          <div class="contents1-1 w2-3-1-1">
            <a
              href="https://platinumaps.jp/d/wasedasai?s=221224&lm=146&modal=list&floor=G">
              <div class="time">11:30～12:15</div>
              <div class="name">早稲田祭ステージ2023</div>
            </a>
          </div>

          <div class="contents1-1 w2-3-1-2">
            <a
              href="https://platinumaps.jp/d/wasedasai?s=221225&lm=146&modal=list&floor=G">
              <div class="time">15:15～16:10</div>
              <div class="name">早稲田大学交響楽団 早稲田祭特別演奏会</div>
            </a>
          </div>

          <div class="contents1-2 w2-3-2-1">
            <a
              href="https://platinumaps.jp/d/wasedasai?s=221228&lm=147&modal=list&floor=G">
              <div class="time">10:15～12:45</div>
              <div class="name">生演奏ジャズステージ</div>
            </a>
          </div>

          <div class="contents1-2 w2-3-2-2">
            <a
              href="https://platinumaps.jp/d/wasedasai?s=221229&lm=147&modal=list&floor=G">
              <div class="time">15:30〜16:05</div>
              <div class="name">シャミヒビケ！三津巴小講堂ステージ</div>
            </a>
          </div>

          <div class="ttbox">
            <div class="timearea">11</div>
            <div class="timeline">
              <div class="line1" />
              <div class="line2" />
              <div class="line3" />
            </div>
          </div>

          <div class="ttbox">
            <div class="timearea">12</div>
            <div class="timeline">
              <div class="line1" />
              <div class="line2" />
              <div class="line3" />
            </div>
          </div>

          <div class="ttbox">
            <div class="timearea">13</div>
            <div class="timeline">
              <div class="line1" />
              <div class="line2" />
              <div class="line3" />
            </div>
          </div>

          <div class="ttbox">
            <div class="timearea">14</div>
            <div class="timeline">
              <div class="line1" />
              <div class="line2" />
              <div class="line3" />
            </div>
          </div>

          <div class="ttbox">
            <div class="timearea">15</div>
            <div class="timeline">
              <div class="line1" />
              <div class="line2" />
              <div class="line3" />
            </div>
          </div>

          <div class="ttbox">
            <div class="timearea">16</div>
            <div class="timeline">
              <div class="line1" />
              <div class="line2" />
              <div class="line3" />
            </div>
          </div>

          <div class="ttbox">
            <div class="timearea">17</div>
            <div class="timeline">
              <div class="line1" />
              <div class="line2" />
              <div class="line3" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="day2_sp4 panelsp1">
      <div class="buttoncontainer">
        <div class="button switch_sp-17 swremover">
          <img src="../../assets/images/timetable/button.png" />
        </div>

        <div class="buttoncontainer1">
          <div class="spacer" />
          <div class="syurui1">
            <img src="../../assets/images/timetable/kumasute.png" />
          </div>
          <div class="syurui2">
            <img src="../../assets/images/timetable/onokinen.png" />
          </div>
        </div>

        <div class="button2 switch_sp-18 swremover">
          <img src="../../assets/images/timetable/button2.png" />
        </div>
      </div>
      <div class="forwindow">
        <div class="ttcontainer">
          <div class="ttbox">
            <div class="timearea">10</div>
            <div class="timeline">
              <div class="line1" />
              <div class="line2" />
              <div class="line3" />
            </div>
          </div>

          <div class="contents1-1 w2-4-1-1">
            <a
              href="https://platinumaps.jp/d/wasedasai?s=221198&lm=145&modal=list&floor=G">
              <div class="time">10:00〜10:25</div>
              <div class="name">“HIGH VOLTAGE" SHOCKERS 2023</div>
            </a>
          </div>

          <div class="contents1-1 w2-4-1-2">
            <a
              href="https://platinumaps.jp/d/wasedasai?s=221199&lm=145&modal=list&floor=G">
              <div class="time">10:40〜11:10</div>
              <div class="name">
                学歴王国(ガクレキングダム)-150年後の君たちへ-
              </div>
            </a>
          </div>

          <div class="contents1-1 w2-4-1-3">
            <a
              href="https://platinumaps.jp/d/wasedasai?s=221200&lm=145&modal=list&floor=G">
              <div class="time">11:25〜12:00</div>
              <div class="name">早稲田大学男祭り2023</div>
            </a>
          </div>

          <div class="contents1-1 w2-4-1-4">
            <a
              href="https://platinumaps.jp/d/wasedasai?s=221201&lm=145&modal=list&floor=G">
              <div class="time">12:10〜12:35</div>
              <div class="name">Waseda Idol Festival</div>
            </a>
          </div>

          <div class="contents1-1 w2-4-1-5">
            <a
              href="https://platinumaps.jp/d/wasedasai?s=221202&lm=145&modal=list&floor=G">
              <div class="time">12:50〜13:20</div>
              <div class="name">Okuma Battle</div>
            </a>
          </div>

          <div class="contents1-1 w2-4-1-6">
            <a
              href="https://platinumaps.jp/d/wasedasai?s=221203&lm=145&modal=list&floor=G">
              <div class="time">13:30〜14:00</div>
              <div class="name">谺</div>
            </a>
          </div>

          <div class="contents1-1 w2-4-1-7">
            <a
              href="https://platinumaps.jp/d/wasedasai?s=221204&lm=145&modal=list&floor=G">
              <div class="time">14:15〜14:35</div>
              <div class="name">ワッサーサイファー vol.1</div>
            </a>
          </div>

          <div class="contents1-1 w2-4-1-9">
            <a
              href="https://platinumaps.jp/d/wasedasai?s=221208&lm=145&modal=list&floor=G">
              <div class="time">15:10〜15:25</div>
              <div class="name">BIGBEARS早稲田祭スペシャルステージ</div>
            </a>
          </div>

          <div class="contents1-1 w2-4-1-8">
            <a
              href="https://platinumaps.jp/d/wasedasai?s=221207&lm=145&modal=list&floor=G">
              <div class="time">14:45〜15:00</div>
              <div class="name">Brilliant Pinks 大隈講堂前ステージ2023</div>
            </a>
          </div>

          <div class="contents1-1 w2-4-1-10">
            <a
              href="https://platinumaps.jp/d/wasedasai?s=221210&lm=145&modal=list&floor=G">
              <div class="time">15:35〜16:10</div>
              <div class="name">東京花火2023</div>
            </a>
          </div>

          <div class="contents1-1 w2-4-1-11">
            <a
              href="https://platinumaps.jp/d/wasedasai?s=221211&lm=145&modal=list&floor=G">
              <div class="time">16:25〜17:00</div>
              <div class="name">Waseda Collection 2023</div>
            </a>
          </div>

          <div class="contents1-1 w2-4-1-12">
            <a
              href="https://platinumaps.jp/d/wasedasai?s=221212&lm=145&modal=list&floor=G">
              <div class="time">17:15〜17:55</div>
              <div class="name">Ending Festival</div>
            </a>
          </div>

          <div class="contents1-2 w2-4-2-1">
            <a
              href="https://platinumaps.jp/d/wasedasai?s=221233&lm=148&modal=list&floor=G">
              <div class="time">10:20～12:30</div>
              <div class="name">企画演奏会2023 ～音楽と、巡る世界～</div>
            </a>
          </div>

          <div class="contents1-2 w2-4-2-2">
            <a
              href="https://platinumaps.jp/d/wasedasai?s=221234&lm=148&modal=list&floor=G">
              <div class="time">14:30～16:45</div>
              <div class="name">早稲田祭特別演奏会</div>
            </a>
          </div>

          <div class="ttbox">
            <div class="timearea">11</div>
            <div class="timeline">
              <div class="line1" />
              <div class="line2" />
              <div class="line3" />
            </div>
          </div>

          <div class="ttbox">
            <div class="timearea">12</div>
            <div class="timeline">
              <div class="line1" />
              <div class="line2" />
              <div class="line3" />
            </div>
          </div>

          <div class="ttbox">
            <div class="timearea">13</div>
            <div class="timeline">
              <div class="line1" />
              <div class="line2" />
              <div class="line3" />
            </div>
          </div>

          <div class="ttbox">
            <div class="timearea">14</div>
            <div class="timeline">
              <div class="line1" />
              <div class="line2" />
              <div class="line3" />
            </div>
          </div>

          <div class="ttbox">
            <div class="timearea">15</div>
            <div class="timeline">
              <div class="line1" />
              <div class="line2" />
              <div class="line3" />
            </div>
          </div>

          <div class="ttbox">
            <div class="timearea">16</div>
            <div class="timeline">
              <div class="line1" />
              <div class="line2" />
              <div class="line3" />
            </div>
          </div>

          <div class="ttbox">
            <div class="timearea">17</div>
            <div class="timeline">
              <div class="line1" />
              <div class="line2" />
              <div class="line3" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="day2_sp5 panelsp1">
      <div class="buttoncontainer">
        <div class="button switch_sp-19 swremover">
          <img src="../../assets/images/timetable/button.png" />
        </div>

        <div class="buttoncontainer1">
          <div class="spacer2" />
          <div class="syurui3">
            <img src="../../assets/images/timetable/drama.png" />
          </div>
        </div>

        <div class="button2 switch_sp-20 swremover">
          <img src="../../assets/images/timetable/button2.png" />
        </div>
      </div>
      <div class="forwindow">
        <div class="ttcontainer2">
          <div class="ttbox">
            <div class="timearea2">10</div>
            <div class="timeline">
              <div class="line1" />
              <div class="line2" />
              <div class="line3" />
            </div>
          </div>

          <div class="contents1-3 w2-5-1-1">
            <a
              href="https://platinumaps.jp/d/wasedasai?s=221239&lm=149&modal=list&floor=G">
              <div class="time">11:30~12:00</div>
              <div class="name">劇団てあとろ５０’早稲祭企画①</div>
            </a>
          </div>

          <div class="ttbox">
            <div class="timearea2">11</div>
            <div class="timeline">
              <div class="line1" />
              <div class="line2" />
              <div class="line3" />
            </div>
          </div>

          <div class="ttbox">
            <div class="timearea2">12</div>
            <div class="timeline">
              <div class="line1" />
              <div class="line2" />
              <div class="line3" />
            </div>
          </div>

          <div class="ttbox">
            <div class="timearea2">13</div>
            <div class="timeline">
              <div class="line1" />
              <div class="line2" />
              <div class="line3" />
            </div>
          </div>

          <div class="ttbox">
            <div class="timearea2">14</div>
            <div class="timeline">
              <div class="line1" />
              <div class="line2" />
              <div class="line3" />
            </div>
          </div>

          <div class="contents1-3 w2-5-1-2">
            <a
              href="https://platinumaps.jp/d/wasedasai?s=221240&lm=149&modal=list&floor=G">
              <div class="time">14:00~14:30</div>
              <div class="name">「いくつかの水溜まりと、その温度のこと」</div>
            </a>
          </div>

          <div class="ttbox">
            <div class="timearea2">15</div>
            <div class="timeline">
              <div class="line1" />
              <div class="line2" />
              <div class="line3" />
            </div>
          </div>

          <div class="ttbox">
            <div class="timearea2">16</div>
            <div class="timeline">
              <div class="line1" />
              <div class="line2" />
              <div class="line3" />
            </div>
          </div>

          <div class="contents1-3 w2-5-1-3">
            <a
              href="https://platinumaps.jp/d/wasedasai?s=221241&lm=149&modal=list&floor=G">
              <div class="time">16:30~17:00</div>
              <div class="name">早稲田祭いなほ亭 どらま館寄席2023</div>
            </a>
          </div>

          <div class="ttbox">
            <div class="timearea2">17</div>
            <div class="timeline">
              <div class="line1" />
              <div class="line2" />
              <div class="line3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import 'https://unpkg.com/scroll-hint@1.1.10/css/scroll-hint.css';
/********* カスタマイズCSSここから **********/

.spswitch-container {
  display: flex;
  width: 100%;
  text-align: center;
  justify-content: center;
}

.switch_sp-1,
.switch_sp-2,
.switch_sp-3,
.switch_sp-4,
.switch_sp-5,
.switch_sp-6,
.switch_sp-7,
.switch_sp-8,
.switch_sp-9,
.switch_sp-10,
.switch_sp-11,
.switch_sp-12,
.switch_sp-13,
.switch_sp-14,
.switch_sp-15,
.switch_sp-16,
.switch_sp-17,
.switch_sp-18,
.switch_sp-19,
.switch_sp-20 {
  cursor: pointer;
}

.to-case1sp,
.to-case2sp,
.to-case3sp {
  font-family: 'senobi-gothic';
  position: absolute;
  width: 100%;
  height: 50px;
  left: 50%;
  transform: translateX(-50%);
  line-height: 50px;
  text-decoration: none;
}

.day1_sp2,
.day1_sp1,
.day1_sp3,
.day1_sp4,
.day1_sp5,
.day2_sp1,
.day2_sp2,
.day2_sp3,
.day2_sp4,
.day2_sp5 {
  display: none;
  width: 100%;
}

.activesp {
  display: block;
}

.map {
  text-align: center;
  margin-bottom: 23px;
  margin-top: 30px;
}
.map img {
  width: 35%;
  object-fit: contain;
  display: none;
}

@media screen and (max-width: 1024px) {
  .map img {
    width: 50%;
    font-size: 7px;
  }
}

.map img.active {
  display: inline-block;
}

.date {
  display: flex;
  justify-content: center;
  width: 90%;
  margin: 0 auto;
  margin-bottom: 42px;
  position: relative;
}

.date li {
  font-family: 'Zen Kaku Gothic New';
  color: #f268a7;
  border: 2px solid #f268a7;
  background-color: #fff;
  padding: 30px;
  display: inline-block;
  cursor: pointer;
  margin: 0 1px;
}
.date li.active {
  background-color: #f268a7;
  color: #fff;
  text-decoration: underline 2px;
  text-decoration-color: #fff;
  text-underline-offset: 5px;
}
.date li {
  padding: 15px;
  font-size: 17px;
}

.ttcontainer {
  position: relative;
  width: 80%;
  height: 2880px;
  background-color: #fff;
  margin: 0 auto;
  transform: translateX(-3.2%);
  margin-top: 10px;
  border: solid 1px #cc3399;
}

.ttcontainer2 {
  position: relative;
  width: 42.5%;
  height: 2880px;
  background-color: #fff;
  margin: 0 auto;
  margin-top: 10px;
  transform: translateX(-3.2%);
  border: solid 1px #cc3399;
}
.ttbox {
  width: 100%;
  height: 360px;
  display: flex;
  background-color: #fff;
  border-bottom: solid 1px #cc3399;
}

.timearea {
  width: 8%;
  font-size: 17px;
  height: 360px;
  background-color: #cc3399;
  color: #fff;
  border-bottom: 0.3px solid #fff;
  text-align: center;
  line-height: 21;
}
.timearea2 {
  width: 16%;
  font-size: 17px;
  height: 360px;
  background-color: #cc3399;
  color: #fff;
  border-bottom: 0.3px solid #fff;
  text-align: center;
  line-height: 21;
}

.timeline {
  width: 100%;
}

.forwindow {
  height: 800px;
  overflow: auto;
}
.line1 {
  margin-top: 89px;
  height: 1px;
  width: 100%;
  border-bottom: 1px dashed #cc3399;
}

.line2 {
  margin-top: 89px;
  height: 1px;
  width: 100%;
  border-bottom: 1px dashed #cc3399;
}

.line3 {
  margin-top: 89px;
  height: 1px;
  width: 100%;
  border-bottom: 1px dashed #cc3399;
}

.contents1-1 {
  position: absolute;
  left: 10%;
  background-color: #fff;
  border-radius: 10px;
  border: 3px solid #f268a7;
  width: 43%;
}

.contents1-2 {
  position: absolute;
  left: 56%;
  background-color: #fff;
  border-radius: 10px;
  border: 3px solid #f268a7;
  width: 43%;
}

.contents1-3 {
  position: absolute;
  left: 16%;
  background-color: #fff;
  border-radius: 10px;
  border: 3px solid #f268a7;
  width: 83%;
}

.contents1-3 a {
  display: block;
  text-decoration: none;
  width: 100%;
  height: 100%;
  padding-top: 10px;
}

.contents1-2 a {
  display: block;
  text-decoration: none;
  width: 100%;
  height: 100%;
  padding-top: 10px;
}

.contents1-1 a {
  display: block;
  text-decoration: none;
  width: 100%;
  height: 100%;
  padding-top: 10px;
}

.time {
  width: 50%;
  font-size: 11px;
  margin-bottom: 5px;
  margin-left: 2px;
  color: #cc3399;
}
.name {
  display: grid;
  place-items: center;
  font-size: 14px;
  text-align: center;
  color: #cc3399;
  font-weight: 700;
  max-width: 80%;
  width: fit-content;
  margin: 0 auto;
  height: 80%;
}

.w1-1-1-1 {
  height: 240px;
  top: 0px;
  left: 10%;
}

.w1-1-1-2 {
  height: 90px;
  top: 300px;
}

.w1-1-1-3 {
  height: 150px;
  top: 450px;
}

.w1-1-1-4 {
  height: 120px;
  top: 660px;
}

.w1-1-1-5 {
  height: 60px;
  top: 870px;
}

.w1-1-1-6 {
  height: 90px;
  top: 990px;
}

.w1-1-1-7 {
  height: 180px;
  top: 1140px;
}

.w1-1-1-8 {
  height: 210px;
  top: 1380px;
}

.w1-1-1-9 {
  height: 120px;
  top: 1650px;
}

.w1-1-1-10 {
  height: 180px;
  top: 1860px;
}

.w1-1-1-11 {
  height: 150px;
  top: 2100px;
}

.w1-1-1-12 {
  height: 210px;
  top: 2310px;
}

.w1-1-2-1 {
  height: 180px;
  top: 0px;
}

.w1-1-2-2 {
  height: 60px;
  top: 240px;
}

.w1-1-2-3 {
  height: 60px;
  top: 390px;
}

.w1-1-2-4 {
  height: 90px;
  top: 540px;
}

.w1-1-2-5 {
  height: 180px;
  top: 720px;
}

.w1-1-2-6 {
  height: 90px;
  top: 990px;
}

.w1-1-2-7 {
  height: 120px;
  top: 1170px;
}

.w1-1-2-8 {
  height: 150px;
  top: 1380px;
}

.w1-1-2-9 {
  height: 210px;
  top: 1590px;
}
.w1-1-2-10 {
  height: 120px;
  top: 1890px;
}

.w1-1-2-11 {
  height: 180px;
  top: 2100px;
}

.w1-1-2-12 {
  height: 180px;
  top: 2340px;
}

.w1-2-1-1 {
  height: 360px;
  top: 720px;
}

.w1-2-1-2 {
  height: 360px;
  top: 2520px;
}

.w1-2-2-1 {
  height: 150px;
  top: 0px;
}

.w1-2-2-2 {
  height: 240px;
  top: 210px;
}

.w1-2-2-3 {
  height: 180px;
  top: 510px;
}

.w1-2-2-4 {
  height: 270px;
  top: 750px;
}

.w1-2-2-5 {
  height: 150px;
  top: 1110px;
}

.w1-2-2-6 {
  height: 270px;
  top: 1320px;
}

.w1-2-2-7 {
  height: 180px;
  top: 1680px;
}

.w1-2-2-8 {
  height: 120px;
  top: 1920px;
}

.w1-2-2-9 {
  height: 150px;
  top: 2100px;
}

.w1-2-2-10 {
  height: 150px;
  top: 2310px;
}

.w1-3-1-1 {
  height: 360px;
  top: 360px;
}

.w1-3-1-2 {
  height: 330px;
  top: 1980px;
}

.w1-3-2-1 {
  height: 900px;
  top: 1170px;
}

.w1-3-2-2 {
  height: 180px;
  top: 360px;
}

.w1-4-1-1 {
  height: 150px;
  top: 0px;
}

.w1-4-1-2 {
  height: 90px;
  top: 220px;
}

.w1-4-1-3 {
  height: 210px;
  top: 360px;
}

.w1-4-1-4 {
  height: 210px;
  top: 660px;
}

.w1-4-1-5 {
  height: 90px;
  top: 930px;
}

.w1-4-1-6 {
  height: 210px;
  top: 1080px;
}

.w1-4-1-7 {
  height: 150px;
  top: 1350px;
}

.w1-4-1-8 {
  height: 120px;
  top: 1560px;
}

.w1-4-1-9 {
  height: 210px;
  top: 1770px;
}

.w1-4-1-10 {
  height: 150px;
  top: 2070px;
}

.w1-4-1-11 {
  height: 210px;
  top: 2310px;
}

.w1-4-1-12 {
  height: 150px;
  top: 2610px;
}

.w1-4-2-1 {
  height: 360px;
  top: 540px;
}

.w1-4-2-2 {
  height: 450px;
  top: 1800px;
}

.w1-5-1-1 {
  height: 180px;
  top: 540px;
}

.w1-5-1-2 {
  height: 180px;
  top: 1440px;
}

.w1-5-1-3 {
  height: 180px;
  top: 1980px;
}

.w2-1-1-1 {
  height: 180px;
  top: 0px;
}

.w2-1-1-2 {
  height: 90px;
  top: 270px;
}

.w2-1-1-3 {
  height: 180px;
  top: 450px;
}

.w2-1-1-4 {
  height: 60px;
  top: 690px;
}

.w2-1-1-5 {
  height: 90px;
  top: 840px;
}

.w2-1-1-6 {
  height: 120px;
  top: 990px;
}

.w2-1-1-7 {
  height: 270px;
  top: 1230px;
}

.w2-1-1-8 {
  height: 120px;
  top: 1590px;
}

.w2-1-1-9 {
  height: 240px;
  top: 1800px;
}

.w2-1-1-10 {
  height: 150px;
  top: 2130px;
}

.w2-1-1-11 {
  height: 180px;
  top: 2340px;
}

.w2-1-2-1 {
  height: 210px;
  top: 0px;
}

.w2-1-2-2 {
  height: 240px;
  top: 300px;
}

.w2-1-2-3 {
  height: 270px;
  top: 570px;
}

.w2-1-2-4 {
  height: 90px;
  top: 930px;
}

.w2-1-2-5 {
  height: 120px;
  top: 1110px;
}

.w2-1-2-6 {
  height: 120px;
  top: 1260px;
}

.w2-1-2-7 {
  height: 270px;
  top: 1500px;
}

.w2-1-2-8 {
  height: 90px;
  top: 1830px;
}

.w2-1-2-9 {
  height: 180px;
  top: 1980px;
}

.w2-1-2-10 {
  height: 60px;
  top: 2250px;
}

.w2-1-2-11 {
  height: 150px;
  top: 2370px;
}

.w2-2-1-1 {
  height: 180px;
  top: 0px;
}

.w2-2-1-2 {
  height: 60px;
  top: 240px;
}

.w2-2-1-3 {
  height: 210px;
  top: 390px;
}

.w2-2-1-4 {
  height: 210px;
  top: 660px;
}

.w2-2-1-5 {
  height: 150px;
  top: 930px;
}

.w2-2-1-6 {
  height: 60px;
  top: 1110px;
}

.w2-2-1-7 {
  height: 120px;
  top: 1260px;
}

.w2-2-1-8 {
  height: 180px;
  top: 1440px;
}

.w2-2-1-9 {
  height: 210px;
  top: 1680px;
}

.w2-2-1-10 {
  height: 180px;
  top: 1980px;
}

.w2-2-1-11 {
  height: 120px;
  top: 2220px;
}

.w2-2-1-12 {
  height: 120px;
  top: 2400px;
}

.w2-2-2-1 {
  height: 360px;
  top: 720px;
}

.w2-2-2-2 {
  height: 360px;
  top: 2520px;
}

.w2-3-1-1 {
  height: 270px;
  top: 540px;
}

.w2-3-1-2 {
  height: 330px;
  top: 1890px;
}

.w2-3-2-1 {
  height: 900px;
  top: 90px;
}

.w2-3-2-2 {
  height: 210px;
  top: 1980px;
}

.w2-4-1-1 {
  height: 150px;
  top: 0px;
}

.w2-4-1-2 {
  height: 180px;
  top: 240px;
}

.w2-4-1-3 {
  height: 210px;
  top: 510px;
}

.w2-4-1-4 {
  height: 150px;
  top: 750px;
}

.w2-4-1-5 {
  height: 180px;
  top: 1020px;
}

.w2-4-1-6 {
  height: 180px;
  top: 1260px;
}

.w2-4-1-7 {
  height: 120px;
  top: 1530px;
}

.w2-4-1-8 {
  height: 90px;
  top: 1710px;
}

.w2-4-1-9 {
  height: 90px;
  top: 1890px;
}

.w2-4-1-10 {
  height: 210px;
  top: 2010px;
}

.w2-4-1-11 {
  height: 210px;
  top: 2310px;
}

.w2-4-1-12 {
  height: 240px;
  top: 2610px;
}

.w2-4-2-1 {
  height: 750px;
  top: 120px;
}

.w2-4-2-2 {
  height: 810px;
  top: 1620px;
}

.w2-5-1-1 {
  height: 180px;
  top: 540px;
}

.w2-5-1-2 {
  height: 180px;
  top: 1440px;
}

.w2-5-1-3 {
  height: 180px;
  top: 2340px;
}

.spacer {
  width: 7%;
}

.spacer2 {
  width: 28%;
}
.buttoncontainer {
  display: flex;
  width: 100%;
  margin: 0;
  align-items: center;
}

.buttoncontainer1 {
  display: flex;
  width: 85%;
  margin: 0 auto;
  align-items: center;
}

.button {
  width: 5.5%;
}

.button2 {
  width: 5.5%;
}

.syurui1 {
  width: 43%;
}

.syurui2 {
  width: 43%;
}

.syurui3 {
  width: 43%;
}

@media screen and (max-width: 600px) {
  .date li {
    padding: 10px;
    padding-left: 12px;
    font-size: 10px;
  }

  .name {
    font-size: 9px;
  }
}

.first {
  border-radius: 30px 0px 0px 30px;
}

.second {
  border-radius: 0px 30px 30px 0px;
}

.layouts {
  padding-bottom: 20px;
}

@media screen and (min-width: 1024px) {
  .swremover {
    font-size: 17px;
  }

  .date li {
    font-size: 17px;
  }
}

.wasehura {
  font-size: 12px;
}

@media screen and (max-width: 1024px) {
  .wasehura {
    font-size: 7px;
  }
}
.haishin {
  text-align: center;
  margin: 10px;
}
.haishin a {
  text-decoration: none;
  color: #cc3399;
}
.haishin a:hover {
  color: #e084c0;
}
</style>
