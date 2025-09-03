import express from "express";
import { CONNECT_DB, GET_DB } from "./mongodb.js";

const START_SERVER = () => {
  const app = express();
  const port = 8017;

  app.get("/", (req, res) => {
    res.send("Hello World!");
  });

  app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
  });
};

CONNECT_DB()
  .then(() => console.log("connect to DB"))
  .then(() => START_SERVER())
  .catch((error) => {
    console.log(error);
    process.exit(0);
  });
