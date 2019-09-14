<template>
  <div id="app-mount">
    <div class="title-bar" @dblclick="maximize"></div>
    <Nav />
    <div class="view-container" :class="{ 'view-container--full': !navIsOpen }">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Nav from "@/components/Nav";
const { BrowserWindow } = require('electron').remote

export default {
  components: {
    Nav,
  },
  computed: {
    navIsOpen() {
      return this.$store.state.navIsOpen;
    },
  },
  methods: {
    maximize() {
      const window = BrowserWindow.getFocusedWindow();
      window.isMaximized() ? window.unmaximize() : window.maximize();
    },
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    height: 5px;
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.452);
    border-radius: 10px;
  }
}

#app-mount {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: $white;
  background: $black;
  height: 100vh;
  width: 100vw;
  position: absolute;
  flex-flow: row wrap;
  user-select: none;
}

.title-bar {
  text-align: center;
  height: 22px;
  width: 100%;
  background: $black-2;
  padding-left: 70px;
  position: fixed;
  -webkit-app-region: drag;
}

.view-container {
  margin: 22px 0 0 316px;
  transition: margin 350ms cubic-bezier(0.215, 0.61, 0.355, 1);

  &--full {
    margin-left: 0;
  }
}
</style>
