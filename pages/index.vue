<script>
export default {
  layout: 'topNew',
  head: {
    titleTemplate: null,
    title: '早稲田祭2024',
    meta: [
      { hid: 'author', name: '早稲田祭2024運営スタッフ' },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website'
      },
      { hid: 'og:title', property: 'og:title', content: '早稲田祭2024' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://wasedasai.net'
      },
      {
        hid: 'og:description',
        content:
          '2024年11月2日(土)、3日(日)に開催される早稲田祭2024の公式サイトです。'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://wasedasai.net/images/logo.png'
      },
      // Twitter
      { hid: 'twitter:title', name: 'twitter:title', content: '早稲田祭2024' },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content:
          '2024年11月2日(土)、3日(日)に開催される早稲田祭2024の公式サイトです。'
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        hid: 'twitter:site',
        name: 'twitter:site',
        content: 'https://wasedasai.net'
      },
      {
        hid: 'twitter:image',
        property: 'twitter:image',
        content: 'https://wasedasai.net/images/logo.png'
      }
    ]
  },
  mounted() {
    // ------------------------------imagemapresizer after-import-by-npm,remove-commentout-slash-bar------------------------------- //
    // this.$imageMapResize()

    const buttonAreas = [
      { area: 'triangleAreaA1', image: 'triangleImageA1' },
      { area: 'triangleAreaA2', image: 'triangleImageA2' },
      { area: 'triangleAreaA3', image: 'triangleImageA3' }
    ]

    // ボタンのホバーエフェクトを設定
    buttonAreas.forEach(({ area, image }) => {
      const topArea = document.getElementById(area)
      const topImage = document.getElementById(image)

      if (topArea && topImage) {
        topArea.addEventListener('mouseover', () => {
          topImage.style.transform = 'scale(1.1)' // scaleの代わりにtransformを使う
        })
        topArea.addEventListener('mouseout', () => {
          topImage.style.transform = 'scale(1)' // scaleの代わりにtransformを使う
        })
      }
    })

    // ------------------------------------------------------------- //

    function ButtonAResizer() {
      const ACover = document.getElementById('topBtnACover')
      const SecNo2 = document.getElementById('top_section2')
      const AHeight = SecNo2.clientHeight
      const AWidth = SecNo2.clientWidth

      if (AHeight / AWidth > 1.4) {
        ACover.style.width = '90%'
        ACover.style.height = ''
      } else {
        ACover.style.width = ''
        ACover.style.height = '90%'
      }
    }

    ButtonAResizer()
    window.addEventListener('resize', ButtonAResizer)

    // ------------------------------------------------------------- //

    function SPFooterResizer() {
      const secNo5 = document.getElementById('section005')
      const spFoot = document.getElementById('sp_footer')
      const SFHeig = spFoot.clientHeight
      secNo5.style.height = SFHeig * 1.1
    }
    SPFooterResizer()

    // ------------------------------------------------------------- //

    // const right = document.getElementById('scrollable')
    // const left = document.getElementById('display')

    // // スクロールリスナーを追加する関数
    // function addScrollSync() {
    //   left.addEventListener('wheel', syncScroll)
    // }
    // // スクロールリスナーを削除する関数
    // function removeScrollSync() {
    //   left.removeEventListener('wheel', syncScroll)
    // }

    // let isScrolling = false
    // // スクロールを右側に伝える関数
    // function syncScroll(e) {
    //   if (isScrolling) return // すでにスクロール中なら無視
    //   isScrolling = true

    //   // スクロール量を調整
    //   const scrollAmount =
    //     e.deltaY > 0 ? Math.min(5 * e.deltaY, 50) : Math.max(5 * e.deltaY, -50)
    //   e.preventDefault()
    //   right.scrollBy({
    //     top: scrollAmount,
    //     behavior: 'smooth'
    //   })

    //   // デバウンスを設定 (例えば300ms)
    //   setTimeout(() => {
    //     isScrolling = false
    //   }, 300)
    // }
    // // 画面幅に応じてスクロール同期機能を切り替える
    // function checkScreenWidth() {
    //   if (window.innerWidth > 1023) {
    //     addScrollSync() // 1024px以上ならスクロール同期を有効
    //   } else {
    //     removeScrollSync() // 1023px以下ならスクロール同期を無効
    //   }
    // }

    // // 初期ロード時に画面幅をチェック
    // checkScreenWidth()
    // // ウィンドウサイズが変更されたときに再チェック
    // window.addEventListener('resize', checkScreenWidth)

    // ------------------------------------------------------------- //

    // // スクロール量検出
    // function ScrollLevelDetecter() {
    //   const sec1 = document.getElementById('top_section1')
    //   const sec2 = document.getElementById('top_section2')
    //   const sec3 = document.getElementById('top_section3')
    //   const sec4 = document.getElementById('top_section4')
    //   const sec1H = sec1.clientHeight
    //   const sec2H = sec2.clientHeight
    //   const sec3H = sec3.clientHeight
    //   const sec4H = sec4.clientHeight
    //   const RHeight = sec1H + sec2H + sec3H + sec4H
    //   const RScroll = right.scroll
    //   console.log(RHeight)
    //   console.log(RScroll)
    //   if (RScroll >= RHeight) {
    //     console.log('scrolled')
    //   }
    // }

    // ScrollLevelDetecter()
    // right.addEventListener('scroll', ScrollLevelDetecter)

    // ------------------------------------------------------------- //
  },
  methods: {
    scrollPage() {
      const scrollableSection = document.getElementById('scrollable')
      const viewportHeight = window.innerHeight

      // 現在のスクロール位置に画面の高さ分を足して、スクロールさせる
      scrollableSection.scrollBy({
        top: viewportHeight,
        behavior: 'smooth' // スムーズなスクロール
      })
    }

    // ------------------------------imagemapresizer after-import-by-npm,remove-commentout-slash-bar------------------------------- //
    //     navigateTo(route) {
    //       this.$router.push(route)
    //     }
  }
}
</script>

