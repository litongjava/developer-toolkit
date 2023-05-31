<template>
<div class="app-container">
  <div>
    <el-row>
      <el-button type="primary" @click="output = toolkit.stringMargeToOnLine(input)">合并内容为一行
      </el-button>
      <el-button type="primary" @click="output=toolkit.underLineToCame(input)">下划线转驼峰
      </el-button>
      <el-button type="primary" @click="output=toolkit.cameToUnderline(input)">驼峰转下划线
      </el-button>
      <el-button type="primary" @click="output=toolkit.generateSQL(input,param1)">根据模板和参数生成SQL
      </el-button>
    </el-row>
  </div>

  <div style="margin: 20px 0;">input:</div>
  <el-input
    type="textarea"
    :autosize="{ minRows: 5, maxRows: 5}"
    placeholder="输入内容"
    v-model="input">
  </el-input>

  <el-input
    type="textarea"
    :autosize="{ minRows: 1, maxRows: 5}"
    placeholder="param1"
    v-model="param1">
  </el-input>
  <el-input
    type="textarea"
    :autosize="{ minRows: 1, maxRows: 5}"
    placeholder="param2"
    v-model="param2">
  </el-input>
  <el-input
    type="textarea"
    :autosize="{ minRows: 1, maxRows: 5}"
    placeholder="param3"
    v-model="param3">
  </el-input>
  <div style="margin: 20px 0;">result:</div>
  <el-input
    type="textarea"
    :autosize="{ minRows: 5, maxRows: 5}"
    placeholder="输出内容"
    v-model="output">
  </el-input>
</div>
</template>

<script>
import toolkit from '../utils/toolkit';

export default {
  name: 'ToolKits',
  data() {
    return {
      input: '',
      param1: '',
      output: '',
      toolkit: toolkit
    }
  },
}
</script>