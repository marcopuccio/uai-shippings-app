import Vue from 'vue';
import { mapGetters } from 'vuex';

import Component from 'vue-class-component';
import { defaults as mapDefaults } from '@/services/maps';
import GoogleMapAutocomplete from '@/components/GoogleMapAutocomplete';

@Component({
  components: {
    GoogleMapAutocomplete,
  },
  computed: mapGetters([
    'place',
    'placePosition',
  ]),
})
export default class ShippingForm extends Vue {

  get map() {
    return {
      center: this.place ? this.placePosition : mapDefaults.center,
      zoom: mapDefaults.zoom,
      type: mapDefaults.type,
    };
  }

  setPlace(place) {
    if (!place.geometry) return;
    this.$store.dispatch('setPlace', { place });
  }
}
