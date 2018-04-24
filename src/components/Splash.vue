<template>
  <div>
    <transition name="fade">
      <div class="Splash" v-if="splashScreen">
        <div class="Splash-body">
          <p>userPosition: {{ userPosition }}</p>
          <p>userPosition2: {{ userPosition2 }}</p>
          <h1>Growler App</h1>
          <button style="border: 1px solid gray" @click="getUserLocation">userPosition2</button>
        </div>
      </div>
    </transition>
    <transition name="fade">
      <div class="Locate" v-if="locationScreen">
        <div class="Locate-body">
          locationScreen
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Vue from 'vue'
import VueGeolocation from 'vue-browser-geolocation'

Vue.use(VueGeolocation)

export default {
  name: 'Splash',
  data () {
    return {
      splashScreen: true,
      locationScreen: false,
      userPosition: [],
      userPosition2: []
    }
  },
  methods: {
    getUserLocation: function () {
      // el boton activa este metodo
      if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
          this.userPosition2 = position.coords;
        })
      }
    }
  },
  mounted () {
    this.$getLocation()
    .then(coordinates => {
      this.userPosition = coordinates
    })
  }
}
</script>

<style>
.Splash {
  height: 100vh;
  display: grid;
  align-content: center;
  text-align: center;
  background-color: #f3f5e3;
}

.Splash-body {
  padding: 20px;
}

.Splash h1 {
  font-size: 4rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

</style>
