<template>
  <Whatsapp />
  <div class="min-h-screen bg-[#1B1925] pb-20">
    <Header />
    <img src="../assets/hero-2.png" class="background absolute top-0 z-0" />
    <div
      class="relative z-20 store-container px-5 mb-14 pt-10 w-full h-full flex justify-center"
    >
      <div class="store-content w-full">
        <div class="list-container h-full">
          <div class="w-full mb-10">
            <h2 class="font-bold text-4xl" style="color: rgb(236, 216, 189)">
              Catalogo
            </h2>
          </div>
          <div class="w-full">
            <ul class="w-full">
              <li
                class="w-full py-2 border-b border-yellow-500 flex"
                v-for="category in categories"
                :key="category.id"
              >
                <router-link
                  :to="{
                    name: 'category',
                    params: { category: category.slug },
                  }"
                  class="text-white text-sm cursor-pointer"
                  >{{ category.name }}</router-link
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="list-container2 flex flex-col h-full">
          <div
            class="list-container2-content w-full flex justify-between mb-10"
          >
            <div class="w-max">
              <h2 class="font-bold text-4xl" style="color: rgb(236, 216, 189)">
                Catalogo
              </h2>
            </div>
          </div>
          <div class="flex flex-col">
            <div
              v-if="search_status"
              class="search-container mb-10 w-full flex"
            >
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="white"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
              <input
                type="search"
                name=""
                id=""
                class="pl-2 w-full bg-transparent focus:outline-none text-white"
              />
            </div>
            <div class="category2-container flex flex-col">
              <div class="category2-content flex mb-5">
                <select
                  name=""
                  id=""
                  class="pl-2 w-full border-none bg-transparent focus:outline-none text-white"
                >
                  <option disabled selected>Categoria</option>
                </select>
                <button class="button-slide flex justify-center items-center">
                  <svg
                    class="w-6 h-6"
                    fill="none"
                    stroke="white"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="products pl-6" style="height: max-content">
          <div class="grid grid-cols-2 w-full h-full bg-gray-100 gap-10 p-10">
            <div
              v-for="product in products"
              :key="product.name"
              class="w-full mb-4 flex flex-col"
            >
              <div class="w-full mb-2">
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
  </div>
</template>

<script>
import { onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import Whatsapp from "../components/Whatsapp.vue";
import supabase from "../services/supabase";
import Header from "../components/Header.vue";

export default {
  name: "Home",
  components: { Header, Whatsapp },
  setup() {
    const route = useRoute();

    const categories = ref([]);
    const products = ref([]);

    onMounted(() => {
      getCategories();
      getProducts();
    });

    watch(
      () => route.params.category,
      async (newCategory) => {
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
      try {
        let { data, error } = await supabase
          .from("products")
          .select('*')
        products.value = data;
      } catch (error) {
        console.log(error);
      }
    };

    const getProductsByCategory = async (value) => {
      try {
        let { data, error } = await supabase
          .from("categories")
          .select("products(*)")
          .eq("slug", value);
        products.value = data[0].products;
      } catch (error) {
        console.log(error);
      }
    };

    return { categories, products };
  },
};
</script>

<style>
.background {
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
}
.store-content {
  display: grid;
  grid-template-columns: auto 1fr;
  max-width: 1080px;
}

.products-container {
  display: grid;
  padding: 40px;
  justify-items: center;
  background-color: rgb(238, 238, 238);
}

.list-container {
  width: 250px;
}

.product-img img {
  width: 200px;
  height: 200px;
}

.list-container2 {
  display: none !important;
}

.category2-content {
  padding-bottom: 10px;
  border-bottom: 1px solid rgb(254, 206, 81);
}

.category2-container select {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}

@media (max-width: 976px) {
  .products-container {
    padding: 30px;
  }
}

@media (max-width: 810px) {
  .store-content {
    display: flex;
    flex-direction: column;
  }

  .products {
    padding: 0 !important;
    margin-bottom: 50px;
  }

  .list-container {
    display: none;
  }

  .list-container2 {
    display: flex !important;
  }

  .button-slide {
    width: 25px;
    height: 25px;
    background-color: rgb(247, 150, 63);
  }

  .button-slide svg {
    width: 20px;
    height: 20px;
  }

  .search-container {
    padding-bottom: 2px;
    border-bottom: 1px solid rgb(254, 206, 81);
  }
}

@media (max-width: 425px) {
  .list-container2-content h2 {
    font-size: 25px;
  }
}
</style>
