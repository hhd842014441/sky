
/*
 * 日志管理模块
 */
import axios from "@/http/axios";
let log = {};
// 分页查询
log.findPage = (data) => {
    return axios({
        url: '/log/findPage',
        method: 'post',
        data
    })
}
export default log;
