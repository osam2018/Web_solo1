<template>
  <el-aside width="200px">
    <el-row>
      <el-menu
        default-active="1"
        class="el-menu-vertical-demo">
        <el-menu-item index="1" @click="changeTodoState('default')">
          <i class="el-icon-menu"></i>
          <span>모든 일</span>
        </el-menu-item>
        <el-menu-item index="2" @click="changeTodoState('starred')">
          <i class="el-icon-star-on"></i>
          <span>중요한 일</span>
        </el-menu-item>
        <el-menu-item index="3" @click="changeTodoState('notDone')">
          <i class="el-icon-menu"></i>
          <span>할 일</span>
        </el-menu-item>
        <el-menu-item index="4" @click="changeTodoState('done')">
          <i class="el-icon-check"></i>
          <span>완료한 일</span>
        </el-menu-item>
      </el-menu>
    </el-row>
  </el-aside>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class Aside extends Vue {
  private changeTodoState(state: string): void {
    this.$store.commit('changeTodoState', state);
  }
}
</script>

<style scoped>
.el-aside, .el-row, .el-menu {
  height: 100%;
}
</style>
