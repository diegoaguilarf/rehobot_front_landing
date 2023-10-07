<template>
    <section class="lg:pr-5 w-full">
      <div class="p-10 max-w-7xl w-full min-h-[25rem] grid lg:grid-cols-[1fr_auto_1fr] gap-10 text-main-text bg-[#eeeeee]">
        <div class="w-full flex flex-col justify-center gap-5">
          <div class="w-full flex justify-center lg:justify-start">
            <img src="../assets/logo_2.png" class="h-16" alt="rehobot" />
          </div>
          <div class="w-full text-center lg:text-start">
            <p>Empresa llanera con amplia trayectoria en el mercado, teniendo un compromiso de calidad y servicio permanente.</p>
          </div>
        </div>
        <div class="h-full text-center">
          <ul class="h-full flex flex-col justify-between gap-5 lg:gap-0 text-lg font-bold">
            <li v-for="(item, index) in navItems" :key="index" class="cursor-pointer">
              <a :href="`/#${item.seccionId}`" class="hover:text-main transition-all">{{item.name}}</a>
            </li>
            <li class="cursor-pointer">
              <router-link to="/productos" class="hover:text-main transition-all">Productos</router-link>
            </li>
          </ul>
        </div>
        <div class="w-full h-full flex flex-col items-center text-start">
          <div class="h-full flex flex-col justify-between gap-10 lg:gap-0">
            <div class="flex flex-col gap-5 text-center lg:text-start">
              <p class="text-2xl font-bold">Contacto</p>
              <div class="flex flex-col gap-2 transition-all">
                <p class="hover:underline cursor-pointer">310 217 4053</p>
                <p class="hover:underline cursor-pointer">Cra. 34 No. 22-83 local 1 esquina.</p>
                <p class="hover:underline cursor-pointer">ventas@sirehobot.com.</p>
                <p class="hover:underline cursor-pointer">contabilidad@sirehobot.com</p>
                <p class="hover:underline cursor-pointer">Villavicencio, Meta - Colombia.</p>
              </div>
            </div>
            <p class="text-center lg:text-start">Copyright ©{{currentYear}} - Villavicencio, Colombia</p>
          </div>
        </div>
      </div>
    </section>
  </template>
  <script >
  export default {
    data() {
      return {
        currentYear: '',
        navItems: [
          {
            name: "Inicio",
            seccionId: "intro"
          },
          {
            name: "Nosotros",
            seccionId: "nosotros"
          },
          {
            name: "Marcas",
            seccionId: "marcas"
          },
          {
            name: "Contacto",
            seccionId: "contacto"
          },
        ]
      };
    },

    mounted(){
      const date = new Date ()
      const year = date.getUTCFullYear()
      this.currentYear = year
    }
  }
  </script>

  <style>

  </style>