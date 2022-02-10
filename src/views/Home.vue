<template>
  <div class="home-container w-full h-full flex flex-col ">
    <Banner />
    <InfoDotacion />
    <MarcasAutorizadas />
    <Contactanos />
  </div>
</template>

<script>
// @ is an alias to /src
import MarcasAutorizadas from '../components/Home/MarcasAutorizadas.vue'
import Banner from '../components/Home/Banner.vue'
import InfoDotacion from '../components/Home/InfoDotacion.vue';
import Contactanos from '../components/Home/Contactanos.vue';

export default {
  name: "Home",
  components: {
    MarcasAutorizadas,
    Banner,
    InfoDotacion,
    Contactanos,
  },
};
</script>
<style>
</style>
