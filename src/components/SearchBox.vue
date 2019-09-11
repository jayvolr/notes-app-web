<template>
  <div class="search-box">
    <Icon name="search" :color="iconFill" size="24" />
    <form class="search-box__form" method="get">
      <input @focus="focusSearch" @blur="blurSearch" placeholder="Search" type="text" name="Search" id="search-box__input">
    </form>
  </div>
</template>

<script>
import Icon from '@/components/Icon';

export default {
  name: "SearchBox",
  components: {
    Icon,
  },
  data() {
    return {
      iconFill: 'white',
    }
  },
  methods: {
    focusSearch() {
      const searchBox = document.querySelector('.search-box');
      searchBox.classList.add('search-box--focused');
      this.iconFill = 'black';
    },
    blurSearch() {
      const searchBox = document.querySelector('.search-box');
      searchBox.classList.remove('search-box--focused');
      this.iconFill = 'white';
    }
  }
}
</script>

<style lang="scss" scoped>
  .search-box {
    width: -webkit-fill-available;
    background: $black-2;
    border-radius: 7px;
    border: 1px solid $accent-gray;
    height: 40px;
    padding-left: 12px;
    display: flex;
    align-items: center;
    transition: all 100ms;

    &--focused {
      background: $white;
      border-color: $white;
    }
  }

  .search-box__form {
    height: -webkit-fill-available;
    width: -webkit-fill-available;
    position: relative;
    display: flex;
    align-items: center;
  }

  #search-box__input {
    width: -webkit-fill-available;
    background: transparent;
    padding: 7px 8px;
    margin-left: 7px;
    height: -webkit-fill-available;
    position: absolute;
    border: none;
    color: $white-2;
    font-size: 14px;

    &:focus {
      outline: none;
      color: $black;
    }

    &::placeholder {
      font-weight: 500;
      font-size: 14px;
      position: relative;
    }
  }
</style>