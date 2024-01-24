<template>
  <div id="marcas" class="px-5 flex h-max justify-center">
    <div class="w-full max-w-7xl grid lg:grid-cols-2 gap-10">
      <div class="flex flex-col justify-center text-center lg:text-left">
        <h2 class="mb-4 text-3xl lg:text-4xl font-bold" style="color: rgb(247, 150, 63)">
          Nuestras Marcas
        </h2>
        <p class="text-white text-lg">
          Las mejores marcas de seguridad industrial las encuentras en
          Soluciones Industriales Rehobot con un portafolio variado de marcas
          nacionales e importadas con la mejor relación calidad/precio.
        </p>
      </div>
      <div class="w-full flex justify-center">
        <div class="max-w-xs md:max-w-[620px] lg:w-full h-[400px] flex justify-center">
          <swiper :modules="modules" :watchSlidesProgress="true" :slides-per-view="1" :breakpoints="breakpoints" :space-between="20" :pagination="{ clickable: true, bulletClass: 'square'}" :loop="true" :navigation="true" :autoplay="{ delay: 4000, disableOnInteraction: false,}">
            <swiper-slide v-for="(item, index) in brands" class="swiper__brands max-w-[193px] w-full">
              <div class="w-full flex flex-col gap-5" :class="index % 2 === 0 ? 'flex-col' : 'flex-col-reverse'">
                <div class="w-full h-[250px] grid grid-rows-[auto_1fr] p-5 bg-white">
                  <div class="w-full flex justify-center">
                    <img class=" w-[100px]" :src="item.photo_source" alt=""/>
                  </div>
                  <div class="flex items-center">
                    <p class="text-center text-sm" style="color: rgb(27, 25, 37)">{{ item.description }}</p>
                  </div>
                </div>
                <div class="button w-full flex">
                  <router-link to="/productos" class="w-full">
                    <button class="w-full p-4 font-bold text-white text-lg" style="border: 1px solid rgb(254, 206, 81)">Ver productos</button>
                  </router-link>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { onMounted, ref } from "vue";
import supabase from "../services/supabase";
import { Pagination, Navigation, Autoplay} from "swiper";
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

    const breakpoints ={
      320: {
        slidesPerView: 1,
      },
      
      425: {
        slidesPerView: 1.2,
      },
      640: {
        slidesPerView: 1.5,
      },
      768: {
        slidesPerView: 3,
      },
    }

    onMounted(() => {
      getBrands()
    })

    const brands = ref([])

    const getBrands = async () => {
      try {
        let { data, error } = await supabase.from("brands").select("*");
        brands.value = data;
      } catch (error) {
        console.log(error);
      }
    };


    return {
      breakpoints,
      brands,
      modules: [Pagination, Navigation, Autoplay],
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

.swiper-button-next, .swiper-button-prev{
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: #f7953fb0;
  border-radius: 100%;
}

.swiper-button-next::after, .swiper-button-prev::after{
  font-size: 24px;
  font-weight: bold;
}

@media (max-width: 768px){
  .swiper-button-next, .swiper-button-prev{
    display: none;
  }
}
</style>
