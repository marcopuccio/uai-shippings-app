import Vue from 'vue';
import Component from 'vue-class-component';
import { defaults as mapDefaults } from '@/services/maps';
import GoogleMapAutocomplete from '@/components/GoogleMapAutocomplete';

@Component({
  components: {
    GoogleMapAutocomplete,
  },
})
export default class ShippingForm extends Vue {

  get place() {
    return this.$store.getters.place;
  }

  get map() {
    const formMap = mapDefaults;
    if (this.place) {
      formMap.center = this.placePosition;
    }
    return formMap;
  }

  get placePosition() {
    return {
      lat: this.place.geometry.location.lat(),
      lng: this.place.geometry.location.lng(),
    };
  }

  setPlace(place) {
    this.$store.dispatch('setPlace', { place });
  }

  calculateShipping() {
    debugger;
    console.log("Calc shipping");
  }
}
