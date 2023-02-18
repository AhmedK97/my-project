<template>
  <img
    :src="imageLink"
    class="object-contain w-8 h-8 rounded-3xl"
  />
</template>


<script>
export default {
  name: "ProfileImage",

    data() {
        return {
        imageLink: "https://www.w3schools.com/css/paris.jpg",
        };
    },
};

</script>