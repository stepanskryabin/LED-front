<template>
    <main-input
        v-focus
        v-model:value="this.$store.state.searchQuery"
        type="text"
        placeholder="Поиск"></main-input>
    <div class="post-btn">
      <main-dialog v-model:show="this.$store.state.showDialog">
        <p-form
            @create="createPost"/>
      </main-dialog>
      <main-button
          @click="this.$store.commit('changeShowDialog', true)"
          style="margin: 15px 0"
      >
        Создать пост
      </main-button>
    </div>
    <div class="select">
      <main-select
          v-model="this.$store.state.selectedSort"
          :options="this.$store.state.sortOptions"
      />
    </div>
    <p-list
        :posts="this.$store.state.posts"
        @remove="removePost"/>
  <div
      v-if="this.$store.state.currentPage < this.$store.state.pageMax"
      v-intersection="loadPosts"
      class="observer">
      <p>Загружаю...</p>
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
      this.$store.commit('addPost', post)
      this.$store.commit('changeShowDialog', false)
    },
    removePost(post) {
      this.$store.commit('removePost', post)
    },
  },
  mounted() {
    this.$store.;
  },
  watch: {
    'searchQuery': function (newValue) {
      this.$store.commit('setSearchQuery', newValue)
      },
    'selectedSort': function (newValue) {
      this.$store.commit('sortedPosts', newValue)
    }
    // 'selectedSort': function (newValue) {
    //   this.$store.state.posts.sort((post1, post2) => {
    //     return post1[newValue].toString()?.localeCompare(post2[newValue].toString())
    //   })
    // },
    // 'searchQuery': function (newValue) {
    //   if (newValue === '') {
    //     this.$store.state.posts = this.$store.state.posts_back
    //   } else {
    //     this.$store.state.posts = this.$store.state.posts.filter(post => post.title.includes(newValue))
    //   }
    // },
  },
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.select {
  display: flex;
  justify-content: space-between;
}
.post-btn {
  margin: 15px 0;
  display: compact;
  justify-content: space-around;
}
.observer {
  height: 50px;
  background: aquamarine;
}
</style>