<template>
  <div class="form-input">
    <label v-if="label">{{ label }}</label>
    <input
      v-model="value"
      :type="type"
      :class="color"
      :autofocus="autofocus"
      :disabled="disabled"
    />
  </div>
</template>

<script>
export default {
  name: 'FormInput',
  props: {
    label: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: 'text'
    },
    color: {
      type: String,
      default: null
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      value: ''
    };
  }
};
</script>
