<template>
  <section class="container">
    <img src="~assets/img/logo.png" alt="Nuxt.js Logo" class="logo" />
    <h2 class="title">
      You need to login
    </h2>
    <div>
      <button class="button-outline" @click="login">Sign In</button>
    </div>

  </section>
</template>

<script>
import axios from '~/plugins/axios'

import firebase from 'firebase'
export default {
  async asyncData () {
    let { data } = await axios.get('/api/users')
    return { users: data }
  },
  head () {
    return {
      title: 'Users'
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
    // logout () {
    //
    // },
    async logout ({ commit }) {
      await firebase.auth().signOut()
      this.$store.commit('SET_USER', null)
      this.$store.commit('SET_LOGGED_IN', false)
    }
  }
}
</script>

<style scoped>
.title
{
  margin: 30px 0;
}
.users
{
  list-style: none;
  margin: 0;
  padding: 0;
}
.user
{
  margin: 10px 0;
}
</style>