<template>
  <div class="allpage">
    <!------------------------------------------2024:<<<<<左側領域------------------------------------------>
    <div id="display" class="body_whole">
      <div id="unscrollable" class="body_left">
        <img class="logo_img" src="~/assets/images/footer_logo.png" alt="" />
        <div class="top_about">
          早稲田祭2024は、11月2日(土)、3日(日)に開催いたします。<br />
          関わる全てのみなさまの「物語」が紡ぐ、早稲田祭2024。<br />
          ご来場を、心からお待ちしております。
        </div>
        <!------------------------------------------2024:NEWS------------------------------------------>
        <div class="news_section">
          <div class="news_titlearea">
            <BlockTitle :bg-color="'green'">NEWS</BlockTitle>
          </div>
          <div class="list_cover">
            <ul class="news_list">
              <!-- <li>
                公式テーマソング募集！
                <a
                  href="https://drive.google.com/file/d/1vDnCgZXqVISiAfiSFZU-CUDr1irsfj2Z/view?usp=drive_link">
                  募集要項</a
                >はこちら！
              </li>
              <li>
                <NuxtLink :to="'/'" class="news-link"
                  >屋台コンテスト2023最終結果発表！</NuxtLink
                >
              </li> -->
              <li>
                <NuxtLink :to="'/message'" class="news-link"
                  >地域×早大生メッセージ企画 公開！</NuxtLink
                >
              </li>
              <li>通用門に装飾物が設置されました！</li>
              <li>公式サイト リニューアル！</li>
            </ul>
          </div>
        </div>
        <!-- <div class="top_Exlink">
          <ExternalLink
            class="top_External"
            :bg-color="'navy'"
            :rounded="true"
            :url="'/'"
            :color="'navy'">
            公式パンフレット情報/しばしお待ちを
          </ExternalLink>
        </div> -->
      </div>
      <svg
        id="topVector"
        class="top_vector"
        viewBox="0 0 350 982"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M350.001 982C231.334 896.531 40.999 654.5 0.000488874 0L0.000297908 149.634C-6.23101e-05 401.634 -0.000617701 790.173 0.000923273 982H350.001Z"
          fill="#F3982D" />
        <path
          d="M171 982C24 825 -0.000432382 328 0.000307679 0L0 982H171Z"
          fill="#59C3E1" />
      </svg>

      <!------------------------------------------2024:右側領域>>>>>------------------------------------------>
      <div id="scrollable" class="body_right">
        <section class="section000">
          <img class="logo_img" src="~/assets/images/footer_logo.png" alt="" />
          <div class="top_about">
            早稲田祭2024は、11月2日(土)、3日(日)に開催いたします。<br />
            関わる全てのみなさまの「物語」が紡ぐ、早稲田祭2024。<br />
            ご来場を、心からお待ちしております。
          </div>
          <!------------------------------------------2024:NEWS------------------------------------------>
          <div class="news_section">
            <div class="news_titlearea">
              <BlockTitle :bg-color="'green'">NEWS</BlockTitle>
            </div>
            <!--公開時にはデリート-->
            <div class="list_cover">
              <ul class="news_list">
                <!-- <li>
                公式テーマソング募集！
                <a
                  href="https://drive.google.com/file/d/1vDnCgZXqVISiAfiSFZU-CUDr1irsfj2Z/view?usp=drive_link">
                  募集要項</a
                >はこちら！
              </li>
              <li>
                <NuxtLink :to="'/'" class="news-link"
                  >屋台コンテスト2023最終結果発表！</NuxtLink
                >
              </li> -->
                <li>
                  <NuxtLink :to="'/message'" class="news-link"
                    >地域×早大生メッセージ企画 公開！</NuxtLink
                  >
                </li>
                <li>公式サイト リニューアル！</li>
              </ul>
            </div>
          </div>
          <!-- <div class="top_Exlink_sp">
            <div class="tpex_wrapper">
              <ExternalLink
                class="top_External"
                :bg-color="'navy'"
                :rounded="true"
                :url="'/'"
                :color="'navy'">
                公式パンフレット情報/しばしお待ちを
              </ExternalLink>
            </div>
          </div> -->
          <div id="type04" class="type typeSP">
            <div class="innertype">
              <a @click="scrollPage()">Scroll!</a>
            </div>
          </div>
        </section>

        <!------------------------------------------2024:section001------------------------------------------>
        <section id="top_section1" class="section001">
          <div id="type04" class="type typePC">
            <a @click="scrollPage()">Scroll!</a>
          </div>
        </section>

        <!------------------------------------------2024:section002------------------------------------------>
        <section id="top_section2" class="section002">
          <div id="topBtnACover" class="topBtnA_cover">
            <img
              id="triangleImageA1"
              src="~assets/images/top/webbutton_001.png"
              alt=""
              usemap="#image-mapA1" />
            <map name="image-mapA1">
              <area
                id="triangleAreaA1"
                target=""
                alt=""
                title=""
                href="/search"
                coords="0,200,400,0,400,400"
                shape="poly" />
            </map>

            <img
              id="triangleImageA2"
              src="~assets/images/top/webbutton_002.png"
              alt=""
              usemap="#image-mapA2" />
            <map name="image-mapA2">
              <area
                id="triangleAreaA2"
                target=""
                alt=""
                title=""
                href="/timetable"
                coords="0,0,400,200,0,400"
                shape="poly" />
            </map>

            <img
              id="triangleImageA3"
              src="~assets/images/top/webbutton_003.png"
              alt=""
              usemap="#image-mapA3" />
            <map name="image-mapA3">
              <area
                id="triangleAreaA3"
                target=""
                alt=""
                title=""
                href="/welcome"
                coords="0,200,400,0,400,400"
                shape="poly" />
              <!-- @click.prevent="navigateTo('/welcome')"  -->
            </map>

            <!-- <div class="saikun_button">
                <img class="saikun_hontai" src="static/img/saikunhontai.png">
            </div> -->
          </div>
        </section>

        <!------------------------------------------2024:section003------------------------------------------>
        <section id="top_section3" class="section003">
          <div class="section003_wrapper">
            <!-- セクション上下幅を維持しつつ内部にpaddingを用意するためのクラス -->
            <div class="topBtnB_container">
              <div class="topBtnB_cover">
                <div class="topBtnB_wrapper1">
                  <a id="topBtnB1" class="topBtnB"> もっと詳しく </a>
                  <NuxtLink id="topBtnB2" :to="'/former'" class="topBtnB">
                    <img src="~assets/images/top/FF210.png" alt="" />
                    早稲田祭当日以前の企画
                  </NuxtLink>
                  <NuxtLink id="topBtnB3" :to="'/goods'" class="topBtnB">
                    <img src="~assets/images/top/saikun.png" alt="" />
                    公式グッズ
                  </NuxtLink>
                </div>
                <div class="topBtnB_wrapper2">
                  <NuxtLink id="topBtnB4" :to="'/inshoku'" class="topBtnB">
                    <img src="~assets/images/top/food.png" alt="" />
                    屋台コンテスト2024
                  </NuxtLink>
                  <NuxtLink id="topBtnB5" :to="'/wasemeshi'" class="topBtnB">
                    <img src="~assets/images/top/wasemesi.png" alt="" />
                    ワセメシコラボ
                  </NuxtLink>
                  <NuxtLink id="topBtnB6" :to="'/artist'" class="topBtnB">
                    <img src="~assets/images/top/artist.png" alt="" />
                    早稲田アリーナ企画
                  </NuxtLink>
                </div>
              </div>
              <!-- sp -->
              <div class="topBtnB_spcover">
                <div class="topBtnB_spwrapper1">
                  <a id="topBtnB1" class="topBtnB"> もっと詳しく </a>
                  <NuxtLink id="topBtnB2" :to="'/former'" class="topBtnB">
                    <img src="~assets/images/top/FF210.png" alt="" />
                    早稲田祭当日以前の企画
                  </NuxtLink>
                </div>
                <div class="topBtnB_spwrapper2">
                  <NuxtLink id="topBtnB3" :to="'/goods'" class="topBtnB">
                    <img src="~assets/images/top/saikun.png" alt="" />
                    公式グッズ
                  </NuxtLink>
                  <NuxtLink id="topBtnB4" :to="'/inshoku'" class="topBtnB">
                    <img src="~assets/images/top/food.png" alt="" />
                    屋台コンテスト2024
                  </NuxtLink>
                </div>
                <div class="topBtnB_spwrapper3">
                  <NuxtLink id="topBtnB5" :to="'/wasemeshi'" class="topBtnB">
                    <img src="~assets/images/top/wasemesi.png" alt="" />
                    ワセメシコラボ
                  </NuxtLink>
                  <NuxtLink id="topBtnB6" :to="'/artist'" class="topBtnB">
                    <img src="~assets/images/top/artist.png" alt="" />
                    早稲田アリーナ企画
                  </NuxtLink>
                </div>
              </div>
            </div>
            <div class="topBtnC_container">
              <BlockTitle :bg-color="'green'" class="topBtnC_title"
                >ご来場の皆様へ</BlockTitle
              >
              <div class="topBtnC_cover">
                <NuxtLink :to="'/inquiry'" class="topBtnC">
                  よくある質問
                </NuxtLink>
                <NuxtLink :to="'/contact'" class="topBtnC">
                  お問い合わせ
                </NuxtLink>
                <NuxtLink :to="'/questionnaire'" class="topBtnC">
                  公式アンケート
                </NuxtLink>
              </div>
            </div>
          </div>
          <!-- section003_wrapper end -->
        </section>

        <!------------------------------------------2024:section004------------------------------------------>
        <section id="top_section4" class="section004">
          <BlockTitle :bg-color="'green'" class="topBtnD_title"
            >関係者の皆様へ</BlockTitle
          >
          <div class="topBtnD_cover">
            <div class="topBtnD_wrapper">
              <NuxtLink :to="'/advertise'" class="topBtnD"
                >校友の皆様へ</NuxtLink
              >
              <NuxtLink :to="'/fsr'" class="topBtnD"
                >FSR・社会的取り組み</NuxtLink
              >
            </div>
            <div class="topBtnD_wrapper">
              <NuxtLink :to="'/company'" class="topBtnD"
                >ご協賛いただいた皆様へ</NuxtLink
              >
              <NuxtLink :to="'/support'" class="topBtnD"
                >ご支援いただいた皆様へ</NuxtLink
              >
            </div>
            <div class="topBtnD_wrapper">
              <NuxtLink :to="'/message'" class="topBtnD"
                >メッセージ企画</NuxtLink
              >
              <NuxtLink :to="'/thanks'" class="topBtnD"
                >スペシャルサンクス</NuxtLink
              >
            </div>
          </div>
          <div class="banner_contaainer">
            <a
              href="https://otsukaya.co.jp/store/"
              target="_blank"
              rel="noopener noreferrer"
              class="advertisements-big">
              <img
                class="top_adv1"
                src="~assets/images/top/24banner001.png"
                alt="株式会社大塚屋" />
            </a>
            <a
              href="https://buddycom.net/"
              target="_blank"
              rel="noopener noreferrer"
              class="advertisements-big">
              <img
                class="top_adv2"
                src="~assets/images/top/24banner003.gif"
                alt="buddycom" />
            </a>
            <a
              href="https://unitasu.com/"
              target="_blank"
              rel="noopener noreferrer"
              class="advertisements-big">
              <img
                class="top_adv3"
                src="~assets/images/top/24banner002.JPG"
                alt="株式会社ユニティー" />
            </a>
            <a
              href="https://lighting.coburn.jp/"
              target="_blank"
              rel="noopener noreferrer"
              class="advertisements-big">
              <img
                class="top_adv3"
                src="~assets/images/top/24banner004.jpeg"
                alt="日本コーバン株式会社" />
            </a>
            <a
              href="https://senkyocar-labo.com/"
              target="_blank"
              rel="noopener noreferrer"
              class="advertisements-big">
              <img
                class="top_adv3"
                src="~assets/images/top/24banner005.jpeg"
                alt="選挙カーLABo." />
            </a>
          </div>
        </section>

        <!------------------------------------------2024:section005------------------------------------------>
        <section id="section005" class="section005">
          <Footer id="sp_footer" class="sp_footer" />
        </section>
      </div>
      <!-- body_right close -->
    </div>
    <!-- body_left close -->
    <Footer class="footer" />
  </div>
  <!-- allpage close -->
