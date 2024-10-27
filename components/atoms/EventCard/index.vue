<script>
export default {
  props: ['event'],
  methods: {
    getShortContent(content) {
      return content.substr(0, 60)
    }
  }
}
</script>

<template>
  <NuxtLink
    target="_blank"
    rel="noopener noreferrer"
    :to="`/events/${event.id}`"
    class="event-link event">
    <div>
      <img
        v-if="event.image_name"
        :src="'https://api.wasedasai.net/images/events/' + event.image_name" />
      <img v-else src="~/assets/images/commingsoon.png" />
      <div class="features">
        <div v-show="event.guest">ゲスト</div>
        <div v-show="event.online_ticket || event.offline_ticket">チケット</div>
        <div v-if="event.online_type == 'オンデマンド'">オンデマンド</div>
        <div v-if="event.online_type == 'ライブ（アーカイブなし）'">
          ライブ（アーカイブなし）
        </div>
        <div v-if="event.online_type == 'ライブ（アーカイブあり）'">
          ライブ（アーカイブあり）
        </div>
      </div>
    </div>
    <div class="info">
      <div>
        <div class="eventname">{{ event.event_name }}</div>
        <div class="eventcontent">{{ event.group_name }}</div>
        <div class="eventcontent">{{ event.genre }}/{{ event.subgenre }}</div>
        <div class="eventcontent">{{ event.dates }}</div>
        <div class="eventcontent">{{ getShortContent(event.content) }}...</div>
      </div>
      <div class="bottom">
        <div v-if="event.online_type && event.offline_type">ハイブリッド</div>
        <div v-if="event.online_type && !event.offline_type">オンライン</div>
        <div v-if="!event.online_type && event.offline_type">オフライン</div>
      </div>
    </div>
  </NuxtLink>
</template>

<style scoped>
.event-link {
  display: block;
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: #181825;
}

.event {
  padding: 1rem;
  max-width: 540px;
  min-height: 210px;
  box-shadow: 2px 2px 4px gray;
  display: flex;
  flex-direction: row;
  gap: 1rem;
}
.event > div {
  width: 50%;
}

.features {
  padding: 0.5rem 0;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.features > div {
  font-size: 12px;
  color: #274c82;
  font-weight: 600;
  background: white;
  box-shadow: 1px 1px 2px gray;
  padding: 4px 6px;
}

.info {
  font-size: 14px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.info .bottom > div {
  background: #274c82;
  color: white;
  font-weight: 600;
  text-align: center;
  max-width: 120px;
  padding: 4px;
  box-shadow: 1px 1px 2px gray;
  margin-left: auto;
}

.eventname {
  font-weight: bold;
  font-size: 16px;
}

@media screen and (max-width: 1024px) {
  .event {
    flex-direction: column;
    gap: 0rem;
  }

  .event-container {
    width: 100%;
  }

  .event > div {
    width: 100%;
  }
}
</style>
