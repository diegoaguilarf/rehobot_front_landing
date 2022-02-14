<template>
  <div class="Banner-container py-10 flex justify-center">
    <div class="Banner-content">
      <div class="flex flex-col justify-around">
        <h2 class="mb-5 text-5xl font-bold" style="color: rgb(236, 216, 189);">Distribución y Comercialización de EPI</h2>
        <p class="mb-5 text-white text-lg">Empresa llanera con amplia trayectoria en el mercado, teniendo un compromiso de calidad y servicio permanente.</p>
        <div class="w-full flex">
          <button class="mb-5 p-4 font-bold text-blueGray-700" style="background-color: rgb(254, 206, 81)">Ver productos</button>
        </div>
        <div class="flex" style="color: rgb(236, 216, 189);">
          <div class="pr-5">
            <p class="font-bold text-4xl">+20</p>
            <p>Marcas <br> nacionales</p>
          </div>
          <div class="pr-5">
            <p class="font-bold text-4xl">100%</p>
            <p>Cobertura <br> nacional</p>
          </div>
          <div class="pr-5">
            <p class="font-bold text-4xl">+35</p>
            <p>Marcas <br> importadas</p>
          </div>
        </div>
      </div>

      <div class="img-container w-full flex justify-end items-center ">
        <img class="img-principal" src="../../assets/dotacion.jpg" alt="">
        <div class="container2 p-5 bg-white absolute">
          <div class="div-border w-full h-full absolute"></div>
          <div class="img-container2 w-full h-full flex justify-center items-center relative">
            <img src="https://www.pngplay.com/wp-content/uploads/12/Boots-Transparent-PNG.png" alt="">
          </div>
          <div class="info-container2 w-full h-full flex flex-col justify-center text-center relative" style="color: rgb(27, 25, 37);">
            <h2 class="font-bold text-lg">Botas</h2>
            <p class="text-sm">Empresa llanera con amplia trayectoria en el mercado, teniendo un compromiso</p>
          </div>
        </div>
        <div class="whatsapp-container w-max py-3 px-4 text-white rounded-full absolute">
          <div class="pr-2 flex justify-center items-center">
            <img src="../../assets/logo-whatsapp.png" alt="">
          </div>
          <div class="flex justify-center items-center">
            <p class="">Habla con Rehobot</p>
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
  .Banner-container{
    height: max-content;
    display: grid;
  }

  .Banner-content{
    max-width: 1080px;
    display: grid;
    grid-template-columns: 40% 60%;
  }

  .img-container{
    position: relative;
    left: 100px;
  }

  .img-container .img-principal{
    max-width: 550px;
    height: 500px;
  }

  .whatsapp-container{
    height: max-content;
    display: grid;
    grid-template-columns: auto 1fr;
    background-color: rgb(42, 219, 38);
    top: 95%;
    right: 10%;
  }

  .whatsapp-container img{
    width: 30px;
    height: 30px;
  }

  .container2{
    width: 250px;
    height: 300px;
    right: 60%;
    display: grid;
    grid-template-rows: 1fr 1fr;
  }

  .img-container2 img{
    width: 100px;
  }

  .div-border{
    top: 10px;
    right: 10px;
    border: 2px solid rgb(247, 150, 63);
  }
</style>