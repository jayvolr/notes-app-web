<template>
  <div>
    <div @click="toggleNav" class="nav-button">
      <Icon name="menu" size="24" />
    </div>

    <router-link to="/">
      <img class="mixnote-logo" src="/mixnote_white.png" alt="Mixnote Logo">
    </router-link>

    <div class="nav" :class="{ 'nav--closed': !navIsOpen }">
      <SearchBox />
      <Divider />
      <div class="nav__tabs">
        <router-link class="nav__tab nav__tab--active" to="/">
          <Icon name="notes" size="26" color="white"/>
          Notes
        </router-link>
        <Divider label="tags" />
        <div class="nav__tab">
          <Icon name="tag" size="26" color="white-2"/>
          Personal
        </div>
        <div class="nav__tab">
          <Icon name="tag" size="26" color="white-2"/>
          Work
        </div>
        <router-link to="/tag/dev" class="nav__tab">
          <Icon name="tag" size="26" color="white-2"/>
          Dev
        </router-link>
        <Divider />
        <div class="nav__tab">
          <Icon name="archive" size="26" color="white-2"/>
          Archive
        </div>
        <div class="nav__tab">
          <Icon name="trash" size="26" color="white-2"/>
          Trash
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from '@/components/Icon';
import SearchBox from '@/components/SearchBox';
import Divider from '@/components/Divider';

export default {
  name: "Nav",
  components: {
    Icon,
    SearchBox,
    Divider,
  },
  computed: {
    navIsOpen() {
      return this.$store.state.navIsOpen;
    },
  },
  methods: {
    toggleNav() {
      this.$store.commit('toggleNav');
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-button {
  position: fixed;
  left: 5px;
  top: 5px;
  padding: 12px;
  margin: 4px;
  height: 24px;
  border-radius: 50%;
  cursor: pointer;
  z-index: 2;

  &:hover {
    background: $black-2;
  }
}

.mixnote-logo {
  height: 30px;
  position: fixed;
  left: 68px;
  top: 15px;
  z-index: 3;
}

.nav {
  display: flex;
  flex-direction: column;
  left: 0;
  transition: transform 350ms cubic-bezier(0.215, 0.61, 0.355, 1);
  top: 60px;
  width: 300px;
  padding: 8px;
  align-items: center;
  position: fixed;
  background: transparent;
  overflow-y: auto;
  max-height: calc(100% - 60px);

  &::-webkit-scrollbar-thumb {
    background: transparent;
  }

  &:hover {
    &::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.068);
    }
  }

  &__tabs {
    font-weight: 500;
    width: stretch;
    position: relative;
    color: $white-2;
    display: flex;
    flex-direction: column;
    align-items: center;

    .nav__tab {
      display: flex;
      align-items: center;
      padding: 14px;
      border-radius: 10px;
      width: calc(100% - 13px);
      position: relative;
      left: -15px;
      cursor: pointer;

      &:hover {
        background: $black-2;
        // transition: all 100ms;
      }

      &--active {
        background: $color-green;
        color: $white;

        &:hover {
          background: $color-green-2;
        }
      }
    }

    .icon {
      margin-right: 22px;
      margin-left: 9px;
    }
  }
}

.nav--closed {
  transform: translateX(-316px); 
}
</style>