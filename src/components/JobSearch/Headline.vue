<template>
  <section class="mb-16">
    <h1 class="font-bold tracking-tighter mb-14 text-8xl">
      <span :class="actionClass">{{ action }}</span> For EveryOne
    </h1>
    <h2 class="text-3xl font-light">Build for everyone, everywhere, and every device.</h2>
  </section>
</template>

<script>
import nextAction from '@/utils/nextAction';
export default {
  name: "Headline",
  data() {
    return {
      action: "build",
      interval: null,
    };
  },
  computed: {
    actionClass() {
      return {
        // build: this.action === "build",
        // design: this.action === "design",
        // develop: this.action === "develop",
        // code: this.action === "code",
        [this.action.toLocaleLowerCase()]: true, // [build]: true
      };
    },
  },
  created() {
    this.changeTitle();
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
  methods: {
    changeTitle() {
      this.interval = setInterval(() => {
        const actions = ["build", "design", "develop", "code"]; 
        this.action = nextAction(actions, this.action); 
      }, 2000);
    },
  },
};
</script>

<style scoped>
.build {
  color: red;
}
.design {
  color: green;
}
.develop {
  color: blue;
}
.code {
  color: purple;
}
</style>
