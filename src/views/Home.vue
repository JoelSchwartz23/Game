<template>
  <div class="home">
    <img alt="FF7 Logo"
      src="../assets/kisspng-final-fantasy-vii-remake-crisis-core-final-fantas-fantasy-title-box-5adb7f4c2b6bd2.3378206015243344121779.png">
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