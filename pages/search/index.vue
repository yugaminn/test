<script>
import axios from 'axios'
import '@/assets/css/search.css'

const apiUrl = 'https://wasedasai2023.microcms.io/api/v1'
// apiKeyは https://wasedasai2023.microcms.io/api-keys より取得し、文字列として渡して下さい
const apiKey = 'jxyV4RhlyAmQageP7E3SxnAcCDZZlwVj3eRD'

export default {
  layout: 'maintenance',
  data() {
    return {
      Base: process.env.IS_TEST_FRONTEND === 'true' ? '/test-frontend/' : '/',
      keyword: '',
      projects: [],
      isSearchStarted: false, // 検索を実行したかを判定
      isShowMapTab: false, // Mapタブを表示するかを判定
      isShowRefineButton: false, // 絞り込み検索ボタンを表示するかを判定
      loading: false,
      isShowFavoritesModal: false, // お気に入りモーダルを表示するかを判定
      favorites: [],
      projectDetails: {}, // 企画詳細表示
      selectedProject: {},
      refineButtons: [
        { id: 0, name: '場所', imageName: 'place' },
        { id: 1, name: '日時', imageName: 'time' },
        { id: 2, name: 'ジャンル', imageName: 'genre' },
        { id: 3, name: '#から探す', imageName: 'tag' }
      ],
      places: [
        { id: 0, name: '早稲田キャンパス' },
        { id: 1, name: '戸山キャンパス' },
        { id: 2, name: 'キャンパス構外' }
      ],
      selectedPlace1: [],
      selectedPlace2: [],
      selectedPlace3: [],
      date: [
        { id: 0, name: '11/4', week: '(SAT)' },
        { id: 1, name: '11/5', week: '(SUN)' }
      ],
      selectedDate: [],
      genres: [
        { id: 0, name: '全て', imageName: 'all' },
        { id: 1, name: 'ステージ企画', imageName: 'stage' },
        { id: 2, name: '飲食物販売企画', imageName: 'food' },
        { id: 3, name: '体験', imageName: 'experience' },
        { id: 4, name: 'パフォーマンス', imageName: 'performance' },
        { id: 5, name: 'ミュージック', imageName: 'music' },
        { id: 6, name: 'エンタメ', imageName: 'entertainment' },
        { id: 7, name: '展示・出版企画', imageName: 'exhibition' },
        { id: 8, name: '学び', imageName: 'learning' }
      ],
      selectedGenres: [],
      genreHover: {}, // ジャンルごとのホバー状態を管理
      tags: [
        { id: 0, name: '#演劇' },
        { id: 1, name: '#スポーツ' },
        { id: 2, name: '#パフォーマンス' },
        { id: 3, name: '#バンド' },
        { id: 4, name: '#吹奏楽・オーケストラ・弦楽器' },
        { id: 5, name: '#合唱・アカペラ' },
        { id: 6, name: '#和楽器' },
        { id: 7, name: '#鍵盤楽器' },
        { id: 8, name: '#トークショー' },
        { id: 9, name: '#芸能人' },
        { id: 10, name: '#お笑い' },
        { id: 11, name: '#クイズ' },
        { id: 12, name: '#アニメ・ゲーム・漫画' },
        { id: 13, name: '#バラエティ' },
        { id: 14, name: '#出版' },
        { id: 15, name: '#展示' },
        { id: 16, name: '#絵画・イラスト' },
        { id: 17, name: '#写真' },
        { id: 18, name: '#映画' },
        { id: 19, name: '#環境' },
        { id: 20, name: '#物販' },
        { id: 21, name: '#聞く' },
        { id: 22, name: '#見る' },
        { id: 23, name: '#受験生向け' },
        { id: 24, name: '#子供向け' }
      ],
      selectedTags: [],
      online: [
        { id: 0, name: '指定しない' },
        { id: 1, name: 'あり' },
        { id: 2, name: 'なし' }
      ],
      selectedOnline: null,
      ticket: [
        { id: 0, name: '指定しない', info: '指定しない（チケット）' },
        { id: 1, name: '不要', info: '不要' },
        { id: 2, name: '無料チケット・整理券', info: '無料チケット・整理券' },
        { id: 3, name: '有料チケット', info: '有料チケット' }
      ],
      selectedTicket: null
    }
  },
  head: {
    title: '企画検索',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: '企画の検索ができます。検索はこちらから。'
      },
      { hid: 'keyword', name: 'keyword', content: '企画' },
      { hid: 'og:type', property: 'og:type', content: 'article' },
      { hid: 'og:title', property: 'og:title', content: '企画検索' },
      {
        hid: 'og:description',
        property: 'og:description',
        content: '企画の検索ができます。検索はこちらから'
      },
      { hid: 'og:search', property: 'og:search', content: '/search' },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://wasedasai.net/images/logo.png'
      }
    ]
  },
  computed: {
    firstTickets() {
      return this.ticket.filter((t) => t.id === 0 || t.id === 1)
    },
    secondTickets() {
      return this.ticket.filter((t) => t.id === 2 || t.id === 3)
    }
  },
  methods: {
    // キーワード検索
    async search() {
      if (this.keyword) {
        this.isSearchStarted = true
        this.loading = true
        await axios
          .get(apiUrl + '/projects', {
            headers: {
              'X-API-KEY': apiKey
            },
            params: {
              filters: `((name[contains]${this.keyword})[or](group_name[contains]${this.keyword})[or](description[contains]${this.keyword})[or](introduce[contains]${this.keyword})[or](search_words[contains]${this.keyword}))`,
              orders: 'createdAt',
              limit: 500
            }
          })
          .then((response) => {
            this.projects = response.data.contents
            this.isShowRefineButton = false
            this.loading = false
          })
          .catch(() => {
            this.projects = []
            this.isSearchStarted = false
            this.loading = false
          })
      } else {
        this.projects = []
        this.isSearchStarted = false
        this.loading = false
      }
    },
    // 「全て表示する」ボタンで、企画データを全件取得する
    async showAllProjects() {
      this.loading = true
      this.isSearchStarted = true
      await axios
        .get(apiUrl + '/projects', {
          headers: {
            'X-API-KEY': apiKey
          },
          params: {
            orders: 'createdAt',
            limit: 500
          }
        })
        .then((response) => {
          this.projects = response.data.contents
          this.keyword = '' // キーワードはクリア
          this.isShowRefineButton = false
          this.loading = false
          this.projectDetails = {}
          document.body.style.overflow = 'auto'
        })
        .catch(() => {
          this.projects = []
          this.isSearchStarted = false
          this.loading = false
        })
    },
    // Mapタブを表示する
    showMapTab() {
      this.isSearchStarted = false
      this.keyword = ''
      this.isShowMapTab = true
      this.isShowRefineButton = false
      document.body.style.overflow = 'auto'
    },
    // 絞り込み検索タブを表示する
    showRefineTab() {
      this.projects = []
      this.isSearchStarted = false
      this.keyword = ''
      this.isShowMapTab = false
      this.isShowRefineButton = false
      this.selectedPlace1 = []
      this.selectedPlace2 = []
      this.selectedPlace3 = []
      this.selectedTags = []
      this.selectedGenres = []
      this.selectedDate = []
      this.selectedOnline = null
      this.selectedTicket = null
      this.projectDetails = {}
      document.body.style.overflow = 'auto'
    },
    // 選択された場所の状態を判定する
    isPlaceSelected1(placeName) {
      return this.selectedPlace1.includes(placeName)
    },
    isPlaceSelected2(placeName) {
      return this.selectedPlace2.includes(placeName)
    },
    isPlaceSelected3(placeName) {
      return this.selectedPlace3.includes(placeName)
    },
    // 選択されたタグの状態を判定する
    isTagSelected(tagName) {
      return this.selectedTags.includes(tagName)
    },
    // 選択された日時の状態を判定する
    isDateSelected(dateName) {
      return this.selectedDate.includes(dateName)
    },
    // 選択されたジャンルの状態を判定する
    isGenreSelected(genreName) {
      return this.selectedGenres.includes(genreName)
    },
    // 絞り込み検索
    async refineSearch(params) {
      // 場所のクリック状態を切り替える
      if (params === '早稲田キャンパス') {
        const index1 = this.selectedPlace1.indexOf(params)
        if (index1 !== -1) {
          this.selectedPlace1.splice(index1, 1)
        } else {
          this.selectedPlace1.push(params)
        }
      }
      if (params === '戸山キャンパス') {
        const index2 = this.selectedPlace2.indexOf(params)
        if (index2 !== -1) {
          this.selectedPlace2.splice(index2, 1)
        } else {
          this.selectedPlace2.push(params)
        }
      }
      if (params === 'キャンパス構外') {
        const index3 = this.selectedPlace3.indexOf(params)
        if (index3 !== -1) {
          this.selectedPlace3.splice(index3, 1)
        } else {
          this.selectedPlace3.push(params)
        }
      }

      // 日時のクリック状態を切り替える
      if (this.date.some((d) => d.name === params)) {
        const index = this.selectedDate.indexOf(params)
        if (index !== -1) {
          this.selectedDate.splice(index, 1)
        } else {
          this.selectedDate.push(params)
        }
      }

      // ジャンルの"全て"がクリックされた場合
      if (params === '全て') {
        if (this.selectedGenres.length === this.genres.length) {
          // すべてのジャンルが選択されている場合、すべてのジャンルを選択解除
          this.selectedGenres = []
        } else {
          // すべてのジャンルを選択
          this.selectedGenres = this.genres.map((genre) => genre.name)
        }
      } else if (this.genres.some((genre) => genre.name === params)) {
        // 通常の個別にジャンルを選択
        const index = this.selectedGenres.indexOf(params)
        if (index !== -1) {
          this.selectedGenres.splice(index, 1)
        } else {
          this.selectedGenres.push(params)
        }
      }

      // タグのクリック状態を切り替える
      if (this.tags.some((tag) => tag.name === params)) {
        const index = this.selectedTags.indexOf(params)
        if (index !== -1) {
          this.selectedTags.splice(index, 1)
        } else {
          this.selectedTags.push(params)
        }
      }

      // オンライン配信のチェック状態を切り替える
      if (this.online.some((o) => o.name === params)) {
        if (this.selectedOnline === params) {
          this.selectedOnline = null
        } else {
          this.selectedOnline = params
        }
      }

      // チケットのチェック状態を切り替える
      if (this.ticket.some((t) => t.info === params)) {
        if (this.selectedTicket === params) {
          this.selectedTicket = null
        } else {
          this.selectedTicket = params
        }
      }

      const filters = []
      if (this.selectedPlace1.length > 0) {
        const place1Filters = this.selectedPlace1.map(
          (place) =>
            `campus_114[contains]${place}[or]campus_115[contains]${place}`
        )
        filters.push(`(${place1Filters.join('[and]')})`)
      }
      if (this.selectedPlace2.length > 0) {
        const place2Filters = this.selectedPlace2.map(
          (place) =>
            `campus_114[contains]${place}[or]campus_115[contains]${place}`
        )
        filters.push(`(${place2Filters.join('[and]')})`)
      }
      if (this.selectedPlace3.length > 0) {
        const place3Filters = this.selectedPlace3.map(
          (place) =>
            `campus_114[contains]${place}[or]campus_115[contains]${place}`
        )
        filters.push(`(${place3Filters.join('[and]')})`)
      }
      if (this.selectedDate.length > 0) {
        const dateFilters = this.selectedDate.map(
          (date) => `date[contains]${date}`
        )
        filters.push(`(${dateFilters.join('[and]')})`)
      }
      if (this.selectedGenres.length > 0) {
        const genreFilters = this.selectedGenres.map(
          (place) => `genres[contains]${place}`
        )
        filters.push(`(${genreFilters.join('[and]')})`)
      }
      if (this.selectedTags.length > 0) {
        const tagFilters = this.selectedTags.map(
          (tag) => `tags[contains]${tag}`
        )
        filters.push(`(${tagFilters.join('[and]')})`)
      }
      if (this.selectedOnline) {
        const onlineFilters = [`online[contains]${this.selectedOnline}`]
        filters.push(`(${onlineFilters.join('[and]')})`)
      }
      if (this.selectedTicket) {
        const ticketFilters = [`ticket[contains]${this.selectedTicket}`]
        filters.push(`(${ticketFilters.join('[and]')})`)
      }

      if (filters.length > 0) {
        this.isShowRefineButton = true
        await axios
          .get(apiUrl + '/projects', {
            headers: {
              'X-API-KEY': apiKey
            },
            params: {
              filters: filters.join('[and]'),
              orders: 'createdAt',
              limit: 500
            }
          })
          .then((response) => {
            this.projects = response.data.contents
          })
          .catch(() => {
            this.projects = []
          })
      } else {
        this.isShowRefineButton = false
        this.projects = []
      }
    },
    // 絞り込み検索の結果を表示
    showResultRefineSearch() {
      this.isSearchStarted = true
      this.isShowRefineButton = false
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 500)
    },
    // ジャンル画像ホバーで入れ替え
    getGenreImage(genre) {
      return this.genreHover[genre.name]
        ? require(`@/assets/images/search/genres-${genre.imageName}-hover.svg`)
        : require(`@/assets/images/search/genres-${genre.imageName}.svg`)
    },
    handleMouseOver(genre) {
      this.$set(this.genreHover, genre.name, true)
    },
    handleMouseOut(genre) {
      this.$set(this.genreHover, genre.name, false)
    },
    // 企画詳細の開閉
    openDetail(project) {
      if (project) {
        this.selectedProject = project
        this.$set(this.projectDetails, project.id, true)
        document.body.style.overflow = 'hidden'
      }
    },
    closeDetail(project) {
      if (this.selectedProject) {
        this.selectedProject = {}
        this.$set(this.projectDetails, project.id, false)
        document.body.style.overflow = 'auto'
      }
    },
    // お気に入り追加/削除
    toggleFavorite(selectedProject) {
      let favorites = JSON.parse(localStorage.getItem('favorites')) || []
      const isCurrentlyFavorite = this.isFavorite(selectedProject)

      if (isCurrentlyFavorite) {
        // すでにお気に入りの場合、削除
        favorites = favorites.filter(
          (favorite) => favorite.id !== selectedProject.id
        )
      } else {
        favorites.push(selectedProject)
      }
      localStorage.setItem('favorites', JSON.stringify(favorites))
      this.$forceUpdate()
    },
    // 選択したプロジェクトがお気に入りリストに存在するかどうかを判定
    isFavorite(project) {
      // ローカルストレージからお気に入りリストを取得
      const favorites = JSON.parse(localStorage.getItem('favorites')) || []
      return favorites.some((favorite) => favorite.id === project.id)
    },
    // お気に入りボタン表示
    favoriteButtonText(selectedProject) {
      return this.isFavorite(selectedProject)
        ? 'お気に入り登録済み'
        : 'お気に入りに登録する'
    },
    // お気に入り一覧モーダルオープン
    openFavoritesModal() {
      this.favorites = JSON.parse(localStorage.getItem('favorites')) || []
      this.isShowFavoritesModal = true
    },
    // モーダル閉じる
    closeFavoritesModal() {
      this.isShowFavoritesModal = false
    },
    // お気に入りをローカルストレージから削除
    removeFavorite(favoriteProject) {
      this.favorites = this.favorites.filter(
        (project) => project.id !== favoriteProject.id
      )
      localStorage.setItem('favorites', JSON.stringify(this.favorites))
    },
    // お気に入り一覧からプロジェクト詳細をオープン
    openFavoriteProjectDeailes(favoriteProject) {
      this.isShowFavoritesModal = false
      this.selectedProject = favoriteProject
      this.$set(this.projectDetails, favoriteProject.id, true)
    }
  }
}
</script>

