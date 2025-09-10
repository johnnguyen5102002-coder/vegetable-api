import express from "express";
import exitHook from "async-exit-hook";
import { CONNECT_DB, GET_DB, CLOSE_DB } from "./mongodb.js";

const START_SERVER = () => {
  const app = express();
  const port = 8017;

  app.get("/", (req, res) => {
    res.send("Hello World!");
  });

  app.listen(port, () => {
    console.log(`3. Example app listening on port http://localhost:${port}`);
  });

  exitHook(() => {
    console.log("4. Disconecting from MongoDB Atlas....");
    CLOSE_DB();
    console.log("5. Disconected from MongoDB Atlas!");
  });
};

CONNECT_DB()
  .then(() => console.log("1. Connecting to MongoDB Atlas...."))
  .then(() => START_SERVER())
  .then(() => console.log("2. Connected to MongoDB Atlas!"))
  .catch((error) => {
    console.log(error);
    process.exit(0);
  });
