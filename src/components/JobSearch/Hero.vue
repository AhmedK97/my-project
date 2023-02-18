<template>
  <main>
    <section class="flex flex-col h-screen pt-10 pb-20">
      <div class="grid grid-cols-12">
        <div class="col-span-1 col-start-1"></div>

        <div class="col-span-5 col-start-2">
          <headline />
          <job-search-form />
        </div>

        <div class="self-center col-span-5 col-start-7 justify-self-center">
          <img :src="URL" class="w-80 h-80" alt="" />
        </div>

        <div class="col-span-1 col-start-12"></div>
      </div>
    </section>
  </main>
</template>

<script>
import Headline from "@/components/JobSearch/Headline.vue";
import JobSearchForm from "@/components/JobSearch/JobSearchForm.vue";

export default {
  name: "Hero",

  components: {
    Headline,
    JobSearchForm,
  },
  data() {
    return {
      URL: "https://media.istockphoto.com/id/1398462038/photo/online-exam-or-test.jpg?b=1&s=170667a&w=0&k=20&c=rPmfkbaVJ5zY_WcFe5TV9LfLGaamTIW6F-YGrC1jzmc=",
    };
  },
};
</script>
