<template>
  <div :class="fluid ? 'container-fluid' : 'container'">
    <slot></slot>
  </div>
</template>

<script>
export default {

  name: 'container',

  props: {
    fluid: {
      type: Boolean,
      default: false,
    },

    tag: {
      type: String,
      default: 'div',
    },
  },

  // render(h) {
  //   return h(this.tag, {
  //     class: [this.fluid ? 'container-fluid' : 'container'],
  //   }, this.$slots.default);
  // },
};
</script>

<style lang="css" scoped>
.container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

@media (min-width: 576px) {
  .container {
    max-width: 540px;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}

@media (min-width: 992px) {
  .container {
    max-width: 960px;
  }
}

@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
}

.container-fluid {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
</style>
