<template>
  <section id="nosotros" class="px-5 xl:px-0 mx-auto max-w-7xl w-full grid lg:grid-cols-2 gap-5 lg:gap-0 relative">
    <div class="w-full flex justify-center order-1 lg:order-none">
      <img src="../assets/about.png" class="w-full sm:w-4/5 xl:w-full object-cover object-center" alt="" />
    </div>
    <div class="w-full flex justify-center">
      <div class="bg-[#F89E19] w-full lg:max-w-2xl xl:max-w-[800px] py-10 px-8 xl:px-12 flex flex-col gap-3 xl:gap-5 border border-[#707070] lg:absolute lg:right-0 lg:right-5 lg:bottom-7">
        <h2 class="font-league_spartan mb-3 font-black text-3xl text-center lg:text-start xl:text-5xl">{{ title.value }}</h2>
        <p class="font-light text-sm xl:text-lg text-center lg:text-start  leading-5 xl:leading-8">
          {{ description.value }}
        </p>
      </div>
    </div>
  </section>
</template>
<script>
  import { watch, ref } from "vue";

  export default {
    props:{
      texts: Array, 
    },
    setup(props) {
      const title = ref('');
      const description = ref('');
      
      watch(() => props.texts, () => {
        title.value = props.texts.find(item => item.key === 'about-us-title')
        description.value = props.texts.find(item => item.key === 'about-us-description')
      });

      return {
        title,
        description
      };
    },
  }
</script>
<style scoped>
</style>
