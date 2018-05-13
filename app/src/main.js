import 'vuetify/dist/vuetify.min.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

import Vue from 'vue';
import Vuetify from 'vuetify';
import * as VueGoogleMaps from 'vue2-google-maps';

import AppRoot from '@/components/AppRoot';
import { settings as mapSettings } from '@/services/maps';
import store from '@/store';

Vue.config.productionTip = false;
Vue.use(Vuetify);
Vue.use(VueGoogleMaps, mapSettings);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  components: { AppRoot },
  template: '<AppRoot />',
});
