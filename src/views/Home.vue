<template>
  <div class="home">
    <CardView/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import CardView from '@/components/CardView.vue';

@Component({
  components: {
    CardView,
  },
})

export default class Home extends Vue {}
</script>
