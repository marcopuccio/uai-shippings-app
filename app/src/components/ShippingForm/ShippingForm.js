import Vue from 'vue';
import { mapGetters } from 'vuex';

import Component from 'vue-class-component';
import GoogleMapAutocomplete from '@/components/GoogleMapAutocomplete';

@Component({
  components: {
    GoogleMapAutocomplete,
  },
  computed: mapGetters([
    'place',
    'placePosition',
    'maps',
  ]),
})
export default class ShippingForm extends Vue {

  get map() {
    return {
      center: this.place ? this.placePosition : this.maps.center,
      zoom: this.maps.zoom,
      type: this.maps.type,
    };
  }

  setPlace(place) {
    if (!place.geometry) return;
    this.$store.dispatch('setPlace', { place });
  }
}
