export default {
  setPlace(state, { place }) {
    state.place = place;
  },
  setShippingDate(state, { date }) {
    state.shipping.date = date;
  },
  setShippingTurn(state, { turn }) {
    state.shipping.turn = turn;
  },
  loadShippinsgApi(state, { shippings, maps }) {
    state.shippingsApi = shippings;
    state.maps = maps;
  },
};
