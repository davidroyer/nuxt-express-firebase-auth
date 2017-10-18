<template>
  <div id="appWrapper">
    <h1 class="siteTitle">Nuxt.js SSR with Firebase Authentication</h1>
    <nav class="mainNav">
      <nuxt-link to="/">Home</nuxt-link>
      <nuxt-link to="/secret">Secret Page</nuxt-link>
      <nuxt-link to="/success">Success Page</nuxt-link>
      <nuxt-link to="/login">Login Page</nuxt-link>
    </nav>
    <div id="nuxtRouter">
      <nuxt />
    </div>
    <my-footer/>
  </div>
</template>

<script>
import MyFooter from '~/components/Footer.vue'

export default {
  components: {
    MyFooter
  }
}
</script>

<style>

#appWrapper {
  min-height: 100vh;
  display: flex;
  flex-flow: column;
}
.mainNav {
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
}

#nuxtRouter {
  /*width: 100%;*/
  flex: 100%;
  flex-grow: 1;
  margin-left: auto;
  margin-right: auto;
  padding: 1em 2em;
  width: 900px;
  max-width: 100%;
  margin-top: 1em;
}


.mainNav > * {
  margin: .75em;

}
.container
{
  margin: 0;
  width: 100%;
  /*padding: 100px 0;*/
  text-align: center;
}

.button, .button:visited
{
  display: inline-block;
  color: black;
  letter-spacing: 1px;
  background-color: #fff;
  border: 2px solid #000;
  text-decoration: none;
  text-transform: uppercase;
  padding: 15px 45px;
}

.button:hover, .button:focus
{
  color: #fff;
  background-color: #000;
}

.title
{
  color: #000;
  font-weight: 300;
  font-size: 2.5em;
  margin: 0;
}

.siteTitle {
  font-size: 2.25em;
  text-align: center;
  padding-top: .5em;
  font-weight: 500;
}
</style>
