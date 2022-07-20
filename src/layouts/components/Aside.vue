<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
import Logo from '../../components/Logo.vue'
import { useSettingStore } from '../../stores'

const store = useSettingStore()

const handleOpen = (key: string, keyPath: string[]) => {
  // console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  // console.log(key, keyPath)
}

onMounted(() => {
  // console.log(store.isCollapse)
})
</script>

<template>
  <el-menu
    default-active="1-1"
    class="el-menu-vertical-demo"
    :collapse="store.collapseSidebar"
    background-color="#212121"
    text-color="#fff"
    active-text-color="#ffd04b"
    @open="handleOpen"
    @close="handleClose"
  >
    <Logo />
    <el-sub-menu index="1">
      <template #title>
        <el-icon><i class="ri-search-line"></i></el-icon>
        <span>Search</span>
      </template>
      <el-menu-item-group>
        <template #title>
          <span>Group One</span>
        </template>
        <el-menu-item index="1-1">
          item one
        </el-menu-item>
        <el-menu-item index="1-2">
          item two
        </el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="Group Two">
        <el-menu-item index="1-3">
          item three
        </el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>
    <el-menu-item index="2">
      <el-icon><i class="ri-bookmark-fill"></i></el-icon>
      <template #title>
        Albums
      </template>
    </el-menu-item>
    <el-menu-item index="4">
      <el-icon><i class="ri-heart-fill"></i></el-icon>
      <template #title>
        Favorites
      </template>
    </el-menu-item>
    <el-menu-item index="5">
      <el-icon><i class="ri-map-pin-fill"></i></el-icon>
      <template #title>
        Places
      </template>
    </el-menu-item>
    <el-menu-item index="6">
      <el-icon><i class="ri-price-tag-fill"></i></el-icon>
      <template #title>
        Labels
      </template>
    </el-menu-item>
  </el-menu>
</template>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 270px;
  min-height: 100%
}
.el-menu--collapse {
  min-height: 100%
}
.el-menu {
  border: none;
}
</style>
