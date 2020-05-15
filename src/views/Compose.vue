<template>
  <div class="compose">
    <NewNote />
    <div class="compose__inputs">
      <input v-model="title" type="text" id="title" placeholder="Title" autocomplete="off" />
      <textarea v-model="body" ref="body" id="body" placeholder="Start writing a new note..." autocomplete="off"></textarea>
      <button @click="saveNote">save</button>
    </div>
  </div>
</template>

<script>
import NewNote from "@/components/NewNote";

export default {
  name: 'Compose',
  components: {
    NewNote,
  },
  data() {
    return {
      title: '',
      body: ''
    }
  },
  methods: {
    saveNote() {
      this.$store.commit('addNote', {
        "id": 20,
        "title": this.title,
        "body": this.body,
        "tags": [],
        "creation_date": Date.now(),
        "edited_date": Date.now()
      });

      this.$router.push('/');
    }
  },
  mounted() {
    this.$refs.body.focus();
  },
}
</script>

<style lang="scss" scoped>
  .compose,
  .compose__inputs {
    height: 100%;
  }

  .compose__inputs {
    margin: auto;
    position: relative;
    display: block;

    #body,
    #title {
      background: $black;
      color: $white-2;
      width: 100%;
      outline: none;
      border: none;
      font-size: 16px;
    } 

    #title {
      padding: 10px 68px 10px 68px;
      margin-top: 58px;
      font-size: 26px;
    }

    #body {
      padding: 10px 68px 68px 68px;
      height: calc(100% - 136px);
      position: relative;
    }

    button {
      position: absolute;
      left: 70px;
      top: 20px;
    }
  }
</style>