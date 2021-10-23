<template>
  <el-header>
  <div class="header">
    <div class="header__nav">
      <el-menu default-active="1" mode="horizontal">
        <li class="header__logo el-menu-item">
          <i class="el-icon-medal-1" style="font-size: 35px"></i>
          <span>
            English Courses
          </span>
        </li>
        <el-menu-item :to="link.link" v-for="(link, index) in links" :index="`${index}`" :key="index">
          <nuxt-link class="header__nav-link" :to="link.link">{{link.text}}</nuxt-link> 
          <el-avatar class="header__nav-link-avatar" v-if="link.link === '/profile'" size="large" src="https://ru.quranacademy.org/users/avatars/10001-20000/10948-Moggq-50x50.jpg"></el-avatar>
        </el-menu-item>
      </el-menu>
    </div>
  </div>
  </el-header>
</template>

<script>
export default {
  data () {
    return {
      links: [
        {
          text: 'About us',
          link: '/about'
        },
        {
          text: 'Courses',
          link: '/courses'
        },
        {
          text: 'My Profile',
          link: '/profile'
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.el-menu {
  display: flex;
  justify-content: space-between;
}
.header {
  padding: 10px 0;
  display: flex;
  // grid-template-columns: 1fr minmax(300px, 330px);
  justify-content: space-between;
  align-items: center;
  // border-bottom: 1px solid $blue;
  &__nav {
    width: 100%;
    &-link {
      text-decoration: none;
      color: $blue;
      &-avatar {
        margin-left: 10px;
      }
    }
  }
  &__logo {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding: 0px 15px;
    word-break: break-all;
    margin-right: auto;
    color: $blue;
    span {
      max-width: 10px;
      word-break: break-all;
    }
    i {
      margin-right: 15px;
      color: $blue;
    }
  }
}
</style>