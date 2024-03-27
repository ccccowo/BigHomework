<script setup>
import {ref} from 'vue'
</script>
<template>
<el-menu
    default-active="/add"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    router
  >
    <el-menu-item index="/add">考试管理</el-menu-item>
    <el-menu-item index="/aw">答卷上传</el-menu-item>
  </el-menu>
  <router-view></router-view>
</template>
<style lang="scss" scoped>

.el-menu-demo{
  .el-menu-item{
    font-size: 1rem;
  }
}
</style>