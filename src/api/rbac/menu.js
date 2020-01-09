
/*
 * 菜单管理模块
 */
import axios from "@/http/axios";
let menu = {};
 // 保存
menu.save = (data) => {
    return axios({
        url: '/menu/save',
        method: 'post',
        data
    })
}
// 删除
menu.batchDelete = (data) => {
    return axios({
        url: '/menu/delete',
        method: 'post',
        data
    })
}
// 查找导航菜单树
menu.findNavTree = (params) => {
    return axios({
        url: '/menu/findNavTree',
        method: 'get',
        params
    })
}
// 查找导航菜单树
menu.indMenuTree = () => {
    return axios({
        url: '/menu/findMenuTree',
        method: 'get'
    })
}
export default menu;
