import Vue3Component from './main.vue'
Vue3Component.install = (app) => {
  app.component(Vue3Component.name, Vue3Component)
}

export {
  Vue3Component
}
