<template>
  <div
    class="whatsapp-container w-max text-white rounded-full fixed z-40 cursor-pointer"
  >
    <div class="whatsapp-img flex justify-center items-center">
      <img src="../assets/logo-whatsapp.png" alt="" />
    </div>
    <div class="flex justify-center items-center">
      <p class="">Habla con Rehobot</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.whatsapp-container {
  padding: 12px 16px;
  height: max-content;
  display: grid;
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
