import Vue from 'vue';
import Component from 'vue-class-component';
import { defaults as mapDefaults } from '@/services/maps';

@Component({})
export default class ShippingForm extends Vue {
  place = null;

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
    this.place = place;
  }
}
