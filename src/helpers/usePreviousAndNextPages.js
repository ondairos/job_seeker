import { computed } from "vue";

const usePreviousAndNextPages = (currentPage, maxPage) => {
  const previousPage = computed(() => {
    const prevPage = currentPage.value - 1;
    const firstPage = 1;
    return prevPage >= firstPage ? prevPage : undefined;
  });

  const nextPage = computed(() => {
    const nextPage = currentPage.value + 1;
    // const maxPage = Math.ceil(filteredJobs.value.length / 10);
    return nextPage <= maxPage.value ? nextPage : undefined;
  });

  return { previousPage, nextPage };
};

export default usePreviousAndNextPages;
