import axios from "@/http/axios";
import qs from 'qs';
let login = {};
login.subInfo = function (parms) {
  return axios({
    url: '/login',
    method: 'post',
    data:qs.stringify(parms)
  })
}
login.validateCode = function () {
  return axios({
    url: '/kaptcha/render',
    method: "get",
  })

}
export default login;
