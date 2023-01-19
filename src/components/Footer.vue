<template>
    <div class="footer-container w-full">
      <div class="container-blanco w-full" style="background-color: rgb(238, 238, 238)"></div>
      <div class="footer-content flex p-5">
        <div class="footer-redes pr-5">
          <div class="w-full h-full">
  
          </div>
          <div class="w-full h-full">
            <p>Empresa llanera con amplia trayectoria en el mercado, teniendo un compromiso de calidad y servicio permanente.</p>
          </div>
          <div class="w-full h-full">
            
          </div>
        </div>
        <div class="h-full text-center">
          <ul class="h-full flex flex-col justify-between">
            <li>Inicio</li>
            <li>Nosotros</li>
            <li>Marcas</li>
            <li>Contacto</li>
            <li>Tienda</li>
          </ul>
        </div>
        <div class="w-full h-full pl-5 flex flex-col items-center text-start">
          <ul class="h-full flex flex-col justify-between">
            <li>Contacto</li>
            <li>
              <p>310 217 4053</p>
              <p>Cra. 34 No. 22-83 local 1 esquina.</p>
              <p>ventas@sirehobot.com.</p>
              <p>contabilidad@sirehobot.com</p>
              <p>Villavicencio, Meta - Colombia.</p>
            </li>
            <li>Copyright ©2022 - Villavicencio, Colombia</li>
          </ul>
        </div>
      </div>
      <div class=" w-full"></div>
    </div>
  </template>
  <script>
  export default {
    
  }
  </script>
  <style>
    .footer-container{
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
    }
  
    .footer-content{
      max-width: 1080px;
      width: 1080px;
      height: 400px;
      display: grid;
      grid-template-columns: 1fr auto 1fr;
      background-color: rgb(238, 238, 238)
    }
  
    .footer-redes{
      display: grid;
      grid-template-rows: 1fr 1fr 1fr;
    }
  
    @media (max-width: 1120px){
      .footer-container{
        grid-template-columns: 1fr 10%;
      }
  
      .footer-content{
        padding: 45px;
        width: 100%;
        height: max-content;
        display: flex;
        flex-direction: column;
      }
  
      .container-blanco{
        display: none;
      }
    }
  
    @media (max-width: 425px){
      .footer-content{
        padding: 40px 15px;
      }
    }
  
  </style>