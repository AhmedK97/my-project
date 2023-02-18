
import { createApp } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";


import "./assets/tailwind.css";

import App from "@/App.vue";

// Add all icons to the library so you can use it in your page
library.add(faSearch);


createApp(App).component("font-awesome-icon",FontAwesomeIcon).mount("#app");
