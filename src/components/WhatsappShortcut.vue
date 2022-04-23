<template>
  <a
    href="https://api.whatsapp.com/send?phone=+573102174053&text=Saludos,%20Estoy%20interesado%20en%20recibir%20más%20información?"
    target="_blank"
    class="whatsapp-container w-max text-white rounded-full fixed z-40 cursor-pointer"
  >
    <div class="whatsapp-img flex justify-center items-center">
      <img src="../assets/logo-whatsapp.png" alt="" />
    </div>
    <div class="flex justify-center items-center">
      <p class="">Habla con Rehobot</p>
    </div>
  </a>
</template>

<script>
export default {};
</script>

<style>
.whatsapp-container {
  padding: 12px 16px;
  height: max-content;
  display: flex;
  grid-template-columns: auto 1fr;
  background-color: rgb(42, 219, 38);
  bottom: 5%;
  right: 3%;
  transition: all .5s;
}

.whatsapp-img {
  padding-right: 8px;
}

.whatsapp-container img {
  width: 30px;
  height: 30px;
}
.whatsapp-container:hover {
  bottom: 5.5%;
}
</style>
