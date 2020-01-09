
/*
 * 字典管理模块
 */
import axios from "@/http/axios";
let dict = {};
// 保存
dict.save = (data) => {
    return axios({
        url: '/dict/save',
        method: 'post',
        data
    })
}
// 删除
dict.batchDelete = (data) => {
    return axios({
        url: '/dict/delete',
        method: 'post',
        data
    })
}
// 分页查询
dict.findPage = (data) => {
    return axios({
        url: '/dict/findPage',
        method: 'post',
        data
    })
}
export default dict
