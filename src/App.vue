<template>
  <div class="app-container pb-14 w-full h-full">
    <Header />
    <div class="pt-20 w-full h-full">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from './components/Layout/Footer.vue';
import Header from './components/Layout/Header.vue';

export default {
  components:{
    Header,
    Footer
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
  }


  .app-container{
    display: grid;
    grid-template-rows: auto 1fr auto;
    background-color: rgb(27, 25, 37);
  }

</style>
