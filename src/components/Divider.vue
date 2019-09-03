<template>
  <div v-if="label" class="divider divider--with-label">
    <span class="divider__label">{{ label }}</span>
  </div>
  <div v-else class="divider"></div>
</template>

<script>
export default {
  name: 'Divider',
  props: ['label']
}
</script>

<style lang="scss" scoped>
  .divider {
    height: 1px;
    background: $accent-gray;
    margin: 25px 0;
    width: calc(100% + 16px);
    position: relative;
    left: -8px;

    &__label {
      text-transform: uppercase;
      font-weight: bold;
      font-size: 11px;
      color: $gray;
      position: relative;
      top: 8px;
      left: 22px;
    }
  }

  .divider--with-label {
    margin-bottom: 35px;
  }
</style>