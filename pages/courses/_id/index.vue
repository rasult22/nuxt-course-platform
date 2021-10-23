<template>
  <div>
    <el-skeleton animated style="width: 240px">
        <template slot="template">
          <el-skeleton-item variant="image" style="width: 240px; height: 240px;" />
          <div style="padding: 14px;">
            <el-skeleton-item variant="p" style="width: 50%" />
              <div
                style="display: flex; align-items: center; justify-items: space-between;"
              >
              <el-skeleton-item variant="text" style="margin-right: 16px;" />
              <el-skeleton-item variant="text" style="width: 30%;" />
            </div>
          </div>
        </template>
      </el-skeleton>
      <div class="block">
        <span class="demonstration">Рейтинг курса</span>
        <el-rate v-model="value1"></el-rate>
      </div>
      <el-skeleton :rows="6" animated />
      <el-button type="primary" >Начать смотреть курс</el-button>
  </div>  
</template>

<script>
export default {
  data () {
    return {
      value1: 5
    }
  }
}
</script>

<style>

</style>