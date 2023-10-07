<script setup>
import Whatsapp from "../components/Whatsapp.vue";
import Top from "../components/Top.vue";
import Header from "../components/Header.vue";
import Intro from "../components/Intro.vue";
import About from "../components/About.vue";
import Brands from "../components/Brands.vue";
import Contact from "../components/Contact.vue";
import Footer from "../components/Footer.vue";
import Location from "../components/Location.vue";

</script>

<template>
  <div class="w-full bg-[#1B1925] pb-20">
    <Whatsapp />
    <Top />
    <Header msg="Vite + Vue" />
    <div class="w-full flex flex-col gap-24 ">
      <Intro />
      <About />
      <Brands />
      <Contact />
      <Location />
      <Footer />
    </div>
  </div>
</template>

<style scoped></style>
