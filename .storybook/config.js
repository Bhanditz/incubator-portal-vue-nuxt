import { configure } from '@storybook/vue';
import { action } from '@storybook/addon-actions';

import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue);

// automatically import all files ending in *.stories.js from the components directory
const req = require.context('../components', true, /.stories.js$/);

function loadStories() {
  req.keys().forEach(filename => {
    req(filename);
  });
}

configure(loadStories, module);
