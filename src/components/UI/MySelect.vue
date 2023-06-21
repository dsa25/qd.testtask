<template>
  <select @change="changeOption" class="select" name="" id="">
    <option v-if="optionDefault" :disabled="firstDisabled" selected>{{ optionDefault }}</option>
    <option v-for="option in options" :key="option.value" :value="option.value" :selected="modelValue == option.value">
      {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: "MySelect",
  props: {
    modelValue: {
      type: String
    },
    options: {
      type: Array,
      default: () => []
    },
    optionDefault: {
        type: String
    },
    firstDisabled: {
        type: Boolean
    }
  },
  methods: {
    changeOption(event) {
      this.$emit("update:modelValue", event.target.value)
    }
  }
}
</script>

<style>
.select {
  min-width: 125px;
  height: var(--heightField);
  border: 2px solid currentColor;
  border-radius: 3px;
}
</style>
