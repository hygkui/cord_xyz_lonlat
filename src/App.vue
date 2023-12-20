<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import xyz2ws84 from './components/xyz2ws84.vue';
import ws842xyz from './components/ws842xyz.vue';

</script>

<template>
  <div class="container">
    <xyz2ws84 /> 
    <ws842xyz />
    <el-divider />
    <p>Make by <a href="https://github.com/hygkui" target="_blank" rel="noopener noreferrer">@hygkui</a> With &lt;3 Tauri</p>
  </div>
</template>

<style scoped>
.logo.vite:hover {
  filter: drop-shadow(0 0 2em #747bff);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #249b73);
}

.container {
  margin: 0;
  padding: 5px;
}
</style>
