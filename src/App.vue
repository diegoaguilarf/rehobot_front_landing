<template>
  <div class="app-container pb-14 w-full h-full">
    <Header @openSidebar="toggleSidebar"/>
    <div class="pt-20 w-full h-full">
      <router-view />
    </div>
    <Footer />

    
      <div :class="this.classSidebar">
        <div class="button-sidebar">
          <svg @click="toggleSidebar" class="icon-sidebar" style="width:30px;" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </div>
        <div class="content-sidebar">
          <ul class="gap-4 text-blueGray-700 font-semibold">
            <li @click="toggleSidebar">
              <router-link @click="offViewStore()" to="/">
                <p>Inicio</p>
              </router-link>
            </li>
            <li @click="toggleSidebar">
              <router-link :to="{hash:'#infoDotacion'}">Nosotros</router-link>
            </li>
            <li>
              Servicios
            </li>
            <li @click="toggleSidebar">
              <router-link :to="{hash:'#marcas'}">Marcas</router-link>
            </li>
            <li @click="toggleSidebar">
              <router-link :to="{hash:'#contacto'}">Contacto</router-link>
            </li>
          </ul>
          <div class="storeButtton-container flex justify-end">
              <router-link @click="onViewStore()" to="/store">
                <button @click="toggleSidebar" class="p-2 flex gap-2" style="border: 1px solid rgb(247, 150, 63)" :class="{onViewStore: this.viewStore}">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="rgb(247, 150, 63)">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <p class="text-blueGray-700 font-semibold">Productos</p>
                </button>
              </router-link>
            </div>
        </div>
      </div>
    
  </div>
</template>

<script>
import Footer from './components/Layout/Footer.vue';
import Header from './components/Layout/Header.vue';

export default {
  components:{
    Header,
    Footer
  },
  data() {
    return {
      statusSidebar: false,
      classSidebar: "close"
    }
  },

  methods: {
    toggleSidebar: function () {
      this.statusSidebar = !this.statusSidebar

      if (this.statusSidebar) {
        this.classSidebar = "open"
      } else {
         this.classSidebar = "close"
      } 
    },

    onViewStore(){
      /* const currentPath = this.$route.path */
      this.viewStore = true
      console.log(this.viewStore)
    },

    offViewStore(){
      /* const currentPath = this.$route.path */
      this.viewStore = false
      console.log(this.viewStore)
    },
  },
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
  }

  html{
    scroll-behavior: smooth;
  }


  .app-container{
    display: grid;
    grid-template-rows: auto 1fr auto;
    background-color: rgb(27, 25, 37);
  }

   .open{
  padding: 20px;
  width: 250px;
  height: 100vh;
  position: fixed;
  display: grid;
  grid-template-rows: auto 1fr;
  box-shadow: 0px 2px 5px 1px rgba(142, 142, 142, 0.5);
  right: 0;
  z-index: 1000;
  background-color: white;
  transition: all 300ms;
}

.open .button-sidebar{
  margin-bottom: 30px;
  width: 100%;
  display: flex;
  justify-content: end;
}

.open .button-sidebar .icon-sidebar{
  fill: #2c3e50;
}

.open .content-sidebar ul{
  list-style-type: none;
}
.open .content-sidebar ul li{
  margin: 20px 0;
  text-align: end;
  font-weight: bold;
}
.open .content-sidebar ul li a{
  text-decoration: none;
  color: #2c3e50;
}

.close {
  width: 0;
  height: 100vh;
  position: fixed;
  display: grid;
  grid-template-rows: auto 1fr;
  right: 0;
  z-index: 1000;
  background-color: white;
  transition: all 300ms;
}

.close .button-sidebar{
  display: none;
}

.close .content-sidebar{
  display: none;
}

.onViewStore{
    background-color:rgb(254, 206, 81);
    color: rgb(27, 25, 37);
  }
</style>
