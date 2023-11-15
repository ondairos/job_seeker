import { computed } from "vue";

interface SimpleRef {
  value: number;
}

const usePreviousAndNextPages = (currentPage: SimpleRef, maxPage: SimpleRef) => {
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
