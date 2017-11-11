<template lang="html">
  <div class="landing">
    <router-link to="/post/black">black</router-link>
    <div v-for="post in posts">
      <h2>{{ post.title.rendered }}</h2>
      <p>Categories:</p>
      <router-link :to="'/'+ category" v-for="category in post.categories" :key="0"> {{ category }} </router-link>
      <br>
      <p>Tags:</p>
      <router-link :to="'/'+ tags" v-for="tags in post.tags" :key="0"> {{ tags }} </router-link>
      <hr>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      posts: '',
      categories: '',
      tags: '',
      tags0: '',
      tags100: '',
      tags200: '',
      tags300: ''
    }
  },
  created () {
    this.getPosts()
  },
  beforeUpdate () {
    this.tags = this.tags0.concat(this.tags100, this.tags200, this.tags300)
    // console.log(this.tags)
  },
  updated () {
    function setPostsCategories (posts, categories, tags) {
      posts.forEach(function (eachPost) {
        // CATEGORIES ***********************
        // creates an empty array where the updated categories is stored
        var updatetCategories = []

        // looping through categories of each post in posts
        eachPost.categories.forEach(function (categoriesID) {
          // pushing the name of the matching ids into the empty array
          updatetCategories.push(categories.find(function (a) {
            // finds the matching ids of post id and categories id
            return a.id === categoriesID
          }).name)
        })
        eachPost.categories = updatetCategories

        // TAGS **********************
        var updatetTags = []

        eachPost.tags.forEach(function (tagsID) {
          updatetTags.push(tags.find(function (b) {
            return b.id === tagsID
          }).name)
        })
        eachPost.tags = updatetTags
      })
      return posts
    }

    var _this = this
    setTimeout(function () {
      setPostsCategories(_this.posts, _this.categories, _this.tags)
    }, 0)

    // var _this = this
    // setTimeout(function () {
    //   console.log(_this.tags[290])
    // }, 3000)
  },
  methods: {
    getPosts: function () {
      let _this = this
      // let storePosts = ''

      // this.posts = storePosts

      axios.get('http://wp.christofferbogsti.com/wp-json/wp/v2/categories?per_page=100')
        .then(function (response) {
          // console.log(response.data)
          _this.categories = response.data
        })

      axios.get('http://wp.christofferbogsti.com/wp-json/wp/v2/tags?per_page=100&orderby=id')
        .then(function (response) {
          // console.log(response.data)
          _this.tags0 = response.data
        })

      axios.get('http://wp.christofferbogsti.com/wp-json/wp/v2/tags?per_page=100&orderby=id&offset=100')
        .then(function (response) {
          // console.log(response.data)
          _this.tags100 = response.data
        })

      axios.get('http://wp.christofferbogsti.com/wp-json/wp/v2/tags?per_page=100&orderby=id&offset=200')
        .then(function (response) {
          // console.log(response.data)
          _this.tags200 = response.data
        })

      axios.get('http://wp.christofferbogsti.com/wp-json/wp/v2/tags?per_page=100&orderby=id&offset=300')
        .then(function (response) {
          // console.log(response.data)
          _this.tags300 = response.data
        })

      axios.get('http://wp.christofferbogsti.com/wp-json/wp/v2/posts?per_page=4')
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
