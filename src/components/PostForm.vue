<template>
  <form @submit.prevent>
    <h4>Создание поста</h4>
    <main-input
        v-focus
        v-model:value="post.title"
        type="text"
        placeholder="Название">
    </main-input>
    <main-input
        v-model:value="post.body"
        type="text"
        placeholder="Описание">
    </main-input>
    <main-button
        class="btn"
        @click="createPost">
      Создать
    </main-button>
  </form>
</template>

<script>
export default {
  name: "PostForm",
  data() {
    return {
      post: {
        title: '',
        body: '',
      }
    }
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit('create', this.post);
      this.post = {
        title: '',
        body: '',
      }
    }
  },
}
</script>

<style scoped>

</style>