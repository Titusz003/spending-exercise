import request from "supertest";
import app from "./app";
import { spendingsModel } from "./models/spendingsModel";
jest.mock("./models/spendingsModel");

describe("/spendings", () => {
  test("It should response the GET method", async () => {
    spendingsModel.getSpendings.mockResolvedValue({
      description: "Mango",
      amount: 1200,
      currency: "USD",
    });
    const res = await request(app).get("/spendings").send({});
    expect(res.body).toStrictEqual({
      description: "Mango",
      amount: 1200,
      currency: "USD",
    });
    expect(res.statusCode).toEqual(200);
  });
  test("POST: parameter missing", async () => {
    const res = await request(app).post("/spendings").send({
      description: "Mango",
      amount: "",
      currency: "USD",
    });
    expect(res.body).toEqual({
      errorCode: 400,
      message: "You must fill every field!",
    });
    expect(res.statusCode).toEqual(400);
  });
  test("POST: successfull", async () => {
    const res = await request(app).post("/spendings").send({
      description: "Mango",
      amount: "1200",
      currency: "USD",
    });
    expect(res.body).toEqual({
      errorCode: 200,
      message: "New spending added!",
    });
    expect(res.statusCode).toEqual(200);
  });
});
