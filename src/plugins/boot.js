import router from '@router';
import store from '@store';
import VueToast from 'vue-toast-notification';
import { vfmPlugin } from 'vue-final-modal';

import 'bootstrap';
import 'vue-toast-notification/dist/theme-sugar.css';
import '@assets/scss/index.scss';

export default {
  install(Vue) {
    Vue.use(router);
    Vue.use(store);
    Vue.use(VueToast);
    Vue.use(
      vfmPlugin({
        key: '$vfm',
        componentName: 'VueFinalModal',
        dynamicContainerName: 'ModalsContainer'
      })
    );
  }
};
