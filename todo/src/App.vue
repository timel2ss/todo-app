<template>
  <div id="app">
    <todo-list />
    <br>
    <todo-input/>
  </div>
</template>

<script>
import TodoInput from "@/components/TodoInput";
import TodoList from "@/components/TodoList";

export default {
  name: 'App',
  components: {
    TodoList,
    TodoInput,
  }
}
</script>

<style>
</style>
