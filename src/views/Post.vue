<template lang="html">
  <div class="post">
    <router-link to="/">landing</router-link>
    <h3>{{ this.post[0].title.rendered }}</h3>
    <p v-html="this.post[0].content.rendered"></p>
    <span v-for="category in categories">
      {{ category.name }}
    </span>
    <br>
    <span v-for="tag in tags">
      {{ tag.name }}
    </span>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      slugParam: this.$route.params.slug,
      post: [
        {
          title: {
            rendered: ''
          },
          content: {
            rendered: ''
          }
        }
      ],
      categories: [],
      tags: []
    }
  },
  created () {
    let _this = this
    axios.get('http://wp.christofferbogsti.com/wp-json/wp/v2/posts?slug=' + this.slugParam)
      .then(function (response) {
        // console.log(response.data)
        _this.post = response.data
        _this.updateCall()
      })
  },
  methods: {
    updateCall: function () {
      console.log(this.post[0].id)
      let _this = this
      // GET CATEGORIES
      axios.get('http://wp.christofferbogsti.com/wp-json/wp/v2/categories?post=' + this.post[0].id)
        .then(function (response) {
          // console.log(response.data)
          _this.categories = response.data
        })
      // GET TAGS
      axios.get('http://wp.christofferbogsti.com/wp-json/wp/v2/tags?post=' + this.post[0].id)
        .then(function (response) {
          // console.log(response.data)
          _this.tags = response.data
        })
    }
  }
}
</script>

<style lang="sass" scoped>
</style>
