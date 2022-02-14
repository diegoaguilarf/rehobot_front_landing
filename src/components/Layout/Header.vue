<template >
  <div class="header-container w-full flex justify-center items-center fixed">
    <div class="header-content w-full h-full">
      <div class="logo-contaienr">
        <p class="font-bold">Rehobot</p>
      </div>
      <div class="navbar-contaienr flex justify-center">
        <ul class="flex gap-4 text-blueGray-700 font-semibold">
          <li>
            <router-link @click="offViewStore()" to="/">
              <p>Inicio</p>
            </router-link>
          </li>
          <li>
            Nosotros
          </li>
          <li>
            Servicios
          </li>
          <li>
            Marcas
          </li>
          <li>
            Contacto
          </li>
        </ul>
      </div>
      <div class="storeButtton-container">
        <router-link @click="onViewStore()" to="/store">
          <button class="p-2 flex gap-2" style="border: 1px solid rgb(247, 150, 63)" :class="{onViewStore: this.viewStore}">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="rgb(247, 150, 63)">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <p class="text-blueGray-700 font-semibold">Productos</p>
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      viewStore: false,
    }
  },

  methods: {
    onViewStore(){
      /* const currentPath = this.$route.path */
      this.viewStore = true
      console.log(this.viewStore)
    },

    offViewStore(){
      /* const currentPath = this.$route.path */
      this.viewStore = false
      console.log(this.viewStore)
    }
  },
}
</script>
<style >
  .header-container{
    height: 80px;
    background-color: rgb(238, 238, 238);
    z-index: 1000;
  }

  .header-content{
    max-width: 1080px;
    display: grid;
    align-items: center;
    grid-template-columns: auto 1fr auto;
  }

  .onViewStore{
    background-color:rgb(254, 206, 81);
    color: rgb(27, 25, 37);
  }
</style>