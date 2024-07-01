function formatPrice(price) {
  let USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return USDollar.format(price).slice(0, 6);
}

function isNewShoe(date1) {
  const date2 = Date.now();

  //calculate time difference
  const time_difference = date2 - date1;

  //calculate days difference by dividing total milliseconds in a day
  const days_difference = time_difference / (1000 * 60 * 60 * 24);

  return Math.round(days_difference) < 30 ? "Just released!" : "";
}

function filterReleased(List, CheckNewOrNot) {
  return List.filter(({ releaseDate }) => CheckNewOrNot(releaseDate));
}

function filterSale(List) {
  return List.filter(({ salePrice }) => salePrice);
}

function filterSearch(List, search) {
  return List.filter(({ name }) => {
    const lowerCaseName = name.toLocaleLowerCase();
    const lowerCaseSearchInput = search.toLocaleLowerCase();
    return lowerCaseName.includes(lowerCaseSearchInput);
  });
}

export { formatPrice, isNewShoe, filterReleased, filterSale, filterSearch };
