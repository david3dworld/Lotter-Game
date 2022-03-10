<template>
  <div class="form-button">
    <button :class="`${active ? 'active' : 'inactive'}`">
      <div
        v-if="loading"
        :class="`spinner-border ${color}`"
        role="status"
      ></div>
      <span v-if="!loading" :class="`label ${color}`">{{ label }}</span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'FormButton',
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    active: {
      type: Boolean,
      default: true
    },
    label: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    }
  }
};
</script>
