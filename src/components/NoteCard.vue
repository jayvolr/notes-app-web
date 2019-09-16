<template>
  <div :class="`note-card note-card--${id}`" :style="style" @click="click">
    <div class="note-card__title">{{ note.title }}</div>
    <div class="note-card__body">{{ note.body }}</div>
  </div>
</template>

<script>
export default {
  name: 'NoteCard',
  props: ['note', 'id', 'rowSize'],
  data() {
    return {
      noteElem: null,
      recompute: 0,
      noteWidth: 240,
      margin: 14
    }
  },
  computed: {
    translateX() {
      this.recompute;
      if (this.posInRow === 1 || !this.noteElem) return 0;
      return this.noteWidth * (this.posInRow - 1) + this.margin*(this.posInRow - 1);
    },
    translateY() {
      this.recompute;
      if (this.whichRow === 1 || !this.noteAbove) return 0;
      return this.noteAbove.clientHeight + this.margin;
    },
    noteIndex() {
      this.recompute;
      let i = 1;
      let elem = this.noteElem;
      if (!elem) return null;
      while ((elem = elem.previousElementSibling) != null) ++i;
      return i;
    },
    whichRow() {
      this.recompute;
      return Math.ceil(this.noteIndex / this.rowSize);
    },
    posInRow() {
      this.recompute;
      let i = this.noteIndex;
      while (i > this.rowSize) i -= this.rowSize;
      return i;
    },
    style() {
      this.recompute;
      return `transform: translate(${this.translateX}px, ${this.translateY}px); width: ${this.noteWidth - 42}px`;
      // return '';
    },
    noteAbove() {
      this.recompute;
      let result = this.noteElem;
      for (let i = 0; i < this.rowSize; i++) {
        if (!result) break;
        result = result.previousElementSibling;
      }
      return result;
    },
  },
  methods: {
    click() {
      console.log(this.noteAbove); //eslint-disable-line
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.noteElem = this.$el;
      const viewContainer = document.querySelector('.view-container');
      viewContainer.addEventListener('transitionend', () => {
        console.log('forcing recompute'); //eslint-disable-line
        this.recompute++;
      });
    });
  }
}
</script>

<style lang="scss" scoped>
  .note-card {
    display: flex;
    position: absolute;
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