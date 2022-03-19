<template>
    <div class="header">
        <div class="info" v-if="isLogin">
            <div class="avatar">
                <el-avatar
                    src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                ></el-avatar>
            </div>
            <div class="nickname">你好</div>
        </div>
        <div class="info" v-if="(!isLogin)">
            <div class="avatar">
                <el-avatar :icon="UserFilled" />
            </div>
            <div class="nickname">未登录</div>
        </div>
    </div>
</template>

<script setup>
import { useMainStore } from '../../../store'
import { storeToRefs } from 'pinia'
const { isLogin } = storeToRefs(useMainStore())
</script>

<style>
.header {
    background: #fff;
    width: 100%;
    padding: 0;
    height: 100%;
    display: flex;
    align-items: center;
}

.info {
    margin-left: auto;
    justify-self: flex-end;
    display: flex;
    align-items: center;
    margin-right: 30px;
}

.avatar {
    margin-right: 30px;
}
</style>
