<script>
export default {
  layout: 'maintenance',
  head: {
    title: '高校生/受験生応援企画〜集え！未来の早大生〜',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          '全国に住む高校生向けに、オンラインならではのコンテンツを用意しています！'
      },
      {
        hid: 'keyword',
        name: 'keyword',
        content:
          '早稲田 早稲田大学 受験 学部 早稲田祭 早稲田祭2021 高校 高校生 英語 勉強法 わせだサイくん'
      },
      { hid: 'og:type', property: 'og:type', content: 'article' },
      {
        hid: 'og:title',
        property: 'og:title',
        content: '高校生/受験生応援企画〜集え！未来の早大生〜'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          '全国に住む高校生向けに、オンラインならではのコンテンツを用意しています！'
      },
      { hid: 'og:url', property: 'og:url', content: '/koukousei' },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://wasedasai.net/images/logo.png'
      }
    ],
    link: [
      { rel: 'stylesheet', href: '/css/html5reset.css' },
      { rel: 'stylesheet', href: '/css/design1.css' }
    ]
  },
  mounted() {
    'use strict'

    {
      const question = document.getElementById('question')
      const questiontext1 = document.getElementById('question_text1')
      const questiontext2 = document.getElementById('question_text2')
      const questiontext3 = document.getElementById('question_text3')
      const questiontext4 = document.getElementById('question_text4')
      const choices = document.getElementById('choices')
      const explanation1 = document.getElementById('explanation1')
      const explanation2 = document.getElementById('explanation2')
      const explanation3 = document.getElementById('explanation3')
      const explanation4 = document.getElementById('explanation4')
      const explanation5 = document.getElementById('explanation5')
      const explanation6 = document.getElementById('explanation6')
      const explanation7 = document.getElementById('explanation7')
      const qnumber = document.getElementById('q_number')
      const nextbtn = document.getElementById('next_btn')
      const result = document.getElementById('result')
      const scoreLabel = document.querySelector('#score')
      const saikun = document.getElementById('saikun')
      const commentary = document.getElementById('commentary')

      const quizSet = [
        {
          q: '(1) 傍線部の語句の意味として適切なものを選択してください。',
          c: ['華やかな', '疑わしい', 'まぶしい'],
          e1: '正解……「華やかな」',
          e2: '「まぶしい」の意味の単語はblinding、dazzlingなど',
          e3: '「疑わしい」の意味の単語はsuspiciousなど'
        },
        {
          q: '(2) 空欄に当てはまる語を選択してください。',
          c: ['by', 'at', 'in'],
          e1: '正解……「by」',
          e2: '前置詞はイメージを捉えることがおすすめ！',
          e3: 'inは中に入っているイメージ',
          e4: 'atは点をコアに、派生して場所やある地点への移動',
          e5: 'byは近接しているイメージ'
        },
        {
          q: '(3) 傍線部と同じ意味のものを選択してください。',
          c: ['must become', 'are able to', 'are about to'],
          e1: '正解……「must become」',
          e2: 'be sure toは「〜に違いない」の意味。よって、mustで言い換えられる。',
          e3: '②be able toは「〜できる」、③be about toは「〜しようとしている」',
          e4: '日本語訳）Opening FestivalとEnding Festivalには、「圧倒的な規模」「華やかな演出」「長い歴史」の主に3つの魅力があります。開幕、閉幕を飾る両企画は、例年数多くの方が観覧します。個性的で迫力があり、今年度も祭最大の盛り上がりを見せるに違いないパフォーマンスは必見です！',
          e5: '❶では、Opening Festival & Ending Festivalについての英文から問題を出題しました。'
        },
        {
          q: '(4) 空欄に当てはまる語を選択してください。',
          c: ['collaborative', 'terrestrial', 'borderless'],
          e1: '正解……「collaborative」',
          e2: 'terrastrial =「地球の」',
          e3: 'collaborative =「共同的な」',
          e4: 'borderless =「無境界の」',
          e5: '「different groups」や「planned by～」といった文脈から判断し「collaborative」を選ぶ。'
        },
        {
          q: '(5) 空欄に当てはまる語を選択してください。',
          c: ['which', 'that', 'who'],
          e1: '正解……「which」',
          e2: '今回の先行詞（関係代名詞により修飾される名詞）は「the blue rose」、また用法は非制限用法。',
          e3: 'whoは先行詞が人の場合に用いる。',
          e4: '②thatは非制限用法（コンマがある関係代名詞）の場合は使えない。'
        },
        {
          q: '(6) 空欄に当てはまる語を選択してください。',
          c: ['to', 'up', 'for'],
          e1: '正解……「to」',
          e2: 'bring+目的語+for+名詞 「目的語（人）に名詞（もの）を持ってくる」',
          e3: 'bring+目的語+to+名詞 「目的語（人･もの）を名詞（場所）につれてくる」',
          e4: 'bring up 「～を育てる」、「～をしつける」',
          e5: '前置詞の後に続く名詞が「ParadiSe」（楽園）＝場所なので「to」を選ぶ',
          e6: '日本語訳） WASEDA NiGht ParadiSeは1日目の閉幕を飾る企画で、2つのステージで開催されます。運営スタッフ企画ならではの異なる団体によるコラボステージもあります。「願いを叶える」という花言葉を持つ青い薔薇を象徴に、光と音で観客・視聴者を「ParadiSe」へお連れします！',
          e7: "❷では、''WASEDA NiGht ParadiSe''に関する英文から問題を出題しました。"
        },
        {
          q: '(7) 空欄に当てはまる語を選択してください。',
          c: ['with', 'for', 'against'],
          e1: '正解……「with」',
          e2: '「〜との繋がり」という意味のtie（※通常tiesで用いる）は前置詞にwithを使う。'
        },
        {
          q: '(8) 空欄に当てはまる語を選択してください。',
          c: ['would', 'will', 'is'],
          e1: '正解……「would」',
          e2: '仮定法過去（現在の事実と異なる仮定）の主節は助動詞の過去形を用いる。'
        },
        {
          q: '(9) 空欄に当てはまる語を選択してください。',
          c: ['gratitude', 'kindness', 'wonderful'],
          e1: '正解……「gratitude」',
          e2: 'with a sense of gratitudeで「感謝の気持ちを胸に」の意',
          e3: '日本語訳）早稲田大学のコンセプトと同様に、早稲田祭2021も様々な地域社会との強いつながりを保っています。地域の方のご理解やご協力なしには決して祭は成り立ちません。早稲田祭2021の運営スタッフは地域の方への感謝の気持ちを胸に抱きながら日々活動しています。',
          e4: '❸では、早稲田祭2021と地域との繋がりに関する英文から問題を出題しました。'
        },
        {
          q: '(10) 空欄に当てはまる語を選択してください。',
          c: ['between', 'among', 'from'],
          e1: '正解……「between」',
          e2: '対象が明確に区別されているものの時は3つ以上でもbetweenを用いる場合がある。'
        },
        {
          q: '(11) 空欄に当てはまる語を選択してください。',
          c: ['equipment', 'material', 'useful'],
          e1: '正解……「equipment」',
          e2: 'facilities（設備）の言い換えになっているequipment（設備）を選ぶ'
        },
        {
          q: '(12) 空欄に当てはまる語を選択してください。',
          c: ['make', 'give', 'change'],
          e1: '正解……「make」',
          e2: 'make O Cで「OをCにする」というmakeの用法。',
          e3: '日本語訳）小野記念講堂ステージ、10号館109教室ステージ、戸山カフェテリアステージを比較してみましょう。3つのステージの違いは、広さと収容人数と設備です。ステージが一番広いのは小野記念講堂ステージ、収容人数が最も多いのは10号館109教室ステージ、そして設備が最も充実しているのは戸山カフェテリアステージです。ステージごとに異なった良さがあり、どこも演者を輝かせることが出来ます。',
          e4: '❹では、キャンパス内ステージ企画に関連した英文から問題を出題しました。'
        }
      ]
      let currentNum = 0
      let isAnswered
      let score = 0

      function shuffle(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1))
          ;[arr[j], arr[i]] = [arr[i], arr[j]]
        }
        return arr
      }

      function checkAnswer(li) {
        if (isAnswered === true) {
          return
        }
        isAnswered = true

        if (li.textContent === quizSet[currentNum].c[0]) {
          li.classList.add('correct')
          score++
        } else {
          li.classList.add('wrong')
        }

        explanation1.classList.remove('none')
        explanation2.classList.remove('none')
        explanation3.classList.remove('none')
        explanation4.classList.remove('none')
        explanation5.classList.remove('none')
        explanation6.classList.remove('none')
        explanation7.classList.remove('none')
        nextbtn.classList.remove('disabled')
      }

      function setQuiz() {
        isAnswered = false

        question.textContent = quizSet[currentNum].q

        explanation1.textContent = quizSet[currentNum].e1

        explanation2.textContent = quizSet[currentNum].e2

        explanation3.textContent = quizSet[currentNum].e3

        explanation4.textContent = quizSet[currentNum].e4

        explanation5.textContent = quizSet[currentNum].e5

        explanation6.textContent = quizSet[currentNum].e6

        explanation7.textContent = quizSet[currentNum].e7

        while (choices.firstChild) {
          choices.removeChild(choices.firstChild)
        }

        const shuffledChoices = shuffle([...quizSet[currentNum].c])
        shuffledChoices.forEach((choice) => {
          const li = document.createElement('li')
          li.textContent = choice
          li.addEventListener('click', () => {
            checkAnswer(li)
          })
          choices.appendChild(li)
        })

        if (currentNum === quizSet.length - 1) {
          nextbtn.textContent = ' 結果を見る'
        }

        if (currentNum < 3) {
          qnumber.textContent = '❶開幕企画・閉幕企画'
          questiontext1.classList.remove('none')
        } else if (currentNum < 6) {
          qnumber.textContent = '❷WASEDA NiGht ParadiSe'
          questiontext2.classList.remove('none')
          questiontext1.classList.add('none')
        } else if (currentNum < 9) {
          qnumber.textContent = '❸早稲田祭2021と早稲田のまちの繋がり'
          questiontext3.classList.remove('none')
          questiontext2.classList.add('none')
        } else if (currentNum < 12) {
          qnumber.textContent = '❹キャンパス内ステージ'
          questiontext4.classList.remove('none')
          questiontext3.classList.add('none')
        }
      }

      setQuiz()

      nextbtn.addEventListener('click', () => {
        if (nextbtn.classList.contains('disabled')) {
          return
        }
        nextbtn.classList.add('disabled')

        if (explanation1.classList.contains('none')) {
          return
        }
        explanation1.classList.add('none')

        if (explanation2.classList.contains('none')) {
          return
        }
        explanation2.classList.add('none')

        if (explanation3.classList.contains('none')) {
          return
        }
        explanation3.classList.add('none')

        if (explanation4.classList.contains('none')) {
          return
        }
        explanation4.classList.add('none')

        if (explanation5.classList.contains('none')) {
          return
        }
        explanation5.classList.add('none')

        if (explanation6.classList.contains('none')) {
          return
        }
        explanation6.classList.add('none')

        if (explanation7.classList.contains('none')) {
          return
        }
        explanation7.classList.add('none')

        if (currentNum === quizSet.length - 1) {
          scoreLabel.textContent = `${score}`
          result.classList.remove('hidden')

          if (score > 11) {
            saikun.src = '/images/english/saikun_rank1.png'
            commentary.textContent = 'すごい！ばっちりツノ！'
          } else if (score > 7) {
            saikun.src = '/images/english/saikun_rank2.png'
            commentary.textContent = 'あっぱれツノ～'
          } else if (score > 3) {
            saikun.src = '/images/english/saikun_rank3.png'
            commentary.textContent = 'まだまだいけるツノよ～！'
          } else {
            saikun.src = '/images/english/saikun_rank4.png'
            commentary.textContent = 'ここからが勝負！ファイト！ツノ！'
          }
        } else {
          currentNum++
          setQuiz()
        }
      })
    }
  }
}
</script>
<template>
  <div>
    <div class="contents">
      <div class="about-box">
        <div class="greet">
          <img
            class="englogo"
            src="~assets/images/mirainosoudaisei/eng_logo.png" />
          <div class="title_about">
            <img
              class="engtitle"
              src="~assets/images/mirainosoudaisei/eng_obi.svg" />
            <img
              class="englogo_title"
              src="~assets/images/mirainosoudaisei/eng_logo_obi.png" />
            <p class="about">
              本企画における英文及び問題は早大生が独自に作成したものであり、早稲田大学による監修は受けておりません。気軽にゲーム感覚で楽しんでいただけたら幸いです。
              <br />
              問題は大問ごとに1つの英文で形成されています。小問の文の意味がわからなくなったら、同じ大問内の他の文章も読んで考えてみましょう！
            </p>
          </div>
        </div>
      </div>

      <section class="quiz_box">
        <h2 id="q_number" class="q_number2" />
        <p id="question" />
        <p id="question_text1" class="none">
          The Opening Festival and Ending Festival have three main
          attractions,"The overwhelming scale", "<span class="under"
            >(1)Spectacular</span
          >
          performances", and "A long history". These events are usually watched
          ( 2 ) a large number of people. You should not miss the unique and
          powerful performances, which
          <span class="under">(3)are sure to</span> be the most exciting
          program!
        </p>
        <p id="question_text2" class="none">
          "WASEDA NiGht ParadiSe", the closing event of the first day, will be
          held on two stages. The event has many ( 4 ) stages of different
          groups specially planned by WASEDASAI2021 Operation Staff! With the
          symbol of the blue rose, ( 5 ) has the word "dreams come true", we
          will bring the audience and viewers ( 6 )"ParadiSe" with light and
          sound!
        </p>
        <p id="question_text3" class="none">
          Similar to Waseda University's concept, Waseda Festival maintains
          strong ties ( 7 ) the local community. Without the understanding and
          cooperation of the local people, our festival ( 8 ) never be possible.
          WASEDASAI2021 Operation Staff are daily working with a sense of ( 9 )
          for the people of the local community.
        </p>
        <p id="question_text4" class="none">
          Let's compare the Ono Memorial Auditorium Stage, the Building 10
          Classroom 109 Stage, and the Toyama Cafeteria Stage.The differences (
          10 ) three stages are the size of the stage, capacity, and
          facilities.The largest stage is the Ono Memorial Auditorium Stage, and
          the biggest capacity stage is the Building 10 Classroom 109 Stage, and
          the stage with the best ( 11 )stage is the Toyama Cafeteria stage.Each
          stage has advantages, and all of them can ( 12 ) the performers shine.
        </p>
        <ul id="choices" />
        <p id="explanation1" class="none" />
        <p id="explanation2" class="none" />
        <p id="explanation3" class="none" />
        <p id="explanation4" class="none" />
        <p id="explanation5" class="none" />
        <p id="explanation6" class="none" />
        <p id="explanation7" class="none" />
        <div id="next_btn" class="disabled">次の問題へ</div>

        <section id="result" class="hidden">
          <div id="result_box">
            <p id="score2">あなたの得点は…<span id="score" />/12</p>
            <div id="rank_saikun">
              <img id="saikun" src="" />
            </div>
            <p id="commentary" />
          </div>

          <div id="result_btn_box">
            <p id="info_event">↓問題で登場した企画の情報はこちらから</p>
            <a
              id="stream1"
              target="_blank"
              href="https://wasedasai.net/events/285"
              >Opening Festival & Ending Festival</a
            >
            <a
              id="stream2"
              target="_blank"
              href="https://wasedasai.net/events/288"
              >WASEDA NiGht ParadiSe</a
            >
            <nuxt-link to="timecapsule" class="link">
              <b>もう一度挑戦</b>
            </nuxt-link>
          </div>
        </section>
      </section>
    </div>
  </div>
</template>
<style scoped>
.link {
  color: #274c82;
}
</style>
