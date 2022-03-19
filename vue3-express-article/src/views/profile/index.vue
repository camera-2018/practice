<template>
  <div class="con">
    <el-space direction="vertical" alignment="flex-start">
      <el-skeleton style="width: 240px" :loading="(!isLogin)" animated>
        <template #template>
          <el-skeleton-item variant="image" style="width: 240px; height: 240px" />
          <el-link type="danger" disabled>未登录</el-link>
          <div style="padding: 14px">
            <el-skeleton-item variant="h3" style="width: 50%" />
            <div
              style="
              display: flex;
              align-items: center;
              justify-items: space-between;
              margin-top: 16px;
              height: 16px;
            "
            >
              <el-skeleton-item variant="text" />
              <el-skeleton-item variant="text" />
            </div>
          </div>
        </template>
        <template #default>
          <el-card :body-style="{ padding: '0px', marginBottom: '1px' }">
            <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"/>
            <div style="padding: 14px">
              <span>欢迎回来</span>
              <div class="bottom card-header"></div>
            </div>
          </el-card>
        </template>
      </el-skeleton>
    </el-space>
    <div>
      登录
      <el-switch v-model="isLogin" />
    </div>
  </div>
</template>



<script setup>
import { useMainStore } from '../../store'
import { storeToRefs } from 'pinia'
const { isLogin } = storeToRefs(useMainStore())
</script>


<style scoped>
.con {
  width: 340px;
  transform: translate(0, 50%);
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
}
</style>