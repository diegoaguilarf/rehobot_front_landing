<template>
  <Whatsapp />
  <Header />
  <div class="px-5 min-h-screen w-full flex justify-center bg-[#1B1925] ">
    <img src="../assets/hero-2.png" class="background w-full h-full object-cover absolute top-0 z-0" />
      <div class="pt-10 max-w-7xl w-full grid lg:grid-cols-[auto_1fr] gap-5 z-10">
        <div class="w-64 h-full hidden lg:block">
          <div class="w-full mb-10">
            <h2 class="font-bold text-4xl text-second-text">
              Catalogo
            </h2>
          </div>
          <div class="w-full flex flex-col gap-5">
            <ul class="w-full">
              <li class="w-full py-2 border-b border-yellow-500 flex" v-for="category in categories" :key="category.id">
                <router-link :to="{
                    name: 'category',
                    params: { category: category.slug },
                  }"
                  class="text-white text-sm cursor-pointer"
                  >{{ category.name }}</router-link>
              </li>
            </ul>
            <div v-if="$route.params?.category">
              <router-link to="/productos">
                <button class="py-2 w-full bg-main text-main-text font-bold">Eliminar filtro</button>
              </router-link>
            </div>
          </div>
        </div>

        <div class="list-container2 flex flex-col h-max lg:hidden">
          <div class="list-container2-content w-full flex justify-between mb-10">
            <div class="w-max">
              <h2 class="font-bold text-4xl" style="color: rgb(236, 216, 189)">
                Catalogo
              </h2>
            </div>
          </div>
          <div class="flex flex-col gap-5">
            <div v-if="search_status" class="search-container mb-10 w-full flex">
              <svg class="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              <input type="search" name="" id="" class="w-full bg-transparent focus:outline-none text-white"/>
            </div>
            <div class="category2-container">
              <div class="pb-2.5 flex border-b border-main">
                <select @change="getProductsByCategorySelect" v-model="currentSelect" name="" id="" class="pl-2 w-full border-none bg-transparent focus:outline-none text-white">
                  <option disabled selected value="">Selecciona la categoria</option>
                  <option v-for="category in categories" :key="category.id" :value="category.slug" class="text-main-text">{{ category.name }}</option>
                </select>
                <button class="button-slide flex justify-center items-center">
                  <svg class="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div v-if="$route.params?.category">
              <router-link to="/productos">
                <button class="py-2 w-full bg-main text-main-text font-bold">Eliminar filtro</button>
              </router-link>
            </div>
          </div>
        </div>

        <div class="w-full">
          <div class="products__container p-5 w-full h-full bg-gray-200 gap-5">
            <div v-if="productsView" v-for="(item, index) in 3" :key="index" class="h-max relative w-72 space-y-3 overflow-hidden rounded-md bg-neutral-200 p-3 shadow before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/20">
              <div class="h-36 w-full rounded-lg bg-neutral-300"></div>
              <div class="space-y-3">
                <div class="h-5 w-8/12 rounded-full bg-neutral-300"></div>
                <div class="space-y-1">
                  <div class="h-4 w-full rounded-full bg-neutral-300 shadow"></div>
                  <div class="h-4 w-full rounded-full bg-neutral-300 shadow"></div>
                  <div class="h-4 w-full rounded-full bg-neutral-300 shadow"></div>
                  <div class="h-4 w-7/12 rounded-full bg-neutral-300 shadow"></div>
                </div>
              </div>
            </div>
            <div v-else v-for="product in products" :key="product.name" class="w-full flex flex-col gap-2">
              <div class="w-full">
                <img class="rounded" :src="product.photo_source" :alt="product.name" />
              </div>
              <div>
                <p class="mb-1 text-xs italic text-gray-500">Reglamentario</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import { onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import { useRouter } from "vue-router";
import Whatsapp from "../components/Whatsapp.vue";
import supabase from "../services/supabase";
import Header from "../components/Header.vue";

export default {
  name: "Home",
  components: { Header, Whatsapp },
  setup() {
    const route = useRoute();
    const router = useRouter();

    const categories = ref([]);
    const products = ref([]);
    const search_status = ref(false);
    const productsView = ref(false);
    const currentSelect = ref('');

    onMounted(() => {
      route.params.category ? currentSelect.value = route.params.category : currentSelect.value = ''
      getCategories();
      getProducts();
    });

    watch(
      () => route.params.category,
      async (newCategory) => {
        newCategory === undefined ? currentSelect.value = '' : currentSelect.value = newCategory
        await getProductsByCategory(newCategory);
      }
    );

    const getCategories = async () => {
      try {
        let { data, error } = await supabase.from("categories").select("*");
        categories.value = data;
      } catch (error) {
        console.log(error);
      }
    };

    const getProducts = async (value) => {
      productsView.value = true
      try {
        let { data, error } = await supabase
          .from("products")
          .select('*')
        products.value = data;
        productsView.value = false
      } catch (error) {
        console.log(error);
      }
    };

    const getProductsByCategory = async (value) => {
      productsView.value = true
      if (route.params.category !== undefined) {
        try {
          let { data, error } = await supabase
            .from("categories")
            .select("products(*)")
            .eq("slug", value);
          products.value = data[0].products;
          productsView.value = false
        } catch (error) {
          console.log(error);
        }
      } else {
        getProducts()
      }
    };

    const getProductsByCategorySelect = () => {
      router.push(`/productos/${currentSelect.value}`)
    };

    return { categories, products, search_status, getProductsByCategorySelect, currentSelect, productsView };
  },
};
</script>

<style>
.background {
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
}

.products__container {
  display: grid;
  justify-content: space-around;
  grid-template-columns: repeat(auto-fill, max(280px));
}

/* .category2-content {
  padding-bottom: 10px;
  border-bottom: 1px solid rgb(254, 206, 81);
} */

.category2-container select {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}

@media (max-width: 1024px) {

  .button-slide {
    width: 25px;
    height: 25px;
    background-color: rgb(247, 150, 63);
  }

  .button-slide svg {
    width: 20px;
    height: 20px;
  }
}
</style>
