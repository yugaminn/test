<script>
export default {
  layout: 'maintenance',
  head: {
    title: '早大クイズ！〜サイくんからの挑戦状〜',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: '早稲田や早稲田祭に関する情報をクイズ形式で紹介しています'
      },
      { hid: 'keyword', name: 'keyword', content: 'クイズ,早稲田祭' },
      { hid: 'og:type', property: 'og:type', content: 'article' },
      {
        hid: 'og:title',
        property: 'og:title',
        content: '早大クイズ！〜サイくんからの挑戦状〜'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: '早稲田や早稲田祭に関する情報をクイズ形式で紹介しています'
      },
      { hid: 'og:url', property: 'og:url', content: '/quiz' },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://wasedasai.net/images/logo.png'
      }
    ],
    link: [
      { rel: 'stylesheet', href: '/css/reset.css' },
      { rel: 'stylesheet', href: '/css/design.css' }
    ]
  },
  mounted() {
    'use strict'
    {
      const question = document.getElementById('question')
      const choices = document.getElementById('choices')
      // 使わないならこの定数は削除
      // const correct_comment = document.getElementById('correct_comment')
      // 使わないならこの定数は削除
      // const wrong_comment = document.getElementById('wrong_comment')
      const explanation = document.getElementById('explanation')
      const qNumber = document.getElementById('q_number')
      const nextBtn = document.getElementById('next_btn')
      const result = document.getElementById('result')
      const scoreLabel = document.querySelector('#score')
      const rank = document.getElementById('rank')
      const saikun = document.getElementById('saikun')
      const commentary = document.getElementById('commentary')

      const quizSet = shuffle([
        {
          q: '早稲田祭2019の来場者数は？',
          c: ['約20万人', '約9万人', '約5万人'],
          e: 'なんと浦安の2つの夢の国における1日あたりの来場者数と同じだとか！'
        },
        {
          q: '早稲祭2019の2日間の来場者数の合計と、浦安の2つの夢の国の1日あたりの来場者数の合計で多いのはどっち？',
          c: ['同じ', '某テーマパーク', '早稲田祭'],
          e: ''
        },
        {
          q: '早稲田祭2019の予算規模は？',
          c: ['約3800万円', '約1800万円', '約2800万円'],
          e: ''
        },
        {
          q: '早稲田祭2020のオンライン配信の総再生回数は？',
          c: ['約35万回', '約25万回', '約15万回'],
          e: ''
        },
        {
          q: '早稲田祭2020の最大同時視聴人数は？',
          c: ['約7000人', '約8000人', '約6000人'],
          e: ''
        },
        {
          q: '早稲田祭2021運営スタッフの人数は？',
          c: ['約600人', '約400人', '約500人'],
          e: ''
        },
        {
          q: '早稲田祭2021の代表の名前は？',
          c: ['小野寺佑月', '高橋美卯', '田中愛治'],
          e: ''
        },
        {
          q: '早稲田祭2021のキャッチコピーは？',
          c: ['それでも共に', '今、新たに', '今をときめく者たちへ'],
          e: ''
        },
        {
          q: '教育学部の男女比は？',
          c: ['6:4', '5:5', '8:2'],
          e: '2021年は男子2599人、女子1469人となっています！(早稲田祭運営スタッフ調べ)'
        },
        {
          q: '早稲田大学に実際に存在しない授業は？',
          c: ['美容学入門', '恋愛学入門', 'オカルト芸術論'],
          e: '恋愛学入門はGEC（グローバルエデュケーションセンター）で開講されている、早大生なら誰でも受講できる授業です！'
        },
        {
          q: '早稲田大学の公認サークルの数は？',
          c: ['約550', '約450', '約350'],
          e: 'その他に非公認サークルもたくさんあります！'
        },
        {
          q: '早大生の間で有名な「學会」は何のお店？',
          c: ['油そば', '炒飯', 'ラーメン'],
          e: ''
        },
        {
          q: '早稲田大学の建物で一番数字が大きいのは何号舘？',
          c: ['121号館', '120号館', '122号館'],
          e: ''
        },
        {
          q: '早稲田大学の創立年は？',
          c: ['1882年', '1858年', '1913年'],
          e: ''
        },
        {
          q: 'SSSはどの学部の略称？',
          c: ['社会科学部', '政治経済学部', '教育学部'],
          e: '社会科学部は英語でSchool of Social Scienceとなっています！'
        },
        {
          q: '学生会館にあるコンビニは？',
          c: ['セブンイレブン', 'ファミリーマート', 'ローソン'],
          e: 'ちなみに、早稲田キャンパスにはセブンイレブンとファミリーマートがあります！'
        },
        {
          q: '所要時間が一番短いのはどれ？',
          c: [
            '早稲田キャンパス〜西早稲田駅',
            '早稲田キャンパス〜高田馬場駅',
            '早稲田キャンパス〜所沢キャンパス'
          ],
          e: 'また、早稲田駅は西早稲田駅よりもさらに早稲田キャンパスに近いです！'
        },
        {
          q: 'わせだサイくんが今の姿にリニューアルしたのはいつ？',
          c: ['2021年', '2020年', '2019年'],
          e: '立体感がましてさらに可愛くなりました！'
        },
        {
          q: '早稲田大学に実際には存在しない授業は？',
          c: ['陸上基礎', '馬術基礎', 'トランポリン基礎'],
          e: 'トランポリン基礎は志望理由まで書く超人気授業なんだとか…'
        },
        {
          q: '今年の早稲田祭のロゴと関係ないものは？',
          c: ['完璧さ', '希望', '繋がり'],
          e: '詳しくは公式サイト内の「早稲田祭2021について」をチェック！'
        },
        {
          q: '早稲田大学に実際に存在しない授業は？',
          c: ['Kabuki', 'Budo', 'Bon Dance'],
          e: ''
        },
        { q: '早大生の好きな単語は？', c: ['楽単', '落胆', '再履'], e: '' },
        {
          q: '早稲田キャンパスで開講されている体育の授業は？',
          c: ['合気道', 'バスケ', 'サッカー'],
          e: ''
        },
        {
          q: '早稲田通りに面した建物は？',
          c: ['29号館', '23号館', '27号館'],
          e: ''
        },
        {
          q: '早稲田駅を通っている路線は？',
          c: ['東西線', '山手線', '南北線'],
          e: ''
        },
        {
          q: '早稲田キャンパスにない学部は？',
          c: ['文学部', '商学部', '社会科学部'],
          e: ''
        },
        {
          q: '真面目に授業を受けていない社会科学部生は早大生から何と呼ばれている？',
          c: ['しゃがクズ', 'しゃふガク', 'しゃかクズ'],
          e: ''
        },
        {
          q: '主に教育学部が使う16号館の早大生が使う通称は？',
          c: ['チベット', 'ヒマラヤ', 'アルプス'],
          e: '16号館は早稲田キャンパスの中でも正門から最も離れた場所にひっそりと建っているため、このように呼ばれています。'
        },
        {
          q: '早大生が使う特定の学部生への通称で、存在しないものは？',
          c: ['ガリ法', 'チャラ商', 'あそ文構'],
          e: '商学部生はチャラいというイメージが付いておりチャラ商、授業が少なく遊んでばかりだと思われている文化構想学部生はあそ文構と呼ばれます！'
        },
        {
          q: '雰囲気や見た目がおしゃれな女子大学生の通称は？',
          c: ['キラ女', 'イケ女', 'ピカ女'],
          e: ''
        },
        {
          q: '入学試験において英国社が全問マークシート形式で行われるのは？',
          c: ['社会科学部', '商学部', '文化構想学部'],
          e: ''
        },
        {
          q: '主に政治経済学部が使う3号館に無い設備は？',
          c: ['スターバックス', '煉瓦屋根', 'セブンイレブン'],
          e: '3号館では、旧3号館にあった煉瓦屋根や鉄扉が再現されています！ちなみにスターバックスは戸山キャンパスにあります。'
        },
        {
          q: 'バイトの平均月収は？（早稲田祭2021運営スタッフへのアンケートより）',
          c: ['4～7万円', '～3万円', '8万円'],
          e: ''
        },
        {
          q: '高田馬場エリアにあるラーメン・油そばの店舗数は？',
          c: ['70軒', '50軒', '60軒'],
          e: '高田馬場駅から半径1㎞圏内に70軒以上が集まっているそうです！'
        }
      ]).splice(0, 8)
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

        explanation.classList.remove('none')
        nextBtn.classList.remove('disabled')
      }

      function setQuiz() {
        isAnswered = false

        question.textContent = quizSet[currentNum].q

        explanation.textContent = quizSet[currentNum].e

        qNumber.textContent = [currentNum + 1]

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
          nextBtn.textContent = ' 結果を見る'
        }
      }

      setQuiz()

      nextBtn.addEventListener('click', () => {
        if (nextBtn.classList.contains('disabled')) {
          return
        }
        nextBtn.classList.add('disabled')

        if (explanation.classList.contains('none')) {
          return
        }
        explanation.classList.add('none')

        if (currentNum === quizSet.length - 1) {
          scoreLabel.textContent = `${score}`
          result.classList.remove('hidden')
          if (score > 7) {
            rank.textContent = '天サイ！'
            saikun.src = '/images/quiz/saikun_rank1.png'
            commentary.textContent = 'サイ強！早大マスターは譲るツノ！'
          } else if (score > 5) {
            rank.textContent = 'サイ高！'
            saikun.src = '/images/quiz/saikun_rank2.png'
            commentary.textContent = 'あとちょっと、Never give upだツノ！'
          } else if (score > 2) {
            rank.textContent = 'サイ能アリ！'
            saikun.src = '/images/quiz/saikun_rank3.png'
            commentary.textContent = 'まだまだ頑張るツノ！サイ挑戦してね！'
          } else {
            rank.textContent = 'サイ履修！'
            saikun.src = '/images/quiz/saikun_rank4.png'
            commentary.textContent = '伸びしろしかないツノ！出直してきてツノ…'
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
  <div class="quizPageContent">
    <img class="title" src="~assets/images/quiz/title.svg" />
    <div class="contents">
      <div class="about-box">
        <div class="aaa">
          <hr class="hr1" color="#f4e25d" width="3%" />
          <h1 class="gaiyou"><span class="kikaku">企</span>画概要</h1>
          <hr class="hr1" color="#f4e25d" width="20%" />
        </div>
        <div class="greet">
          <p class="about">
            挑戦者のみなさん、こんツノ～！
            まずは当サイトへのご来訪、ありがとうツノね！ <br />
            みなさんにはこれから早稲田についてのクイズに挑戦してもらうから、まずは注意点とルールの説明をするツノ！<br />
            はじめに注意点ツノ。<br />
            このページに掲載しているクイズには、運営スタッフ内でのアンケートを元にしているものがあるから、事実とは少しずれている可能性があることを予めご了承くだサイ。<br />
            また、得点が高くても景品や賞金があるわけじゃないけど許してほしいツノね……<br />
            <br />
            お次はルールについてツノ。<br />
            ルールと言ってもやることは簡単！
            これから出てくる全8問のクイズに答えてほしいツノ。クイズは全て3択問題！
            正しいと思うものを選んでみてくだサイ！<br />
            ちなみにクイズは週1回更新されるから、色んな問題が楽しめちゃうツノね～！<br />
            <br />
            問題を解き終わると、あなたの正解数に応じてボクがあなたにピッタリな称号を授けちゃうツノ！
            楽しみにしておいてくだサイ！<br />
            それじゃあボクはここで失礼。また後でお会いするツノ～！
          </p>
          <img
            src="~assets/images/quiz/saikun_greet.png"
            class="saikun_greet" />
        </div>
      </div>
      <section class="quiz_box">
        <div>
          <h3 class="card-title">早大クイズ～サイくんからの挑戦状～</h3>
        </div>
        <div class="aaa">
          <hr class="hr_q" color="#e89e9e" width="3%" />
          <h2 class="q_number1">Q.</h2>
          <h2 id="q_number" class="q_number2" />
          <hr class="hr_q" color="#e89e9e" width="20%" />
        </div>
        <p id="question" />
        <ul id="choices" />
        <p id="explanation" class="none" />
        <div id="next_btn" class="disabled">次の問題へ</div>

        <section id="result" class="hidden">
          <div class="aaa">
            <hr class="hr_r" color="#f4e25d" width="3%" />
            <h2 class="letter_result">スコア</h2>
            <hr class="hr_r" color="#f4e25d" width="20%" />
          </div>
          <div id="result_box">
            <p id="score2">あなたの得点は…<span id="score" />/8</p>
            <div id="rank_saikun">
              <p id="rank" />
              <img id="saikun" src="" />
            </div>
            <p id="commentary" />
          </div>
          <div id="result_btn_box">
            <a id="retry" onclick="window.location.reload(false)"
              >もう一度挑戦</a
            >
          </div>
        </section>
      </section>
    </div>
  </div>
</template>
