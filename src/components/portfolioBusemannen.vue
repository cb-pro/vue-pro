<template lang="html">
  <div id="busemannen">
    <agile :arrows="false" :dots="false" :speed="800" :autoplaySpeed="6000"
    :timing="'linear'" :fade="true"
    :autoplay="true" :pauseOnHover="false" class="busemannen">
      <div class="slide slide--1" :style="viewportHeight"></div>
      <div class="slide slide--2" :style="viewportHeight"></div>
      <div class="slide slide--3" :style="viewportHeight"></div>
      <div class="slide slide--4" :style="viewportHeight"></div>
      <div class="slide slide--5" :style="viewportHeight"></div>
    </agile>
  </div>
</template>

<script>
export default {
  data () {
    return {
      viewportHeight: {
        height: ''
      }
    }
  },
  created () {
    var varViewportHeight = window.innerHeight + 'px'
    this.viewportHeight.height = varViewportHeight
  }
}
</script>

<style lang="sass" scoped>
  .busemannen
    .slide
      background:
        position: center
        size: cover
      height: 500px
      width: 100%
      &--1
        background-image: url(../assets/img/busemannen/busemannen-illustrasjon-retouch.jpg)
      &--2
        background-image: url(../assets/img/busemannen/busemannen-skeleton.jpg)
      &--3
        background-image: url(../assets/img/busemannen/busemannen-ylvis_01.jpg)
      &--4
        background-image: url(../assets/img/busemannen/busemannen-ylvis_02.jpg)
      &--5
        background-image: url(../assets/img/busemannen/busemannen-ylvis_03.jpg)
</style>
