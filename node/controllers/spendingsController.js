import { spendingsService } from "../services/spendingsService.js";

export const spendingsController = {
  async get(req, res) {
    try {
      const data = await spendingsService.getSpendings();
      res.status(200).json(data);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  async post(req, res) {
    try {
      const data = await spendingsService.postSpendings(
        req.body.description,
        req.body.amount,
        req.body.currency
      );
      res.status(data.errorCode).json(data);
      return;
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
