//johnnguyen5102002
//fapMiwDyWLcrqRR4

const MONGODB_URI =
  "mongodb+srv://johnnguyen5102002:fapMiwDyWLcrqRR4@cluster0-thuynguyen.vdsnrji.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0-thuynguyen";

const MONGODB_DATABASE_NAME = "vegetable-database";

import { MongoClient, ServerApiVersion } from "mongodb";

let vegetableDatabaseInstance = null;

const client = new MongoClient(MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export const CONNECT_DB = async () => {
  await client.connect();
  vegetableDatabaseInstance = client.db(MONGODB_DATABASE_NAME);
};

export const GET_DB = () => {
  if (!vegetableDatabaseInstance) {
    throw new Error("Must connect to database first? ");
  }
  return vegetableDatabaseInstance;
};

export const CLOSE_DB = async () => {
  await client.close();
};
