<template lang="html">
  <div class="about">
    <h1>{{ posts.title }}</h1>
    <div v-html="posts.content"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      posts: {
        title: 'Om meg',
        content: '<p>Studerte grafisk design ved Høyskolen Kristiania og har en bachelorgrad i design og web-utvikling fra Deakin University i Australia. Har jobbet som designer i Cappelen Damm forlag og vunnet pris for beste eBok app på Årets vakreste Bøker.</p><p>Jobber nå som Freelance Designer og Frontend-utvikler og holder til i Oslo. Har du en nettside du ønsker å realisere? Jeg kan designe og bygge den for deg.</p><p>Send meg en melding og jeg kommer straks tilbake til deg</p><p>post@christofferbogsti.com</p>'
      }
    }
  }
}
</script>

<style lang="sass" scoped>
  @import '../assets/sass/global.sass'

  .about
    font-family: $primary-font
    font-size: 16px
    left: 7%
    position: relative
    width: 86%
</style>
