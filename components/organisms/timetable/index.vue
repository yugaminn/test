<script>
export default {
  props: ['bgColor', 'rounded'],
  data: () => {
    return {
      tab: 1
    }
  }
}
</script>

<template>
  <div class="timetable">
    <div class="tabs-container">
      <TimetableTab
        :rounded="true"
        :bg-color="'navy'"
        :with-saikun="true"
        @tab-click-event="tab = 1">
        <slot name="tab1" />
      </TimetableTab>
      <TimetableTab
        :rounded="true"
        :bg-color="'yellow'"
        :with-saikun="false"
        @tab-click-event="tab = 2">
        <slot name="tab2" />
      </TimetableTab>
    </div>
    <div>
      <TimetableContents v-show="tab === 1" :bg-color="'navy'" :rounded="true">
        <slot name="content1" />
      </TimetableContents>
      <TimetableContents
        v-show="tab === 2"
        :bg-color="'yellow'"
        :rounded="true">
        <slot name="content2" />
      </TimetableContents>
    </div>
  </div>
</template>

<style scoped>
.timetable {
  margin: auto;
  padding: 5rem 0rem 2rem;
}
@media screen and (min-width: 425px) {
  .timetable {
    padding: 5rem 0.5rem 2rem;
  }
}

@media screen and (min-width: 1024px) {
  .timetable {
    padding: 5rem 2rem 2rem;
  }
}

.tabs-container {
  display: flex;
}
</style>
