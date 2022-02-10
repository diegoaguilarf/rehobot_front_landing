<template>
  <div class="Banner-container py-10 flex justify-center">
    <div class="Banner-content">
      <div>
        <h2 class="mb-5 text-5xl font-bold" style="color: rgb(236, 216, 189);">Distribución y Comercialización de EPI</h2>
        <p class="mb-5 text-white">Empresa llanera con amplia trayectoria en el mercado, teniendo un compromiso de calidad y servicio permanente.</p>
        <button class="mb-5 p-4 font-bold text-blueGray-700" style="background-color: rgb(254, 206, 81)">Ver productos</button>
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
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style>
  .Banner-container{
    height: max-content;
    display: grid;
  }

  .Banner-content{
    max-width: 1080px;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
</style>