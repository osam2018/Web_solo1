<template>
  <el-row>
    <el-col v-for="(todo, index) in getTodos()" :span="6">
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
  private todos = this.$store.state.todos;

  getTodos() {
    if (this.$store.state.todoState == 'done') {
      return this.$store.getters.doneTodos;
    }

    return this.$store.state.todos;
  };
}
</script>
