<template>
  <el-row>
    <el-col v-for="(todo, index) in todos()" :key="todo.id" :span="6">
      <Todo :todo="todo" :index="index"/>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import Todo from '@/components/Todo.vue';

@Component({
  components: {
    Todo,
  },
})

export default class TodoList extends Vue {
  private todos() {
    const todoState: string = this.$store.state.todoState;

    if (todoState === 'default') {
      return this.$store.state.todos;
    }

    if (todoState === 'starred') {
      return this.$store.getters.starredTodos;
    }

    if (todoState === 'done') {
      return this.$store.getters.doneTodos;
    }

    if (todoState === 'notDone') {
      return this.$store.getters.notDoneTodos;
    }
  }
}
</script>
