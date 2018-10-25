<template>
  <el-row>
    <el-col :span="20">
      <el-input v-model="text"/>
    </el-col>
    <el-col center :span="4">
      <el-button @click="addTodo(text)">추가하기</el-button>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class TodoInput extends Vue {
  private text!: string;
  private done!: boolean;

  addTodo(text: string, done: boolean = false, starred: boolean = false): void {
    const todo = {
      text: text,
      done: done,
      starred: starred,
    };

    this.$store.commit('addTodo', todo)
  }
}
</script>
