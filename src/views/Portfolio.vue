<template lang="html">
  <div class="portfolio">
    <compBusemannen v-if="controller.index === 1"></compBusemannen>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      controller: {
        index: this.$store.state.navIndex
      }
    }
  },
  created () {
    console.log(this.$store.state.navIndex)
  },
  methods: {
  }
}
</script>

<style lang="sass" scoped>
</style>
