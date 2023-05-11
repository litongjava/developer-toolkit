<template>
  <div class="app-container">
    <div>
      <el-row>
        <el-button type="primary" @click="stringMargeToOnLine">合并内容为一行</el-button>
      </el-row>

    </div>

    <el-input
        type="textarea"
        :autosize="{ minRows: 5, maxRows: 5}"
        placeholder="输入内容"
        v-model="inputString">
    </el-input>
    <div style="margin: 20px 0;">result:</div>
    <el-input
        type="textarea"
        :autosize="{ minRows: 5, maxRows: 5}"
        placeholder="输出内容"
        v-model="outputString">
    </el-input>
  </div>
</template>

<script>
export default {
  name: 'ToolKits',
  data() {
    return {
      inputString: '',
      outputString: ''
    }
  },
  methods:{
    stringMargeToOnLine(){
      // 使用正则表达式 /[\n\r\s]+/g 来匹配任何连续的换行和空格。[\n\r\s] 匹配换行符、回车符和空格，+ 匹配一个或多个连续的匹配项，g 表示全局匹配，即匹配整个字符串中的所有匹配项。最后，我们使用字符串的 replace 方法将匹配项替换为空字符串，从而删除它们
      this.outputString = this.inputString.replace(/[\n\r\s]+/g, "");
      //this.outputString= JSON.stringify(this.inputString).replace(/,/g, ",");
    }
  }
}
</script>