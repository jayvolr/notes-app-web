<template>
  <div class="nav__container" :class="{ 'nav__container--closed': !navIsOpen }">
    <div @click="toggleNav" class="menu-button">
      <Icon name="menu" size="24" />
    </div>

    <div class="v-nav" :class="{ 'v-nav--closed': !navIsOpen }">
      <SearchBox />
      <Divider />
      <div class="v-nav__tabs">
        <div class="v-nav__tab">
          <Icon name="notes" size="26" color="white-2"/>
          Notes
        </div>
        <Divider label="tags" />
        <div class="v-nav__tab">
          <Icon name="tag" size="26" color="white-2"/>
          Personal
        </div>
        <div class="v-nav__tab">
          <Icon name="tag" size="26" color="white-2"/>
          Work
        </div>
        <div class="v-nav__tab">
          <Icon name="tag" size="26" color="white-2"/>
          Dev
        </div>
        <Divider />
        <div class="v-nav__tab">
          <Icon name="archive" size="26" color="white-2"/>
          Archive
        </div>
        <div class="v-nav__tab">
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
  data() {
    return {
      navIsOpen: true,
    }
  },
  methods: {
    toggleNav() {
      this.navIsOpen = !this.navIsOpen;
    }
  }
}
</script>

<style lang="scss" scoped>
.nav__container {
  display: flex;
  flex-direction: column;
  position: relative;
  transition: width 350ms cubic-bezier(0.215, 0.61, 0.355, 1);

  .menu-button {
    padding: 12px;
    margin: 4px;
    height: 24px;
    border-radius: 50%;
    cursor: pointer;
    align-self: flex-start;
  }

  .menu-button:hover {
    background: $black-2;
  }

  .v-nav {
    height: -webkit-fill-available;
    width: 300px;
    padding: 8px;
    background: $black;
    align-items: center;
    display: flex;
    flex-direction: column;
    position: relative;
    transition: transform 350ms cubic-bezier(0.215, 0.61, 0.355, 1);

    &__tabs {
      font-weight: 500;
      width: -webkit-fill-available;
      position: relative;
      color: $white-2;
      display: flex;
      flex-direction: column;
      align-items: center;

      .v-nav__tab {
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
          transition: all 200ms;
        }
      }

      .icon {
        margin-right: 22px;
        margin-left: 9px;
      }
    }
  }

  .v-nav--closed {
    transform: translateX(-316px); 
  }
}

.nav__container--closed {
  width: 56px;
}
</style>