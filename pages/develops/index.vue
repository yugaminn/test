<script>
export default {
  layout: 'maintenance'
}
</script>

<template>
  <Content>
    <h2>Components一覧</h2>

    <Paragraph> コンポーネントを作成したら追記してください。 </Paragraph>

    <section>
      <div>
        <h2>Hero</h2>

        <Hero> hero </Hero>
      </div>
    </section>

    <section>
      <div>
        <h3>SectionTitle</h3>

        <div>
          <SectionTitle :bg-color="'blue'"
            >CountDownイベント開催のお知らせ</SectionTitle
          >
        </div>
        <SectionTitle :bg-color="'blue'">sample</SectionTitle>
      </div>
    </section>

    <section>
      <div>
        <h3>BlockTitle</h3>
        <BlockTitle :bg-color="'pink'">領域展開について</BlockTitle>
      </div>
      <div>
        <BlockTitle :bg-color="'green'"
          >ひゅーとやってひょいだよ。ひゅーひょい</BlockTitle
        >
      </div>
      <div>
        <BlockTitle :bg-color="'pink'">わっかんないの？センスねー</BlockTitle>
      </div>
      <div>
        <BlockTitle :bg-color="'green'"
          >もうあの人一人でよくないですか。</BlockTitle
        >
      </div>
    </section>

    <section>
      <div>
        <h3>PartTitle</h3>

        <PartTitle :bg-color="'pink'">Sample</PartTitle>
        <PartTitle :bg-color="'gleen'">Sample</PartTitle>
        <PartTitle :bg-color="'purple'">Sample</PartTitle>
        <PartTitle :bg-color="'blue'">Sample</PartTitle>
        <PartTitle :bg-color="'yellow'">こんにちは</PartTitle>
      </div>
    </section>

    <section>
      <div>
        <h3>Paragraph</h3>

        <Paragraph>Sample</Paragraph>

        <Paragraph> Sample </Paragraph>

        <Paragraph :align="'center'"> Sample </Paragraph>

        <Paragraph :align="'right'"> Sample </Paragraph>
      </div>
    </section>

    <section>
      <div>
        <h3>Timetable</h3>

        <Timetable>
          <template #tab1>
            <div>11月6日（土）</div>
          </template>

          <template #tab2>
            <div>11月7日（日）</div>
          </template>

          <template #content1>
            <Paragraph>内容1</Paragraph>
          </template>

          <template #content2>
            <Paragraph>内容2</Paragraph>
          </template>
        </Timetable>
      </div>
    </section>

    <section>
      <div>
        <h3>Box</h3>

        <Box :rounded="true" :bg-color="'yellow'"> SampleBox1 </Box>

        <Box :rounded="true" :bg-color="'blue'"> SampleBox2 </Box>

        <Box :rounded="true" :bg-color="'red'"> SampleBox3 </Box>

        <Box :rounded="true" :bg-color="'green'"> SampleBox5 </Box>

        <Box :rounded="true" :bg-color="'purple'"> SampleBox4 </Box>

        <Box :rounded="true" :bg-color="'skyblue'"> SampleBox6 </Box>
      </div>
    </section>

    <section>
      <div>
        <h3>ExternalLink</h3>

        <ExternalLink
          :bg-color="'navy'"
          :rounded="true"
          :url="'wasedasai.net'"
          :color="'navy'">
          Sample1
        </ExternalLink>

        <ExternalLink
          :bg-color="'orange'"
          :rounded="true"
          :url="'wasedasai.net'"
          :color="'orange'">
          Sample2
        </ExternalLink>

        <!-- <ExternalLink
          :bg-color="'red'"
          :rounded="true"
          :url="'wasedasai.net'"
          :color="'white'">
          Sample3
        </ExternalLink>

        <ExternalLink
          :bg-color="'purple'"
          :rounded="true"
          :url="'wasedasai.net'"
          :color="'white'">
          Sample4
        </ExternalLink> -->

        <!-- <ExternalLink
          :bg-color="'pink'"
          :rounded="true"
          :url="'wasedasai.net'"
          :color="'navy'">
          Sample5
        </ExternalLink> -->

        <!-- <ExternalLink
          :bg-color="'navy'"
          :rounded="true"
          :url="'wasedasai.net'"
          :color="'white'">
          Sample6
        </ExternalLink> -->

        <!-- <ExternalLink
          :bg-color="'blue'"
          :rounded="true"
          :url="'wasedasai.net'"
          :color="'navy'">
          Sample7
        </ExternalLink> -->

        <!-- <ExternalLink
          :bg-color="'green'"
          :rounded="true"
          :url="'wasedasai.net'"
          :color="'white'">
          Sample8
        </ExternalLink> -->
      </div>
    </section>

    <section>
      <div>
        <h3>ButtonLink</h3>

        <ButtonLink :bg-color="'red'" :internal="true" :url="'/'">
          わせだサイくんの部屋
        </ButtonLink>

        <ButtonLink :bg-color="'red'" :internal="false" :url="'/'">
          わせだサイくんの部屋
        </ButtonLink>

        <ButtonLink :bg-color="'pink'"> わせだサイくんの部屋 </ButtonLink>

        <ButtonLink :bg-color="'yellow'"> わせだサイくんの部屋 </ButtonLink>

        <ButtonLink :bg-color="'blue'"> わせだサイくんの部屋 </ButtonLink>

        <ButtonLink :bg-color="'purple'"> わせだサイくんの部屋 </ButtonLink>

        <ButtonLink :bg-color="'green'"> わせだサイくんの部屋 </ButtonLink>
      </div>
    </section>

    <div class="slide-link">
      <NuxtLink :to="'wasedasai.net'" class="link">
        <div class="row">
          <div>
            <div class="LinkText">
              slidelink
              <div class="lineArrow" />
            </div>
          </div>
        </div>
      </NuxtLink>
    </div>

    <section>
      <div>
        <h3>CircleLink</h3>

        <CircleLink class="circleLink" :color="'pink'"> 企画を探す </CircleLink>

        <CircleLink class="circleLink" :color="'yellow'" :to="'/'">
          タイムテーブル
        </CircleLink>

        <CircleLink class="circleLink" :color="'lightgreen'" :size="'small'">
          メインチャンネル・
          <br />
          運営スタッフチャンネル
        </CircleLink>

        <CircleLink class="circleLink" :color="'purple'">
          芸術展企画特設サイト
        </CircleLink>
      </div>
    </section>

    <section>
      <div>
        <h3>TicketLink</h3>

        <TicketLink />
      </div>
    </section>

    <extra> qjcwojdoj </extra>

    <slidelink :to="'wasedasai.net'" :bg-color="'blue'"> appear </slidelink>

    <section>
      <div>
        <img src="~assets/images/others/login-success-image.png" />

        <img src="~assets/images/others/ribbon.png" />
      </div>
    </section>

    <section>
      <CircleLink :to="'/'" :color="'green'" :isinternal="true" :size="'small'">
        aaaaa
      </CircleLink>
    </section>
  </Content>
</template>

<style scoped>
section {
  padding: 1rem 0;
}
</style>