</template>

<style scoped>
body {
  margin-bottom: 0;
}
.body_whole {
  position: relative;
  width: 100%; /* vwを使わないこと！スクロールバーが計算され幅が調整しづらくなる */
  height: calc(100vh - 50px); /* headerの高さをマイナスする */
  background-color: #ffffff;
  z-index: 2;
}

/* ------------------------------------------------------------画面左側------------------------------------------------------------ */
.body_left {
  position: absolute;
  left: 0;
  width: 45%;
  margin-left: 5%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
}
.logo_img {
  width: 60%;
  min-width: 200px;
  margin-right: 20%;
}
.top_about {
  width: 80%;
  max-width: 700px;
  font-size: 14px;
  font-family: 'Noto Sans JP', 'Hiragino Kaku Gothic ProN', Meiryo, sans-serif;
  margin-top: 1%;
  margin-bottom: 5%;
}
.top_vector {
  position: absolute;
  left: 0;
  height: 100%;
}

/* ------------------------------------------------------------NEWS------------------------------------------------------------ */
.news_section {
  display: flex;
  flex-direction: column;
  width: 80%;
  max-width: 700px;
  margin-bottom: 10%;
}
.news_titlearea {
  display: flex;
  flex-direction: column;
  text-align: start;
}
.news-link a {
  color: #036eb8;
}
.news_titlearea > .block-title {
  /*タイトル*/
  font-family: 'Noto Sans JP', 'Hiragino Kaku Gothic ProN', Meiryo, sans-serif;
  font-weight: 700;
  margin: 0;

  display: inline-block;
  font-size: 24px;
  margin-bottom: 16px;
  position: relative;
  color: transparent;
  background: repeating-linear-gradient(
    90deg,
    #59c3e1 0,
    #59c3e1 1em,
    #f3982d 1em,
    #f3982d 1.5em,
    #3e3a39 1.5em,
    #3e3a39 100em
  );
  /* background: repeating-linear-gradient(
    90deg,
    #59c3e1 0 1em,
    #f3982d 1em 1.5em,
    #3e3a39 1.5em 100em
  ); */
  background-clip: text;
  -webkit-background-clip: text;
}
@media screen and (max-width: 768px) {
  .news_titlearea > .block-title {
    font-size: 16px;
  }
  .news_titlearea > .block-title::first-letter {
    font-size: 20px;
  }
}
.list_cover {
  height: 100px;
}
.news_list {
  position: relative;
  height: 100px;
  flex-basis: 75%;
  margin: 0;
  padding: 0 0 0 0px;
  line-height: 1.05;
  overflow-y: scroll;
}
.news_list > li {
  font-family: 'Noto Sans JP', 'Hiragino Kaku Gothic ProN', Meiryo, sans-serif;
  font-size: 14px;
  font-weight: 300;
  color: #3e3a39;
  list-style: none;
  margin-bottom: 5px;
}
.news_list > li a {
  color: #59c3e1;
  text-decoration: none;
  font-weight: 700;
}
.news_list::-webkit-scrollbar {
  position: absolute;
  left: 10px;
  background: #ebf6fb;
  width: 6px;
  border-radius: 3px;
}
.news_list::-webkit-scrollbar-thumb {
  background: #59c3e1;
  border-radius: 3px;
}

