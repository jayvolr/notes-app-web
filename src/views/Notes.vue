<template>
  <div>
    <NewNote />
    <div ref="notes" class="notes">
      <NoteCard :note="note" :id="note.id" :rowSize="rowSize" :noteWidth="noteWidth" v-for="note in notes" :key="note.id" :left="left" />
    </div>
  </div>
</template>

<script>
import NoteCard from '@/components/NoteCard';
import NewNote from "@/components/NewNote";

export default {
  name: 'Notes',
  components: {
    NoteCard,
    NewNote,
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
      if (!this.notesElem) return null;
      return Math.floor(this.notesElem.clientWidth / (this.noteWidth + 14));
    },
    left() {
      if (!this.notesElem) return null;
      const leftoverSpace = (this.notesElem.clientWidth / (this.noteWidth + 14)) - this.rowSize;
      return ((this.noteWidth + 14) * leftoverSpace) / 2;
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.notesElem = this.$refs.notes;
      this.viewElem = this.$el.parentElement;

      const forceRecompute = () => {
        console.log('forcing notes recompute'); //eslint-disable-line
        this.recompute++;
      }

      this.viewElem.addEventListener('transitionend', forceRecompute);
      window.onresize = forceRecompute;
    });
  }
}
</script>

<style lang="scss" scoped>
  .notes {
    margin: auto;
    padding: 60px 0 30px 0;
    position: relative;
    display: block;
    max-width: 1500px; 
  }
</style>