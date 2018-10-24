<template>
  <el-container>
    <el-main>
      <TodoList/>
    </el-main>
    <el-footer>
      <TodoInput/>
    </el-footer>
  </el-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import TodoList from '@/components/TodoList.vue';
import TodoInput from '@/components/TodoInput.vue';

@Component({
  components: {
    TodoList,
    TodoInput,
  },
})

export default class Home extends Vue {}
</script>
