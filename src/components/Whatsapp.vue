<template>
  <a
    href="https://api.whatsapp.com/send?phone=+573102174053&text=Saludos,%20Estoy%20interesado%20en%20recibir%20más%20información?"
    target="_blank"
    class="flex items-center whatsapp-container rounded-full fixed z-40 cursor-pointer transition-all"
  >
    <div class="flex justify-center items-center bg-white py-3 pl-5 pr-7 -mr-4 shadow-lg">
      <p class="">Cotiza con nosotros</p>
    </div>
    <div class="rounded-full bg-[#2ADB26] p-4 flex justify-center items-center">
      <img class="w-8 h-8" src="../assets/logo-whatsapp.png" alt="" />
    </div>
  </a>
</template>

<script>
export default {};
</script>

<style scope>
.whatsapp-container {
  bottom: 5%;
  right: 3%;
}
.whatsapp-container:hover {
  bottom: 5.5%;
}
</style>
