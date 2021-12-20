<template>
  <input type="checkbox" class="form-checkbox"
    @change="updateState" :checked="state">
</template>

<script>
export default {
  emits: ['update:state'],
  props: {
    state: Boolean,
    index: Number,
  },
  setup (props, { emit }) {
    const updateState = (event) => {
      emit('update:state', event.target.checked, props.index)
    }

    return { updateState }
  }
}
</script>