/* ----------------------------------- */
.top_Exlink {
  display: block;
  width: 100%;
  text-align: right;
  padding-right: 10%;
  margin-bottom: 5%;
}
.top_Exlink_sp {
  display: block;
  text-align: center;
  width: 100%;
  margin-bottom: 5%;
}
.tpex_wrapper {
  display: block;
  margin: 0 auto;
  width: 80%;
  max-width: 500px;
  text-align: right;
}
.top_External {
  padding-right: 30px;
  padding-left: 20px;
}
/* ------------------------------------------------------------画面右側------------------------------------------------------------ */
.body_right {
  height: 100%;
  width: 50%; /* vwを使わないこと！スクロールバーが計算され幅が調整しづらくなる */
  overflow-y: scroll;
  overflow-x: visible;
  position: absolute;
  right: 0;
  z-index: 5;
  scroll-behavior: smooth;

  /* 水玉模様 */
  background-color: #fff;
  background-image: radial-gradient(#3e3a39 3%, transparent 3%);
  background-position: 0 0, 30px 30px;
  background-size: 60px 60px;
}

/* ------------------------------------------------------------スナップスクロール------------------------------------------------------------ */
/* @media screen and (min-width: 1024px) {
  .body_right {
    scroll-snap-type: y mandatory;
    scroll-behavior: smooth;
    height: calc(100vh - 50px);
  }
  .section000,
  .section001,
  .section002,
  .section003,
  .section004 {
    scroll-snap-align: start;
  }
} */

/* ------------------------------------------------------------第零セクション------------------------------------------------------------ */
.section000 {
  height: calc(100vh - 50px);
  display: none;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

/* ------------------------------------------------------------第一セクション------------------------------------------------------------ */
/* -スクロールボタン スニペットより- */
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400&display=swap');
.type {
  position: relative;
  width: 100%;
  text-align: center;
}
.typePC {
  height: 100%;
}
.typeSP {
  height: 20%;
}
.type a {
  display: inline-block;
  position: absolute;
  bottom: 70px;
  z-index: 2;
  padding: 10px 10px 150px;
  color: #3e3a39;
  font-size: 14px;
  font-family: 'Josefin Sans', sans-serif;
  line-height: 1;
  letter-spacing: 0.2em;
  text-decoration: none;
  writing-mode: horizontal-tb;
  transition: 0.2s;
  overflow: hidden;
}
.typeSP a {
  bottom: 0px;
}
.type a::before {
  content: '';
  position: absolute;
  bottom: 10px;
  left: 36%;
  width: 24px;
  height: 16px;
  transform: rotateZ(-45deg);
  border-bottom: 1px solid #3e3a39;
  border-left: 1px solid #3e3a39;
  background: transparent;
}
.type a::after {
  content: '';
  position: absolute;
  bottom: 30px;
  left: 50%;
  width: 1px;
  height: 100px;
  background: #3e3a39;
}
.type a::after :hover {
  opacity: 0.5;
}

#type04 a::after {
  animation: sdl04 2s cubic-bezier(1, 0, 0, 1) infinite;
}
@keyframes sdl04 {
  0% {
    opacity: 1;
    transform: scale(1, 0);
    transform-origin: 0 0;
  }
  30% {
    transform: scale(1, 1);
    transform-origin: 0 0;
  }
  30.1%,
  70% {
    transform: scale(1, 1);
    transform-origin: 0 100%;
  }
  100% {
    opacity: 0;
    transform: scale(1, 0);
    transform-origin: 0 100%;
  }
}
.innertype {
  display: block;
  margin: 0 auto;
  width: 100px;
  height: 100px;
  padding-right: 80px;
}

/* ------------------------------------------------------------第二セクション------------------------------------------------------------ */
.section002 {
  /* position: relative; aspectRatioBoxから */
  display: flex;
  justify-content: center;
  align-items: center;
}
.topBtnA_cover {
  display: block;
  margin: 0 auto;
  position: relative;
  aspect-ratio: 0.714285;
}
#triangleImageA1 {
  right: 0%;
  top: 0%;
  transition: scale 0.5s ease-in-out;
}
#triangleImageA2 {
  left: 0%;
  top: 27.5%;
  transition: scale 0.5s ease-in-out;
}
#triangleImageA3 {
  right: 0%;
  top: 55%;
  transition: scale 0.5s ease-in-out;
}
.topBtnA_cover > img {
  position: absolute;
  height: 45%;
  aspect-ratio: 1;
  z-index: 10;
}

