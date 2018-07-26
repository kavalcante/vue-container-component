import { configure } from '@storybook/vue';

import Vue from 'vue';

// Import your custom components.
import container from '../dist/index.js';

// Register custom components.
Vue.component('container', container);

function loadStories() {
  // You can require as many stories as you need.
  require('../src/stories');
}

configure(loadStories, module);
