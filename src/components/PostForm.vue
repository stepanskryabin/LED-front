<template>
  <form @submit.prevent>
    <input
        v-model="post.title"
        class="input"
        type="text"
        placeholder="Название">
    <input
        v-model="post.body"
        class="input"
        type="text"
        placeholder="Описание">
    <main-button
        class="btn"
        @click="createPost">
      Создать
    </main-button>
  </form>
</template>

<script>
import mainButton from "@/components/ui/mainButton";

export default {
  name: "PostForm",
  components: {
    mainButton,
  },
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
.input {
  margin-top: 15px;
  width: max-content;
  border: 1px solid black;
  padding: 10px 15px;
  margin-right: 5px;
}
</style>