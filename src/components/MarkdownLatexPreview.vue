<template>
  <div>
    <el-input type="textarea" :autosize="{ minRows: 5, maxRows: 5 }" placeholder="输入内容" v-model="input"></el-input>
    <div v-html="parsedContent"></div>
  </div>
</template>

<script>
import marked from "marked";
import katex from "katex";

export default {
  data() {
    return {
      input: "",
    };
  },
  computed: {
    parsedContent() {
      let content = this.input;

      // Replace various LaTeX formats with rendered LaTeX
      content = content.replace(/\$\$([\s\S]*?)\$\$/g, (_, match) => renderLatex(match, true));
      content = content.replace(/\\\[(.*?)\\\]/g, (_, match) => renderLatex(match, true));
      content = content.replace(/\\\[([\s\S]*?)\\\]/g, (_, match) => renderLatex(match, true));
      content = content.replace(/\\\((.*?)\\\)/g, (_, match) => renderLatex(match));
      content = content.replace(/\$(.*?)\$/g, (_, match) => renderLatex(match));

      return marked(content);
    },
  },
};

function renderLatex(formula, isDisplayMode = false) {
  try {
    return katex.renderToString(formula, {
      throwOnError: false,
      displayMode: isDisplayMode,
    });
  } catch (e) {
    console.error(e);
    return formula;
  }
}
</script>

<style>
/* Import KaTeX styles */
@import "~katex/dist/katex.min.css";
</style>
