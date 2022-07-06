<template>
  <div class="post-list" @click="trace">
    <h1>ТУТ ПОСТ ID = {{$route.params.id}}</h1>
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