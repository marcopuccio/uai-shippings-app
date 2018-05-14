import Vue from 'vue';
import Component from 'vue-class-component';
import HeaderToolbar from '@/components/HeaderToolbar';
import Shipping from '@/components/Shipping';


@Component({
  components: {
    HeaderToolbar,
    Shipping,
  },
})
export default class AppRoot extends Vue {
  created() {
    this.$store.dispatch('fetchShippingsApi');
  }
}
