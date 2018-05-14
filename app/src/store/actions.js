import axios from 'axios';


export default {
  setPlace({ commit }, payload) {
    commit('setPlace', payload);
  },
  fetchShippingsApi({ commit }) {
    axios.get('http://localhost:5000/api/shippings')
      .then((response) => {
        const shippingsApi = response.data;
        commit('loadShippinsgApi', { shippingsApi });
      }, (error) => {
        // eslint-disable-next-line
        console.error(error);
      });
  },
};
