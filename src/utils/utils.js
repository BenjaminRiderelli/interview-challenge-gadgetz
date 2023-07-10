export const LOADING_ELEMENTS_ARR = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
];

export const handleSearch = (arr, string) => {
  const lowercasedStr = string.toLowerCase()
  const filteredArr = arr.filter(
    (el) =>
      el.model.toLowerCase().includes(lowercasedStr) ||
      el.brand.toLowerCase().includes(lowercasedStr)
  );
  return filteredArr
};