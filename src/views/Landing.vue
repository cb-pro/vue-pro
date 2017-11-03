<template lang="html">
  <div class="landing">
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
      tags: ''
    }
  },
  created () {
    this.getPosts()
  },
  beforeUpdate () {
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
        // // TAGS **********************
        // // creates an empty array where the updated categories is stored
        // var updatetTags = []
        // // looping through categories of each post in posts
        // eachPost.tags.forEach(function (tagsID) {
        //   // pushing the name of the matching ids into the empty array
        //   updatetTags.push(tags.find(function (a) {
        //     // finds the matching ids of post id and categories id
        //     return a.id === tagsID
        //   }).name)
        // })
        // eachPost.tags = updatetTags
      })
      return posts
    }
    setPostsCategories(this.posts, this.categories, this.tags)
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

      axios.get('http://wp.christofferbogsti.com/wp-json/wp/v2/tags?per_page=100')
        .then(function (response) {
          // console.log(response.data)
          _this.tags = response.data
        })

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
