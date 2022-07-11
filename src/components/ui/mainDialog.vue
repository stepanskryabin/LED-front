<template>
  <div class="_modal_dialog" v-if="show" @click="hideDialog">
    <div class="_modal_dialog_content" @click.stop>
      <slot></slot>
    </div>
  </div>

</template>

<script>
import toggleMixin from "@/mixins/toggleMixin";

export default {
  name: "mainDialog",
  mixins: [toggleMixin],
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