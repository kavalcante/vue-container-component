import container from './container.vue';

const VueContainer = {
  install(Vue) {
    Vue.component('vue-container-component', container);
  },
};

export default VueContainer;

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueContainer);
}
