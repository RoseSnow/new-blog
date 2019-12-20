import Vue from 'vue';
import Router from 'vue-router';
import home from './home'; // 首页
import login from './login';　// 登陆
import classification from './classification';　// 分类
import archive from './archive';　// 归档
import label from './label';　// 标签
import about from './about';　// 关于

Vue.use(Router)

const router = new Router({
  routes: [
    ...home,
    ...login,
    ...classification,
    ...archive,
    ...label,
    ...about
  ]
})

export default router;

