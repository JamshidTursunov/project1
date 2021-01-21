<template>
  <div class="inputControl">
    <input
      v-if="controlType === 'input'"
      v-bind="$attrs"
      :value="value"
      @input="$emit('input', $event.target.value)"
      :placeholder="inputPlaceholder"
      :type="type"
      :id="type"
      :class="{
        inputControl__hidden: type == 'file',
      }"
      required
    />
    <label v-if="type == 'file'" :for="type"
      ><span>Select file</span><span>Upload</span></label
    >
    <textarea
      v-if="controlType === 'textarea'"
      :rows="rows"
      :value="value"
      @input="$emit('input', $event.target.value)"
      :placeholder="textPlaceholder"
      required
    ></textarea>
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: {
    controlType: {
      type: String,
      default: 'input',
    },

    rows: {
      type: String,
      default: '10',
    },

    inputPlaceholder: {
      type: String,
      required: true,
    },

    textPlaceholder: {
      type: String,
      default: '',
    },

    type: {
      type: String,
      default: 'text',
    },
  },
}
</script>

<style></style>
