const utils = {
  USDToHUF(array) {
    array.forEach((element) => {
      if (element.currency === "USD") {
        element.filterAmount = element.amount * 375;
      } else {
        element.filterAmount = element.amount;
      }
    });
  },
};
export default utils;
