import getDistance from '@/services/haversine';
import { defaults as mapDefaults } from '@/services/maps';

export default {
  shippingsApi(state) {
    return state.shippingsApi;
  },
  place(state) {
    return state.place;
  },
  placePosition(state, getters) {
    return getters.place ? {
      lat: getters.place.geometry.location.lat(),
      lng: getters.place.geometry.location.lng(),
    } : mapDefaults.center;
  },
  distance(state, getters) {
    const distance = getDistance(mapDefaults.center, getters.placePosition);
    const kmDistance = Math.round((distance / 1000) * 100) / 100;
    return kmDistance;
  },
  shippingPrice(state, getters) {
    const originalDistance = getters.distance;
    const { kmPrice } = getters.shippingsApi;
    if (originalDistance === 0) return 0;
    const billeableDistance = originalDistance >= 1 ? originalDistance : 1;
    return Math.round(kmPrice * billeableDistance);
  },
};
