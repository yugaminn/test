<script>
export default {
  layout: 'maintenance',
  head: {
    title: '二択で診断！おすすめ運スタ企画',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'あなたにぴったりの企画を診断！'
      },
      {
        hid: 'keyword',
        name: 'keyword',
        content:
          '早稲田 早稲田大学 受験 学部 早稲田祭 早稲田祭2022 わせだサイくん'
      },
      { hid: 'og:type', property: 'og:type', content: 'article' },
      {
        hid: 'og:title',
        property: 'og:title',
        content: '二択で診断！おすすめ運スタ企画'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'あなたにぴったりの企画を診断！'
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: '/recommend/1'
      },
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
    <Content>
      <Paragraph :align="'center'" class="saikunteki">
        あなたにおすすめの企画は……<br />
      </Paragraph>
      <Paragraph :align="'center'" class="saikunteki">
        <span>早稲田スポーツ魂～アスリート編～ </span>
      </Paragraph>
      <img
        class="saikun"
        src="~assets/images/recommend/samune18.jpg"
        alt="企画"
        style="display: block; margin: auto" />
      <Paragraph class="setsumei">
        有名アスリートの話が聞けるのはここだけ！
        早稲田大学を卒業し、日本を代表してスポーツで活躍されている方々のトークショーを刮目せよ！
        早稲田スポーツの最高峰を感じてください！
      </Paragraph>
      <ticketLink class="retry" :url="'/events/19'">
        企画詳細を見る
      </ticketLink>
      <section>
        <NuxtLink :to="'/recommend/1'" class="btn_02"
          >もう一度診断する</NuxtLink
        >
      </section>
    </Content>
  </div>
</template>

<style scoped>
section {
  max-width: 300px;
  margin: 0 auto;
}
.btn_02 {
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  border: 1px solid #c17316;
  box-sizing: border-box;
  width: 100%;
  height: 30px;
  padding: 0 6% 0 12%;
  color: #c17316;
  font-size: 16px;
  text-align: left;
  text-decoration: none;
  position: relative;
  transition-duration: 0.2s;
}
.btn_02:hover {
  background: #c17316;
  color: #fff;
}
.btn_02:before {
  content: '';
  display: inline-block;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 7px 0 7px 8px;
  border-color: transparent transparent transparent #c17316;
  position: absolute;
  top: 50%;
  left: 6%;
  margin-top: -7px;
}
.btn_02:hover:before {
  border-color: transparent transparent transparent #fff;
}

.saikunteki {
  font-size: 150%;
  font-weight: bold;
  padding-top: 0.5em;
}

span {
  padding: 0.5em 1em;
  margin: 2em 1em;
  color: #fff;
  background: #c17316;
  border-bottom: solid 6px #eda93b;
  border-radius: 9px;
}

.saikun {
  width: 60%;
  height: 60%;
  padding: 10px;
}

.setsumei {
  padding-top: 2em;
  font-size: 110%;
  padding: 0.5em 1em;
  margin: 1em 5em;
  font-weight: bold;
  background: #fff;
  border: solid 3px #d35b31;
  border-radius: 10px;
}
.retry {
  margin: auto;
}
@media screen and (max-width: 920px) {
  .saikunteki {
    font-size: 120%;
    padding-top: 0.5em;
  }
  span {
    padding: 0.5em 0.5em;
    margin: 2em 0.3em;
  }
  .saikun {
    width: 80%;
    height: 50%;
    padding: 10px;
  }
  .setsumei {
    font-size: 90%;
    margin: 0.5em 0;
    margin-bottom: 20px;
  }
}
</style>
