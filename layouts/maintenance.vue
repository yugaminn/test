<script>
export default {
  data() {
    return {
      // TODO: サイトがリリースされたらtrueに変更する
      siteIsPublic: true
    }
  },
  head() {
    return {
      title: this.siteIsPublic ? 'Comming Soon' : 'メンテナンス'
    }
  }
}
</script>

<template>
  <div v-cloak class="container">
    <div v-if="siteIsPublic">
      <Header />
      <main>
        <div class="message-container">
          <div class="message">
            <h1>Coming Soon ツノ！</h1>
            <Paragraph>公開されるまでもう少しお待ちくだサイ</Paragraph>
          </div>
          <div>
            <img
              src="~assets/images/comingsoon-saikun.png"
              alt="サイくん"
              class="saikun"
              style="display: block; margin: auto" />
          </div>
        </div>
      </main>
      <Footer />
    </div>
    <div v-else class="maintenance">
      <main>
        <img
          class="logo_with_catchcopy"
          src="~assets/images/logo_with_catch1.png"
          alt="ロゴ" />
        <h1>メンテナンス</h1>
        <Paragraph>現在公式サイトはメンテナンス中です。</Paragraph>
        <Paragraph>（～10月4日）</Paragraph>
        <div class="basic-info">
          <Paragraph>早稲田祭の基本情報</Paragraph>
          <Paragraph>開催日：11月2日（土）、11月3日（日）</Paragraph>
          <Paragraph>公式SNS</Paragraph>
          <div class="sns-links-container">
            <a
              href="https://twitter.com/wasedasai"
              target="_blank"
              rel="noopener noreferrer"
              ><img
                class="sns-link"
                src="~assets/images/sns/twitter.png"
                alt="twitterのリンク"
            /></a>
            <a
              href="https://instagram.com/wasedasai/"
              target="_blank"
              rel="noopener noreferrer"
              ><img
                class="sns-link"
                src="~assets/images/sns/instagram.png"
                alt="instagramのリンク"
            /></a>
            <a
              href="https://facebook.com/Wasedasai"
              target="_blank"
              rel="noopener noreferrer"
              ><img
                class="sns-link"
                src="~assets/images/sns/facebook.png"
                alt="facebookのリンク"
            /></a>
            <a
              href="https://youtube.com/channel/UCFh9blapIkxPf4Al3L87QHQ"
              target="_blank"
              rel="noopener noreferrer"
              ><img
                class="sns-link"
                src="~assets/images/sns/youtube.png"
                alt="youtubeのリンク"
            /></a>
            <a
              href="https://note.com/wasedasai2021/"
              target="_blank"
              rel="noopener noreferrer"
              ><img
                class="sns-link"
                src="~assets/images/sns/note.png"
                alt="noteのリンク"
            /></a>
          </div>
        </div>
      </main>
    </div>
    <Headmenu />
  </div>
</template>

<style scoped>
.contaienr {
  height: 100%;
  width: 100%;
}

main {
  padding: 4rem 0 1rem;
  text-align: center;
}

/* Comming Soon */
.message-container {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.message {
  text-align: center;
  position: relative;
  margin: 2rem auto 1.5rem;
  padding: 30px;
  background-color: white;
  border: 0.3em solid #59c3e1;
  border-radius: 20px;
  width: 100%;
  max-width: 480px;
}
.message h1 {
  color: #3e3a39;
  font-family: 'Noto Sans JP', 'Hiragino Kaku Gothic ProN', Meiryo, sans-serif;
  margin-bottom: 10px;
}
.message .paragraph {
  color: #3e3a39;
  font-family: 'Noto Sans JP', 'Hiragino Kaku Gothic ProN', Meiryo, sans-serif;
}

.saikun {
  max-width: 300px;
  width: 100%;
  text-align: center;
}

/* メンテナンス */
.maintenance h1 {
  text-align: center;
}
.maintenance .basic-info {
  padding: 2rem;
}
.maintenance .sns-links-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}
.maintenance .sns-links-container .sns-link {
  width: 40px;
}
.maintenance .logo_with_catchcopy {
  max-width: 360px;
  width: 100%;
  margin: auto;
}
@media screen and (max-width: 1024px) {
  .maintenance main {
    padding: 1rem;
  }
  .saikun {
    max-width: 250px;
    width: 80%;
  }
}
@media screen and (min-width: 1024px) {
  .br {
    color: #3e3a39;
    display: none;
  }
}
</style>
