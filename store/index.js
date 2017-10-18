import Vuex from 'vuex'
// import firebase, {auth, GoogleProvider} from '@/services/fireinit.js'

const createStore = () => {
  return new Vuex.Store({
    state: {
      user: null,
      loggedIn: false,
      loading: false
    },
    getters: {
      activeUser: (state, getters) => {
        return state.user
      },
      isLoading: (state, getters) => {
        return state.loading
      }
    },
    mutations: {
      SET_USER (state, payload) {
        state.user = payload
      },
      SET_LOGGED_IN (state, payload) {
        state.loggedIn = payload
      },
      SET_LOADING (state, payload) {
        state.loading = payload
      }
    },
    actions: {
      nuxtServerInit ({ commit }, { req }) {
        if (req.user) {
          console.log('RAN NUXT-SERVER-INIT');
          commit('SET_USER', req.user)
          commit('SET_LOGGED_IN', true)
          commit('SET_LOADING', false)
        } else {
          commit('SET_LOADING', false)
        }
      }
    }
  })
}

export default createStore
