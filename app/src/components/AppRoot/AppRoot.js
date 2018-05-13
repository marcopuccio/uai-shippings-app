import Vue from 'vue';
import Component from 'vue-class-component';
import HeaderToolbar from '@/components/HeaderToolbar';

@Component({
  components: {
    HeaderToolbar,
  },
})
export default class AppRoot extends Vue {
}
