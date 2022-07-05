<template>
  <div
      v-for="page in pageMax"
      class="pagination"
      :key="page">
    <button
        class="btn-pag"
        :class="{
          'current-page': page === currentPage
        }"
        @click="nextPage"
        :value="page"
    >{{ page }}</button>
  </div>

</template>

<script>
export default {
  name: "mainPag",
  props: {
    pageMax: {
      type: [String, Number],
    },
    currentPage: {
      type: [String, Number],
    }
  },
  methods: {
    nextPage(event) {
      this.$emit('nextPage', Number(event.target.value))
    }
  }
}
</script>

<style scoped>
.pagination {
  border: chocolate;
  display: grid;
  grid-template-columns: 50px;
  margin-top: 15px;
}
.btn-pag {
  padding: 10px 15px;
  background: none;
  color: black;
  border: 1px solid aqua;
}
.current-page {
  background: chocolate;
  border: 2px solid aqua;
}
</style>