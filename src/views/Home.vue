<template>
  <div class="home">
    <NoteCard :note="note" v-for="note in notes" :key="note.id" />
    <NoteCard :note="note" v-for="note in notes" :key="note.id" />
    <NoteCard :note="note" v-for="note in notes" :key="note.id" />
  </div>
</template>

<script>
import NoteCard from '@/components/NoteCard';

export default {
  name: 'home',
  components: {
    NoteCard,
  },
  computed: {
    notes() {
      return this.$store.state.notes
    }
  }
}
</script>

<style lang="scss" scoped>
  .home {
    padding: 30px;
    position: relative;
    float: left;
    width: calc(100% - 376px);
    display: flex;
    height: calc(100% - 82px);
    flex-flow: column wrap;
    align-content: center;
  }
</style>