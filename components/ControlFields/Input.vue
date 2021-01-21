<template>
  <div class="input-control">
    <input
      v-if="controlType === 'input'"
      v-bind="$attrs"
      :value="value"
      @input="$emit('input', $event.target.value)"
      :placeholder="inputPlaceholder"
      :type="type"
      :id="type"
      :class="{
        hidden: type == 'file',
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

<style scoped>
.input-control {
  position: relative;
}

.input-control input,
.input-control textarea {
  display: block;
  width: 100%;
  box-sizing: border-box;
  font-family: inherit;
  border: 2px solid #ccc;
  padding: 0.5rem 1.2rem;
  margin-bottom: 1rem;
  border-radius: 5px;
  background-color: transparent;
}

.input-control input:focus,
.input-control textarea:focus {
  background-color: #eaeef3;
  outline: none;
}

.hidden {
  visibility: hidden;
}

label {
  position: absolute;
  top: 10%;
  left: 0;
  width: 100%;
  font-size: 16.5px;
  background-color: transparent;
  padding: 0.5rem 1.2rem;
  border-radius: 5px;
  color: #b6b3b3;
  border: 2px solid #ccc;
  display: flex;
  justify-content: space-between;
}

span:last-child {
  height: 100%;
  border-left: 2px solid #ccc;
  padding: 0 1.2rem;
}
</style>
