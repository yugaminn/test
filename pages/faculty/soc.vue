<script>
export default {
  layout: 'maintenance',
  head: {
    title: '学部分けサイくん 商学部',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: '学部分けサイくん 商学部のページです。'
      },
      {
        hid: 'keyword',
        name: 'keyword',
        content:
          '早稲田 早稲田大学 早稲田祭 早稲田祭2021 学部分けサイくん 商学部 本キャン'
      },
      { hid: 'og:type', property: 'og:type', content: 'article' },
      {
        hid: 'og:title',
        property: 'og:title',
        content: '学部分けサイくん 商学部'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: '学部分けサイくん 商学部のページです。'
      },
      { hid: 'og:search', property: 'og:search', content: '/faculty/soc' },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://wasedasai.net/images/soc.png'
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
          あなたは<span>商学部</span>にいそう！！
        </Paragraph>
        <img
          class="saikun"
          src="~assets/images/faculty/soc.png"
          alt="商学部"
          style="display: block; margin: auto" />
      </section>
      <Paragraph class="setsumei">
        経営やビジネスについて学ぶ学部。チャラ商などと言われることもあるようだが実態はいかに。公認会計士などの資格取得を目指す人も多いらしい。
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
          data-text="サイくん的にあなたは商学部にいそうツノね〜！ 学部分けサイくん、みんなもやってみてくだサイ🦏"
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
  background: #031a5d;
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
  border: solid 3px #031a5d;
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
