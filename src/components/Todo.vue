<template>
  <el-card class="box-card" shadow="always">
    <el-row class="todo">
      <el-col :span="20">
        {{todo.text}}
      </el-col>
      <el-col :span="4">
        <i @click="toggleTodoDone(todo.id)" class="el-icon-check icon" v-bind:class="{ done: todo.done }"/>
        <i @click="toggleTodoStarred(todo.id)" class="el-icon-star-on icon" v-bind:class="{ starred: todo.starred }"/>
        <i @click="deleteTodo(todo.id)" class="el-icon-close delete"/>
      </el-col>
    </el-row>
  </el-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import { Todo as TodoInterface } from '@/interfaces/todo.interface';

@Component
export default class Todo extends Vue {
  @Prop() private todo!: TodoInterface;
  @Prop() private index!: number;

  private deleteTodo(id: number): void {
    this.$store.commit('deleteTodo', id);
  }

  private toggleTodoDone(id: number): void {
    this.$store.commit('toggleTodoDone', id);
  }

  private toggleTodoStarred(id: number): void {
    this.$store.commit('toggleTodoStarred', id);
  }
}
</script>

<style scoped>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both
}

.box-card {
  width: 300px;
  height: 80px;
}

.todo {
  margin: 10px auto;
}

.done {
  color: #67C23A;
}

.starred {
  color: #FF9900;
}

.delete {
  color: red;
}
</style>
