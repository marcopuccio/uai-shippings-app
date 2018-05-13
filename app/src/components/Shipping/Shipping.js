import Vue from 'vue';
import Component from 'vue-class-component';
import ShippingForm from '@/components/ShippingForm';
import ShippingSummary from '@/components/ShippingSummary';


@Component({
  components: {
    ShippingForm,
    ShippingSummary,
  },
})
export default class Shipping extends Vue {
}
