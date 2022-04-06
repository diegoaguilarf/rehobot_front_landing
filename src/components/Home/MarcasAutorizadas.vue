<template>
  <div class="marcas-container py-10 flex justify-center" id="marcas">
    <div class="content">
      <div class="info-container pr-10 flex flex-col justify-center">
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
      <div class="container3">
        <div class="container3-content">
          <div class="mr-5 flex items-center">
            <button class="button-slide flex justify-center items-center">
              <svg class="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
            </button>
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
          <div class="ml-5 flex items-center">
            <button class="button-slide flex justify-center items-center">
              <svg class="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            </button>
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

  .container3{
    display: none;
  }

  @media (max-width: 1120px) {
    .content{
      padding: 0 20px;
      max-width: 100%;
      display: flex;
      flex-direction: column;
    }

    .info-container{
      margin-bottom: 50px;
    }
  }

  @media (max-width: 600px){
    .container2{
      display: none;
    }

    .container3{
      display: flex;
      justify-content: center;
    }

    .container3-content{
      display: grid;
      grid-template-columns: auto 1fr auto;
    }

    .container3-content .button-slide{
      width: 25px;
      height: 25px;
      background-color: rgb(247, 150, 63);
    }

    .container3-content .button-slide svg{
      width: 20px;
      height: 20px;
    }
  }
</style>