<template>
  <post-item
      v-for="post in posts"
      :post="post"
      :key="post"
  />
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