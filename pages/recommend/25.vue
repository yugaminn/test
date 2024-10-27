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
  <Content>
    <div class="yesno">
      <div style="display: block">
        <img src="~assets/images/saikuns/saikun-happy.png" class="saikun" />
        <p class="bunsyo">どちらかというと</p>
        <ul class="btn2">
          <li>
            <NuxtLink :to="'/recommend/a5'" class="yn_btn"
              >生のパフォーマンスを楽しみたい</NuxtLink
            >
          </li>
          <li>
            <NuxtLink :to="'/recommend/a10'" class="yn_btn"
              >クオリティの高い映像や音楽を楽しみたい</NuxtLink
            >
          </li>
        </ul>
      </div>
    </div>
  </Content>
</template>

<style scoped>
.yesno ul {
  display: flex;
}

.yesno ul li {
  list-style: none;
  background-color: #fff;
  height: 100px;
  width: 40%;
  margin: 5%;
}

.yesno ul li a {
  color: #fff;
  background-color: #eda93b;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  font-size: 15px;
  text-align: center;
  width: 100%;
  height: 100%;
}

.yesno ul li a:hover {
  color: #eda93b;
  background-color: #fff;
  border-color: #eda93b;
  border-width: 6px;
  border-style: solid;
}

.saikun {
  width: 20%;
  margin: auto;
  padding-top: 30px;
  padding-bottom: 30px;
}

.bunsyo {
  text-align: center;
  font-size: 30px;
}

@media screen and (max-width: 920px) {
  .yesno ul li {
    font-size: 16px;
  }
  .bunsyo {
    font-size: 16px;
  }
}
</style>
