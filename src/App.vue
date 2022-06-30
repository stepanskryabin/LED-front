<template>
  <div id="app">
    <main-dialog v-model:show="showDialog">
    <p-form
        @create="createPost"/>
    </main-dialog>
    <main-button
        @click="showDialog = true"
        style="margin: 15px 0"
    >
      Создать пост
    </main-button>
    <p-list
        :posts="posts"
        @remove="removePost"/>
  </div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import axios from "axios";

export default {
  components: {
    pForm: PostForm,
    pList: PostList,
  },
  data() {
    return {
      posts: [],
      showDialog: false,
    }
  },
  props: {
    show: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
      this.showDialog = false;
    },
    removePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id);
    },
    async fetchPosts() {
      try {
        let response = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=10");
        this.posts = response.data
      } catch(err) {
        alert(err)
      }
    }
  },
  mounted() {
    this.fetchPosts();
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
