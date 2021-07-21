<template>
  <div>
    <b-list-group v-for="( {postId, content, createdAt}, index) in todos" :key="index" horizontal>
      <b-list-group-item style="width: 80%">{{content}}</b-list-group-item>
      <b-list-group-item>{{createdAt}}</b-list-group-item>
      <b-button @click.prevent="onClickButton(postId)">삭제</b-button>
    </b-list-group>
  </div>
</template>

<script>
import store, {FETCH_TODO, DELETE_TODO} from "@/store";
import {mapState} from "vuex";

export default {
  store,
  computed: {
    ...mapState(["todos"]),
  },
  methods: {
    onClickButton(id) {
      this.$store.dispatch(DELETE_TODO, id);
    }
  },
  created() {
      this.$store.dispatch(FETCH_TODO);
  }
}
</script>