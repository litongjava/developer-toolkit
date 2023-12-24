<template>
<div>
  <ul>
    <li v-for="(value, key) in data" :key="key">
      <span @click="toggle(key)">{{ key }}: </span>
      <span v-if="isLeaf(value)">{{ value }}</span>
      <json-tree v-else-if="isOpen(key)" :data="value"></json-tree>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  name: "JsonTree",
  props: {
    data: Object
  },
  data() {
    return {
      open: {}
    };
  },
  methods: {
    toggle(key) {
      this.$set(this.open, key, !this.open[key]);
    },
    isOpen(key) {
      return this.open[key];
    },
    isLeaf(value) {
      return typeof value !== 'object' || value === null;
    }
  }
}
</script>
