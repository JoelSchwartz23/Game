<template>
  <div class="main-bg">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 d-flex title">
          <img
            src="C:/Users/neder/projects/game/src/assets/kisspng-final-fantasy-vii-remake-crisis-core-final-fantas-fantasy-title-box-5adb7f4c2b6bd2.3378206015243344121779.png"
            width="300" height="310" alt="">
        </div>
      </div>
      <div class="row">
        <div class="col-6 cloud d-flex">
          <img src="C:/Users/neder/projects/game/src/assets/cloudspritegif_by_zerolympiustrife-dbp6qj1.gif" width="200"
            height="210" alt="">
        </div>
        <div class="col-6 sephiroth d-flex">
          <img src="C:/Users/neder/projects/game/src/assets/ffbe___sephiroth_gif_2_by_zerolympiustrife-dbpjwgq.gif"
            width="200" height="210" alt="">
        </div>
      </div>
      <div class="row">
        <div class="col-12 box"></div>
      </div>
      <div class="row">
        <div class="col-4 skillsbox">
          <button onclick="attack()">Attack</button>
          <button onclick="grenade()">Grenade</button>
          <button onclick="bolt3()">Bolt3</button>
          <div class="row">
            <div class="col-12">
              <button onclick="giveitem(1)">4x-cut</button>
              <button onclick="giveitem(2)">Shrapnel</button>
              <button onclick="giveitem(3)">Magic Source</button>
            </div>
          </div>
        </div>
        <div class="col-8 skillsbox">
          <span>Sephiroth:<span id="health"></span></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import GameComponent from '@/components/GameComponent.vue'

  export default {
    name: 'game',
    components: {
      GameComponent
    }
  }
</script>

<style>
  .main-bg {
    background-image: url('C:/Users/neder/projects/game/src/assets/SSBU_Midgar_Omega.jpg');
    background-size: cover;
    background-position: center;
    min-height: 100vh;
  }

  .title {
    justify-content: center;
  }

  .cloud {
    justify-content: center;
    align-self: flex-end;
    transform: rotateY(180deg);
  }

  .sephiroth {
    justify-content: center;
    align-self: flex-end;
  }

  .skillsbox {
    background: blue;
    border: 5px solid silver;
    border-radius: 10px;
    height: 22vh;
  }

  .box {
    height: 15vh;
  }

  .button {
    display: block;
    border: 1px solid green;
  }

  span {
    color: white;
  }
</style>