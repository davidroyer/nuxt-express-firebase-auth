<template>
  <div id="appWrapper">
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
  height: 100vh;
  display: flex;
  flex-flow: column;
}
.mainNav {
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  height: 90px;

}

#nuxtRouter {
  width: 100%;
  flex: 100%;
  flex-grow: 1;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  padding: 1em 2em;
}


.mainNav > * {
  margin: .75em;

}
.container
{
  margin: 0;
  width: 100%;
  padding: 100px 0;
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

</style>
