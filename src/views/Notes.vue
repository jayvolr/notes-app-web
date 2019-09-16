<template>
  <div class="notes" :style="style">
    <NoteCard :note="note" :id="note.id" :rowSize="rowSize" :noteWidth="noteWidth" v-for="note in notes" :key="note.id" />
  </div>
</template>

<script>
import NoteCard from '@/components/NoteCard';

export default {
  name: 'Notes',
  components: {
    NoteCard,
  },
  data() {
    return {
      recompute: 0,
      noteWidth: 240,
      viewElem: null,
      notesElem: null,
    }
  },
  computed: {
    notes() {
      return this.$store.state.notes
    },
    rowSize() {
      this.recompute;
      if (!this.viewElem) return null;
      return Math.floor(this.viewElem.clientWidth / this.noteWidth);
    },
    style() {
      const notesContainerWidth = this.rowSize * this.noteWidth + (14 * this.rowSize);
      return `width: ${notesContainerWidth}px`;
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.notesElem = this.$el;
      this.viewElem = this.$el.parentElement;
      this.viewElem.addEventListener('transitionend', () => {
        console.log('forcing notes recompute'); //eslint-disable-line
        this.recompute++;
      });
    });
  }
}
</script>

<style lang="scss" scoped>
  .notes {
    margin: auto;
    padding: 30px 0;
    position: relative;
    display: block;
  }
</style>