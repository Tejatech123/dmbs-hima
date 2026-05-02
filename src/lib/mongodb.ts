import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI || "";
const options = {};

let client;
let clientPromise: Promise<MongoClient>;

if (!process.env.MONGODB_URI) {
  // In development, use a placeholder to avoid build errors if not provided
  client = new MongoClient("mongodb://localhost:27017/dummy");
  clientPromise = Promise.resolve(client);
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
