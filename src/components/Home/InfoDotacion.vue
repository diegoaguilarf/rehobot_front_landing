<template>
  <div class="dotacion-container py-10 flex justify-center">
    <div class="dotacion-content w-full">
      <div class="img-container flex flex-col w-full">
        <img src="../../assets/dotacion.jpg" alt="">
        <div class="fecha-container px-2 w-max flex items-center relative">
          <p class="mr-2 font-semibold">desde</p>
          <p class="font-bold text-4xl">1990</p>
        </div>
      </div>
      <div class="w-full">
        <div class="dotacion-info py-12 px-20 relative">
          <h2 class="mb-5 font-bold text-4xl leading-relaxed">Distribuimos todo tipo de artículos y dotación</h2>
          <p class="leading-loose text-lg">Protección corporal, auditiva, manual, respiratoria, visual, de alturas, de cabeza, entre otros, y todo lo relacionado con señalización reglamentaria, venta, recarga y mantenimiento de extintores, elementos de bioseguridad y todo tipo de botiquines para primeros auxilios.</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style>
  .dotacion-container{
    height: max-content;
    display: grid;
  }

  .dotacion-content{
    max-width: 1080px;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .img-container{
    position: relative;
    right: 100px;
  }

  .img-container img{
    max-width: 600px;
    height: 500px;
  }

  .fecha-container{
    height:max-content;
    left: 30%;
    bottom: 40px;
    color: rgb(27, 25, 37);
    background-color: rgb(247, 150, 63);
    border: 10px solid rgb(27, 25, 37)
  }

  .dotacion-info{
    width: 700px;
    height: 400px;
    top: 10%;
    right: 220px;
    color: rgb(27, 25, 37);
    background-color: rgb(254, 206, 81)
  }
</style>