/* .saikun_button{
    position: relative;
    top: 83%;
    left: 0%;
    content: "";
    height: 25%;
    aspect-ratio: 1;
    border-style: solid;
    border-top: 50px solid transparent;
    border-bottom: 50px solid transparent;
    border-left: 100px solid #6bbad6;
    border-right: 0;
}
.saikun_hontai{
    display: block;
    position: absolute;
    top: -80px;
    left: -100px;
    object-position: top 70px left 0px;
    transition: object-position 0.4s;
    object-fit: cover;
    height: 25%;
    aspect-ratio: 1;
    transform: rotateZ(9deg);
    z-index: -1;
}
.saikun_button:hover .saikun_hontai{
    object-position: top 0px left 0px;
    transition: object-position 0.4s;
} */

/* ------------------------------------------------------------第三セクション------------------------------------------------------------ */
.section003 {
  background-color: #ebf6fb;
}
.section003_wrapper {
  height: inherit;
  padding: 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.topBtnB_container {
  /* 着色領域 */
  position: relative;
  background-color: #ffffff;
  border: 1px solid #f3982d;
}
.topBtnB_cover {
  /* 配置領域 */
  padding: 5%;
}
.topBtnB_wrapper1,
.topBtnB_wrapper2,
.topBtnB_spwrapper1,
.topBtnB_spwrapper2,
.topBtnB_spwrapper3 {
  display: flex;
  justify-content: center;
}
.topBtnB {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  color: #ffffff;
  content: '';
  width: 30%;
  aspect-ratio: 1;
  margin: 1.666%;
  background-color: #59c3e1;
  transition: background-color 0.2s ease-in-out;
  font-family: 'Noto Sans JP', 'Hiragino Kaku Gothic ProN', Meiryo, sans-serif;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  z-index: 10;
}
.topBtnB:hover {
  background-color: #036eb8;
  transition: background-color 0.2s ease-in-out;
}
.topBtnB > img {
  aspect-ratio: 1;
  width: 60%;
  margin: 0 auto;
  padding: 5%;
}
#topBtnB1 {
  background-color: #ffffff !important;
  color: #3e3a39;
  font-weight: 700;
  line-height: 100%;
  vertical-align: middle;
}

