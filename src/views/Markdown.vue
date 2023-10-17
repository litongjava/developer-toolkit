<template>
  <MarkdownLatexPreview />
</template>

<script>
// @ is an alias to /src
import MarkdownLatexPreview from "@/components/MarkdownLatexPreview.vue";

export default {
  name: "HomeView",
  components: {
    MarkdownLatexPreview,
  },
};
</script>
