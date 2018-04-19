<template>
  <div>
    <transition name="fade">
      <div class="Splash" v-if="splashScreen">
        <div class="Splash-body">
          <h1>Growler App</h1>
        </div>
      </div>
    </transition>
    <transition name="fade">
      <div class="Locate" v-if="locationScreen">
        <div class="Locate-body">
          userPosition: {{ userPosition }}
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Splash',
  data () {
    return {
      splashScreen: true,
      locationScreen: false,
      userPosition: []
    }
  },
  methods: {
    getGeoLocation (callback) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          this.userPosition = position.coords
          if (typeof callback === 'function') {
            callback()
          }
        })
      }
    }
  },
  mounted () {
    this.getGeoLocation(function () {
      setTimeout(()=>{
        this.splashScreen = false
        this.locationScreen = true
      }, 3000)
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
