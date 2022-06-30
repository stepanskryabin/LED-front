<template>
  <div v-if="posts.length > 0">
    <h3>Список постов</h3>
  <post-item
      v-for="post in posts"
      :post="post"
      :key="post.id"
      @remove="$emit('remove', post)"
  />
  </div>
  <div v-else>
    <h3>Список постов пуст</h3>
  </div>
</template>

<script>
import PostItem from "@/components/PostItem";

export default {
  name: "PostList",
  components: {
    PostItem,
  },
  props: {
    posts: {
      type: Array,
      require: true,
    }
  },
}
</script>

<style scoped>

</style>