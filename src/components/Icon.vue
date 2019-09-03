<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="icon"
    :class="color"
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    v-html="icon"
  />
</template>

<script>
import icons from "@/assets/icons.js";

export default {
  name: "Icon",

  props: {
    name: {
      type: String,
      default: undefined
    },
    size: {
      type: [String, Number],
      default: 18
    },
    color: {
      type: String,
      default: 'white'
    }
  },

  computed: {
    icon() {
      if (icons[this.name]) {
        return icons[this.name];
      } else {
        console.error("Name of icon is not correct");
        return undefined;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
  svg {
    transition: fill 100ms;
    position: relative;
  }

  .white {
    fill: $white;
  }

  .white-2 {
    fill: $white-2;
  }

  .black {
    fill: $black;
  }

  .black-2 {
    fill: $black-2;
  }

  .accent-gray {
    fill: $accent-gray;
  }
</style>
