<template>
  <div class="post">
    <div><strong>Название: </strong>{{ post.title }}</div>
    <div><strong>Описание: </strong>{{ post.body }}</div>
    <main-button>Удалить</main-button>
  </div>
</template>

<script>
import mainButton from "@/components/ui/mainButton";

export default {
  name: "PostItem",
  components: {
    mainButton,
  },
  props: {
    post: {
      type: Object,
      required: true,
    }
  },
  methods: {
    deletePost() {
      return null
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