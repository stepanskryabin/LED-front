<template>
  <div class="post">
    <div><strong>Номер поста: </strong>{{ post.id }}</div>
    <div><strong>Название: </strong>{{ post.title }}</div>
    <div><strong>Описание: </strong>{{ post.body }}</div>
    <main-button
        :post="post"
        @click="$router.push(`/post/${post.id}`)">
      Открыть</main-button>
    <main-button
      @click="$emit('remove', post)">
      Удалить</main-button>
  </div>
</template>

<script>
export default {
  name: "PostItem",
  props: {
    post: {
      type: Object,
      required: true,
    }
  },
}
</script>

<style scoped>
.post {
  padding: 15px;
  margin-top: 15px;
  border: 3px aqua solid;
}
</style>