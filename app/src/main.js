import 'vuetify/dist/vuetify.min.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

import Vue from 'vue';
import Vuetify from 'vuetify';
import * as VueGoogleMaps from 'vue2-google-maps';

import AppRoot from '@/components/AppRoot';
import mapsConf from '@/services/maps';

Vue.config.productionTip = false;
Vue.use(Vuetify);
Vue.use(VueGoogleMaps, mapsConf);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { AppRoot },
  template: '<AppRoot />',
});
