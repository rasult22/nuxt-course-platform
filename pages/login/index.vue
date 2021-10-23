<template>
    <el-row>
      <el-col :span="12">
        <h1>Авторизация</h1>
        <el-form :model="form">
          <el-row :gutter="5">
            <el-col :span="15">
              <el-form-item label="Логин или email:">
                <el-input v-model="form.identifier"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="5">
            <el-col :span="15">
              <el-form-item label="Пароль:">
                <el-input type="password" aria-autocomplete="off" v-model="form.password"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-button @click="login" type="primary">Войти</el-button>
          </el-row>
        </el-form>
      </el-col>
      <el-col :span="12">
        ok
      </el-col>
    </el-row>
</template>

<script>
export default {
  data () {
    return {
      form: {
        identifier: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      this.$store.dispatch('login', {
        ...this.form
      }).then(()=> {
        alert('Authorization success')
        this.$router.push('/')
      })
    }
  }
}
</script>

<style>

</style>