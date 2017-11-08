<template lang="html">
  <div class="nav">
    <router-link class="nav-items" to="/">Home</router-link>
    <router-link class="nav-items" to="/About">About</router-link>
    <router-link class="nav-items" to="/Portfolio">Portfolio</router-link>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="sass" scoped>
  .nav
    bottom: 20px
    margin-left: 20px
    position: fixed
    z-index: 80
    .nav-items
      background: #000000
      color: #ffffff
      padding: 5px 10px
      text-decoration: none



</style>
