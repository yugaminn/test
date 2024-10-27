<template>
  <!-- ハンバーガーメニュー部分 -->
  <div class="nav">
    <!-- ハンバーガーメニューの表示・非表示を切り替えるチェックボックス -->
    <input id="drawer_input" class="drawer_hidden" type="checkbox" />

    <!-- ハンバーガーアイコン -->
    <label for="drawer_input" class="drawer_open">
      <span class="char1">メニュー</span>
    </label>

    <label for="drawer_input" class="drawer_open2">
      <span class="char2">閉じる</span>
    </label>

    <!-- メニュー -->
    <nav class="nav_content">
      <ul class="nav_list">
        <li class="nav_item"><nuxt-link to="/">Top</nuxt-link></li>
        <li class="nav_item"><nuxt-link to="/search#">企画検索</nuxt-link></li>
        <li class="nav_item">
          <nuxt-link to="/timetable#">タイムテーブル</nuxt-link>
        </li>
        <li class="nav_item">
          <nuxt-link to="/inshoku">屋台コンテスト2024</nuxt-link>
        </li>
        <li class="nav_item">
          <nuxt-link to="/welcome">アクセスマップ</nuxt-link>
        </li>
        <li class="nav_item"><nuxt-link to="/goods#">公式グッズ</nuxt-link></li>
        <li class="nav_item">
          <nuxt-link to="/inquiry">よくあるご質問</nuxt-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
.nav {
  position: fixed;
  width: fit-content;
  right: 10%;
  top: 10%;
}
/* ここから下がハンバーガーメニューに関するCSS */

/* チェックボックスを非表示にする */
.drawer_hidden {
  display: none;
}

/* ハンバーガーアイコンの設置スペース */
.drawer_open {
  display: flex;
  height: 100px;
  width: 100px;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 0;
  right: 0;
  z-index: 100; /* 重なり順を一番上にする */
  cursor: pointer;
}

/* ハンバーガーメニューのアイコン */
.drawer_open span {
  text-align: center;
  height: 100px;
  width: 100px;
  padding-top: 38px;
  color: #fff;
  font-family: 'Noto Sans JP', 'Hiragino Kaku Gothic ProN', Meiryo, sans-serif;
  font-size: 18px;
  font-weight: 700;
  border-radius: 50%;
  background: #59c3e1;
  transition: 0.5s;
  position: absolute;
}

.drawer_open2 {
  display: none;
  height: 100px;
  width: 100px;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 0;
  right: 0;
  z-index: 100; /* 重なり順を一番上にする */
  cursor: pointer;
}

/* ハンバーガーメニューのアイコン */
.drawer_open2 span {
  text-align: center;
  height: 100px;
  width: 100px;
  padding-top: 36px;
  color: #59c3e1;
  font-family: 'Noto Sans JP', 'Hiragino Kaku Gothic ProN', Meiryo, sans-serif;
  font-size: 18px;
  font-weight: 700;
  border-radius: 50%;
  background: #fff;
  border: 3px solid #59c3e1;
  transition: 0.5s;
  position: absolute;
}
/* アイコンがクリックされたら真ん中の線を透明にする */

/* メニューのデザイン*/
.nav_content {
  padding: 30px;
  position: fixed;
  top: 30%;
  text-align: center;
  font-family: 'Noto Sans JP', 'Hiragino Kaku Gothic ProN', Meiryo, sans-serif;
  right: 100%; /* メニューを画面の外に飛ばす */
  z-index: 999;
  background: #fff;
  border: 3px solid #59c3e1;
  border-radius: 30px;
  transition: 0s;
}

@media screen and (min-width: 1201px) {
  .nav_content {
    width: 280px;
  }

  .nav_item {
    margin: 18px 0;
    font-size: 18px;
  }
}

@media screen and (max-width: 1200px) {
  .nav_content {
    width: 240px;
    top: 25%;
  }

  .nav_item {
    margin: 13px 0;
    font-size: 14px;
  }

  .drawer_open {
    width: 70px;
    height: 70px;
  }

  .drawer_open span {
    width: 70px;
    height: 70px;
    padding-top: 27px;
    font-size: 11px;
  }

  .drawer_open2 {
    width: 70px;
    height: 70px;
  }

  .drawer_open2 span {
    width: 70px;
    height: 70px;
    padding-top: 23px;
    font-size: 13px;
  }
}

@media screen and (max-width: 550px) {
  .nav_content {
    width: 55%;
  }
}

/* メニュー黒ポチを消す */
.nav_list {
  list-style: none;
}

.nav_item {
  font-weight: 500;
}

.nav_item a {
  text-decoration: none;
  color: #59c3e1;
  position: relative;
  display: inline-block;
  text-decoration: none;
}

.nav_item a::after {
  position: absolute;
  bottom: -3px;
  left: 0;
  content: '';
  width: 100%;
  height: 2px;
  background: #59c3e1;
  transform: scale(0, 1);
  transform-origin: right top;
  transition: transform 0.3s;
}

.nav_item a:hover::after {
  transform-origin: left top;
  transform: scale(1, 1);
}

/* アイコンがクリックされたらメニューを表示 */
#drawer_input:checked ~ .nav_content {
  right: 3%; /* メニューを画面に入れる */
}

#drawer_input:checked ~ .drawer_open {
  display: none; /* メニューを画面に入れる */
}
#drawer_input:checked ~ .drawer_open2 {
  display: flex; /* メニューを画面に入れる */
}
</style>
