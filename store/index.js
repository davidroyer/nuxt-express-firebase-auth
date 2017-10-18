import Vuex from 'vuex'
// import firebase, {auth, GoogleProvider} from '@/services/fireinit.js'

const createStore = () => {
  return new Vuex.Store({
    state: {
      user: null,
      loggedIn: false
    },
    getters: {
      activeUser: (state, getters) => {
        return state.user
      }
    },
    mutations: {
      SET_USER (state, payload) {
        state.user = payload
      },
      SET_LOGGED_IN (state, payload) {
        state.loggedIn = payload
      }
    },
    actions: {
      nuxtServerInit ({ commit }, { req }) {
        if (req.user) {
          commit('SET_USER', req.user)
          commit('SET_LOGGED_IN', true)
        }
      }

      // autoSignIn ({commit}, payload) {
      //   commit('setUser', payload)
      // },
      //
      // signInWithGoogle ({commit}) {
      //   return new Promise((resolve, reject) => {
      //     auth.signInWithRedirect(GoogleProvider)
      //     resolve()
      //   })
      // },
      //
      // signOut ({commit}) {
      //   auth.signOut().then(() => {
      //     commit('setUser', null)
      //   }).catch(err => console.log(error))
      // }
    }
  })
}

export default createStore
