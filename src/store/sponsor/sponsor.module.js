import sponsorService from "@/api/sponsor.service";
import { 
  // Actions
  FETCH_SPONSORS, 
  ADD_SPONSOR, 
  EDIT_SPONSOR, 
  REMOVE_SPONSOR, 
  // Mutations
  SET_SPONSORS, 
  SET_MESSAGE
} from "./sponsor.constants";

const state = {
  sponsors: []
};

const getters = {
  getSponsors: state => state.sponsors,
  getSponsorById: state => id => state.sponsors.find(sponsor => sponsor._id === id),
  getMessage: state => state.message,
  
};

const actions = {
  [FETCH_SPONSORS]: ({ commit, rootState }) => {
    return new Promise((resolve, reject) => {
      sponsorService.getSponsors(rootState.auth.token)
        .then(
          res => {
            commit(SET_SPONSORS, res.body);
            resolve(res)
          },
          err => {
            commit(SET_MESSAGE, err.message)
            reject(err)
          });
    })
  },
  [ADD_SPONSOR]: ({ commit }) =>
  {
    res => {
      commit(SET_MESSAGE, `O sponsor ${res.body.nome} foi adicionado com sucesso!`);
    }
  },
  [EDIT_SPONSOR]: ({ commit, rootState }, payload) => {
    return new Promise((resolve, reject) => {
      sponsorService.editSponsor(rootState.auth.token, payload)
        .then(
          res => {
            commit(SET_MESSAGE, `O sponsor ${res.body.nome} foi atualizado com sucesso!`);
            resolve(res)
          }, err => {
            commit(SET_MESSAGE, err)
            reject(err)
          });
    });
  },
  [REMOVE_SPONSOR]: ({ commit, rootState }, id) => {
    return new Promise((resolve, reject) => {
      sponsorService.removeSponsor(rootState.auth.token, id)
        .then(res => {
          commit(SET_MESSAGE, `O Sponsor foi removido com sucesso!`);
          resolve(res)
        }, err => {
          commit(SET_MESSAGE, err.message)
          reject(err)
        });
    });
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions
}