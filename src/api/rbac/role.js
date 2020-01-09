/*
 * 角色管理模块
 */
import axios from "@/http/axios";
let role = {};
// 保存
role.save = (data) => {
  return axios({
    url: '/role/save',
    method: 'post',
    data
  })
}
// 删除
role.batchDelete = (data) => {
  return axios({
    url: '/role/delete',
    method: 'post',
    data
  })
}
// 分页查询
role.findPage = (data) => {
  return axios({
    url: '/role/findPage',
    method: 'post',
    data
  })
}
// 查询全部
role.findAll = () => {
  return axios({
    url: '/role/findAll',
    method: 'get'
  })
}
// 查询角色菜单集合
role.findRoleMenus = (params) => {
  return axios({
    url: '/role/findRoleMenus',
    method: 'get',
    params
  })
}
// 保存角色菜单集合
role.saveRoleMenus = (data) => {
  return axios({
    url: '/role/saveRoleMenus',
    method: 'post',
    data
  })
}
export default role;
