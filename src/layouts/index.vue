<script setup lang="ts">
import Aside from './components/Aside.vue'
import Header from './components/Header.vue'
</script>

<template>
  <el-container>
    <el-aside width="auto">
      <Aside/>
    </el-aside>
    <el-container>
      <el-header height="64px">
        <Header/>
      </el-header>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<style lang="less">
.el-header {
  padding: 0;
}
</style>
