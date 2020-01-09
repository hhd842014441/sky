/**
 * 全局常量、方法封装模块
 * 通过原型挂载到Vue属性
 * 通过 this.Global 调用
 */

// 后台管理系统服务器地址
export const baseUrl = 'http://localhost:9001'
// 系统数据备份还原服务器地址
export const backupBaseUrl = 'http://localhost:9001'

export default {
    baseUrl,
    backupBaseUrl
}
