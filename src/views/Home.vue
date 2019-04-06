<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <GameComponent msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
  // @ is an alias to /src
  import GameComponent from '@/components/GameComponent.vue'

  export default {
    name: 'game',
    components: {
      GameComponent
    }
  }
</script>