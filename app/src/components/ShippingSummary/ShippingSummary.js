import Vue from 'vue';
import Component from 'vue-class-component';
import { mapGetters } from 'vuex';

import moment from '@/services/moment';

@Component({
  computed: mapGetters([
    'distance',
    'shippingsApi',
    'shippingPrice',
  ]),
})
export default class ShippingForm extends Vue {
  shipment = {
    date: null,
    turn: null,
  };

  datePicker = {
    fullWidth: true,
    min: moment().format(),
    reactive: true,
    headerColor: 'red darken-3',
  }

  get kmPrice() {
    return this.shippingsApi.kmPrice;
  }

  get hasMinDistance() {
    return this.distance > 0;
  }

  get hasMaxDistance() {
    return this.shippingsApi.maxDistance < this.distance;
  }

  get canSelectDate() {
    return this.hasMinDistance && !this.hasMaxDistance;
  }

  get isValidShipping() {
    return this.shipment.date && this.shipment.turn;
  }
}
