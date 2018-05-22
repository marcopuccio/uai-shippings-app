import axios from 'axios';

const isProd = process.env.NODE_ENV === 'production';
const SHIPPINGS_API_URL = isProd ? '/api/' : 'http://localhost:5000/api/shippings/';

export default {
  setPlace({ commit }, payload) {
    commit('setPlace', payload);
  },
  fetchShippingsApi({ commit }) {
    axios.get(SHIPPINGS_API_URL)
      .then((response) => {
        const resData = response.data;
        commit('loadShippinsgApi', resData);
      }, (error) => {
        // eslint-disable-next-line
        console.error(error);
      });
  },
};
