import container from './container.vue';

const VueContainer = {
  install(Vue) {
    Vue.component('container', container);
  },
};

export default VueContainer;
