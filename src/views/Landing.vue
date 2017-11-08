<template lang="html">
  <div class="landing">
    <compStyleone v-bind:content="content" v-if="content.index === 1"></compStyleone>
    <compStyletwo v-bind:content="content" v-if="content.index === 2"></compStyletwo>
    <compStylethree v-bind:content="content" v-if="content.index === 3"></compStylethree>
    <!-- <div v-on:click="nextStyle" id="logo1">Logo</div> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      content: {
        index: 1,
        styles: 3,
        title: 'Identitet',
        ingress: 'Identitet, personlighet, den man er. Identitet kan også betegne ens selvbilde eller selvoppfatning.',
        bodyTxt: 'I psykologien brukes identitet om den del av personens selvoppfatning som oppleves som særlig sentral, ekte og typisk for vedkommende. «Å finne sin identitet» vil si å danne et selvbilde man føler man kan akseptere og leve opp til, og så etablere en livsstil som svarer til dette bildet. Usikker selvidentitet forekommer hyppig ved alvorlige personlighetsforstyrrelser. En opplevelse av helt å miste sin identitet kan forekomme ved psykoser (schizofreni) og av og til ved alvorlige hjerneskader eller -sykdommer.',
        endTxt: '',
        contact: '',
        adress: ''
      }
    }
  },
  created () {
    console.log(this.content.styles)
  },
  methods: {
    // when logo button is clicked
    nextStyle: function () {
      // checks if index is the same as number of styles
      if (this.content.index === this.content.styles) {
        // if true; logo id goes back to logo1
        document.getElementById('logo' + this.content.index).id = 'logo1'
        // if true; index resets to 1
        this.content.index = 1
        console.log('style: ' + this.content.index)
      } else {
        // targets logo id
        let logo = document.getElementById('logo' + this.content.index)
        // adds one number to the index
        this.content.index++
        console.log('style: ' + this.content.index)
        // adds one number to the logo id
        logo.id = 'logo' + this.content.index
      }
    }
  }
}
</script>

<style lang="sass" scoped>
  .landing
    font-size: 16px
    max-width: 400px
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
