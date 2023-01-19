<template>
  <section id="intro" class="relative">
    <img
      src="../assets/hero-2.png"
      alt=""
      class="background absolute opacity-50"
    />
    <div class="relative Banner-container py-10 flex justify-center">
      <div class="Banner-content">
        <div class="flex flex-col justify-around">
          <h2
            class="font-league_spartan mb-5 font-bold text-4xl tracking-wide leading-10"
            style="color: rgb(236, 216, 189)"
          >
            Elementos de protección Individual, Dotaciones industriales, y demás
            productos para la seguridad industrial
          </h2>
          <div class="info-container">
            <p class="mb-5 text-white">
              Productos de la más alta calidad de acuerdo y en cumplimiento con
              las normas y estándares más rigurosos para su uso en la industria
            </p>
            <div class="w-full flex">
              <button
                class="mb-5 p-4 font-bold"
                style="background-color: #f89e19"
              >
                Ver productos
              </button>
            </div>
            <div class="flex" style="color: rgb(236, 216, 189)">
              <div class="pr-5">
                <h2 class="font-bold">+100</h2>
                <p>
                  Empresa <br />
                  LLanera
                </p>
              </div>
              <div class="pr-5">
                <h2 class="font-bold">+300</h2>
                <p>Productos</p>
              </div>
              <div class="pr-5">
                <h2 class="font-bold">10/10</h2>
                <p>La mejor atención <br />al cliente</p>
              </div>
            </div>
          </div>
        </div>

        <div class="img-container w-full">
          <div class="img-content flex justify-end items-center">
            <img class="img-principal" src="../assets/dotacion.jpg" alt="" />
            <div class="w-80 absolute left-0">
              <img src="../assets/banner.png" class="relative z-10" alt="" />
              <div
                class="w-[96%] h-[84%] mb-3 shadow-xl absolute bottom-0 right-0 z-0"
              >
                <div
                  class="w-full h-[4%] bg-gradient-to-b from-transparent via-[#d9d9d9] to-[#d9d9d9]"
                ></div>
                <div class="w-full h-[96%] bg-[#d9d9d9] p-10 flex text-center">
                  <p class="text-sm mt-auto">
                    Soluciones para empresas del sector industrial,
                    Minero-energético, agroindustrial, Construcción y mucho más.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="info-container2 px-5">
            <p class="mb-5 text-white text-lg">
              Empresa llanera con amplia trayectoria en el mercado, teniendo un
              compromiso de calidad y servicio permanente.
            </p>
            <div class="w-full flex">
              <router-link to="/store">
                <button
                  class="mb-5 p-4 font-bold text-blueGray-700"
                  style="background-color: rgb(254, 206, 81)"
                >
                  Ver productos
                </button>
              </router-link>
            </div>
            <div class="flex" style="color: rgb(236, 216, 189)">
              <div class="division pr-5">
                <h2 class="font-bold">+20</h2>
                <h3>
                  Marcas <br />
                  nacionales
                </h3>
              </div>
              <div class="division pr-5">
                <h2 class="font-bold">100%</h2>
                <h3>
                  Cobertura <br />
                  nacional
                </h3>
              </div>
              <div class="division pr-5">
                <h2 class="font-bold">+35</h2>
                <h3>
                  Marcas <br />
                  importadas
                </h3>
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
.Banner-container {
  height: max-content;
  display: grid;
}

.Banner-content {
  max-width: 1080px;
  display: grid;
  grid-template-columns: 40% 60%;
}

.img-container {
  position: relative;
  left: 100px;
}

.img-container .img-principal {
  max-width: 80%;
  height: 500px;
}

.info-container h2 {
  font-size: 36px;
}

.info-container2 h2 {
  font-size: 36px;
}

.container2 h2 {
  font-size: 18px;
}

.container2 p {
  font-size: 14px;
}

.info-container2 {
  display: none;
}

.img-container2 img {
  width: 100px;
}

.div-border {
  top: 10px;
  right: 10px;
  border: 2px solid rgb(247, 150, 63);
}

@media (max-width: 1240px) {
  .img-container {
    position: relative;
    left: 35px;
  }
}

@media (max-width: 1150px) {
  .Banner-content {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .img-container {
    position: relative;
    left: 0;
  }

  .img-content {
    width: 100%;
  }

  .img-container .img-principal {
    max-width: 500px;
    height: 500px;
  }

  .container2 {
    right: 30%;
  }

  .img-content {
    margin-bottom: 100px;
  }

  .whatsapp-container {
    top: 480px;
  }

  .info-container2 {
    display: block;
  }

  .info-container {
    display: none;
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
  .img-container {
    flex-direction: column;
    padding-top: 50px;
  }

  .img-container .img-principal {
    max-width: 300px;
    height: 300px;
  }

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

  .img-container2 {
    margin-bottom: 10px;
  }

  .img-container2 img {
    width: 60px;
  }

  .container2 h2 {
    font-size: 14px;
  }

  .container2 p {
    font-size: 10px;
  }
}

@media (max-width: 600px) {
  .Banner-content h2 {
    font-size: 30px;
  }
}

@media (max-width: 380px) {
  .info-container2 h2 {
    font-size: 30px;
  }

  .info-container2 h3 {
    font-size: 14px;
  }

  .division {
    padding-right: 15px;
  }
}
</style>
