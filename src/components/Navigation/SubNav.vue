<script>
export default {
  name: "SubNav",
  data() {
    return {
      onJobResultsPage: true,
    };
  },
};
</script>

<template>
  <div class="w-full h-16 bg-white border-b border-solid border-brand-gray-1">
    <div class="flex items-center h-full px-8">
      <div v-if="onJobResultsPage">
        <font-awesome-icon :icon="['fas', 'search']" class="mr-2" />
        <span><span class="text-brand-green-1">165</span> jobs matched</span>
      </div>
    </div>
  </div>
</template>
