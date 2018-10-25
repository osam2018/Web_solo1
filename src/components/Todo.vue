<template>
  <el-card class="box-card" shadow="always">
    {{todo.text}}
    <i @click="toggleTodoStarred(index)" class="el-icon-star-on" v-bind:class="{ starred: todo.starred }"/>
    <i @click="toggleTodoDone(index)" class="el-icon-check" v-bind:class="{ done: todo.done }"/>
    <i @click="deleteTodo(index)" class="el-icon-close delete"/>
  </el-card>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';

import { Todo as TodoInterface } from '@/interfaces/todo.interface';

@Component
export default class Todo extends Vue {
  @Prop() private todo!: TodoInterface;
  @Prop() private index!: number;

  private deleteTodo(index: number): void {
    this.$store.commit('deleteTodo', index);
  }

  private toggleTodoDone(index: number): void {
    this.$store.commit('toggleTodoDone', index);
  }

  private toggleTodoStarred(index: number): void {
    this.$store.commit('toggleTodoStarred', index);
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
