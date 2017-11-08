<template lang="html">
  <div class="about">
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
  data () {
    return {
      content: {
        title: 'Christoffer Bogsti',
        ingress: 'Frontend-utvikler med bakgrunn fra grafisk design',
        bodyTxt: 'Studerte grafisk design ved Høyskolen Kristiania og har en bachelorgrad i design og web-utvikling fra Deakin University i Australia. Har jobbet som designer i Cappelen Damm forlag og vunnet pris for beste eBok app på Årets vakreste Bøker.',
        endTxt: 'Jobber nå som Freelance Frontend-utvikler og holder til i Oslo. Har du en nettside du ønsker å realisere? Jeg kan designe og bygge den for deg.',
        contact: 'Send meg en melding og jeg kommer straks tilbake til deg',
        adress: 'post@christofferbogsti.com'
      }
    }
  }
}
</script>

<style lang="sass" scoped>
  .about
    font-size: 16px
    max-width: 400px
</style>
