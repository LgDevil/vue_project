// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Content from './page/Content'
import store from './store'
import '../static/css/reset.css'
import VueQuillEditor  from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

Vue.use(VueQuillEditor);
Vue.config.productionTip = false
Vue.prototype.$axios = axios;
Vue.use(ElementUI)



/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  store,
  data(){
    return{}
  },
  components: { Content },
  template: '<Content/>'
})
