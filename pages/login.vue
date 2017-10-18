<template>
  <section class="container">
    <h2 class="title">You need to login</h2>
    <div>
      <button class="button-outline" @click="login">Sign In</button>
    </div>
  </section>
</template>

<script>
import firebase from 'firebase'

export default {
  head () {
    return {
      title: 'Login'
    }
  },
  computed: {
    user () {
      return this.$store.getters.activeUser
    }
  },
  methods: {
    login () {
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
