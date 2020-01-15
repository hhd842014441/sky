<template>
  <div class="main-header" :style="{'background':themeColor}">
    <!-- Logo Header -->
    <div class="logo-header">
      <el-menu :background-color="themeColor" text-color="#fff" :active-text-color="themeColor"
               mode="horizontal">
        <el-menu-item index="1">天 空 之 城</el-menu-item>
      </el-menu>
    </div>
    <div class="hamburg">
      <el-menu :background-color="themeColor" mode="horizontal">
        <el-menu-item index="1" @click="onCollapse">
          <hamburger :isActive="collapse"></hamburger>
        </el-menu-item>
        <el-menu-item index="2">
          <el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model="input2"></el-input>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="nav-header">
      <el-menu :background-color="themeColor" :default-active="activeIndex" mode="horizontal">
        <el-menu-item index="1">
          <!-- 主题切换 -->
          <theme-picker class="theme-picker" :default="themeColor" @onThemeChange="onThemeChange"></theme-picker>
        </el-menu-item>
        <el-menu-item index="2">
          <!-- 语言切换 -->
          <lang-selector></lang-selector>
        </el-menu-item>
        <el-menu-item index="3" v-popover:popover-message>
          <!-- 我的私信 -->
          <el-badge :value="5" :max="99" class="badge" type="success">
            <li style="color:#fff;" class="fa fa-envelope-o fa-lg"></li>
          </el-badge>
          <el-popover ref="popover-message" placement="bottom-end" trigger="click">
            <message-panel></message-panel>
          </el-popover>
        </el-menu-item>
        <el-menu-item index="4" v-popover:popover-notice>
          <!-- 系统通知 -->
          <el-badge :value="4" :max="99" class="badge" type="success">
            <li style="color:#fff;" class="fa fa-bell-o fa-lg"></li>
          </el-badge>
          <el-popover ref="popover-notice" placement="bottom-end" trigger="click">
            <notice-panel></notice-panel>
          </el-popover>
        </el-menu-item>
        <el-menu-item index="5" v-popover:popover-personal>
          <!-- 用户信息 -->
          <span class="user-info"><img :src="user.avatar" />{{user.name}}</span>
          <el-popover ref="popover-personal" placement="bottom-end" trigger="click" :visible-arrow="false">
            <personal-panel :user="user"></personal-panel>
          </el-popover>
        </el-menu-item>
      </el-menu>
    </div>

  </div>
</template>

<script src="@/views/headerContainer/headerContainer.js">
</script>

<style scoped src="@/views/headerContainer/headerContainer.scss"></style>
