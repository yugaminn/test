<script>
export default {
  layout: 'maintenance',
  head: {
    title: '学部分けサイくん 先進理工学部',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: '学部分けサイくん 先進理工学部のページです。'
      },
      {
        hid: 'keyword',
        name: 'keyword',
        content:
          '早稲田 早稲田大学 早稲田祭 早稲田祭2021 学部分けサイくん 先進理工学部 理工キャン'
      },
      { hid: 'og:type', property: 'og:type', content: 'article' },
      {
        hid: 'og:title',
        property: 'og:title',
        content: '学部分けサイくん 先進理工学部'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: '学部分けサイくん 先進理工学部のページです。'
      },
      { hid: 'og:search', property: 'og:search', content: '/faculty/ase' },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://wasedasai.net/ase.png'
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
        <span>世界へ羽ばたけ、早大生！</span>
      </Paragraph>
      <img
        class="saikun"
        src="~assets/images/recommend/samune208.jpg"
        alt="先進理工学部"
        style="display: block; margin: auto" />
      <Paragraph class="setsumei">
        早稲田祭2022唯一のバイリンガル企画！
        海外の名門大学にいる早大生の話を聞こう！
        国際系サークルの企画ブースも必見！
        留学、国際交流、アート企画と盛りだくさん！Make Waseda Global With Us!
        Here at WASEDASAI!
      </Paragraph>
      <ticketLink class="retry" :url="'/mirainosoudaisei/saikungakubu'">
        企画詳細を見る
      </ticketLink>
      <section>
        <NuxtLink :to="'/mirainosoudaisei/saikun'" class="btn_02"
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
