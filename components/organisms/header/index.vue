<script>
export default {
  props: {
    hasHeader: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      isHeaderOpen: false
    }
  }
}
</script>

<template>
  <header>
    <div class="head-bar">
      <div class="container1">
        <div class="head-icon">
          <nuxt-link to="/">
            <img src="../../../static/images/header/home.png" />
          </nuxt-link>
        </div>

        <div class="head-icon">
          <nuxt-link to="/search">
            <img src="../../../static/images/header/search.png" />
          </nuxt-link>
        </div>

        <div class="head-icon">
          <nuxt-link to="/timetable">
            <img src="../../../static/images/header/time.png" />
          </nuxt-link>
        </div>
      </div>

      <div class="container2">
        <div class="head-icon">
          <nuxt-link to="/">
            <img class="logo" src="../../../static/images/header/logo.png" />
          </nuxt-link>
        </div>
      </div>

      <div class="container3">
        <div class="head-icon">
          <nuxt-link to="/inshoku">
            <img src="../../../static/images/header/food.png" />
          </nuxt-link>
        </div>

        <div class="head-icon">
          <nuxt-link to="/welcome">
            <img src="../../../static/images/header/map.png" />
          </nuxt-link>
        </div>

        <div class="head-icon">
          <nuxt-link to="/goods">
            <img src="../../../static/images/header/saikun.png" />
          </nuxt-link>
        </div>

        <div class="head-icon">
          <nuxt-link to="/inquiry">
            <img src="../../../static/images/header/question.png" />
          </nuxt-link>
        </div>
      </div>
    </div>

    <div class="head-barsp">
      <div class="head-icon">
        <nuxt-link to="/">
          <img src="../../../static/images/header/home.png" />
        </nuxt-link>
      </div>

      <div class="head-icon">
        <nuxt-link to="/search">
          <img src="../../../static/images/header/search.png" />
        </nuxt-link>
      </div>

      <div class="head-icon">
        <nuxt-link to="/timetable">
          <img src="../../../static/images/header/time.png" />
        </nuxt-link>
      </div>

      <div class="head-icon">
        <nuxt-link to="/inshoku">
          <img src="../../../static/images/header/food.png" />
        </nuxt-link>
      </div>

      <div class="head-icon">
        <nuxt-link to="/welcome">
          <img src="../../../static/images/header/map.png" />
        </nuxt-link>
      </div>

      <div class="head-icon">
        <nuxt-link to="/goods">
          <img src="../../../static/images/header/saikun.png" />
        </nuxt-link>
      </div>

      <div class="head-icon">
        <nuxt-link to="/inquiry">
          <img src="../../../static/images/header/question.png" />
        </nuxt-link>
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  height: 50px;
}
.head-bar {
  background-color: #59c3e1;
  width: 100%;
  display: flex;
  height: 100%;
}

.head-icon {
  margin: 0 8px;
}

.container1 .head-icon {
  width: 33%;
  height: 90%;
}

.container2 .head-icon {
  width: 100%;
  height: 100%;
}

.container3 .head-icon {
  width: 25%;
  height: 90%;
}
.head-icon img {
  height: 100%;
  margin: 0 auto;
}

.container1 {
  width: 40%;
  display: flex;
  align-items: center;
}

.container2 {
  width: 20%;
  display: flex;
}

.logo {
  margin: 0 auto;
}

.container3 {
  width: 40%;
  display: flex;
  align-items: center;
}

.head-barsp {
  display: none;
}

@media screen and (max-width: 1200px) {
  header {
    height: 45px;
  }
  .head-bar {
    display: none;
  }

  .head-barsp {
    display: flex;
    background-color: #59c3e1;
    width: 100%;
    display: flex;
    height: 100%;
  }

  .head-barsp .head-icon {
    width: 12%;
  }
}

@media screen and (max-width: 500px) {
  header {
    height: 35px;
  }
  .head-bar {
    display: none;
  }

  .head-barsp {
    display: flex;
    background-color: #59c3e1;
    width: 100%;
    display: flex;
    height: 100%;
  }

  .head-barsp .head-icon {
    width: 12%;
  }
}
</style>
