import { getSort } from "./sortData";

/**
 * Get data filtered for dataTable
 * @returns data sorted if click on column, or data filtered with search input or data with pagination
 */
export const getFilterData = (
  data,
  order,
  valueSearch,
  currentPage,
  dataLimit
) => {
  // Sort data on clicked column
  const filterData = getSort(data, order);
  // If use search input
  if (valueSearch.length >= 1) {
    const dataFilter = filterData.filter((element) =>
      JSON.stringify(Object(element))
        .toLowerCase()
        .includes(valueSearch.toLowerCase())
    );
    return dataFilter;
  }
  // Pagination
  const startIndex = currentPage * dataLimit - dataLimit;
  const endIndex = startIndex + dataLimit;
  const sliceData = filterData.slice(startIndex, endIndex);
  return sliceData;
};
