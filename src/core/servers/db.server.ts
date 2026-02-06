import { MongoClient, Db } from "mongodb";

let client: MongoClient;

const connect = async (connectionURL: string) => {
  client = new MongoClient(connectionURL);
  await client.connect();
  dbServer.db = client.db();
};

interface DBServer {
  connect: (connectionURL: string) => Promise<void>;
  disconnect: () => Promise<void>;
  db: Db;
}

const disconnect = async () => {
  await client.close();
};

export let dbServer: DBServer = {
  connect,
  disconnect,
  db: undefined,
};
