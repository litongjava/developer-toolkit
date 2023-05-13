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
      </el-row>
    </div>

    <el-input
        type="textarea"
        :autosize="{ minRows: 5, maxRows: 5}"
        placeholder="输入内容"
        v-model="input">
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
      output: '',
      toolkit: toolkit
    }
  },
}
</script>