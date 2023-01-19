<template>
    <section id="contacto" class="contactanos-container flex justify-center pt-24">
      <div class="contactanos-content w-full">
        <div class="img-container pr-5">
          <div class="contactanos-img w-full " style="">
            <div class="img-fondo absolute"></div>
            <div class="text-container p-14 flex items-center relative">
              <p class=" font-bold leading-tight" style="font-size: 40px;">¡Estamos para ayudarte!</p>
            </div>
            <div class="text-container p-14 flex justify-end relative">
              <p class="text-4xl  font-bold">Contáctanos</p>
            </div>
          </div>
        </div>
        <div class="form">
          <div class="form-container bg-[#d9d9d9] w-full">
            <form action="" @submit.prevent="onSubmit" class="p-12 font-semibold">
              <div class="inputs-container mb-5 w-full flex">
                <div class="inputs-content w-full pr-5 flex flex-col gap-1">
                  <label for="name">Nombres</label>
                  <input id="name" type="text" class="border border-gray-200 p-2">
                </div>
                <div class="inputs-content w-full pl-5 flex flex-col gap-1">
                  <label for="lastName">Apellidos</label>
                  <input id="lastName" type="text" class="border border-gray-200 p-2">
                </div>
              </div>
              <div class="inputs-container mb-5 w-full flex">
                <div class="inputs-content w-full pr-5 flex flex-col gap-1">
                  <label for="email">Email</label>
                  <input id="email" type="text" class="border border-gray-200 p-2">
                </div>
                <div class="inputs-content w-full pl-5 flex flex-col gap-1">
                  <label for="phone">Numero de celular</label>
                  <input id="phone" type="text" class="border border-gray-200 p-2">
                </div>
              </div>
              <div class="message-contaienr w-full flex flex-col gap-1">
                <label for="message">Mensaje</label>
                <textarea name="message" id="message" cols="30" rows="6" class="border border-gray-200 p-2"></textarea>
              </div>
              <div class="message-button w-full">
                <button class="mb-5 p-4 font-bold text-blueGray-700 relative" style="background-color: #F89E19">Enviar mensaje</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </template>

  <script>
  export default {
    
  }
  </script>
  <style scoped>
    .contactanos-container{
      height: max-content;
      display: grid;
    }
  
    .contactanos-content{
      max-width: 1080px;
      display: grid;
      grid-template-columns: 40% 60%;
    }
  
    .contactanos-img{
      height: 500px;
      display: grid;
      grid-template-rows: 1fr auto;
      background-color: #F89E19;
      color: rgb(27, 25, 37);
    }
  
    .img-fondo{
      width: 412px;
      height: 500px;
      background-image: url("../assets/constructores.jpg");
      background-repeat: no-repeat;
      background-size:cover;
      opacity: 30%;
    }
  
    .form-container{
      height: 500px;
      color: rgb(27, 25, 37);
    }
  
    .inputs-container{
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  
    .message-container textarea{
      height: auto;
    }
  
    .message-button button{
      right: -70%;
      bottom: -50px;
    }
  
    @media (max-width:1120px) {
      .contactanos-content{
        max-width: 100vw !important;
        width: 100vw !important;
        display: flex;
        flex-direction: column;
      }
  
      .img-container{
        padding: 0 !important;
        margin-bottom: 50px;
        width: 100%;
        display: flex;
        justify-content: end;
      }
  
      .contactanos-img{
        width: 400px !important;
      }
  
      .img-fondo{
        width: 400px;
      }
  
      .form{
        margin-bottom: 50px;
        width: 100%;
      }
  
      .form-container{
        margin: 0 auto;
        width: 650px !important;
      }
    }
  
    @media (max-width:700px){
      .form-container{
        width: 500px !important;
        height: max-content;
      }
  
      .inputs-container{
        margin: 0;
        display: flex;
        flex-direction: column;
      }
  
      .inputs-content{
        padding: 0 !important;
        margin-bottom: 20px;
      }
  
      .message-button button{
        right: -30%;
        bottom: -90px;
      }
    }
  
    @media (max-width:550px){
      .contactanos-img{
        width: 300px !important;
      }
  
      .text-container{
        padding: 29px;
      }
  
      .img-fondo{
        width: 300px;
      }
  
      .form-container{
        width: 300px !important;
      }
  
      .form-container form{
        padding: 30px ;
      }
  
      .message-button button{
        right: -15%;
        bottom: -80px;
      }
    }
  </style>