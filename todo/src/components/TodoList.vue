<template>
  <div>
    <b-list-group v-for="( {id, content, createdAt}, index) in todos" :key="index" horizontal>
      <b-list-group-item style="width: 80%">{{content}}</b-list-group-item>
      <b-list-group-item>{{createdAt}}</b-list-group-item>
      <b-button @click.prevent="onClickButton(id)">삭제</b-button>
    </b-list-group>
  </div>
</template>

<script>
import store, {REMOVE_TODO} from "@/store";
import {mapState} from "vuex";

export default {
  store,
  computed: {
    ...mapState(["todos"]),
  },
  methods: {
    onClickButton(id) {
      this.$store.commit(REMOVE_TODO, id);
    }
  }
}
</script>