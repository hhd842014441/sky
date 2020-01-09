
/*
 * 机构管理模块
 */
import axios from "@/http/axios";

let dept = {};
// 保存
dept.save = (data) => {
    return axios({
        url: '/dept/save',
        method: 'post',
        data
    })
}
// 删除
dept.batchDelete = (data) => {
    return axios({
        url: '/dept/delete',
        method: 'post',
        data
    })
}
// 查询机构树
dept.findDeptTree = () => {
    return axios({
        url: '/dept/findTree',
        method: 'get'
    })
}
export default dept;
