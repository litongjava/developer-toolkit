<template>
  <div id="app">
    <HeaderNav />
    <router-view></router-view>
  </div>
</template>
<script>
import HeaderNav from "@/components/HeaderNav.vue";
export default {
  components: {
    HeaderNav,
  },
  data() {
    return {
      activeName: "second",
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
