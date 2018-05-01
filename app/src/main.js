// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import * as VueGoogleMaps from 'vue2-google-maps';

import AppRoot from '@/components/AppRoot';
import mapsConf from '@/services/maps';

Vue.config.productionTip = false;

Vue.use(VueGoogleMaps, mapsConf);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { AppRoot },
  template: '<AppRoot />',
});
