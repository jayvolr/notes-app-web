<template>
  <div id="app-mount">
    <div class="title-bar" @dblclick="maximize"></div>
    <Nav />
    <router-view/>
  </div>
</template>

<script>
import Nav from "@/components/Nav";
const { BrowserWindow } = require('electron').remote

export default {
  components: {
    Nav,
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
  overflow: hidden;
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
  -webkit-app-region: drag;
}
</style>
