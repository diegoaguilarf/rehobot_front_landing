<template>
  <div id="marcas" class="grid h-max py-10 justify-center pt-24">
    <div class="w-full max-w-[1260px] grid lg:grid-cols-2">
      <div class="pr-10 flex flex-col justify-center">
        <h2 class="mb-4 text-4xl font-bold" style="color: rgb(247, 150, 63)">
          Nuestras Marcas
        </h2>
        <p class="text-white text-lg">
          Las mejores marcas de seguridad industrial las encuentras en
          Soluciones Industriales Rehobot con un portafolio variado de marcas
          nacionales e importadas con la mejor relación calidad/precio.
        </p>
      </div>
      <div class="w-screen lg:w-full h-[400px] flex justify-between">
        <swiper
          :modules="modules"
          :slides-per-view="1"
          :breakpoints="{
            1250: {
              slidesPerView: 3
            },
            800: {
              slidesPerView: 2
            }
          }"
          :space-between="50"
          :pagination="{
            clickable: true,
            bulletClass: 'square'
          }"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
        >
          <swiper-slide v-for="(item, index) in brands">
            <div
              class="w-full flex flex-col gap-5"
              :class="index % 2 === 0 ? 'flex-col' : 'flex-col-reverse'"
            >
              <div
                class="w-full h-[250px] grid grid-rows-[auto_1fr] p-5 bg-white"
              >
                <div class="w-full flex justify-center">
                  <img
                    class=""
                    style="width: 100px"
                    :src="item.photo_source"
                    alt=""
                  />
                </div>
                <div class="flex items-center">
                  <p class="text-center text-sm" style="color: rgb(27, 25, 37)">
                    Empresa llanera con amplia trayectoria en el mercado,
                    teniendo un compromiso
                  </p>
                </div>
              </div>
              <div class="button w-full flex">
                <button
                  class="w-full p-4 font-bold text-white text-lg"
                  style="border: 1px solid rgb(254, 206, 81)"
                >
                  Ver productos
                </button>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>
<script>
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {

    const brands = [
      {
        photo_source: "https://uftijuaceaxomhbvnohk.supabase.co/storage/v1/object/public/brands/3m.png"
      },
      {
        photo_source: "https://uftijuaceaxomhbvnohk.supabase.co/storage/v1/object/public/brands/link-tech.png"
      },
      {
        photo_source: "https://uftijuaceaxomhbvnohk.supabase.co/storage/v1/object/public/brands/insafe.png"
      },
      {
        photo_source: "https://uftijuaceaxomhbvnohk.supabase.co/storage/v1/object/public/brands/zubi-ola.png"
      },
      {
        photo_source: "https://uftijuaceaxomhbvnohk.supabase.co/storage/v1/object/public/brands/allman.png"
      },
      {
        photo_source: "https://uftijuaceaxomhbvnohk.supabase.co/storage/v1/object/public/brands/msa.png"
      },
      {
        photo_source: "https://uftijuaceaxomhbvnohk.supabase.co/storage/v1/object/public/brands/steelpro.png"
      },
      {
        photo_source: "https://uftijuaceaxomhbvnohk.supabase.co/storage/v1/object/public/brands/terrano.png"
      },
      {
        photo_source: "https://uftijuaceaxomhbvnohk.supabase.co/storage/v1/object/public/brands/3025-calzado.png"
      },
      {
        photo_source: "https://uftijuaceaxomhbvnohk.supabase.co/storage/v1/object/public/brands/croydon.png"
      },
      {
        photo_source: "https://uftijuaceaxomhbvnohk.supabase.co/storage/v1/object/public/brands/protex.png"
      },
      {
        photo_source: "https://uftijuaceaxomhbvnohk.supabase.co/storage/v1/object/public/brands/steel-series.jpg"
      },
      {
        photo_source: "https://uftijuaceaxomhbvnohk.supabase.co/storage/v1/object/public/brands/ansell.jpg"
      },
      {
        photo_source: "https://uftijuaceaxomhbvnohk.supabase.co/storage/v1/object/public/brands/idecal2.png"
      },
      {
        photo_source: "https://uftijuaceaxomhbvnohk.supabase.co/storage/v1/object/public/brands/robusta-calzado.png"
      }
    ]

    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };

    return {
      brands,
      onSwiper,
      onSlideChange,
      modules: [Pagination],
    };
  },
};
</script>

<style>
.square {
  width: 15px;
  height: 12px;
  border: 1px solid white;
  display: inline-block;
  margin-left: 6px;
  margin-right: 6px;
  cursor: pointer;
}

.square.swiper-pagination-bullet-active {
  background-color: #F7963F;
  border: 1px solid #F7963F;
}
</style>
