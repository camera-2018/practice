<template>
    <div class="p-10px">
    <el-row :gutter="12" v-for="index of 20" :key="index">
        <el-col :span="8" v-for="index of 3" :key="index">
            <el-card shadow="hover">Hello</el-card>
        </el-col>
    </el-row>
    </div>  
</template>


