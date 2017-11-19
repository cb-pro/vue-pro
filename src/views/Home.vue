<template lang="html">
  <div class="home">
    <compStyleone :posts="posts" v-if="controller.index === 1"></compStyleone>
    <compStyletwo :posts="posts" v-if="controller.index === 2"></compStyletwo>
    <compStylethree :posts="posts" v-if="controller.index === 3"></compStylethree>
    <!-- <div v-on:click="nextStyle" id="logo1">Logo</div> -->



  </div>
</template>

<script>
export default {
  data () {
    return {
      controller: {
        index: 1,
        styles: 3
      },
      posts: {
        title: 'Christoffer Bogsti',
        content: '<p>Designer & Utvikler</p></p><strong>En visuell identitet kan gjenkjennes på under et sekund hvis det er godt utviklet.</strong></p><p>Det finnes mange måter å kommunisere på som kan gjenspeile din identitet og dine holdninger. Måten man snakker på, kroppsspråk, klær, frisyre, eiendeler og mye mer.</p><p>Disse verdiene kan også kommuniseres med visuelle elementer. Med bruken av former, farger og typografi kan man uttrykke seg, men det trengs et femte element for å bli husket.</p>'
      }
    }
  },
  methods: {
    // when logo button is clicked
    // nextStyle: function () {
    //   // checks if index is the same as number of styles
    //   if (this.content.index === this.content.styles) {
    //     // if true; logo id goes back to logo1
    //     document.getElementById('logo' + this.content.index).id = 'logo1'
    //     // if true; index resets to 1
    //     this.content.index = 1
    //     console.log('style: ' + this.content.index)
    //   } else {
    //     // targets logo id
    //     let logo = document.getElementById('logo' + this.content.index)
    //     // adds one number to the index
    //     this.content.index++
    //     console.log('style: ' + this.content.index)
    //     // adds one number to the logo id
    //     logo.id = 'logo' + this.content.index
    //   }
    // }
  }
}
</script>

<style lang="sass" scoped>
  .home
    font-size: 16px
    left: 7%
    position: relative
    width: 86%
  #logo1
    background: black
    color: white
    display: inline
    padding: 10px
    transition: 200ms ease-in-out
  #logo2
    background: crimson
    color: white
    display: inline
    padding: 10px
    transition: 200ms ease-in-out
  #logo3
    background: blue
    color: white
    display: inline
    padding: 10px
    transition: 200ms ease-in-out
</style>
