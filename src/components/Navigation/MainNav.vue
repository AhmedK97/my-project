<template>
  <header :class="['w-full', 'text-sm', hiderHightClass]">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div
        class="flex h-full px-8 mx-auto border-b border-solid flex-nowrap border-brand-gray-1"
      >
        <a
          v-bind:href="URL"
          class="flex items-center h-full text-xl font-bold text-brand-blue-1"
          >{{ company }}</a
        >
        <nav class="h-full ml-12">
          <ul class="flex h-full p-0 m-0 list-none">
            <li
              class="h-full ml-9 first:ml-0"
              v-for="menuItem in menuItems"
              :key="menuItem"
            >
              <a href="#" class="flex items-center h-full py-2.5">
                {{ menuItem }}
              </a>
            </li>
          </ul>
        </nav>
        <div class="flex items-center h-full ml-auto">
          <profile-image v-if="isLoggedIn" />
          <action-button
            v-else
            text="Sign In"
            type="primary"
            @click="loginUser"
          />
        </div>
      </div>
      <subnav v-if="isLoggedIn" />
    </div>
  </header>
</template>

<script>
import ActionButton from "@/components/shared/ActionButton.vue";
import ProfileImage from "@/components/Navigation/ProfileImage.vue";
import Subnav from "@/components/Navigation/Subnav.vue";

export default {
  components: { ActionButton, ProfileImage, Subnav },

  name: "MainNav",

  data() {
    return {
      company: "Hight Jack Indicator",
      URL: "http://www.google.com",
      menuItems: [
        "Teams",
        "Locations",
        "life at bobo",
        "How we hire",
        "Students",
        "Jobs",
      ],
      isLoggedIn: false,
    };
  },
  computed: {
    hiderHightClass() {
      return {
        "h-16": !this.isLoggedIn,
        "h-32": this.isLoggedIn,
      };
    },
  },
  methods: {
    loginUser() {
      this.isLoggedIn = true;
    },
  },
};
</script>