.topBtnC_container {
  text-align: center;
  /* margin-top: 10%; */
  margin-bottom: 5%;
}
.topBtnC_title {
  text-align: center;
  margin-top: 10%;
}
.topBtnC_cover {
  display: flex;
  justify-content: space-between;
}
.topBtnC {
  color: #3e3a39;
  background-color: #ffffff;
  font-family: 'Noto Sans JP', 'Hiragino Kaku Gothic ProN', Meiryo, sans-serif;
  font-size: 16px;
  font-weight: bold;
  width: 32%;
  height: 60px;
  text-align: center;
  line-height: 60px;
  text-decoration: none;
  position: relative;
  z-index: 1;
  display: block;
  overflow: hidden;
  transition: 0.3s;
  padding-left: 3%;
}
.topBtnC::before {
  content: '';
  width: 120%;
  height: 200%;
  position: absolute;
  top: -50%;
  right: 0;
  z-index: -1;
  background: #f7b260;
  border-radius: 0 100% 100% 0;
  transform: translateX(-73%);
  transition: transform ease 0.3s;
}
.topBtnC:hover {
  color: #ffffff;
}
.topBtnC:hover::before {
  transform: translateX(10%);
}

/* ------------------------------------------------------------第四セクション------------------------------------------------------------ */
.section004 {
  background-color: #ffffff;
  text-align: center;
}
.topBtnD_title {
  margin-top: 10%;
  text-align: center;
}
.topBtnD_wrapper {
  display: flex;
  justify-content: center;
}
.topBtnD {
  position: relative;
  content: '';
  width: 45%;
  max-height: 70px;
  aspect-ratio: 3;
  margin: 1%;
  background-color: #ebf6fb;
  font-family: 'Noto Sans JP', 'Hiragino Kaku Gothic ProN', Meiryo, sans-serif;
  border-left: 2px solid #aeddee;
  border-right: 2px solid #aeddee;
  font-weight: 700;
  line-height: 70px;
  text-decoration: none;
  color: #3e3a39;
  z-index: 10;
}
.topBtnD::after {
  position: absolute;
  left: 20%;
  content: '';
  width: 60%;
  height: 2px;
  background: #3e3a39;
  bottom: 20px; /*アンダーラインがaタグの下端から現れる*/
  transform: scale(0, 1); /*アンダーラインの縮尺比率。ホバー前はx方向に0*/
  transform-origin: left top; /*変形（アンダーラインの伸長）の原点がaタグ（各メニュー）の左端*/
  transition: transform 0.3s; /*変形の時間*/
}

