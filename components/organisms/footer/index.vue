<template>
  <footer class="footer">
    <div class="footer">
      <div class="footer_up_cover">
        <!--pc list-->
        <div class="pclist_container">
          <ul class="pclist">
            <li class="footer_title_pc">ご来場の皆様へ</li>
            <li><NuxtLink :to="'/'">Top</NuxtLink></li>
            <li>
              <NuxtLink :to="'/search#'">企画検索</NuxtLink>
            </li>
            <li>
              <NuxtLink :to="'/timetable#'">タイムテーブル</NuxtLink>
            </li>
            <li>
              <NuxtLink :to="'/welcome#'">アクセスマップ</NuxtLink>
            </li>
            <li>
              <NuxtLink :to="'/questionnaire#'">公式アンケート</NuxtLink>
            </li>
            <li><NuxtLink :to="'/inquiry#'">よくあるご質問</NuxtLink></li>
            <li>
              <NuxtLink :to="'/contact#'">お問い合わせ</NuxtLink>
            </li>
            <li>
              <NuxtLink :to="'/pamphlet#'">公式パンフレットについて</NuxtLink>
            </li>
          </ul>

          <ul class="pclist">
            <li class="footer_title_pc">もっと詳しく</li>
            <li>
              <NuxtLink :to="'/about#'">早稲田祭2024の概要</NuxtLink>
            </li>
            <li><NuxtLink :to="'/goods#'">公式グッズ</NuxtLink></li>
            <li>
              <NuxtLink :to="'/inshoku#'">屋台コンテスト2024</NuxtLink>
            </li>
            <li><NuxtLink :to="'/wasemeshi#'">ワセメシコラボ</NuxtLink></li>
            <li>
              <NuxtLink :to="'/former#'">早稲田祭当日以前の企画</NuxtLink>
            </li>
            <li>
              <NuxtLink :to="'/saikun#'">わせだサイくんの部屋</NuxtLink>
            </li>
            <li>
              <NuxtLink :to="'/artist#'">早稲田アリーナ企画</NuxtLink>
            </li>
          </ul>

          <ul class="pclist">
            <li class="footer_title_pc">関係者の皆様へ</li>
            <li>
              <NuxtLink :to="'/fsr#'">FSR・社会的取り組み</NuxtLink>
            </li>
            <li>
              <NuxtLink :to="'/support#'">ご支援いただいた皆様へ</NuxtLink>
            </li>
            <li>
              <NuxtLink :to="'/company#'">ご協賛いただいた皆様へ</NuxtLink>
            </li>
            <li>
              <NuxtLink :to="'/advertise#'">校友の皆様へ</NuxtLink>
            </li>
            <li>
              <NuxtLink :to="'/message#'">メッセージ企画</NuxtLink>
            </li>
            <li>
              <NuxtLink :to="'/thanks#'">スペシャルサンクス</NuxtLink>
            </li>
            <li>
              <NuxtLink :to="'/staffcredit#'">STAFF CREDIT</NuxtLink>
            </li>
          </ul>
        </div>
        <!--pc list end-->

        <!--sp list-->
        <div class="splist_container">
          <div class="option">
            <input id="toggle1" type="checkbox" class="toggle" />
            <label class="title" for="toggle1">ご来場の皆様へ</label>
            <ul class="content">
              <li><NuxtLink :to="'/'">Top</NuxtLink></li>
              <li>
                <NuxtLink :to="'/search#'">企画検索</NuxtLink>
              </li>
              <li>
                <NuxtLink :to="'/timetable#'">タイムテーブル</NuxtLink>
              </li>
              <li>
                <NuxtLink :to="'/welcome#'">アクセスマップ</NuxtLink>
              </li>
              <li>
                <NuxtLink :to="'/questionnaire#'">公式アンケート</NuxtLink>
              </li>
              <li><NuxtLink :to="'/inquiry#'">よくあるご質問</NuxtLink></li>
              <li>
                <NuxtLink :to="'/contact#'">お問い合わせ</NuxtLink>
              </li>
              <li>
                <NuxtLink :to="'/pamphlet#'">公式パンフレットについて</NuxtLink>
              </li>
            </ul>
          </div>

          <div class="option">
            <input id="toggle2" type="checkbox" class="toggle" />
            <label class="title" for="toggle2">もっと詳しく</label>
            <ul class="content">
              <li>
                <NuxtLink :to="'/about#'">早稲田祭2024の概要</NuxtLink>
              </li>
              <li><NuxtLink :to="'/goods#'">公式グッズ</NuxtLink></li>
              <li>
                <NuxtLink :to="'/inshoku#'">屋台コンテスト2024</NuxtLink>
              </li>
              <li><NuxtLink :to="'/wasemeshi#'">ワセメシコラボ</NuxtLink></li>
              <li>
                <NuxtLink :to="'/former#'">早稲田祭当日以前の企画</NuxtLink>
              </li>
              <li>
                <NuxtLink :to="'/saikun#'">わせだサイくんの部屋</NuxtLink>
              </li>
              <li>
                <NuxtLink :to="'/artist#'">早稲田アリーナ企画</NuxtLink>
              </li>
            </ul>
          </div>

          <div class="option">
            <input id="toggle4" type="checkbox" class="toggle" />
            <label class="title" for="toggle4">関係者の皆様へ</label>
            <ul class="content">
              <li>
                <NuxtLink :to="'/fsr#'">FSR・社会的取り組み</NuxtLink>
              </li>
              <li>
                <NuxtLink :to="'/support#'">ご支援いただいた皆様へ</NuxtLink>
              </li>
              <li>
                <NuxtLink :to="'/company#'">ご協賛いただいた皆様へ</NuxtLink>
              </li>
              <li>
                <NuxtLink :to="'/advertise#'">校友の皆様へ</NuxtLink>
              </li>
              <li>
                <NuxtLink :to="'/message#'">メッセージ企画</NuxtLink>
              </li>
              <li>
                <NuxtLink :to="'/thanks#'">スペシャルサンクス</NuxtLink>
              </li>
              <li>
                <NuxtLink :to="'/staffcredit#'">STAFF CREDIT</NuxtLink>
              </li>
            </ul>
          </div>
        </div>
        <!--sp list end-->

        <div class="footer_upright">
          <div class="sp_exlinks_container">
            <!-- <div>
              <ExternalLink
                :url="'https://tokosai.net'"
                :rounded="true"
                :color="'orange'"
                :bg-color="'blue'"
                class="external-link-with-saikun"
                target="_blank">
                所沢キャンパス祭
              </ExternalLink>
            </div> -->
            <div>
              <ExternalLink
                :url="'https://rikoten.com/'"
                :rounded="true"
                :color="'navy'"
                :bg-color="'skyblue'"
                class="external-link-with-saikun"
                target="_blank">
                理工展
              </ExternalLink>
            </div>
          </div>

          <div class="sp_sns_links_container">
            <a
              href="https://twitter.com/wasedasai"
              target="_blank"
              rel="noopener noreferrer"
              ><img class="sns-link" src="~assets/images/sns/x.png"
            /></a>
            <a
              href="https://instagram.com/wasedasai"
              target="_blank"
              rel="noopener noreferrer"
              ><img class="sns-link" src="~assets/images/sns/instagram23.png"
            /></a>
            <a
              href="https://www.facebook.com/wasedasai.official"
              target="_blank"
              rel="noopener noreferrer"
              ><img class="sns-link" src="~assets/images/sns/facebook23.png"
            /></a>
            <a
              href="https://youtube.com/@WasedasaiOfficial"
              target="_blank"
              rel="noopener noreferrer"
              ><img class="sns-link" src="~assets/images/sns/youTube23.png"
            /></a>
            <a
              href="https://note.com/wasedasai_note"
              target="_blank"
              rel="noopener noreferrer"
              ><img class="sns-link" src="~assets/images/sns/note23.png"
            /></a>
            <a
              href="https://www.tiktok.com/@wasedasai"
              target="_blank"
              rel="noopener noreferrer"
              ><img class="sns-link" src="~assets/images/sns/tiktok23.png"
            /></a>
          </div>

          <div class="footer_logo_container">
            <NuxtLink :to="'/'"
              ><img
                class="footer_logo logo_24"
                src="~assets/images/footer_logo.png"
            /></NuxtLink>
            <img
              class="footer_logo logo_unsta"
              src="~assets/images/unsta_logo_with_white.png" />
          </div>

          <div class="pc_exlinks_container">
            <!-- <div>
              <ExternalLink
                :url="'https://tokosai.net'"
                :rounded="true"
                :color="'orange'"
                :bg-color="'blue'"
                class="external-link-with-saikun"
                target="_blank">
                所沢キャンパス祭
              </ExternalLink>
            </div> -->
            <div>
              <ExternalLink
                :url="'https://rikoten.com/'"
                :rounded="true"
                :color="'navy'"
                :bg-color="'skyblue'"
                class="external-link-with-saikun"
                target="_blank">
                理工展
              </ExternalLink>
            </div>
          </div>
        </div>
      </div>

      <div class="sns_links_container">
        <a
          href="https://twitter.com/wasedasai"
          target="_blank"
          rel="noopener noreferrer"
          ><img class="sns-link" src="~assets/images/sns/x.png"
        /></a>
        <a
          href="https://instagram.com/wasedasai"
          target="_blank"
          rel="noopener noreferrer"
          ><img class="sns-link" src="~assets/images/sns/instagram23.png"
        /></a>
        <a
          href="https://www.facebook.com/wasedasai.official"
          target="_blank"
          rel="noopener noreferrer"
          ><img class="sns-link" src="~assets/images/sns/facebook23.png"
        /></a>
        <a
          href="https://youtube.com/@WasedasaiOfficial"
          target="_blank"
          rel="noopener noreferrer"
          ><img class="sns-link" src="~assets/images/sns/youTube23.png"
        /></a>
        <a
          href="https://note.com/wasedasai_note"
          target="_blank"
          rel="noopener noreferrer"
          ><img class="sns-link" src="~assets/images/sns/note23.png"
        /></a>
        <a
          href="https://www.tiktok.com/@wasedasai"
          target="_blank"
          rel="noopener noreferrer"
          ><img class="sns-link" src="~assets/images/sns/tiktok23.png"
        /></a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #ebf6fb;
  padding-top: 1em;
}

