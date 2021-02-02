<template>
  <div id="div" @click="slideUp">
    {{ lorem }}
  </div>
</template>

<script>
import {defineComponent} from "vue";
import SlidesJS from "@azenox/slidesjs/SlidesJS.js";

export default defineComponent({
  name: "Slide",
  data() {
    return {
      lorem: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A beatae, deleniti facilis fugit harum, laboriosam maiores modi perferendis quod reprehenderit soluta suscipit unde! Aliquid amet minima nihil, perferendis provident repellat."
    }
  },
  methods: {
    slideUp(e) {
      const el = e.target;
      new SlidesJS(el).slideToggleY();
    }
  }
})
</script>

<style scoped>
#div{
  background: orange;
  margin: 2em;
  padding: 2em;
}
</style>