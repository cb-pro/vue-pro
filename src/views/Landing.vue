<template lang="html">
  <div class="landing">
    <div v-for="post in posts">
      <h2>{{ post.title.rendered }}</h2>
      <p> {{ post.categories }} </p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      posts: {
      },
      convertCat: [
        {
          cats: ['Animals', 'Numbers']
        }
      ]
    }
  },
  created: function () {
    this.getPosts()
  },
  methods: {
    getPosts: function () {
      let _this = this

      axios.get('http://wp.christofferbogsti.com/wp-json/wp/v2/posts?per_page=5')
        .then(function (response) {
        // console.log(response.data)
          _this.posts = response.data
        })

        .catch(function (error) {
          _this.posts = 'An error occured.' + error
        })
    }
  }
}
</script>

<style lang="sass" scoped>
</style>
