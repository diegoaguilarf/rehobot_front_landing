<template>
  <div class="store-container mb-14 pt-10 w-full h-full flex justify-center">
    <div class="store-content  w-full">
      <div class="list-container h-full">
        <div class="w-full mb-10">
          <h2 class="font-bold text-4xl" style="color: rgb(236, 216, 189);">Catalogo</h2>
        </div>
        <div class=" w-full">
          <ul class="w-full">
            <li class="w-full py-2 border-b border-yellow-500 flex" v-for="products in catalogo" :key="products.name">
              <p class="text-white text-sm">{{products.name}}</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="pl-6" style="height: max-content;">
        <div class="products-container p-8 w-ful h-full">
          <div v-for="product in products" :key="product.name" class="mb-4 flex flex-col">
            <div class="product-img mb-2">
              <img class="rounded" src="../assets/casco.jpg" alt="">
            </div>
            <div>
              <p class="font-semibold leading-none" style="color: rgb(27, 25, 37);">{{product.name}}</p>
              <p class="mb-1 text-xs italic text-gray-500">Reglamentario</p>
              <p class="font-semibold" style="color: rgb(27, 25, 37);">$50.000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {
  },
  data() {
    return {
      catalogo:[
        {name:"Protección corporal"},
        {name:"Protección visual"},
        {name:"Protección facial y de cabeza"},
        {name:"Protección auditiva"},
        {name:"Protección respiratoria"},
        {name:"Protección contra caídas"},
        {name:"Calzado industrial"},
        {name:"Protección manual"},
        {name:"Elementos plan de emergencia"},
        {name:"Elementos de bioseguridad"},
      ],

      products: [
        {name:"Casco"},
        {name:"Casco"},
        {name:"Casco"},
        {name:"Casco"},
        {name:"Casco"},
        {name:"Casco"},
        {name:"Casco"},
        {name:"Casco"},
        {name:"Casco"},
      ]
    }
  },

  computed: {
    path(){
      return this.$route.path
    }
  }
};
</script>
<style>
  .store-content{
    display: grid;
    grid-template-columns: auto 1fr;
    max-width: 1080px;
  }

  .products-container{
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: auto;
    padding: 20px 10px;
    justify-items: center;
    background-color: rgb(238, 238, 238);
  }

  .list-container{
    width: 250px;
  }

  .product-img img{
    width: 200px;
    height: 200px;
  }
</style>
