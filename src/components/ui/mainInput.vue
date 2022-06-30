<template>
  <input
      :value="value"
      @input="updateInput"
      class="input"
      type="text">
</template>

<script>
export default {
  name: "mainInput",
  props: {
    value: [String, Number],
  },
  methods: {
    updateInput(event) {
      this.$emit('update:value', event.target.value)
    }
  }
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