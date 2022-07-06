<template>
    <main-input
        v-model:value="searchQuery"
        type="text"
        placeholder="Поиск"></main-input>
    <div class="post-btn">
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
    </div>
    <div class="select">
      <main-select
          v-model="selectedSort"
          :options="sortOptions"
      />
    </div>
    <p-list
        :posts="posts"
        @remove="removePost"/>
  <div
      v-if="currentPage < pageMax"
      ref="observer"
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
      posts_back: [],
      posts: [],
      query: '',
      showDialog: false,
      selectedSort: '',
      searchQuery: '',
      currentPage: 1,
      postLimit: 10,
      pageMax: 10,
      sortOptions: [
        {value: 'title', name: 'По названию'},
        {value: 'body', name: 'По описанию'},
        {value: 'id', name: 'По номеру'},
      ]
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
        let response = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=10",
            {params: {_limit: this.postLimit,
                _page: this.currentPage
              }});
        this.pageMax = Math.ceil(response.headers['x-total-count'] / this.postLimit)
        this.posts = response.data
        this.posts_back = this.posts
      } catch(err) {
        alert(err)
      }
    },
    async loadPosts() {
      this.currentPage++;
      try {
        let response = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=10",
            {params: {
                _limit: this.postLimit,
                _page: this.currentPage
              }});
        this.pageMax = Math.ceil(response.headers['x-total-count'] / this.postLimit)
        this.posts = [...this.posts, ...response.data]
        this.posts_back = this.posts
      } catch(err) {
        alert(err)
      }
    },
  },
  mounted() {
    this.fetchPosts();
    let options = {
      rootMargin: '0px',
      threshold: 1.0
    };
    // eslint-disable-next-line no-unused-vars
    let callback = (entries, observer) => {
      if (entries[0].isIntersecting) {
        this.loadPosts()
      }
    }
    let observer = new IntersectionObserver(callback, options);
    observer.observe(this.$refs.observer)
  },
  watch: {
    'selectedSort': function (newValue) {
      this.posts.sort((post1, post2) => {
        return post1[newValue].toString()?.localeCompare(post2[newValue].toString())
      })
    },
    'searchQuery': function (newValue) {
      if (newValue === '') {
        this.posts = this.posts_back
      } else {
        this.posts = this.posts.filter(post => post.title.includes(newValue))
      }
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