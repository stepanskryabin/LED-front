<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "mainButton",
}
</script>

<style scoped>
.btn {
  padding: 10px 15px;
  background: none;
  color: black;
  border: 2px solid aqua;
}
</style>