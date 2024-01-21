<template>
  <section class="lg:pr-5 w-full">
    <div class="p-10 max-w-7xl w-full min-h-[25rem] grid lg:grid-cols-[1fr_auto_1fr] gap-10 text-main-text bg-[#eeeeee]">
      <div class="w-full flex flex-col justify-center gap-5">
        <div class="w-full flex justify-center lg:justify-start">
          <img src="../assets/logo_2.png" class="h-16" alt="rehobot" />
        </div>
        <div class="w-full text-center lg:text-start">
          <p>{{ description.value }}</p>
        </div>
      </div>
      <div class="h-full text-center">
        <ul class="h-full flex flex-col justify-between gap-5 lg:gap-0 text-lg font-bold">
          <li v-for="(item, index) in navItems" :key="index" class="cursor-pointer">
            <a :href="`/#${item.seccionId}`" class="hover:text-main transition-all">{{item.name}}</a>
          </li>
          <li class="cursor-pointer">
            <router-link to="/productos" class="hover:text-main transition-all">Productos</router-link>
          </li>
        </ul>
      </div>
      <div class="w-full h-full flex flex-col items-center text-start">
        <div class="h-full flex flex-col justify-between gap-10 lg:gap-0">
          <div class="flex flex-col gap-5 text-center lg:text-start">
            <p class="text-2xl font-bold">Contacto</p>
            <div class="flex flex-col gap-2 transition-all">
              <p class="hover:underline cursor-pointer">{{ first_contact_number.value }}</p>
              <p class="hover:underline cursor-pointer">{{ address.value }}</p>
              <p class="hover:underline cursor-pointer">{{ first_email.value }}</p>
              <p class="hover:underline cursor-pointer">{{ second_email.value }}</p>
              <p class="hover:underline cursor-pointer">{{ location.value }}</p>
            </div>
          </div>
          <p class="text-center lg:text-start">Copyright ©{{currentYear}} - Villavicencio, Colombia</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import { watch, onMounted, ref } from "vue";

  export default {
    props:{
      texts_contact: Array, 
      texts_footer: Array, 
    },
    setup(props) {
      const currentYear = ref('');
      const navItems = ref([
        {
          name: "Inicio",
          seccionId: "intro"
        },
        {
          name: "Nosotros",
          seccionId: "nosotros"
        },
        {
          name: "Marcas",
          seccionId: "marcas"
        },
        {
          name: "Contacto",
          seccionId: "contacto"
        },
      ])
      const description = ref('');
      const first_contact_number = ref('');
      const second_contact_number = ref('');
      const address = ref('');
      const location = ref('');
      const first_email = ref('');
      const second_email = ref('');

      
      watch(() => props.texts_contact, () => {
        description.value = props.texts_footer.find(item => item.key === 'footer-description')
        first_contact_number.value = props.texts_contact.find(item => item.key === 'contact-first-number')
        second_contact_number.value = props.texts_contact.find(item => item.key === 'contact-second-number')
        address.value = props.texts_contact.find(item => item.key === 'contact-address')
        location.value = props.texts_contact.find(item => item.key === 'contact-location')
        first_email.value = props.texts_contact.find(item => item.key === 'contact-first-email')
        second_email.value = props.texts_contact.find(item => item.key === 'contact-second-email')
      });

      onMounted(() => {
        const date = new Date ()
        const year = date.getUTCFullYear()
        currentYear.value = year
      });

      return {
        currentYear,
        navItems,
        description,
        first_contact_number,
        second_contact_number,
        address,
        location,
        first_email,
        second_email,
      };
    },
  }
</script>

  <style>
  </style>