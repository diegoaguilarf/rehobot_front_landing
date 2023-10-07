<template>
  <section id="contacto" class="px-5 w-full h-max flex justify-center">
    <div class=" max-w-7xl w-full flex flex-col lg:grid grid-cols-[40%_60%] gap-5 lg:gap-0">
      <div class="lg:pr-5 min-h-[25rem] lg:max-h-full h-full w-full flex justify-center">
        <div class="p-10 max-w-[32rem] w-full h-full flex flex-col justify-between bg-main text-main-text relative" style="">
          <img src="../assets/constructores.jpg" alt="" class="w-full h-full object-cover opacity-30 absolute top-0 left-0">
          <p class="text-4xl lg:text-5xl font-bold z-10">¡Estamos para ayudarte!</p>
          <p class="text-4xl lg:text-5xl text-end font-bold z-10">Contáctanos</p>
        </div>
      </div>
      <div class="md:max-h-[32rem] w-full bg-[#d9d9d9]">
        <form action="" @submit.prevent="onSubmit" class="p-10 w-full flex flex-col gap-5 font-semibold">
          <div class="w-full grid md:grid-cols-2 gap-5">
            <div class="w-full flex flex-col gap-1">
              <label for="name">Nombres</label>
              <input id="name" type="text" class="border border-gray-200 p-2 focus:outline-none">
            </div>
            <div class="w-full flex flex-col gap-1">
              <label for="lastName">Apellidos</label>
              <input id="lastName" type="text" class="border border-gray-200 p-2 focus:outline-none">
            </div>
          </div>
          <div class="w-full grid md:grid-cols-2 gap-5">
            <div class="w-full flex flex-col gap-1">
              <label for="email">Email</label>
              <input id="email" type="text" class="border border-gray-200 p-2 focus:outline-none">
            </div>
            <div class="w-full flex flex-col gap-1">
              <label for="phone">Numero de celular</label>
              <input id="phone" type="text" class="border border-gray-200 p-2 focus:outline-none">
            </div>
          </div>
          <div class=" flex flex-col gap-1">
            <label for="message">Mensaje</label>
            <textarea name="message" id="message" cols="3" rows="6" class="border border-gray-200 p-2 focus:outline-none"></textarea>
          </div>
          <div class="w-full relative">
            <button class="p-4 font-bold bg-main text-blueGray-700 absolute right-0">Enviar mensaje</button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

  <script>
  export default {
    
  }
  </script>
  <style scoped>

  </style>