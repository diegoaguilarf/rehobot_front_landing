<template>
  <div class="home-container w-full h-full flex flex-col">
    <WhatsappShortcut />
    <Banner />
    <InfoDotacion />
    <MarcasAutorizadas />
    <Contactanos />
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from "../components/Home/Banner.vue";
import InfoDotacion from "../components/Home/InfoDotacion.vue";
import MarcasAutorizadas from "../components/Home/MarcasAutorizadas.vue";
import Contactanos from "../components/Home/Contactanos.vue";
import WhatsappShortcut from '../components/WhatsappShortcut.vue';

export default {
  name: "Home",
  components: {
    Banner,
    InfoDotacion,
    MarcasAutorizadas,
    Contactanos,
    WhatsappShortcut,
  },
};
</script>
<style></style>
