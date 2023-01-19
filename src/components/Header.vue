<template>
  <div
    id="header"
    class="bg-[#d9d9d9] h-20 z-40 px-5 w-full flex justify-center items-center sticky top-0"
  >
    <div class="header-content max-w-[1260px] w-full h-full">
      <div class="logo-container">
        <!-- <p class="font-bold">Rehobot</p> -->
        <router-link to="/">
          <img src="../assets/logo_2.png" class="h-12" alt="rehobot" />
        </router-link>
      </div>
      <div class="navbar-container justify-center">
        <ul class="flex gap-8 text-blueGray-700 font-semibold">
          <li>
            <router-link @click="offViewStore()" to="/">
              <p>Inicio</p>
            </router-link>
          </li>
          <li>
            <a href="/#nosotros">Nosotros</a>
          </li>
          <li>
            <a href="/#marcas">Marcas</a>
          </li>
          <li>
            <a href="/#contacto">Contacto</a>
          </li>
        </ul>
      </div>
      <div class="storeButtton-container">
        <router-link to="/productos">
          <button
            class="p-2 flex gap-2"
            style="border: 1px solid rgb(247, 150, 63)"
            :class="{ onViewStore: this.viewStore }"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="rgb(247, 150, 63)"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <p class="text-blueGray-700 font-semibold">Productos</p>
          </button>
        </router-link>
      </div>

      <div class="menu-container w-full">
        <div class="menu-content">
          <svg
            @click="openSidebar"
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      viewStore: false,
    };
  },

  methods: {
    onViewStore() {
      /* const currentPath = this.$route.path */
      this.viewStore = true;
      console.log(this.viewStore);
    },

    offViewStore() {
      /* const currentPath = this.$route.path */
      this.viewStore = false;
      console.log(this.viewStore);
    },

    openSidebar() {
      this.$emit("openSidebar");
    },
  },
};
</script>
<style scoped>
.header-content {
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr auto;
}

.navbar-container {
  display: flex;
}

.onViewStore {
  background-color: rgb(254, 206, 81);
  color: rgb(27, 25, 37);
}

.menu-container {
  display: none;
}

@media (max-width: 768px) {
  .header-content {
    grid-template-columns: auto 1fr;
  }

  .navbar-container {
    display: none;
  }

  .storeButtton-container {
    display: none;
  }

  .menu-container {
    display: flex;
    justify-content: end;
  }
}
</style>
