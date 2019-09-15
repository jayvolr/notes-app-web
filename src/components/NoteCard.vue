<template>
  <div v-if="note.body || note.title" class="note-card">
    <div class="note-card__title">{{ note.title }}</div>
    <div class="note-card__body">{{ note.body }}</div>
  </div>
</template>

<script>
export default {
  name: 'NoteCard',
  props: ['note']
}
</script>

<style lang="scss" scoped>
  .note-card {
    display: flex;
    width: 250px;
    height: fit-content;
    background: $black-2;
    border-radius: 10px;
    color: $white;
    letter-spacing: .01428571em;
    font-family: Roboto,Arial,sans-serif;
    font-size: .875rem;
    font-weight: 400;
    line-height: 1.25rem;
    margin: 7px;
    padding: 10px 20px;
    flex-flow: column nowrap;
    border: 1px solid $black-3;
    transition: border 100ms;
    cursor: pointer;

    &:hover {
      border-color: $gray;
    }

    &__title, &__body {
      flex-basis: auto;
    }

    &__title {
      margin-bottom: 20px;
    }

    &__body {
      color: $white-2;
    }
  }
</style>