<template>
  <form
    class="flex items-center w-full h-12 border border-solid rounded-3xl mt14 border-brand-gray-3"
  >
    <font-awesome-icon :icon="['fas', 'search']" class="ml-4 mr-3" />

    <div class="flex flex-1 h-full text-base font-light flex-nowrap">
      <div class="relative flex items-center flex-1 h-full pr-3">
        <label for="" class="absolute left-0 -top-10">Role </label>
        <text-input placeholder="SoftWare Engineer" v-model="role" />
      </div>

      <span
        class="flex items-center h-full px-3 border-l border-brand-gray-3 bg-brand-gray-2"
        >in</span
      >

      <div class="relative flex items-center">
        <div class="relative flex items-center flex-1 h-full pr-3">
          <label for="" class="absolute left-0 -top-10">Where?</label>
          <text-input placeholder="Los Angeles" v-model="location" />
        </div>
      </div>

      <action-button text="Search" type="secondary" class="rounded-r-3xl" />
    </div>
  </form>
</template>

<script>
import ActionButton from "@/components/shared/ActionButton.vue";
import TextInput from "@/components/shared/TextInput.vue";
export default {
  name: "JobSearchForm",
  components: {
    ActionButton,
    TextInput,
  },
  data() {
    return {
      role: "",
      location: "",
    };
  },
  methods: {
    // updateRole(payload){
    //   this.role = payload;
    // },
    // updateLocation(payload){
    //   this.location = payload;
    // }
  },
};
</script>
