<template>
  <div class="w-full bg-[#1B1925] pb-20">
    <Whatsapp />
    <Top />
    <Header msg="Vite + Vue" />
    <div class="w-full flex flex-col gap-24 ">
      <Intro :texts="texts?.home"/>
      <About :texts="texts?.about_us"/>
      <Brands :texts="texts?.brands"/>
      <Contact />
      <Location :texts="texts?.contact"/>
      <Footer :texts_contact="texts?.contact" :texts_footer="texts?.footer"/>
    </div>
  </div>
</template>

<script>
  import { onMounted, ref } from "vue";
  import supabase from "../services/supabase";

  import Whatsapp from "../components/Whatsapp.vue";
  import Top from "../components/Top.vue";
  import Header from "../components/Header.vue";
  import Intro from "../components/Intro.vue";
  import About from "../components/About.vue";
  import Brands from "../components/Brands.vue";
  import Contact from "../components/Contact.vue";
  import Footer from "../components/Footer.vue";
  import Location from "../components/Location.vue";

  export default {
    components: {Whatsapp, Top, Header, Intro, About, Brands, Contact, Footer, Location},
    setup() {
      const texts = ref([])
      
      onMounted(async () => {
        await getTexts()
      })

      const getTexts = async () => {
        try {
          let { data, error } = await supabase.from("landing_texts").select("*");
          texts.value = Object.groupBy(data, (item) => {return item.section});
        } catch (error) {
          console.log(error);
        }
      };

      return {
        texts,
      };
    },
  }
</script>

<style scoped></style>
