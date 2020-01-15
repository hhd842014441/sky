import url from "@/http/global";
import ThemePicker from "@/components/ThemePicker"
import LangSelector from "@/components/LangSelector"
import Cookies from "js-cookie";
import {mapState} from 'vuex'

export default {
  name: 'login',
  components: {
    "theme-picker": ThemePicker,
    "lang-selector": LangSelector
  },
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
      this.loginInfo.src = url.baseUrl + '/kaptcha/render?time=' + new Date();
    },
    froget() {

    },
    // 切换主题
    onThemeChange: function (themeColor) {
      this.$store.commit('setThemeColor', themeColor)
    },
    loginafter() {
      let that = this
      let params = {
        username: that.loginInfo.username,
        password: that.loginInfo.password,
        validateCodeText: that.loginInfo.verifyCode,
        captcha: Cookies.get("captcha")
      }
      this.$api.login.subInfo(params).then(res => {
        try {
          var dateStatus = res.status
          if (203 == dateStatus) {
            Cookies.set('token', res.jwtToken)
            this.$router.push({path: '/home',});
          } else {
            this.$router.push({path: '/error',});
          }
        } catch (e) {
          this.$router.push({path: '/error',});
        }
      })
    }
  },
  computed: {
    ...mapState({
      themeColor: state => state.app.themeColor
    })
  }
};

