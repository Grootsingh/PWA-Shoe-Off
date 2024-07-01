import { filterReleased, filterSale, filterSearch, isNewShoe } from "./utils";
import SHOES from "./data";

function useFilter(isFilter, isSearch) {
  let ShoeList = SHOES;

  if (isFilter === "New Released") {
    ShoeList = filterReleased(SHOES, isNewShoe);
  } else if (isFilter === "Sale") {
    ShoeList = filterSale(SHOES);
  } else if (isFilter === "Show All") {
    ShoeList = SHOES;
  }
  if (isSearch && isFilter) {
    const SearchList = filterSearch(SHOES, isSearch);
    if (isFilter === "New Released") {
      ShoeList = filterReleased(SearchList, isNewShoe);
    } else if (isFilter === "Sale") {
      ShoeList = filterSale(SearchList);
    } else if (isFilter === "Show All") {
      ShoeList = SearchList;
    }
  }
  return ShoeList;
}

export { useFilter };
