import login from '@/Api/rbac/login.js'
import user from '@/Api/rbac/user.js'
import role from '@/Api/rbac/role.js'
import menu from '@/Api/rbac/menu.js'
import dict from '@/Api/rbac/dict.js'
import dept from '@/Api/rbac/dept.js'
import log from '@/Api/rbac/log.js'

let api = {
  login,
  user,
  role,
  menu,
  dict,
  dept,
  log
}
export default api;
