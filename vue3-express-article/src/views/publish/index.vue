<template>
  <div class="mt-200px w-500px">
    <el-form :model="form" label-width="120px">
      <el-form-item label="文章标题">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Create</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { ElMessage } from 'element-plus'
import { ApiPost } from '../../utils/request.js'
const form = reactive({
  name: '',
})

async function postData() {
  await ApiPost('/api/blog/post', {
    title: form.name,
    id: Math.floor((Math.random() * 100) + 1)
  })
  ElMessage({
    message: 'success',
    type: 'success',
  })
}

const onSubmit = () => {
  postData()
  form.name = ''
  ElMessage({
    message: 'error',
    type: 'error',
  })
}
</script>