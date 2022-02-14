<template>
  <div class="marcas-container py-10 flex justify-center">
    <div class="content">
      <div class="pr-10 flex flex-col justify-center">
        <h2 class="mb-4 text-4xl font-bold" style="color: rgb(247, 150, 63);">Marcas autorizadas</h2>
        <p class="text-white text-lg">Protección corporal, auditiva, manual, respiratoria, visual, de alturas, de cabeza, entre otros, y todo lo relacionado con señalización reglamentaria, venta, recarga y mantenimiento de extintores, elementos de bioseguridad y todo tipo de botiquines para primeros auxilios.</p>
      </div>
      <div class="container2 w-full flex justify-between">
        <div class="marca-container flex flex-col">
          <div class="marca-content w-full mb-5 p-5 bg-white">
            <div class="w-full flex justify-center">
              <img class="" style="width: 100px;" src="../../assets/icon-marcas.jpeg" alt="">
            </div>
            <div class="flex items-center">
              <p class="text-center text-sm" style="color: rgb(27, 25, 37);">Empresa llanera con amplia trayectoria en el mercado, teniendo un compromiso</p>
            </div>
          </div>
          <div class="button w-full flex">
            <button class="w-full p-4 font-bold text-white text-lg" style="border: 1px solid rgb(254, 206, 81)">Ver productos</button>
          </div>
        </div>
        <div class="marca-container flex flex-col">
          <div class="button w-full flex">
            <button class="w-full mb-5 p-4 font-bold text-white text-lg" style="border: 1px solid rgb(254, 206, 81)">Ver productos</button>
          </div>
          <div class="marca-content w-full p-5 bg-white">
            <div class="w-full flex justify-center">
              <img class="" style="width: 100px;" src="../../assets/icon-marcas.jpeg" alt="">
            </div>
            <div class="flex items-center">
              <p class="text-center text-sm" style="color: rgb(27, 25, 37);">Empresa llanera con amplia trayectoria en el mercado, teniendo un compromiso</p>
            </div>
          </div>
        </div>
        <div class="marca-container flex flex-col">
          <div class="marca-content w-full mb-5 p-5 bg-white">
            <div class="w-full flex justify-center">
              <img class="" style="width: 100px;" src="../../assets/icon-marcas.jpeg" alt="">
            </div>
            <div class="flex items-center">
              <p class="text-center text-sm" style="color: rgb(27, 25, 37);">Empresa llanera con amplia trayectoria en el mercado, teniendo un compromiso</p>
            </div>
          </div>
          <div class="button w-full flex">
            <button class="w-full p-4 font-bold text-white text-lg" style="border: 1px solid rgb(254, 206, 81)">Ver productos</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
  .marcas-container{
    height: max-content;
    display: grid;
  }

  .content{
    max-width: 1080px;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .marca-container{
    width: 170px;
  }

  .marca-content{
    height: 250px;
    display: grid;
    grid-template-rows: auto 1fr;
  }
</style>