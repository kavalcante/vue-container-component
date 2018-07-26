import Vue from 'vue';

import { storiesOf } from '@storybook/vue';

import container from '../src/container.vue';

storiesOf('container', module)
  .add('common usage', () => ({
    components: { container },
    template: '<container>rounded</container>',
  }))
  .add('fluid', () => ({
    components: { container },
    template: '<container fluid>rounded</container>',
  }))
  .add('custom tag', () => ({
    components: { container },
    template: '<container tag="section">rounded</container>',
  }));
