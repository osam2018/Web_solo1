<template>
  <el-card class="box-card" shadow="always">
    {{todo.text}}
    <i @click="toggleTodoDone(index)" class="el-icon-check" v-bind:class="{ done: todo.done }"/>
    <i @click="deleteTodo(index)" class="el-icon-close delete"/>
  </el-card>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';

@Component
export default class Todo extends Vue {
  @Prop() private todo!;
  @Prop() private index!;

  deleteTodo(index): void {
    this.$store.commit('deleteTodo', index);
  };

  toggleTodoDone(index): void {
    this.$store.commit('toggleTodoDone', index);
  };
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
  color: yellow;
}

.delete {
  color: red;
}
</style>
