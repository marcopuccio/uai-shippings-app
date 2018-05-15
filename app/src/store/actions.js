import axios from 'axios';

const isProd = process.env.NODE_ENV === 'production';

const BASE_API_URL = isProd ? 'http://api-shippings.marcopucc.io' : 'http://localhost:5000/api';
const SHIPPINGS_API_URL = `${BASE_API_URL}/shippings/`;

export default {
  setPlace({ commit }, payload) {
    commit('setPlace', payload);
  },
  fetchShippingsApi({ commit }) {
    axios.get(SHIPPINGS_API_URL)
      .then((response) => {
        const shippingsApi = response.data;
        commit('loadShippinsgApi', { shippingsApi });
      }, (error) => {
        // eslint-disable-next-line
        console.error(error);
      });
  },
};
