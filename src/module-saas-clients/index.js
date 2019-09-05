
import {asyncRouterMap} from '@/router'
import routerMaps from './router'

import app from './store/app'

export default {
  install(module, store) {
    // 注册路由
    asyncRouterMap.push(routerMaps[0])
    // 注册状态管理
    if (store !== undefined) {
    }
  }
}
