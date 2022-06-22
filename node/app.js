import { spendingsController } from "./controllers/spendingsController.js";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/spendings", spendingsController.get);
app.post("/spendings", spendingsController.post);

app.listen(5000, () => console.log("Server is running"));

export default app;
