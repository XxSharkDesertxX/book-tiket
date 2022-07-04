import Vue from 'vue';
import App from './App.vue';
import RouterV from 'vue-router';
import login from './components/login.vue';
import book from './components/book.vue';


Vue.use(RouterV);

let routerign = new RouterV({
  routes:[
    {path:"/Login" , name:"Login" , component: login},
    {path:"/" , name:"Home", component: book},
  ],
  mode:"history",
});

Vue.config.productionTip = false;

new Vue({
  router: routerign,
  render: h => h(App)
}).$mount('#app');
