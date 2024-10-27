<script>
export default {
  head: {
    title: 'アクセスマップ',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'ご来場の皆様へ、早稲田祭2024キャンパスにお越しいただく際の注意事項等をご案内しております。'
      },
      {
        hid: 'keyword',
        name: 'keyword',
        content:
          '早稲田祭2024,注意事項,感染症対策,キャンパス,チケット,アクセス,マップ'
      },
      { hid: 'og:type', property: 'og:type', content: 'article' },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'アクセスマップ'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'ご来場の皆様へ、早稲田祭2024キャンパスにお越しいただく際の注意事項等をご案内しております。'
      },
      { hid: 'og:url', property: 'og:url', content: '/welcome' },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://wasedasai.net/images/logo.png'
      }
    ],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.7.1/css/lightbox.css'
      }
    ],
    script: [
      {
        src: 'https://code.jquery.com/jquery-1.12.4.min.js',
        type: 'text/javascript'
      },
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.7.1/js/lightbox.min.js',
        type: 'text/javascript'
      }
    ]
  },
  mounted() {
    // 各ボタンの要素を取得
    const btn1 = document.getElementById('btn1')
    const btn2 = document.getElementById('btn2')
    const btn3 = document.getElementById('btn3')

    // 全てのボタンを配列として取得
    // const allButtons = document.getElementsByClassName('btn')

    // 画像の要素を取得
    const img = document.getElementById('img')

    // ボタンがクリックされたときの処理を設定
    btn1.addEventListener('click', function () {
      changeImage('https://wasedasai.net/_nuxt/img/map_kogai.7445f4a.png')
      setActiveButton(btn1)
    })

    btn2.addEventListener('click', function () {
      changeImage('https://wasedasai.net/_nuxt/img/map_waseda.24b9aeb.png')
      setActiveButton(btn2)
    })

    btn3.addEventListener('click', function () {
      changeImage('https://wasedasai.net/_nuxt/img/map_toyama.43cecfe.png')
      setActiveButton(btn3)
    })

    // 画像を切り替える関数
    function changeImage(path) {
      img.src = path
    }

    // アクティブなボタンを設定する関数
    function setActiveButton(activeButton) {
      // すべてのボタンから 'show' クラスを削除
      for (let i = 0; i < 3; i++) {
        btn1.classList.remove('show')
        btn2.classList.remove('show')
        btn3.classList.remove('show')
      }

      // アクティブなボタンに 'show' クラスを追加
      activeButton.classList.add('show')
    }
  }
}
</script>

<template>
  <div>
    <section>
      <Hero> アクセスマップ </Hero>
    </section>

    <section>
      <div class="top">
        <SectionTitle :bg-color="'blue'">アクセスマップ</SectionTitle>
        <div class="gmap">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2389.2573124109326!2d139.71658109030105!3d35.708414119290474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d04a64616b9%3A0x4a72876437e81022!2z5pep56iy55Sw5aSn5a2m5pep56iy55Sw44Kt44Oj44Oz44OR44K5IOWkp-Wtpue3j-WQiOeglOeptuOCu-ODs-OCv-ODvA!5e0!3m2!1sja!2sjp!4v1695290422559!5m2!1sja!2sjp"
            width="500"
            height="300"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade" />
        </div>

        <div class="moji">
          <Paragraph>
            東京メトロ東西線 早稲田駅から徒歩5分<br />
            JR山手線 高田馬場駅から徒歩20分<br />
            西武新宿線 高田馬場駅から徒歩20分<br />
            東京メトロ副都心線 西早稲田駅から<br class="br-sp" />徒歩17分<br />
            都電荒川線 早稲田駅から徒歩5分<br />
            都営バス 学02（学バス）高田馬場駅〜<br class="br-sp" />早大正門
            9分<br />
            バスでお越しの際は、「都営バス」を<br
              class="br-sp" />ご利用ください。<br />
            早大正門が最寄りです。
          </Paragraph>
          <Paragraph
            >早稲田大学キャンパス構内・周辺の文化施設をお探しの方は<a
              href="https://www.waseda.jp/culture/about/facilities/"
              >こちら</a
            >から
          </Paragraph>
        </div>
      </div>
    </section>

    <Content>
      <div class="map">
        <SectionTitle :bg-color="'blue'">マップ</SectionTitle>
        <div class="buttons">
          <!-- ボタン単体 -->
          <button class="btn show" id="btn1">広域マップ</button>
          <button class="btn" id="btn2">早稲田キャンパス</button>
          <button class="btn" id="btn3">戸山キャンパス</button>
        </div>
        <!-- 画像 -->
        <img id="img" src="~assets/images/welcome/map_kogai.png" />
        <img id="img2" src="~assets/images/map_waseda.png" />
        <img id="img2" src="~assets/images/map_toyama.png" />
      </div>
    </Content>
  </div>
</template>

<style scoped>
/* アクセスマップ */
.top {
  background-color: #ebf6fb;
  width: 100%;
  padding: 36px 0 50px 0;
  text-align: center;
}

.gmap {
  margin: 0 auto;
  width: fit-content;
}
iframe {
  width: 45vw;
  height: 40vh;
}
.moji {
  margin: 0 auto;
  width: fit-content;
  margin-top: 30px;
  text-align: left;
}
.moji > .paragraph {
  font-size: 20px;
}
.moji a {
  text-decoration: none;
  color: #036eb8;
  font-weight: bold;
}
/* マップ */
.map {
  text-align: center;
  margin: 20px 0;
}
.buttons {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 40px;
  color: #3e3a39;
  font-size: 20px;
  font-weight: bold;
  font-family: 'Noto Sans JP', 'Hiragino Kaku Gothic ProN', Meiryo, sans-serif;
}
button {
  padding: 0;
  border: none;
  outline: none;
  font: inherit;
  color: inherit;
  background: none;
}
.btn {
  padding: 5px 10px;
}
.btn:hover {
  background-color: #ebf6fb;
  border-bottom: 2px solid #59c3e1;
}
#img {
  display: block;
  width: 48vw;
  margin: auto;
  border: 2px solid #f3982d;
  border-radius: 10px;
}
#img2 {
  display: none;
}

button.btn.show {
  background-color: #ebf6fb;
  border-bottom: 2px solid #59c3e1;
}

.br-sp {
  display: none;
}

@media screen and (max-width: 768px) {
  .gmap {
    width: 100%;
    text-align: center;
  }
  iframe {
    width: 80%;
    height: auto;
  }
  .moji {
    width: 65%;
  }
  .moji > .paragraph {
    font-size: 14px;
  }
  .buttons {
    margin-bottom: 20px;
    font-size: 14px;
  }
  #img {
    width: 80vw;
    margin: auto;
  }
  .br-sp {
    display: block;
  }
}
</style>
