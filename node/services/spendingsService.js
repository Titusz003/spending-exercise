import { spendingsModel } from "../models/spendingsModel.js";

export const spendingsService = {
  async getSpendings() {
    return spendingsModel.getSpendings();
  },
  async postSpendings(description, amount, currency) {
    try {
      if (!description || !amount || !currency) {
        return { errorCode: 400, message: "You must fill every field!" };
      }
      spendingsModel.postSpendings(description, amount, currency);
    } catch (err) {
      console.log(err);
    }
    return { errorCode: 200, message: "New spending added!" };
  },
};
