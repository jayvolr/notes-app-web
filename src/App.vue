<template>
  <div id="app-mount">
    <Nav />
    <div class="view-container" :class="{ 'view-container--full': !navIsOpen }">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Nav from "@/components/Nav";

export default {
  components: {
    Nav,
  },
  computed: {
    navIsOpen() {
      return this.$store.state.navIsOpen;
    },
  },
}
</script>

<style lang="scss">
body {
  margin: 0;
  overflow: hidden;
}

#app-mount {
  font-family: Roboto, Arial, sans-serif;
  color: $white;
  background: $black;
  height: 100%;
  width: 100%;
  position: absolute;
  flex-flow: row wrap;
  user-select: none;
}

.view-container {
  margin-left: 316px;
  transition: margin 350ms cubic-bezier(0.215, 0.61, 0.355, 1);
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;

  &--full {
    margin-left: 0;
  }
}

* {
  // For Chromium only
  &::-webkit-scrollbar {
    height: 8px;
    width: 8px;
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.068);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-corner, &::-webkit-resizer {
    background: transparent;
  }
}
</style>