.footer_up_cover {
  display: flex;
  justify-content: space-around;
}

/* ページリスト */
.pclist_container {
  display: flex;
  justify-content: center;
  flex-basis: 65%;
  margin-top: 1em;
  margin-bottom: 1em;
  position: relative;
}
/* 境界縦線 */
.pclist_container::before {
  content: ''; /*疑似要素の中身を指定*/
  position: absolute; /*絶対位置指定*/
  right: 1vw;
  top: 20%; /*縦位置の指定*/
  background: #3e3a39; /*線の色指定*/
  width: 1px; /*線の幅指定*/
  height: 50%; /*線の高さ指定*/
}
.pclist {
  list-style: none;
  display: block;
  width: 15vw;
  max-width: 200px;
  margin: 0 20px;
}
.footer_title_pc {
  font-weight: bold;
}
.pclist li {
  font-family: 'Noto Sans JP', 'Hiragino Kaku Gothic ProN', Meiryo, sans-serif;
  font-weight: 500;
  margin-bottom: 7px;
  list-style: none;
}
.pclist li a {
  font-size: 14px;
  text-decoration: none;
  color: #3e3a39;
  position: relative;
}
.pclist li a:hover {
  color: #f3982d;
}
.pclist li a::after {
  position: absolute;
  left: 0;
  content: '';
  width: 108%;
  height: 1px;
  background: #f3982d;
  bottom: -1px; /*アンダーラインがaタグの下端から現れる*/
  transform: scale(0, 1); /*アンダーラインの縮尺比率。ホバー前はx方向に0*/
  transform-origin: left top; /*変形（アンダーラインの伸長）の原点がaタグ（各メニュー）の左端*/
  transition: transform 0.3s; /*変形の時間*/
}
.pclist li a:hover::after {
  transform: scale(1, 1); /*ホバー後、x軸方向に1（相対値）伸長*/
}
.pclist li:first-child {
  /*各タイトルにのみ適用*/
  font-size: 16px;
  color: #3e3a39;
  margin-bottom: 16px;
  font-weight: 700;
}
.splist_container {
  display: none;
}

