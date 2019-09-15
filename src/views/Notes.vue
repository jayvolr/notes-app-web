<template>
  <div class="notes">
    <NoteCard :note="note" :id="note.id" :data-note-id="note.id" v-for="note in notes" :key="note.id" />
  </div>
</template>

<script>
import NoteCard from '@/components/NoteCard';

export default {
  name: 'Notes',
  components: {
    NoteCard,
  },
  computed: {
    notes() {
      return this.$store.state.notes
    }
  },
}
</script>

<style lang="scss" scoped>
  .notes {
    margin: auto;
    padding: 30px;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
  }
</style>