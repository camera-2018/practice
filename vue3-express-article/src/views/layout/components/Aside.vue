<template>
    <el-menu
        class="menu"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        :default-active="$route.path"
        router
    >
        <el-menu-item index="/">
            <i class="el-icon-menu"></i>
            <span slot="title">首页</span>
        </el-menu-item>
        <el-menu-item index="/publish">
            <i class="el-icon-document"></i>
            <span slot="title">发布文章</span>
        </el-menu-item>
        <el-menu-item index="/article">
            <i class="el-icon-setting"></i>
            <span slot="title">文章列表</span>
        </el-menu-item>
        <el-menu-item index="/profile">
            <i class="el-icon-setting"></i>
            <span slot="title">我的信息</span>
        </el-menu-item>
    </el-menu>
</template>

<script>
</script>

<style>
.tac {
    height: 100%;
}
</style>
