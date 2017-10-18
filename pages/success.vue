<template>
  <div>
    <h1>Success Page</h1>

    <nuxt-link to="/">Back to the home page</nuxt-link>
  </div>
</template>

<script>
export default {
  middleware: 'auth-check'
}
</script>
