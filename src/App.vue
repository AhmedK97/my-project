<template>
  <mainNav />
  <hero /> 
 </template>

<script>
import mainNav from "@/components/Navigation/MainNav.vue";


import hero from "@/components/JobSearch/Hero.vue";

export default {
  name: "App",


  components: {
    mainNav,
    hero,
  },
};
</script>