<template>
  <div class="search_wrapper">
    <h2 class="search_title">企画検索</h2>
    <p align="center" style="color: white">
      早稲田祭2023で行われる約450個の企画を検索し<br />
      その詳しい情報を知ることができます！<br />
      きっとあなたにピッタリの企画が見つかるはず！
    </p>
    <div v-show="!isShowMapTab">
      <div class="keyword_search_wrapper">
        <img src="~assets/images/search/search.svg" alt="search" />
        <input
          v-model="keyword"
          type="text"
          class="keyword_search"
          placeholder="お好きな言葉をご入力ください"
          @input="search" />
      </div>
      <p
        align="center"
        style="color: white; font-size: 12px; margin-bottom: 25px">
        ※一部企画において、情報の変更がある場合や掲載がない場合がございます。
      </p>
    </div>

    <Content class="search_content">
      <div style="display: flex; justify-content: space-between">
        <h3 class="search_sub_title">区分・条件で絞り込む</h3>
        <button class="all_search_button" @click="showAllProjects">
          全て表示する
        </button>
      </div>

      <!-- タブ切り替え -->
      <div class="tabs_wrapper">
        <div style="cursor: pointer" @click="showMapTab">
          <div
            class="refine_img_wrapper"
            :class="{ button_bottom_border: isShowMapTab }">
            <img
              src="~assets/images/search/map.svg"
              alt="map search"
              style="margin: 0 auto" />
          </div>
          <p class="tab_button_name">マップから探す</p>
        </div>
        <div class="refine_tabs_wrapper" @click="showRefineTab">
          <div v-for="button in refineButtons" :key="button.id">
            <div
              class="refine_img_wrapper refine_side_button"
              :class="{
                button_bottom_border: isShowMapTab === false,
                blue_border: button.id === 0,
                green_border: button.id === 1,
                yellow_border: button.id === 2
              }">
              <img
                :src="require(`@/assets/images/search/${button.imageName}.svg`)"
                :alt="button.name"
                style="margin: 0 auto" />
            </div>
            <p class="tab_button_name">{{ button.name }}</p>
          </div>
        </div>
      </div>

      <!-- キャンパスマップAPI -->
      <div v-if="isShowMapTab && isSearchStarted === false">
        <iframe
          src="https://platinumaps.jp/maps/wasedasai"
          allow="geolocation"
          style="
            border: 0;
            background-color: #fafafa;
            width: 100%;
            height: 610px;
          "
          loading="lazy" />
        <a
          href="https://platinumaps.jp/maps/wasedasai"
          target="_blank"
          class="link_campus_map">
          <img src="@/assets/images/search/place.svg" alt="campus map" />
          <div style="margin: 0 10px">大きいキャンパスマップで探す</div>
          <img src="@/assets/images/search/angle-right.svg" alt="angle right" />
        </a>
      </div>
      <!-- 絞り込み検索 -->
      <div v-else-if="isSearchStarted === false">
        <div v-show="isShowRefineButton" class="refine_button_wrapper">
          <div style="display: flex; justify-content: end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="refine_close_button close_details_button"
              viewBox="0 0 24 24"
              @click="showRefineTab">
              <circle cx="12" cy="12" r="10" fill="#ddd" />
              <line
                x1="8"
                y1="8"
                x2="16"
                y2="16"
                stroke="#111"
                stroke-width="1" />
              <line
                x1="8"
                y1="16"
                x2="16"
                y2="8"
                stroke="#111"
                stroke-width="1" />
            </svg>
          </div>
          <p>
            <b style="color: #cc3399">{{ projects.length }}</b
            >件ヒットしています
          </p>
          <button
            class="refine_button favorites_button"
            @click="showResultRefineSearch">
            この条件で検索する
          </button>
        </div>
        <div>
          <h3 class="search_sub_title">場所を選択する</h3>
          <ul class="places_wrapper">
            <li>
              <button
                :class="{
                  selected_button: isPlaceSelected1('早稲田キャンパス')
                }"
                class="place_tag"
                @click="refineSearch('早稲田キャンパス')">
                早稲田キャンパス
              </button>
            </li>
            <li>
              <button
                :class="{ selected_button: isPlaceSelected2('戸山キャンパス') }"
                class="place_tag"
                @click="refineSearch('戸山キャンパス')">
                戸山キャンパス
              </button>
            </li>
            <li>
              <button
                :class="{ selected_button: isPlaceSelected3('キャンパス構外') }"
                class="place_tag"
                @click="refineSearch('キャンパス構外')">
                キャンパス構外
              </button>
            </li>
          </ul>
        </div>
        <div style="display: flex; align-items: center; padding-top: 15px">
          <h3 class="search_sub_title">日時を選択する</h3>
          <div style="display: flex">
            <div
              v-for="d in date"
              :key="d.id"
              class="genre_items date_style"
              :class="{
                selected_border: isDateSelected(d.name),
                first_date: d.id === 0
              }"
              @click="refineSearch(d.name)">
              {{ d.name }}
              <span class="date_week" :class="{ first_week: d.id === 0 }">{{
                d.week
              }}</span>
            </div>
          </div>
        </div>
        <div style="padding-top: 15px">
          <h3 class="search_sub_title">ジャンルを選択する</h3>
          <div class="genres_wrapper">
            <div
              v-for="genre in genres"
              :key="genre.id"
              class="genre_items"
              :class="{ selected_border: isGenreSelected(genre.name) }"
              @click="refineSearch(genre.name)">
              <div class="genre_img_wrapper">
                <img
                  :src="getGenreImage(genre)"
                  :alt="genre.name"
                  style="margin: 0 auto"
                  @mouseover="handleMouseOver(genre)"
                  @mouseout="handleMouseOut(genre)" />
              </div>
              <p align="center" style="font-size: 12px">{{ genre.name }}</p>
            </div>
          </div>
        </div>
        <div style="padding-top: 15px">
          <h3 class="search_sub_title">#から探す</h3>
          <ul style="display: flex; flex-wrap: wrap">
            <li v-for="tag in tags" :key="tag.id">
              <button
                :class="{ selected_button: isTagSelected(tag.name) }"
                class="tag search_tag"
                @click="refineSearch(tag.name)">
                {{ tag.name }}
              </button>
            </li>
          </ul>
        </div>
        <div style="padding-top: 15px">
          <h3 class="search_sub_title" style="padding-bottom: 10px">
            条件で絞り込む
          </h3>
          <div
            style="
              display: flex;
              align-items: center;
              margin-bottom: 5px;
              font-size: 12px;
            ">
            <div style="margin-right: 20px">オンライン配信</div>
            <div
              v-for="o in online"
              :key="o.id"
              style="display: flex; align-items: center">
              <label :for="'online_' + o.id"> {{ o.name }}</label>
              <input
                :id="'online_' + o.id"
                type="checkbox"
                class="search_checkbox"
                :checked="o.name === selectedOnline"
                @click="refineSearch(o.name)" />
            </div>
          </div>
          <div style="display: flex; font-size: 12px">
            <div style="margin-right: 20px">チケットの有無</div>
            <div>
              <div style="display: flex; align-items: center">
                <div
                  v-for="t in firstTickets"
                  :key="t.id"
                  style="display: flex; align-items: center">
                  <label :for="'ticket_' + t.id"> {{ t.name }}</label>
                  <input
                    :id="'ticket_' + t.id"
                    type="checkbox"
                    class="search_checkbox"
                    :checked="t.info === selectedTicket"
                    @click="refineSearch(t.info)" />
                </div>
              </div>
              <div style="display: flex; align-items: center">
                <div
                  v-for="t in secondTickets"
                  :key="t.id"
                  style="display: flex; align-items: center">
                  <label :for="'ticket_' + t.id"> {{ t.name }}</label>
                  <input
                    :id="'ticket_' + t.id"
                    type="checkbox"
                    class="search_checkbox"
                    :checked="t.info === selectedTicket"
                    @click="refineSearch(t.info)" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Content>
    <!-- 検索結果 -->
    <div v-if="isSearchStarted" class="result_search_wrapper">
      <div v-if="loading">
        <div class="simple_loader">Loading...</div>
      </div>
      <div v-else-if="projects.length === 0">
        <p align="center" style="margin: 50px auto">
          お探しの企画はありませんでした。
        </p>
      </div>
      <div v-else>
        <div
          style="
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10px 30px;
          ">
          <h3 class="search_sub_title" style="padding: 0">
            {{ projects.length }}{{ ' ' }}件
          </h3>
          <button class="favorites_button" @click="openFavoritesModal">
            お気に入り企画を見る
          </button>
          <!-- お気に入り一覧モーダル -->
          <div
            v-if="isShowFavoritesModal"
            class="modal-overlay"
            @click="closeFavoritesModal">
            <div class="modal-dialog" @click.stop>
              <div style="display: flex; justify-content: end">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="close_details_button"
                  viewBox="0 0 24 24"
                  @click="closeFavoritesModal">
                  <circle cx="12" cy="12" r="10" fill="#ddd" />
                  <line
                    x1="8"
                    y1="8"
                    x2="16"
                    y2="16"
                    stroke="#111"
                    stroke-width="1" />
                  <line
                    x1="8"
                    y1="16"
                    x2="16"
                    y2="8"
                    stroke="#111"
                    stroke-width="1" />
                </svg>
              </div>
              <div>
                <h3 align="center" class="search_sub_title">
                  お気に入り企画一覧
                </h3>
                <div v-if="favorites.length > 0">
                  <ul>
                    <li
                      v-for="favoriteProject in favorites"
                      :key="favoriteProject.id"
                      style="border-bottom: 1px solid #f1f1f1; padding: 5px 0">
                      <div style="display: flex; align-items: center">
                        <div
                          style="
                            display: flex;
                            align-items: center;
                            cursor: pointer;
                          "
                          @click="openFavoriteProjectDeailes(favoriteProject)">
                          <div class="each_icon" style="margin-right: 5px">
                            <img
                              v-if="
                                favoriteProject.logo && favoriteProject.logo.url
                              "
                              :src="favoriteProject.logo.url"
                              :alt="favoriteProject.name"
                              class="each_icon" />
                            <div v-else>
                              <div class="no_image">{{/* */}}</div>
                            </div>
                          </div>
                          <div>
                            <b
                              class="result_each_title"
                              style="font-size: 14px">
                              {{ favoriteProject.name }}
                            </b>
                            <div style="display: flex; align-items: center">
                              <svg
                                width="9"
                                height="11"
                                viewBox="0 0 9 11"
                                style="margin-right: 3px"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M9 5.5L0.75 10.2631V0.73686L9 5.5Z"
                                  fill="#5DD1A7" />
                              </svg>
                              <p style="font-size: 12px">
                                {{ favoriteProject.group_name }}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div style="margin-left: auto">
                          <button
                            style="
                              padding: 0 5px;
                              font-size: 12px;
                              margin-left: 5px;
                            "
                            class="favorites_button"
                            @click="removeFavorite(favoriteProject)">
                            削除
                          </button>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div v-else>
                  <p align="center">お気に入りはありません。</p>
                </div>
              </div>
            </div>
          </div>
          <!--isShowFavoritesModal-->
        </div>
        <ul>
          <li
            v-for="(project, index) in projects"
            :key="project.id"
            class="result_each_item_wrapper"
            :class="{ __first: index === 0 }"
            @click="openDetail(project)">
            <div class="each_icon">
              <img
                v-if="project.logo && project.logo.url"
                :src="project.logo.url"
                :alt="project.name"
                class="each_icon" />
              <div v-else>
                <div class="no_image">{{/* */}}</div>
              </div>
            </div>
            <div>
              <div style="display: flex; align-items: center; flex-wrap: wrap">
                <h4 class="result_each_title" style="font-size: 12px">
                  {{ project.name }}
                </h4>
                <div style="display: flex; flex-wrap: wrap">
                  <div
                    v-if="project.date && project.date.length > 0"
                    style="margin-left: 10px; font-size: 10px">
                    {{ project.date.join('・') }}
                  </div>
                </div>
                <div style="margin-left: auto">
                  <div style="display: flex; flex-wrap: wrap">
                    <div
                      v-for="tag in project.tags"
                      :key="tag"
                      class="tag"
                      style="margin-bottom: 0; font-size: 10px">
                      {{ tag }}
                    </div>
                  </div>
                </div>
              </div>
              <div style="display: flex; align-items: center">
                <svg
                  width="9"
                  height="11"
                  viewBox="0 0 9 11"
                  style="margin-right: 3px"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 5.5L0.75 10.2631V0.73686L9 5.5Z" fill="#5DD1A7" />
                </svg>
                <b style="font-size: 9px">{{ project.group_name }}</b>
              </div>
              <p class="line-clamp-2">{{ project.description }}</p>
            </div>
          </li>
          <!-- 開閉する企画詳細 -->
          <div
            class="detail-container"
            :class="{ open: projectDetails[selectedProject.id] }">
            <div v-if="selectedProject">
              <div
                style="
                  display: flex;
                  justify-content: end;
                  margin-right: 10px;
                  margin-bottom: 10px;
                ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="close_details_button"
                  viewBox="0 0 24 24"
                  @click="closeDetail(selectedProject)">
                  <circle cx="12" cy="12" r="10" fill="#ddd" />
                  <line
                    x1="8"
                    y1="8"
                    x2="16"
                    y2="16"
                    stroke="#111"
                    stroke-width="1" />
                  <line
                    x1="8"
                    y1="16"
                    x2="16"
                    y2="8"
                    stroke="#111"
                    stroke-width="1" />
                </svg>
              </div>
              <div>
                <img
                  v-if="
                    selectedProject.thumbnails &&
                    selectedProject.thumbnails.length > 0
                  "
                  :src="selectedProject.thumbnails[0].url"
                  :alt="selectedProject.name"
                  class="" />
              </div>
              <div class="selected_each_container">
                <div style="display: flex; justify-content: end">
                  <button
                    class="favorites_button"
                    :class="{ favorite: isFavorite(selectedProject) }"
                    @click="toggleFavorite(selectedProject)">
                    {{ favoriteButtonText(selectedProject) }}
                  </button>
                </div>
                <div
                  style="
                    display: flex;
                    align-items: center;
                    margin-bottom: 10px;
                  ">
                  <div class="each_icon" style="width: 82px; height: 82px">
                    <img
                      v-if="selectedProject.logo && selectedProject.logo.url"
                      :src="selectedProject.logo.url"
                      :alt="selectedProject.name"
                      class="each_icon" />
                    <div v-else>
                      <div class="no_image">{{/* */}}</div>
                    </div>
                  </div>
                  <div>
                    <h3 class="result_each_title selected_each_title">
                      {{ selectedProject.name }}
                    </h3>
                    <div style="display: flex; align-items: center">
                      <svg
                        width="9"
                        height="11"
                        viewBox="0 0 9 11"
                        style="margin-right: 3px"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M9 5.5L0.75 10.2631V0.73686L9 5.5Z"
                          fill="#5DD1A7" />
                      </svg>
                      <p style="font-size: 15px">
                        {{ selectedProject.group_name }}
                      </p>
                    </div>
                  </div>
                </div>
                <div style="margin-bottom: 5px">
                  【開催日】
                  <span
                    v-if="
                      selectedProject.date && selectedProject.date.length > 0
                    ">
                    {{ selectedProject.date.join('・') }}
                  </span>
                </div>
                <div>
                  【企画紹介文】
                  <p>{{ selectedProject.description }}</p>
                </div>
              </div>
              <div class="selected_each_container">
                【参加団体・参加者紹介文】
                <p>{{ selectedProject.introduce }}</p>
              </div>
              <div class="selected_each_container">
                【開催概要】
                <div style="display: flex; flex-direction: row">
                  <div style="flex: 1; max-width: 150px; padding: 5px">
                    実施日
                  </div>
                  <div style="width: 150px; padding: 5px">
                    <div v-if="selectedProject.date">
                      {{ selectedProject.date[0] }}
                    </div>
                  </div>
                  <div style="padding: 5px">
                    <div v-if="selectedProject.date">
                      {{ selectedProject.date[1] }}
                    </div>
                  </div>
                </div>
                <div style="display: flex; flex-direction: row">
                  <div style="flex: 1; max-width: 150px; padding: 5px">
                    キャンパス
                  </div>
                  <div
                    v-for="campus_114 in selectedProject.campus_114"
                    :key="campus_114"
                    style="width: 150px; padding: 5px">
                    {{ campus_114 }}
                  </div>
                  <div
                    v-for="campus_115 in selectedProject.campus_115"
                    :key="campus_115"
                    style="padding: 5px">
                    {{ campus_115 }}
                  </div>
                </div>
                <div style="display: flex; flex-direction: row">
                  <div style="flex: 1; max-width: 150px; padding: 5px">
                    場所
                  </div>
                  <div style="width: 150px; padding: 5px">
                    {{ selectedProject.place_114 }}
                  </div>
                  <div style="padding: 5px">
                    {{ selectedProject.place_115 }}
                  </div>
                </div>
                <div style="display: flex; flex-direction: row">
                  <div style="flex: 1; max-width: 150px; padding: 5px">
                    階数
                  </div>
                  <div style="width: 150px; padding: 5px">
                    {{ selectedProject.floor_114 }}
                  </div>
                  <div style="padding: 5px">
                    {{ selectedProject.floor_115 }}
                  </div>
                </div>
                <div style="display: flex; flex-direction: row">
                  <div style="flex: 1; max-width: 150px; padding: 5px">
                    時間
                  </div>
                  <div style="width: 150px; padding: 5px">
                    {{ selectedProject.time_114 }}
                  </div>
                  <div style="padding: 5px">
                    {{ selectedProject.time_115 }}
                  </div>
                </div>
                <div
                  v-if="selectedProject.group_link"
                  style="display: flex; flex-direction: row">
                  <div style="flex: 1; max-width: 150px; padding: 5px">
                    参加団体サイト
                  </div>
                  <div style="padding: 5px">
                    <a
                      :href="selectedProject.group_link"
                      target="_blank"
                      class="link_style"
                      >リンクはこちら</a
                    >
                  </div>
                </div>
              </div>
              <div class="selected_each_container">
                【チケット詳細】
                <div style="display: flex; flex-direction: row">
                  <div style="flex: 1; max-width: 150px; padding: 5px">
                    種類
                  </div>
                  <div
                    v-for="ticket_name in selectedProject.ticket"
                    :key="ticket_name"
                    style="padding: 5px">
                    {{ ticket_name }}
                  </div>
                </div>
                <div
                  v-if="selectedProject.ticket_link"
                  style="display: flex; flex-direction: row">
                  <div style="flex: 1; max-width: 150px; padding: 5px">
                    <a
                      :href="selectedProject.ticket_link"
                      target="_blank"
                      class="link_style"
                      >お申込みはこちら</a
                    >
                  </div>
                </div>
              </div>
              <div
                class="selected_each_container"
                style="display: flex; flex-wrap: wrap">
                <div v-for="tag in selectedProject.tags" :key="tag" class="tag">
                  {{ tag }}
                </div>
              </div>
              <div class="selected_each_container">
                <div style="margin-bottom: 5px">【SNS】</div>
                <div
                  style="
                    display: flex;
                    justify-content: space-around;
                    max-width: 400px;
                  ">
                  <div v-if="selectedProject.instagram_url">
                    <a :href="selectedProject.instagram_url" target="_blank">
                      <img
                        src="@/assets/images/search/instagram.png"
                        alt="instagram"
                        width="32px" />
                    </a>
                  </div>
                  <div v-if="selectedProject.x_url">
                    <a :href="selectedProject.x_url" target="_blank">
                      <img src="@/assets/images/search/x.svg" alt="x" />
                    </a>
                  </div>
                  <div v-if="selectedProject.youtube_url">
                    <a :href="selectedProject.youtube_url" target="_blank">
                      <img
                        src="@/assets/images/search/youtube.svg"
                        alt="youtube"
                    /></a>
                  </div>
                  <div v-if="selectedProject.tiktok_url">
                    <a :href="selectedProject.tiktok_url" target="_blank">
                      <img src="@/assets/images/search/tiktok.svg" alt="tiktok"
                    /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ul>
      </div>
    </div>
    <!-- v-if="isSearchStarted" -->
  </div>
</template>
