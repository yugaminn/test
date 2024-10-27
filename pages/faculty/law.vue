<script>
export default {
  layout: 'maintenance',
  head: {
    title: '学部分けサイくん 法学部',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: '学部分けサイくん 法学部のページです。'
      },
      {
        hid: 'keyword',
        name: 'keyword',
        content:
          '早稲田 早稲田大学 早稲田祭 早稲田祭2021 学部分けサイくん 法学部 本キャン'
      },
      { hid: 'og:type', property: 'og:type', content: 'article' },
      {
        hid: 'og:title',
        property: 'og:title',
        content: '学部分けサイくん 法学部'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: '学部分けサイくん 法学部のページです。'
      },
      { hid: 'og:search', property: 'og:search', content: '/faculty/law' },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://wasedasai.net/images/law.png'
      }
    ]
  }
}
</script>

<template>
  <div>
    <Content>
      <section>
        <Paragraph :align="'center'" class="saikunteki">
          サイくん的！<br />
        </Paragraph>
        <Paragraph :align="'center'" class="saikunteki">
          あなたは<span>法学部</span>にいそう！！
        </Paragraph>
        <img
          class="saikun"
          src="~assets/images/faculty/law.png"
          alt="法学部"
          style="display: block; margin: auto" />
      </section>
      <Paragraph class="setsumei">
        建物が南門から一番近い上に、中にはパン屋さんがあるという好立地。授業の出席はゆるいけど、テストはとても大変らしい。
      </Paragraph>
      <ticketLink class="retry" :url="'/mirainosoudaisei/saikungakubu'">
        もう一度診断する
      </ticketLink>
      <div class="share">
        <a
          href="https://twitter.com/share?ref_src=twsrc%5Etfw"
          class="twitter-share-button"
          data-hashtags="早稲田祭,早稲田大学,学園祭,学部分けサイくん"
          data-show-count="false"
          data-text="サイくん的にあなたは法学部にいそうツノね〜！ 学部分けサイくん、みんなもやってみてくだサイ🦏"
          >Tweet</a
        >
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charset="utf-8" />
      </div>
    </Content>
  </div>
</template>

<style scoped>
.saikunteki {
  font-size: 150%;
  font-weight: bold;
  color: #274c82;
  padding-top: 0.5em;
}

span {
  padding: 0.5em 1em;
  margin: 2em 1em;
  color: #fff;
  background: #56957c;
  border-bottom: solid 6px #b6bec5;
  border-radius: 9px;
}

.saikun {
  width: 20%;
  height: 20%;
  padding: 10px;
}

.setsumei {
  padding-top: 2em;
  font-size: 110%;
  padding: 0.5em 1em;
  margin: 1em 5em;
  font-weight: bold;
  color: #274c82;
  background: #fff;
  border: solid 3px #56957c;
  border-radius: 10px;
}
.retry {
  margin: auto;
}
.twitter-share-button {
  text-align: center;
  padding-top: 30px;
}
.share {
  text-align: center;
  padding-top: 30px;
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
    width: 50%;
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
