<template>
  <section class="container">
    <div class="" v-if="user">
      <h3 v-text="user.name"></h3>
      <img :src="user.picture" width="80px" alt="User Picture">
      <h4 v-text="user.email"></h4>
      <button @click="logout">Sign Out</button>
    </div>
    <div v-else-if="loading">Loading...</div>
    <div v-else>
      <button class="button-outline" @click="login">Sign In</button>
    </div>
  </section>
</template>

<script>
import firebase from 'firebase'
export default {
  head () {
    return {
      title: 'Home'
    }
  },
  computed: {
    user () {
      return this.$store.getters.activeUser
    },
    loading () {
      return this.$store.getters.isLoading
    }
  },
  methods: {
    login () {
      this.$store.commit('SET_LOADING', true)
      firebase.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider())
    },
    async logout ({ commit }) {
      await firebase.auth().signOut()
      this.$store.commit('SET_USER', null)
      this.$store.commit('SET_LOGGED_IN', false)
    }
  }
}
</script>

<style scoped>
</style>
