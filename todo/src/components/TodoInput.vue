<template>
  <div>
    <b-input-group style="width: 50%">
      <b-form-input placeholder="할 일을 입력하세요" maxlength="200" v-model="input"></b-form-input>
      <b-input-group-append>
        <b-button @click.prevent="onClickButton">등록</b-button>
      </b-input-group-append>
    </b-input-group>
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