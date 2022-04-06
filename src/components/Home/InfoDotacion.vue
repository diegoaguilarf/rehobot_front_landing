<template>
  <div class="dotacion-container py-10 flex justify-center" id="infoDotacion">
    <div class="dotacion-content w-full">
      <div class="img-container flex flex-col w-full">
        <img src="../../assets/dotacion.jpg" alt="">
        <div class="fecha-container px-2 w-max flex items-center relative">
          <p class="mr-2 font-semibold">desde</p>
          <p class="font-bold text-4xl">1990</p>
        </div>
      </div>
      <div class="w-full dotacion-info-container">
        <div class="dotacion-info py-12 px-20 relative">
          <h2 class="mb-5 font-bold leading-relaxed">Distribuimos todo tipo de artículos y dotación</h2>
          <p class="leading-loose">Protección corporal, auditiva, manual, respiratoria, visual, de alturas, de cabeza, entre otros, y todo lo relacionado con señalización reglamentaria, venta, recarga y mantenimiento de extintores, elementos de bioseguridad y todo tipo de botiquines para primeros auxilios.</p>
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
    padding: 40px 40px;
    width: 700px;
    height: 400px;
    top: 10%;
    right: 220px;
    color: rgb(27, 25, 37);
    background-color: rgb(254, 206, 81)
  }

  .dotacion-info h2{
    font-size: 36px;
  }

  .dotacion-info p{
    font-size: 18px;
  }

  @media (max-width:1520px) {
      .dotacion-info{
      width: 600px;
    }
  }

  @media (max-width:1320px) {
      .dotacion-info{
      width: 550px;
    }

    .dotacion-info h2{
      font-size: 30px;
    }

    
  }

  @media (max-width:1190px){
    .dotacion-info{
      width: 400px;
    }

    .dotacion-info h2{
      font-size: 26px;
    }

    .dotacion-info p{
      font-size: 14px;
    }
  }

  @media (max-width:1000px){
    .dotacion-content{
      width: 100vw;
      height: max-content;
      display: flex;
      flex-direction: column;
    }

    .img-container{
      right: 0%;
      position: inherit;
    }

    .fecha-container{
      left: 5%;
    }

    .dotacion-info-container{
      height: max-content;
    }

    .dotacion-info{
      right: 0;
      margin: 0 auto !important;
    }
  }

  @media (max-width:700px){
    .img-container img {
      width: 400px;
      height: 300px;
    }
  }

  @media (max-width:500px){
    .img-container img {
      width: 345px;
      height: 245px;
    }

    .dotacion-info{
      width: 345px;
      height: max-content;
    }
  }

  @media (max-width:380px){
    .dotacion-container{
      width: max-content;
    }
    .img-container img {
      width: 320px;
      height: 220px;
    }

    .dotacion-info{
      width: 320px;
      height: max-content;
    }
  }
</style>