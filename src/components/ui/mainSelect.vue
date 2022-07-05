<template>
  <select
      :value="modelValue"
      @change="changeOption">
    <option
        disabled
        value=""
        class="option">
      Выберите из списка
    </option>
    <option
        v-for="option in options"
        :value="option.value"
        class="option"
        :key="option.value">
      {{option.name}}
    </option>
  </select>
</template>

<script>
export default {
  name: "mainSelect",
  props: {
    modelValue: {
      type: String
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    changeOption(event) {
      console.log(event.target.value)
      this.$emit('update:modelValue', event.target.value)
    }
  },
}
</script>

<style scoped>
.option {
  min-width: 100px;
  min-height: 15px;
}
</style>