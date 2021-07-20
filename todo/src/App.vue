<template>
  <div id="app">
    <todo-layout />
    <br>
    <todo-list />
    <br>
    <todo-input/>
  </div>
</template>

<script>
import TodoInput from "@/components/TodoInput";
import TodoList from "@/components/TodoList";
import TodoLayout from "@/components/TodoLayout";

export default {
  name: 'App',
  components: {
    TodoLayout,
    TodoList,
    TodoInput,
  }
}
</script>

<style>
</style>
