<template lang="html">
  <div class="nav">
    <router-link class="nav-items home" to="/">Home</router-link>
    <router-link class="nav-items about" to="/about">About</router-link>
    <router-link class="nav-items portfolio" to="/portfolio">
      <div class="prev-project">
        <i class="fa fa-angle-left"></i>
      </div>
      <div class="next-project" @click.native="">
        <i class="fa fa-angle-right"></i>
      </div>

      Portfolio
    </router-link>
  </div>
</template>

<script>
export default {
  methods: {
  }
}
</script>

<style lang="sass" scoped>
  @import '../assets/sass/global.sass'

  .nav
    // border: $bframe
    bottom: 20px
    display: flex
    font-family: $primary-font
    font-size: 13px
    left: 7%
    position: fixed
    text-transform: uppercase
    width: 86%
    z-index: 80
    .nav-items
      // border: $bframe
      // border: 2px solid #ffffff
      box-sizing: border-box
      background: #000000
      color: #ffffff
      margin: 0 6px
      padding: 15px 0
      position: relative
      text-align: center
      text-decoration: none
      .prev-project
        // background: red
        border: $bframe
        box-sizing: border-box
        cursor: pointer
        display: flex
        justify-content: center
        align-items: center
        height: 100%
        position: absolute
        left: 0
        top: 0
        width: 20%
        i
          font-size: 26px
          margin-top: -3%
      .next-project
        // background: red
        border: $bframe
        box-sizing: border-box
        cursor: pointer
        display: flex
        justify-content: center
        align-items: center
        height: 100%
        position: absolute
        right: 0
        top: 0
        width: 20%
        i
          font-size: 26px
          margin-top: -3%
    .home
      margin-left: 0
      width: 20%
    .about
      width: 20%
    .portfolio
      margin-right: 0
      width: 60%




</style>
