<template>
  <div class="app">
    <navbar ></navbar>
    <router-view></router-view>
    <!-- <hello-world></hello-world > -->
    <!-- <CreateSensor></CreateSensor> -->
    <!-- <Sensor></Sensor> -->
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';
import CreateSensor from './components/CreateSensor.vue';
import Sensor from './components/Sensor.vue';
import Navbar from './components/Navbar.vue'

export default{
      components:{
        Navbar,
        HelloWorld,
        //Sensor
        //CreateSensor,
      },
      methods: {
        
    },
    mounted() {
        
    }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
   display: flex;
  justify-content: center; 
  background-image: url(assets/12014.jpg);
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  min-height: 100vh;
}
 .app{
  max-width: 1000px;
  display: flex;
  justify-content: center;
} 
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
