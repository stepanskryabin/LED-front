<template>
  <div class="post-list">
    <h1>ТУТ ПОСТ ID = {{$route.params.id}}</h1>
    <h1>ТУТ ПОСТ LIKES = {{ $store.state.likes }}</h1>
  </div>
</template>

<script>
export default {
  name: "PostIdPage",
  props: {
    post: {
      type: Array,
    }
  },
}
</script>

<style scoped>
.post-list {
  margin: 10px;
}
</style>