.topBtnD:hover::after {
  transform: scale(1, 1); /*ホバー後、x軸方向に1（相対値）伸長*/
}

.banner_contaainer {
  padding-bottom: 10%;
}
.top_adv1 {
  /* height: 20%; */
  width: 70%;
  margin: 5% auto 0 auto;
}
.top_adv2 {
  /* height: 20%; */
  width: 70%;
  margin: 2% auto 0 auto;
}
.top_adv3 {
  /* height: 20%; */
  width: 70%;
  margin: 2% auto 0 auto;
}

/* ------------------------------------------------------------第五セクション------------------------------------------------------------ */
/* .section005 {
  width: 100%;
  position: relative;
  background-color: #eaf6fa;
  z-index: 100;
} */
.sp_footer {
  display: block;
  bottom: 0;
  right: 0;
  width: 100%;
  color: #fff;
  text-align: center;
  z-index: 100;
}

/* ----------------------------------------resp---------------------------------------- */
@media screen and (min-width: 1024px) {
  .section001,
  .section002 {
    height: calc(100vh - 50px); /* headerの高さをマイナスする */
  }

  .topBtnB_spcover {
    display: none;
  }

  .section005 {
    display: none;
  }
  .footer {
    display: block;
    bottom: 0;
    left: 0;
    width: 100%;
    color: #fff;
  }
}
/* ----------------------------------------resp---------------------------------------- */
@media screen and (max-width: 1220px) {
  .topBtnB {
    font-size: 14px;
    width: 37%;
    max-width: 200px;
  }
  .topBtnC {
    font-size: 14px;
  }
}
/* ----------------------------------------resp---------------------------------------- */
@media screen and (max-width: 1023px) {
  .section001 {
    display: none;
  }
  .section002 {
    width: 100%;
    aspect-ratio: 0.714285;
  }

  .body_cover {
    display: flex;
    flex-direction: row;
  }

  .logo_img {
    max-width: 400px;
    margin: 0 auto;
    margin-top: 10%;
  }

  .top_about {
    width: 90%;
    font-size: 12px;
    text-align: center;
  }

  .news_section {
    margin-bottom: 40px;
    max-width: 500px;
  }
  .news_titlearea > h3 {
    font-size: 14px;
  }
  .news_list {
    height: 50px;
  }
  .news_list > li {
    font-size: 12px;
    margin-bottom: 5px;
  }

  .body_left {
    display: none;
  }
  /* ----------------------------------------resp---------------------------------------- */
  .body_right {
    width: 100%;
  }
  /* ----------------------------------------resp---------------------------------------- */
  .section000 {
    display: flex;
  }

  .type a {
    bottom: 0px;
    padding: 10px 10px 100px;
  }
  .type a::before {
    bottom: 10px;
  }
  .type a::after {
    height: 50px;
    bottom: 30px;
  }
  /* ----------------------------------------resp---------------------------------------- */
  .section001 {
    display: none;
  }

  /* ----------------------------------------resp---------------------------------------- */
  .topBtnB_spcover {
    display: block;
  }
  .topBtnB_cover {
    display: none;
  }
  /* ----------------------------------------resp---------------------------------------- */
  .topBtnD {
    font-size: 14px;
  }

  .section005 {
    display: block;
  }

  .footer {
    display: none;
  }
  .sp_footer {
    display: block;
    bottom: 0;
    left: 0;
    width: 100%;
    color: #fff;
    text-align: center;
  }
}
/* フォント */
@media screen and (max-width: 424px) {
  .topBtnC {
    font-size: 12px;
  }
}
/* ----------------------------------------comp_alter---------------------------------------- */
</style>
