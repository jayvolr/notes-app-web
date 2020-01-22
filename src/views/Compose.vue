<template>
  <div>
    <NewNote />
    <div class="compose">
      <textarea name="compose" id="compose-area" cols="5" rows="50" placeholder="New note..."></textarea>
    </div>
  </div>
</template>

<script>
import NewNote from "@/components/NewNote";

export default {
  name: 'Notes',
  components: {
    NewNote,
  },
  data() {
    return {
    }
  },
  computed: {

  },
}
</script>

<style lang="scss" scoped>
  .compose {
    margin: auto;
    position: relative;
    display: block;

    #compose-area {
      background: $black;
      color: $white-2;
      width: 100%;
      height: calc(100% - 136px);
      outline: none;
      border: none;
      padding: 68px;
      font-size: 16px;
    }
  }
</style>