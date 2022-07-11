import { createStore } from 'vuex';
import axios from "axios";

export default createStore({
  state: {
    likes: 666,
    posts: [],
    currentPage: 1,
    postLimit: 10,
    pageMax: 10,
    showDialog: false,
    selectedSort: '',
    searchQuery: '',
    sortOptions: [
      {value: 'title', name: 'По названию'},
      {value: 'body', name: 'По описанию'},
      {value: 'id', name: 'По номеру'},
    ]
  },
  getters: {
    selectedSort(state) {
      return [state.posts].sort((post1, post2) => {post1[state.selectedSort]?.localeCompare(post2[state.selectedSort])})
      },
    searchQuery(state, getters) {
      return getters.selectedSort.filter(post => post.title.toLowerCase().includes(state.searchQuery.toLowerCase()))
    },
  },
  mutations: {
    updatePosts (state, posts) {
      state.posts = posts
    },
    loadPosts (state, posts) {
      state.posts = [...state.posts, ...posts]
    },
    addPost(state, post) {
      state.posts.push(post)
    },
    setPageMax(state, value) {
      state.pageMax = value
    },
    setCurrentPage(state, value) {
      state.currentPage = value
    },
    removePost(state, post) {
      state.posts = state.posts.filter(p => p.id !== post.id)
    },
    changeShowDialog(state, newState) {
      state.showDialog = newState
    },
    setSearchQuery(state, query) {
      state.searchQuery = query
    },
    sortedPosts(state, newValue) {
      state.posts = state.posts.filter(post => post.title.includes(newValue))
    },
  },
  actions: {
    async fetchPosts({state, commit}) {
      try {
        let response = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=10",
        {params: {
          _limit: state.postLimit,
          _page: state.currentPage
        }});
        commit('setPageMax', Math.ceil(response.headers['x-total-count'] / state.postLimit))
        commit('updatePosts', response.data)
      } catch(err) {
        alert(err)
      }
    },
    async loadPosts({state, commit}) {
      commit('setCurrentPage', state.currentPage++);
      try {
        let response = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=10",
            {params: {
                _limit: state.postLimit,
                _page: state.currentPage
              }});
        commit('setPageMax', Math.ceil(response.headers['x-total-count'] / state.postLimit))
        commit('loadPosts', response.data)
      } catch(err) {
        alert(err)
      }
    },
  },
  modules: {}
})