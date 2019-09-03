<template>
  <div id="app-mount">
    <div class="title-bar" @dblclick="maximize">
      <span class="title-bar__title">Notes</span>
    </div>
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
  overflow: hidden;
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  user-select: none;
  min-width: 500px;
  min-height: 700px;
}

.title-bar {
  text-align: center;
  height: 22px;
  width: -webkit-fill-available;
  background: #31343c;
  padding-left: 70px;
  -webkit-app-region: drag;

  &__title {
    font-size: 12px;
    font-weight: 500;
  }
}
</style>
