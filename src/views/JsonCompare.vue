<template>
<div class="json-compare-container">
  <div class="options">
    <label>
      <input type="checkbox" v-model="showMissingAttributes">
      Missing Attributes
    </label>
    <label>
      <input type="checkbox" v-model="showDifferentValues">
      Different Values
    </label>
  </div>
  <button @click="compareJson" class="compare-button">Compare</button>
  <div class="json-inputs">
    <div class="json-editor" v-for="(jsonInput, index) in [formattedJson1, formattedJson2]" :key="index">
      <div class="line-numbers">
        <div v-for="n in numberOfLines(jsonInput)" :key="n">{{ n }}</div>
      </div>
      <div class="json-input" contenteditable="true" @input="updateJson($event, index)">
        <pre v-html="highlightedJson[index]"></pre>
      </div>
    </div>
  </div>
  <div class="json-diff-output" v-html="diffOutput"></div>
</div>
</template>

<script>
import {isEqual, differenceWith, difference} from 'lodash';
import { create, formatters } from 'jsondiffpatch';

export default {
  name: "JsonCompare",
  data() {
    return {
      jsonInput1: this.getSavedJson('jsonInput1'),
      jsonInput2: this.getSavedJson('jsonInput2'),
      formattedJson1: '',
      formattedJson2: '',
      highlightedJson: ['', ''],
      showMissingAttributes: false,
      showDifferentValues: false,
      diffOutput: '', // 用于存储生成的差异 HTML
    }
  },
  methods: {
    compareJson() {
      this.formatJsonInputs();
      try {
        const obj1 = JSON.parse(this.jsonInput1);
        const obj2 = JSON.parse(this.jsonInput2);

        // 创建一个新的 DiffPatcher 实例
        const jsondiffpatchInstance = create();
        const delta = jsondiffpatchInstance.diff(obj1, obj2);

        // 使用 jsondiffpatch 的 HTML 格式化器生成差异的 HTML 表示
        this.diffOutput = formatters.html.format(delta, obj1);

      } catch (e) {
        alert(e);
      }
    },
    formatJsonInputs() {
      this.formattedJson1 = this.formatJson(this.jsonInput1);
      this.formattedJson2 = this.formatJson(this.jsonInput2);
    },
    formatJson(jsonStr) {
      try {
        return JSON.stringify(JSON.parse(jsonStr), null, 2);
      } catch (e) {
        return jsonStr; // Return original string if parsing fails
      }
    },
    highlightDifferences(jsonStr, diff) {
      // Implement your logic to highlight differences
      // This is a placeholder function
      return jsonStr.replace(/(".*?")/g, '<span style="color: blue;">$1</span>');
    },
    saveJson(key, json) {
      localStorage.setItem(key, json);
    },
    getSavedJson(key) {
      return localStorage.getItem(key) || '';
    },
    updateJson(event, index) {
      const jsonInput = `jsonInput${index + 1}`;
      this[jsonInput] = event.target.innerText;
      this.saveJson(jsonInput, this[jsonInput]);
    },
    numberOfLines(text) {
      return text.split('\n').length;
    },
  }
}
</script>

<style scoped>
html, body {
  height: 100%;
  margin: 0;
  width: 100%;
  overflow: hidden; /* Prevent scrolling on the body directly */
}

.json-compare-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw; /* Ensure it takes full viewport width */
}

.compare-button {
  align-self: center;
  margin-bottom: 10px; /* Provide spacing from the input areas */
}

.json-inputs {
  display: flex;
  flex-grow: 1; /* Let the input area grow to fill the container */
  width: 100%; /* Fill the width */
}

.json-editor {
  flex-grow: 1; /* Let each editor grow to fill the flex container */
  display: flex;
  margin: 0;
  border: 1px solid #ccc; /* Add border for clarity */
}

.line-numbers {
  padding: 5px;
  background-color: #eee;
  user-select: none; /* prevent selection */
  text-align: right;
  min-width: 30px; /* Set a minimum width */
}

.json-input {
  flex: 1;
  padding: 5px;
  overflow: auto;
  white-space: pre; /* Keep white space formatting */
}

.json-diff {
  width: 100%;
  overflow: auto; /* In case of overflow */
}

@media (max-width: 768px) {
  .json-inputs {
    flex-direction: column;
  }
}

.options {
  margin: 10px;
}

.json-editor code {
  white-space: pre-wrap;
}

.json-diff-output {
  /* 差异输出的样式 */
  padding: 10px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  overflow: auto;
}
</style>
