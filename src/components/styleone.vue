<template lang="html">
  <div>
    <h1>{{ content.title }}</h1>
    <p>{{ content.ingress }}</p>
    <p>{{ content.bodyTxt }}</p>
    <p>{{ content.endTxt }}</p>
    <p>{{ content.contact }}</p>
    <p>{{ content.adress }}</p>
  </div>
</template>

<script>
export default {
  props: ['content']
}
</script>

<style lang="sass" scoped>
  // PRIMARY FONT
  h1,h2,h3,h4,h5,h6,p
    font-family: sans-serif

  p
    font-size: 1rem

  h1
    font-size: 2rem


</style>
