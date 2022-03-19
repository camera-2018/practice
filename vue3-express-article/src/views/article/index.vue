<template>
    <el-card class="publish">
        <div slot="header" >
            <span>文章列表</span>
        </div>
        <div class="body">
            <el-table :data="tableData" border style="width: 100%">
                <el-table-column prop="id" label="文章ID" width="180"></el-table-column>
                <el-table-column prop="title" label="文章标题" width="180"></el-table-column>
                <el-table-column prop="time" label="发布时间"></el-table-column>
                <el-table-column label="操作">
                    <template #default="scope">
                        <el-button size="small" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
                        <el-button
                            size="small"
                            type="danger"
                            @click="handleDelete(scope.$index, scope.row)"
                        >Delete</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </el-card>
</template>

<script setup>
import { ApiGet } from '../../utils/request.js'
import { reactive } from 'vue';
import { ElMessage } from 'element-plus'
import axios from 'axios'
let tableData = reactive([])
async function getData() {
    try {
        let res = await ApiGet('/api/blog/list')
        res.data.forEach(element => {
            tableData.push(element)
        })
        ElMessage({
            message: 'success',
            type: 'success',
        })
    } catch (error) {
        ElMessage({
            message: 'error',
            type: 'error',
        })
    }

}
getData()


function handleEdit(index, row) {
    console.log(row)
}
function handleDelete(index, row) {
    axios.delete('http://api.xyxsw.ltd/api/blog/delete', {
        data: {
            _id: row._id
        }
    })
    .then(res => {
        console.log(res)
        tableData.splice(index, 1)
        ElMessage({
            message: 'success',
            type: 'success',
        })
    })
    .catch(err => {
        console.log(err)
        ElMessage({
            message: 'error',
            type: 'error',
        })
    })
}

</script>

<style scoped>
.text {
    font-size: 14px;
}

.item {
    margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}
.clearfix:after {
    clear: both;
}

.publish {
    width: 100%;
    min-height: 500px;
}
</style>
