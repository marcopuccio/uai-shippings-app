import Vue from 'vue';
import Component from 'vue-class-component';
import { mapGetters } from 'vuex';

@Component({
  computed: mapGetters([
    'distance',
    'shippingsApi',
    'shippingPrice',
  ]),
})
export default class ShippingForm extends Vue {
  get kmPrice() {
    return this.shippingsApi.kmPrice;
  }

  get cantShip() {
    return this.distance > this.shippingsApi.maxDistance;
  }
}
