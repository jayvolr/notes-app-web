<template>
  <div v-if="note.body || note.title" :class="`note-card note-card--${id}`" @click="position">
    <div class="note-card__title">{{ note.title }}</div>
    <div class="note-card__body">{{ note.body }}</div>
  </div>
</template>

<script>
export default {
  name: 'NoteCard',
  props: ['note', 'id'],
  data() {
    return {
      translateX: 0,
      translateY: 0,
    }
  },
  methods: {
    position(e) {
      console.log('helo'); //eslint-disable-line
      const thisNote = document.querySelector(`.note-card--${this.id}`);
      if (!thisNote) return;

      if (e && e.altKey) {
        debugger; //eslint-disable-line
      }

      const noteAbove = this.getNoteAbove(thisNote);
      if (!noteAbove) {
        this.translateX = 0;
        this.translateY = 0;
        thisNote.style.transform = '';
        return;
      }

      this.translateX += (thisNote.getBoundingClientRect().x - noteAbove.getBoundingClientRect().x);
      this.translateY += ((thisNote.getBoundingClientRect().top - noteAbove.getBoundingClientRect().bottom) - 14);
      // if (this.translateX < 1) this.translateX = 0;
      // if (this.translateY < 1) this.translateY = 0;

      thisNote.style.transform = `translate(-${this.translateX}px, -${this.translateY}px)`;
    },
    getNoteAbove(thisNote) {
      const notesContainer = thisNote.parentElement;
      const notesPerRow = Math.floor(notesContainer.clientWidth / thisNote.clientWidth);

      let result = thisNote;
      for (let i = 0; i < notesPerRow; i++) {
        if (!result) break;
        result = result.previousElementSibling;
      }

      return result;
    }
  },
  mounted() {
    this.position();
    document.querySelector('.view-container').addEventListener('transitionend', this.position);
  },
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
    font-size: .875rem;
    font-weight: 400;
    line-height: 1.25rem;
    margin: 7px;
    padding: 10px 20px;
    flex-flow: column nowrap;
    border: 1px solid $black-3;
    transition: border 100ms;
    transition: transform 350ms cubic-bezier(0.215, 0.61, 0.355, 1);
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