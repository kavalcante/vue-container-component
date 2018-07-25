<template>
  <section :class="{ container: !fluid, 'container-fluid': fluid }">
  	<slot></slot>
  </section>
</template>

<script>
export default {

  name: 'container',

  props: {
    fluid: {
      type: Boolean,
      default: false,
    },
  },
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
