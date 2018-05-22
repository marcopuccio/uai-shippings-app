export default {
  setPlace(state, { place }) {
    state.place = place;
  },
  loadShippinsgApi(state, { shippings, maps }) {
    state.shippingsApi = shippings;
    state.maps = maps;
  },
};
