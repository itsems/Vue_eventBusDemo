import Vue from 'vue'
import App from './App.vue'

// 方法一：成為全域事件
// import './bus'


// 方法二：這樣在需要bus的vue才要import bus
// export const bus = new Vue();

// 方法三：成為全域事件(根本不用新增bus.js這隻檔案?)
Vue.prototype.$bus = new Vue();

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
