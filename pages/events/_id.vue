<script>
import axios from 'axios'
export default {
  async asyncData(context) {
    const item = await axios
      .get(`https://api.wasedasai.net/events/${context.route.params.id}`)
      .then((response) => response.data)
    return {
      event: item
    }
  },
  data() {
    return {
      event: Object
    }
  },
  head() {
    return {
      title: this.event.event_name,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.event.content
        },
        { hid: 'og:type', property: 'og:type', content: 'article' },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.event.event_name
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.event.content
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'http://wasedasai.net/events/' + this.$route.params.id
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content:
            'https://wasedasai.net/images/events_logos/' +
            this.event.logo_image_name
        },
        // Twitter
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.event.event_name
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.event.content
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image'
        },
        {
          hid: 'twitter:site',
          name: 'twitter:site',
          content: 'http://wasedasai.net/events/' + this.$route.params.id
        },
        {
          hid: 'twitter:image',
          property: 'twitter:image',
          content:
            'https://wasedasai.net/images/events_logos/' +
            this.event.logo_image_name
        }
      ]
    }
  },
  methods: {
    getAutoLink(str) {
      const regexpUrl = /((h?)(ttps?:\/\/[a-zA-Z0-9.\-_@:/~?%&;=+#',()*!]+))/g
      const regexpMakeLink = function (all, url, h, href) {
        return (
          '<a target="_blank" rel="noopener noreferrer" href="h' +
          href +
          '">' +
          url +
          '</a>'
        )
      }
      return str.replace(regexpUrl, regexpMakeLink)
    },
    getNotDuplicateData(data) {
      const array = data.split(',')
      const set = Array.from(new Set(array))
      return set.join(',')
    },
    getLength(items) {
      return items.split(',').length
    },
    getArray(items) {
      return items.split(',')
    }
  }
}
</script>

<template>
  <Content>
    <section>
      <Hero> 企画情報 </Hero>
    </section>
    <section class="top">
      <PartTitle :bg-color="'orange'" class="PartTitle">{{
        event.event_name
      }}</PartTitle>
      <div class="basic-info">
        <div>
          <strong>団体名：{{ event.group_name }}</strong>
        </div>
        <div class="basic-info">
          <Paragraph>
            <strong>【日にち】</strong><br />
            {{ getNotDuplicateData(event.dates) }}
          </Paragraph>
          <Paragraph>
            <strong>【ジャンル】</strong><br />
            {{ event.genre }} / {{ event.sub_genre }}
          </Paragraph>
        </div>
      </div>
      <div class="'center'">
        <img
          class="logo-img"
          :src="
            'https://wasedasai.net/images/events_samunes/' +
            event.samune_image_name
          " />
      </div>
    </section>

    <section>
      <div class="contents">
        <Box :bg-color="'yellow'" :class="'box'" :rounded="true">
          {{ event.content }}
        </Box>
      </div>
    </section>

    <section>
      <BlockTitle> 参加団体・参加者紹介文 </BlockTitle>
      <div class="detail">
        <Paragraph>{{ event.introduce }}</Paragraph>
      </div>
    </section>

    <section>
      <BlockTitle> チケット詳細 </BlockTitle>
      <div class="detail">
        <Paragraph v-if="event.ticket">{{ event.ticket }}</Paragraph>
        <Paragraph v-else>不要</Paragraph>
      </div>
    </section>

    <section>
      <BlockTitle>開催日程 </BlockTitle>
      <table class="detail schedule-table">
        <thead>
          <tr>
            <th>実施日</th>
            <th>キャンパス</th>
            <th>場所</th>
            <th>時間</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="index of getLength(event.dates)" :key="'schedule' + index">
            <td>{{ getArray(event.dates)[index - 1] }}</td>
            <td>{{ getArray(event.event_campus)[index - 1] }}</td>
            <td>{{ getArray(event.event_place)[index - 1] }}</td>
            <td>{{ getArray(event.time)[index - 1] }}</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section v-if="event.is_broadcasted">
      <BlockTitle> ご視聴の方へ </BlockTitle>
      <div class="online">
        <div>
          ご視聴はこちら：
          <Paragraph>{{ event.broadcast_url }}</Paragraph>
        </div>
      </div>
    </section>

    <section v-if="event.guest">
      <BlockTitle class="guest"> ゲスト </BlockTitle>
      <div class="guest">
        <div>ゲスト：{{ event.guest }}</div>
      </div>
    </section>

    <section>
      <PartTitle :bg-color="'orange'"> SNS </PartTitle>
      <div class="detail">
        <div v-if="event.twitter">
          <EventsSNS :url="event.twitter" class="sns">Twitter</EventsSNS>
        </div>
        <div v-if="event.instagram">
          <EventsSNS :url="event.instagram" class="sns">Instagram</EventsSNS>
        </div>
        <div v-if="event.websites">
          <EventsSNS :url="event.websites" class="sns">WebSites</EventsSNS>
        </div>
      </div>
    </section>

    <section class="bottom">
      <div class="block green-block">
        {{ event.group_content }}
      </div>
    </section>
  </Content>
</template>

<style scoped>
.top {
  text-align: center;
}
.basic-info {
  padding: 1rem 1rem 0 1rem;
}

.detail {
  text-align: center;
  padding: 1rem;
}

.online {
  align-content: center;
  padding: 1rem;
}

.center {
  text-align: center;
}

.logo-img {
  width: 100%;
  height: 100%;
  align-self: right;
}

.contents {
  display: flex;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-align-items: center;
  align-items: center;
  padding: 20px 0;
}

.PartTitle {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 20px;
}

.schedule-table {
  overflow: scroll;
  padding: 16px 0;
}

.schedule-table th,
.schedule-table td {
  font-size: 14px;
  text-align: left;
  border-bottom: 1px solid black;
  padding: 0;
}

.guest {
  align-content: center;
  margin-top: 1rem;
}
</style>
