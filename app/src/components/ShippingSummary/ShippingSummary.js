import Vue from 'vue';
import Component from 'vue-class-component';
import { mapGetters } from 'vuex';

import moment from '@/services/moment';

@Component({
  computed: mapGetters([
    'distance',
    'shippingsApi',
    'shippingPrice',
    'shipping',
  ]),
})
export default class ShippingForm extends Vue {
  datePicker = {
    fullWidth: true,
    min: moment().format(),
    headerColor: 'red darken-3',
    reactive: true,
  }

  get selectedDate() {
    return this.shipping.date;
  }

  set selectedDate(date) {
    this.$store.dispatch('setShippingDate', { date });
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
    return this.shipping.date && this.shipping.turn;
  }

  selectTurn(turn) {
    this.$store.dispatch('setShippingTurn', { turn });
  }
}
