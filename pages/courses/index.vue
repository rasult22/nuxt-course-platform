<template>
  <div>
    <h1>
      Список курсов
    </h1>
    <div class="courses__list">
      <el-skeleton class="courses__list-item" v-for="(num) in 8" :key="num" animated style="width: 240px">
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
    </div>
    <el-pagination
      class="courses__pagination"
      background
      layout="prev, pager, next"
      :total="1000">
    </el-pagination>
  </div>  
</template>

<script>
export default {

}
</script>

<style lang="scss">
.courses {
  &__list {
    display: grid;
    grid-template-rows: repeat(1fr);
    // flex-wrap: wrap;
    justify-content: space-between;
    &-item {
      margin-top: 20px;
      margin-left: 5px;
    }
  }
  &__pagination {
    margin-top: 30px;
  }
}
</style>