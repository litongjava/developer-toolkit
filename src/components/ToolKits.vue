<template>
  <div class="app-container">
    <div>
      <el-row>
        <el-button type="primary" @click="output = toolkit.stringMargeToOnLine(input)">merge content into one line
        </el-button>
        <el-button type="primary" @click="output=toolkit.underLineToCame(input)">underline to camel
        </el-button>
        <el-button type="primary" @click="output=toolkit.cameToUnderline(input)">camel to underline
        </el-button>
        <el-button type="primary" @click="output=toolkit.generateSQL(input,param1)">Generate SQL based on templates and
          parameters
        </el-button>
        <el-button type="primary" @click="output=toolkit.generateUUID()">generate UUID</el-button>
        <el-button type="primary" @click="output=toolkit.urlEncode(input)">URL Encode</el-button>
        <el-button type="primary" @click="output=toolkit.urlDecode(input)">URL Decode</el-button>
        <el-button type="primary" @click="output=toolkit.gitToHttp(input)">git to http</el-button>
        <el-button type="primary" @click="output=toolkit.httpToGit(input)">http to git</el-button>
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
        param2: '',
        param3: '',
        output: '',
        toolkit: toolkit
      }
    },
  }
</script>