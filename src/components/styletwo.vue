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
  h1, p
    color: red

</style>
