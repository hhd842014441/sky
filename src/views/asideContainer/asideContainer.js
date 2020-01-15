import {mapState} from 'vuex'

export default {
  computed: {
    ...mapState({
      themeColor: state => state.app.themeColor,
      oldThemeColor: state => state.app.oldThemeColor,
      collapse: state => state.app.collapse
    })
  }
}