/* 右側 */
.footer_upright {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-basis: 35%;
  text-align: center;
  padding-right: 1vw;
}

/* ロゴ */
.footer_logo_container {
  text-align: center;
}
.logo_24 {
  width: clamp(200px, 25vw, 300px);
  margin: 0 auto;
}
.logo_unsta {
  width: clamp(120px, 15vw, 180px);
  margin: 0 auto;
}

/* EXlink */
.pc_exlinks_container {
  display: flex;
  justify-content: space-evenly;
}
.pc_exlinks_container div a {
  /* EXlinksのコーディングによって、「a」の記述を変更 */
  width: 14vw;
  max-width: 250px;
}
.sp_exlinks_container {
  display: none;
}

/* SNSリンク */
.sns_links_container {
  display: flex;
  justify-content: center;
  padding: 50px;
}
.sns_links_container img {
  width: 40px;
  margin: 10px;
}
.sp_sns_links_container {
  display: none;
}

/* sp */
@media screen and (max-width: 1024px) {
  .footer_up_cover {
    flex-direction: column;
  }
  .footer_upright {
    padding: 0;
  }
  .pclist_container {
    display: none;
  }
  .footer_logo_container {
    margin-top: 1em;
    margin-bottom: 2em;
  }

  /* splist snipet (to line404)*/
  .splist_container {
    display: block;
    margin: 0 auto;
    width: clamp(0px, 90vw, 600px);
  }
  .toggle {
    display: none;
  }
  .option {
    position: relative;
    margin-bottom: 0.5em;
  }
  /* --------------------sp時テーブル配列数の切り替えはここ-------------------- */
  .option ul {
    column-count: 1;
  }
  .title,
  .content {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    transform: translateZ(0);
    transition: all 0.3s;
  }
  .title {
    border-block-end: solid 2px #59c3e1;
    padding: 0.2em;
    padding-top: 0.5em;
    display: block;
    font-family: 'Noto Sans JP', 'Hiragino Kaku Gothic ProN', Meiryo, sans-serif;
    color: #3e3a39;
    font-size: 15px;
    font-weight: bold;
  }
  .title::after,
  .title::before {
    /* 十字架 */
    content: '';
    position: absolute;
    /* +マーク左右位置 */
    right: 1em;
    /* +マーク上下位置 */
    top: 0.8em;
    width: 2px;
    height: 1em;
    background-color: #59c3e1;
    transition: all 0.3s;
  }
  .title::after {
    transform: rotate(90deg);
  }
  .content {
    max-height: 0;
    overflow: hidden;
    margin-top: 10px;
    margin-left: 15px;
  }
  .content li {
    margin: 0;
    padding: 0.3em 0.3em 0.3em 0.7em;
    font-size: 13px;
    list-style: none;
  }
  .content li a {
    font-family: 'Noto Sans JP', 'Hiragino Kaku Gothic ProN', Meiryo, sans-serif;
    color: #3e3a39;
    font-weight: 500; /* regular = 400 */
    text-decoration: none;
  }
  .toggle:checked + .title + .content {
    max-height: 500px;
    transition: all 1.5s;
  }
  .toggle:checked + .title::after {
    transform: rotate(225deg) !important;
  }
  .toggle:checked + .title::before {
    transform: rotate(135deg) !important;
  }
  /* splist snipet end */

  .sns_links_container {
    display: none;
  }
  .sp_sns_links_container {
    display: flex;
    justify-content: center;
  }
  .sp_sns_links_container img {
    width: clamp(10px, 10vw, 40px);
    margin: 0.5em;
  }

  .pc_exlinks_container {
    display: none;
  }
  .sp_exlinks_container {
    display: flex;
    justify-content: space-around;
    margin: 1.5em 0;
  }
  .sp_exlinks_container div a {
    /* EXlinksのコーディングによって、「a」の記述を変更 */
    margin-right: 10px;
    margin-left: 10px;
    width: 30vw;
    min-width: 165px;
    max-width: 250px;
  }
}
@media screen and (max-width: 374px) {
  .sp_exlinks_container {
    display: flex;
    flex-direction: column;
  }
  .sp_exlinks_container div a {
    margin: 10px 0;
  }
}
</style>
