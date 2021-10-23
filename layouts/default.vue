<template>
  <div class="layout-default"> 
    <Header />
    <div class="layout-content">
      <el-main>
        <Nuxt />
      </el-main>
    </div>
    <!-- <BottomBar />  -->
    <el-footer>
      footer
    </el-footer>
  </div>  
</template>

<script>
export default {
  name: 'default',
  head: {
    title: 'Home page',
    meta: [
      { name: 'viewport', content: 'width=device-width, user-scalable=no' },
    ],
  },
  data() {
    return {
    }
  },
  computed: {
    isAuthenticated () {
      return this.$store.getters['isAuthenticated']
    }
  }
}
</script>

<style lang="scss">
  .layout-default {
    // font-family: $font-family;
    max-width: 1260px;
    margin: 0 auto;
  }
  .layout-content {
    margin-top: 55px;
    margin-bottom: 55px;
    margin-left: auto;
    // padding: 10px 5px;
  }
</style>