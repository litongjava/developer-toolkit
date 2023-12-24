<template>
<div class="json-format-container">
  <button @click="formatAndDisplayJson" class="format-button">Format</button>
  <textarea v-model="jsonInput" class="json-input" placeholder="Enter JSON here"></textarea>
  <div v-if="formattedJson">
    <json-tree :data="formattedJson"></json-tree>
  </div>
</div>
</template>

<script>
import JsonTree from './JsonTree.vue';

export default {
  name: "JsonFormat",
  components: {JsonTree},
  data() {
    return {
      jsonInput: '',
      formattedJson: null,
    }
  },
  methods: {
    formatAndDisplayJson() {
      try {
        this.formattedJson = JSON.parse(this.jsonInput);
        this.jsonInput=JSON.stringify(this.formattedJson, null, 2);
      } catch (e) {
        alert('Invalid JSON format',e);
        this.formattedJson = null;
      }
    }
  }
}
</script>

<style scoped>
.json-format-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 10px;
}
.json-input {
  height: 50%;
  width: 100%;
  margin-bottom: 10px;
}

.format-button {
  margin-bottom: 10px;
}
</style>