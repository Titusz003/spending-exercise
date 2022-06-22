import { db } from "../connection.js";

export const spendingsModel = {
  async getSpendings() {
    const query = await db.query(
      "SELECT description, amount, spent_at, currency FROM spendings"
    );
    return query;
  },
  async postSpendings(description, amount, currency) {
    const query = await db.query(
      "INSERT INTO spendings (description, amount, currency) VALUES (?,?,?)",
      [description, amount, currency]
    );
  },
};
