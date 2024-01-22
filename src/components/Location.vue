<template>
  <section class="px-5 w-full flex justify-center">
    <div class="py-10 max-w-7xl w-full flex justify-center relative">
      <!-- <img src="../assets/map.png" class="w-full min-h-[20rem] object-cover" alt=""> -->
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d418.28476899432593!2d-73.63082427485432!3d4.137931156677364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3e2e0ade5525bd%3A0x3c7ca1f85b8cdcc6!2sSoluciones%20Industriales%20Rehobot!5e0!3m2!1ses-419!2sco!4v1705929783465!5m2!1ses-419!2sco"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        class="w-full min-h-[25rem]"></iframe>
      <div class="px-8 py-6 bg-[#D9D9D9] shadow-lg absolute md:right-10 -bottom-10 md:bottom-1">
        <p class="font-league_spartan font-bold mb-4 text-xl lg:text-2xl text-[#F89E19]">Contacto</p>
        <ul class="text-sm lg:text-lg">
          <li>{{ first_contact_number.value }} - {{ second_contact_number.value }}</li>
          <li>{{ address.value }}<br/> {{ location.value }}</li>
          <li>{{ first_email.value }}</li>
        </ul>
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
      const first_contact_number = ref('');
      const second_contact_number = ref('');
      const address = ref('');
      const location = ref('');
      const first_email = ref('');
      
      watch(() => props.texts, () => {
        first_contact_number.value = props.texts.find(item => item.key === 'contact-first-number')
        second_contact_number.value = props.texts.find(item => item.key === 'contact-second-number')
        address.value = props.texts.find(item => item.key === 'contact-address')
        location.value = props.texts.find(item => item.key === 'contact-location')
        first_email.value = props.texts.find(item => item.key === 'contact-first-email')
      });

      return {
        first_contact_number,
        second_contact_number,
        address,
        location,
        first_email,
      };
    },
  }
</script>