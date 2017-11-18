<template lang="html">
  <div>
    <h1>{{ posts.title }}</h1>
    <div v-html="posts.content"></div>
  </div>
</template>

<script>
export default {
  props: ['posts']
}
</script>

<style lang="sass" scoped>
  // PRIMARY FONT
  h1,h2,h3,h4,h5,h6,p,div
    font-family: helvetica, sans-serif

  p
    font-size: 1rem

  h1
    font-size: 2rem


</style>
