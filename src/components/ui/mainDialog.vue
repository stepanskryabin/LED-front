<template>
  <div class="_modal_dialog" v-if="show" @click="hideDialog">
    <div class="_modal_dialog_content" @click.stop>
      <slot></slot>
    </div>
  </div>

</template>

<script>
export default {
  name: "mainDialog",
  props: {
    show: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    hideDialog() {
      this.$emit('update:show', false)
    },
  }
}
</script>

<style scoped>
._modal_dialog {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0,0,0,0.5);
  position: fixed;
  display: flex;
}

._modal_dialog_content {
  margin: auto;
  min-height: 150px;
  min-width: 600px;
  background: bisque;
  border-radius: 12px;
  padding: 20px;
}
</style>