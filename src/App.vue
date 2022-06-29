<template>
  <div id="app">
    <p-form
        @create="createPost"/>
    <p-list
        :posts="posts"/>
  </div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";

export default {
  components: {
    pForm: PostForm,
    pList: PostList,
  },
  data() {
    return {
      posts: [
        {id: 1, title: 'JavaScript-1', body: 'Описание поста 1'},
        {id: 2, title: 'JavaScript-2', body: 'Описание поста 2'},
        {id: 3, title: 'JavaScript-3', body: 'Описание поста 3'},
      ],
    }
  },
  methods: {
    createPost(post) {
      this.posts.push(post)
    },
  },
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

</style>
