<template>
  <router-link class="NewNote-button" to="/compose">
    <Icon name="notes" :color="iconFill" size="30" />
  </router-link>
</template>

<script>
import Icon from '@/components/Icon';

export default {
  name: "NewNote",
  components: {
    Icon,
  },
  data() {
    return {
      iconFill: 'white',
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
  .NewNote-button {
    background: $color-green;
    border-radius: 100%;
    border: 1px solid $black-3;
    height: 60px;
    width: 60px;
    transition: all 200ms;
    position: fixed;
    bottom: 50px;
    right: 50px;
    text-align: center;
    cursor: pointer;
    z-index: 1;

    &:hover {
      background: $color-green-2;
    }

    .icon {
      top: 14px;
    }
  }
</style>