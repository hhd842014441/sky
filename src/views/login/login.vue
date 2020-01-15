<template>
  <div class="login-container">
    <theme-picker style="float:right;" class="theme-picker" :default="themeColor"
                  @onThemeChange="onThemeChange"></theme-picker>
    <lang-selector style="float:right;"></lang-selector>
    <el-form :model="loginInfo" :rules="myrule"
             status-icon
             ref="loginInfo"
             label-position="left"
             label-width="0px"
             class="demo-ruleForm login-page">
      <h3 class="title">面朝大海 春暖花开</h3>
      <el-form-item prop="username">
        <el-input prefix-icon="el-icon-user-solid" v-model="loginInfo.username"
                  auto-complete="off"/>
      </el-form-item>
      <el-form-item prop="password">
        <el-input prefix-icon="el-icon-lock" type="password" v-model="loginInfo.password"
                  auto-complete="off"/>
      </el-form-item>
      <el-form-item prop="code" class="code">
        <el-input prefix-icon="el-icon-lock" v-model="loginInfo.verifyCode" placeholder="验证码"></el-input>
        <img :src="loginInfo.src" @click="clickCapatch"/>
      </el-form-item>
      <el-form-item>
        <el-checkbox v-model="checked" class="rememberme" style="float:left;">记住密码</el-checkbox>
        <a class="login-form-forgot" @click="froget" style="float:right;" href="javascript:;">忘记密码 </a>
      </el-form-item>
      <el-form-item style="width:100%;">
        <el-button type="primary" style="width:100%;" :style="{'background':themeColor}" @click="loginafter"
                   :loading="loading">{{$t("common.login")}}
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script src="@/views/login/login.js"></script>
<style scoped src="@/views/login/login.scss"></style>
