<template>
  <div class="w-full h-16 bg-white border-b border-solid border-brand-gray-1">
    <div class="flex items-center h-full px-8">
      <div>
        <font-awesome-icon :icon="['fas', 'search']" class="mr-3" />
        <span class="text-brand-green-1"> 500 </span>
        <span> Job Matched</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Subnav",
};
</script>
