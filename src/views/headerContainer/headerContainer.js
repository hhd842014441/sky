import {mapState} from 'vuex'
import Hamburger from "@/components/Hamburger"
import ThemePicker from "@/components/ThemePicker"
import LangSelector from "@/components/LangSelector"
import MessagePanel from "@/components/MessagePanel/MessagePanel"
import NoticePanel from "@/components/NoticePanel/NoticePanel"
import PersonalPanel from "@/components/PersonalPanel/PersonalPanel"

export default {
  components: {
    Hamburger,
    ThemePicker,
    LangSelector,
    NoticePanel,
    MessagePanel,
    PersonalPanel
  },
  data() {
    return {
      input2: "",
      user: {
        name: "Louis",
        avatar: "",
        role: "超级管理员",
        registeInfo: "注册时间：2018-12-20 "
      },
      activeIndex: '1',
      langVisible: false
    }
  },
  methods: {

    // 折叠导航栏
    onCollapse: function () {
      this.$store.commit('onCollapse')
    },
    // 切换主题
    onThemeChange: function (themeColor) {
      this.$store.commit('setThemeColor', themeColor)
    },
    // 语言切换
    changeLanguage(lang) {
      lang === '' ? 'zh_cn' : lang
      this.$i18n.locale = lang
      this.langVisible = false
    }
  },
  mounted() {
    this.sysName = "无欲则刚 有容乃大"
    var user = sessionStorage.getItem("user")
    if (user) {
      this.user.name = user
      this.user.avatar = require("@/assets/sky.png")
    }
  },
  computed: {
    ...mapState({
      themeColor: state => state.app.themeColor,
      collapse: state => state.app.collapse
    })
  }
}
