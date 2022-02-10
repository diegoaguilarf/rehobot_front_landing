<template>
  <div class="contactanos-container py-10 flex justify-center">
    <div class="contactanos-content w-full">
      <div class="pr-5">
        <div class="contactanos-img w-full" style="">

        </div>
      </div>
      <div>
        <div class="form-container w-full">
          <form action="" @submit.prevent="onSubmit" class="p-12 font-semibold">
            <div class="inputs-container mb-5 w-full flex">
              <div class="w-full pr-5 flex flex-col gap-1">
                <label for="name">Nombres</label>
                <input id="name" type="text" class="border border-gray-200 p-2">
              </div>
              <div class="w-full pl-5 flex flex-col gap-1">
                <label for="lastName">Apellidos</label>
                <input id="lastName" type="text" class="border border-gray-200 p-2">
              </div>
            </div>
            <div class="inputs-container mb-5 w-full flex">
              <div class="w-full pr-5 flex flex-col gap-1">
                <label for="email">Email</label>
                <input id="email" type="text" class="border border-gray-200 p-2">
              </div>
              <div class="w-full pl-5 flex flex-col gap-1">
                <label for="phone">Numero de celular</label>
                <input id="phone" type="text" class="border border-gray-200 p-2">
              </div>
            </div>
            <div class="message-contaienr w-full flex flex-col gap-1">
              <label for="message">Mensaje</label>
              <textarea name="message" id="message" cols="30" rows="6" class="border border-gray-200 p-2"></textarea>
            </div>
            <div class="message-button w-full">
              <button class="mb-5 p-4 font-bold text-blueGray-700 relative" style="background-color: rgb(254, 206, 81)">Enviar mensaje</button>
            </div>
          </form>
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
    background-color: rgb(247, 150, 63);
    color: rgb(27, 25, 37);
  }

  .form-container{
    height: 500px;
    background-color: white;
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
</style>