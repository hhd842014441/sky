import axios from "@/http/axios";
let login = {};
login.subInfo = function (parms) {
  return axios({
    url: '/login',
    method: 'post',
    data: Qs.stringify(parms)
  })
}
login.validateCode = function () {
  return axios({
    url: '/kaptcha/render',
    method: "get",
  })

}
export default login;
