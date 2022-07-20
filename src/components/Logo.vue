<script setup lang="ts">
import { useSettingStore } from '../stores'

const store = useSettingStore()

const handleCollapse = () => {
  store.collapseSidebar = !store.collapseSidebar
}
</script>

<template>
  <div class="logo-wrapper">
    <div class="logo icon" @click="handleCollapse">
      <img src="../assets/images/logo.png" alt="">
    </div>
    <div class="logo text">
      <span>ECarry</span>
    </div>
    <div class="logo ctl" @click="handleCollapse">
      <i class="ri-arrow-left-s-line" />
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '../style/variables.less';
@import '../style/font-family.less';
.logo-wrapper {
  height: 64px;
  display: flex;
  padding: 0 15px;
  align-items: center;
  justify-content: space-between;
  background-color: @logo-background-color;
  overflow: hidden;
  .logo {
    color: #fff;
  }
  .logo.icon {
    background-image: linear-gradient(to top, #a8edea 0%, #fed6e3 100%);
    border-radius: 5px;
    height: 40px;
    width: 40px;
    cursor: pointer;
    margin-right: 10px;
    img {
      height: 100%;
    }
  }
  .logo.text {
    letter-spacing: 3px;
    font-size: 22px;
    cursor: default;
  }
  .logo.ctl {
    cursor: pointer;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    text-align: center;
    line-height: 30px;
    font-size: 24px;
    &:hover{
      background: #212121;
      transition: all 0.3s ease;
    }
  }
}
</style>
