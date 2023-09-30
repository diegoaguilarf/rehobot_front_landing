<template>
  <section id="intro" class="flex justify-center">
    <img src="../assets/hero-2.png" alt="" class="background w-full h-full absolute object-cover object-center opacity-50"/>
    <div class="py-10 px-5 max-w-7xl w-full h-max flex justify-center">
      <div class="Banner-content w-full ">
        <div class="flex flex-col justify-around">
          <h2 class="font-league_spartan mb-5 font-bold text-3xl xl:text-4xl text-center xl:text-start tracking-wide leading-10" style="color: rgb(236, 216, 189)">Elementos de protección Individual, Dotaciones industriales, y demás productos para la seguridad industrial</h2>
          <div class="hidden xl:block">
            <p class="mb-5 text-white">Productos de la más alta calidad de acuerdo y en cumplimiento con las normas y estándares más rigurosos para su uso en la industria</p>
            <div class="w-full flex">
              <button class="mb-5 p-4 font-bold" style="background-color: #f89e19">Ver productos</button>
            </div>
            <div class="flex" style="color: rgb(236, 216, 189)">
              <div class="pr-5">
                <h2 class="font-bold text-2xl lg:text-3xl">+100</h2>
                <p>Empresa <br />LLanera</p>
              </div>
              <div class="pr-5">
                <h2 class="font-bold text-2xl lg:text-3xl">+300</h2>
                <p>Productos</p>
              </div>
              <div class="pr-5">
                <h2 class="font-bold text-2xl lg:text-3xl">10/10</h2>
                <p>La mejor atención <br />al cliente</p>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full flex flex-col gap-5 sm:gap-0 xl:relative">
          <div class="sm:mb-48 md:mb-40 xl:mb-0 w-full h-max flex flex-col gap-5 sm:gap-0 justify-center xl:justify-end items-center xl:items-end sm:relative ">
            <img src="../assets/dotacion.jpg" alt="" class="img-principal max-w-[80%] w-full h-full"/>
            <div class=" max-w-xs w-full h-[22rem] sm:h-max sm:absolute xl:left-0 sm:-bottom-44 md:-bottom-32 relative">
              <img src="../assets/banner.png" class="relative z-10" alt="" />

              <div class="w-[96%] h-[84%] mb-3 shadow-xl absolute bottom-0 right-0 z-0">
                <div  class="w-full h-[4%] bg-gradient-to-b from-transparent via-[#d9d9d9] to-[#d9d9d9]"></div>
                <div class="w-full h-[96%] bg-[#d9d9d9] p-10 flex text-center">
                  <p class="text-sm mt-auto">Soluciones para empresas del sector industrial, Minero-energético, agroindustrial, Construcción y mucho más.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="xl:hidden text-center">
            <p class="mb-5 text-white text-lg">
              Empresa llanera con amplia trayectoria en el mercado, teniendo un
              compromiso de calidad y servicio permanente.
            </p>
            <div class="w-full flex justify-center">
              <router-link to="/productos">
                <button
                  class="mb-5 p-4 font-bold text-blueGray-700"
                  style="background-color: rgb(254, 206, 81)"
                >
                  Ver productos
                </button>
              </router-link>
            </div>
            <div class="flex justify-center gap-5" style="color: rgb(236, 216, 189)">
              <div class="division pr-5">
                <h2 class="font-bold text-2xl lg:text-3xl">+20</h2>
                <h3 class="text-sm lg:text-base">Marcas <br />nacionales</h3>
              </div>
              <div class="division pr-5">
                <h2 class="font-bold text-2xl lg:text-3xl">100%</h2>
                <h3 class="text-sm lg:text-base">Cobertura <br />nacional</h3>
              </div>
              <div class="division pr-5">
                <h2 class="font-bold text-2xl lg:text-3xl">+35</h2>
                <h3 class="text-sm lg:text-base">Marcas <br />importadas</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {};
</script>
<style scoped>
.background {
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
}

.Banner-content {
  display: grid;
  grid-template-columns: 40% 60%;
}

.container2 h2 {
  font-size: 18px;
}

.container2 p {
  font-size: 14px;
}

.div-border {
  top: 10px;
  right: 10px;
  border: 2px solid rgb(247, 150, 63);
}

@media (max-width: 1280px) {
  .Banner-content {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
}

@media (max-width: 1150px) {

  .container2 {
    right: 30%;
  }

  .whatsapp-container {
    top: 480px;
  }
}

@media (max-width: 1000px) {
  .container2 {
    right: 35%;
  }
}

@media (max-width: 900px) {
  .container2 {
    right: 40%;
  }
}

@media (max-width: 768px) {

  .whatsapp-container {
    padding: 10px;
    right: 20px;
    top: 360px;
  }

  .whatsapp-img {
    padding-right: 0;
  }

  .whatsapp-container p {
    display: none;
  }

  .container2 {
    width: 150px;
    height: 200px;
    right: 100px;
    top: 180px;
  }

  .container2 h2 {
    font-size: 14px;
  }

  .container2 p {
    font-size: 10px;
  }
}

@media (max-width: 380px) {

  .division {
    padding-right: 15px;
  }
}
</style>
