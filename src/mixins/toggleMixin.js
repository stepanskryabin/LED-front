export default {
  name: 'toggleMixin',
  methods: {
    hideDialog() {
      this.$emit('update:show', false)
    },
  },
  props: {
    show: {
      type: Boolean,
      default: true,
    },
  },
  mounted() {
  },
}