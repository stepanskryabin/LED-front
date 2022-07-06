<template>
  <div class="navbar">
    <dev @click="$router.push('/')" class="link">Сайт</dev>
    <div class="link-btn">
      <button @click="$router.push('/post')" class="link">Посты</button>
      <button @click="$router.push('/about')" class="link">О нас</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "mainNavbar"
}
</script>

<style scoped>
.navbar {
  margin: 0;
  height: 50px;
  background: green;
  display: flex;
  align-items: center;
}
.link {
  border: solid black;
  margin: 10px
}
.link-btn {
  margin-left: auto;
}
</style>