<template>
    <el-container class="contain">
        <el-aside width="200px">
            <Aside class="aside" />
        </el-aside>
        <el-main style="padding: 0">
            <el-header>
                <Header></Header>
            </el-header>
            <router-view />
        </el-main>
    </el-container>
</template>

<script setup>
import Header from './components/Header.vue'
import Aside from './components/Aside.vue'  
</script>

<style>
.contain {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
}

.el-aside {
    height: 100%;
    width: 300px;
}

.aside {
    height: 100%;
}

.el-main {
    background: #f6f6f6;
}

.el-header {
    width: 100%;
    padding: 0 !important;
}
</style>
