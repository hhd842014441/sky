import url from "@/http/global";
import Cookies from "js-cookie";
export default {
  name: 'login',
  data() {
    return {
      loading: false,
      loginInfo: {
        username: 'root',
        password: '123456',
        verifyCode: "",
        src: url.baseUrl + "/kaptcha/render"
      },
      myrule: {
        username: [{required: true, message: 'please enter your account', trigger: 'blur'}],
        password: [{required: true, message: 'enter your password', trigger: 'blur'}]
      },
      checked: false
    }
  },
  methods: {
    clickCapatch: function () {
      this.loginInfo.src = url.baseUrl + '/kaptcha/render'
    },
    froget() {

    },
    loginafter() {
      let that = this
      let params = {
        username: that.loginInfo.username,
        password: that.loginInfo.password,
        validateCodeText: that.loginInfo.verifyCode,
        captcha: Cookies.get("captcha")
      }
      $api.login.subInfo(params).then(res => {
        try {
          var dateStatus = res.data.status
          if (203 == dateStatus) {
            localStorage.setItem('token', res.data.jwtToken)
            this.$router.push({path: '/success',});
          } else {
            this.$router.push({path: '/error',});
          }
        } catch (e) {
          this.$router.push({path: '/error',});
        }
      })
    }
  }
};

