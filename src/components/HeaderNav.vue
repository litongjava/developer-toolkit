<template>
  <div>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="/"><i class="el-icon-s-home"></i>Home</el-menu-item>
      <el-menu-item index="/markdown"><i class="el-icon-s-order"></i> Markdown</el-menu-item>
      <el-menu-item index="/about"><i class="el-icon-s-shop"></i>About</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "home",
    };
  },
  methods: {
    handleSelect(key, path) {
      if (this.$router.currentRoute.path !== key) {
        this.$router.push(key);
      }
    },
  },
};
</script>

<style></style>
