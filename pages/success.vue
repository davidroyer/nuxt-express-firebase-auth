<template>
  <div>
    <h2>Success Page</h2>

    <nuxt-link to="/">Back to the home page</nuxt-link>
  </div>
</template>

<script>
export default {
  middleware: 'auth-check'
}
</script>
