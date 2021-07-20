<template>
  <div>
    <input type="text" placeholder="할 일을 입력하세요" maxlength="200" v-model="input">
    <button @click.prevent="onClickButton">등록</button>
  </div>
</template>

<script>
import store, {MAKE_TODO} from "@/store";

export default {
  store,
  data() {
    return {
      input: '',
    };
  },
  methods: {
    onClickButton() {
      this.$store.commit(MAKE_TODO, this.input);
    },
  }
}
</script>