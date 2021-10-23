import FaunaDB from "faunadb";

const createClient = () => new FaunaDB.Client({
    secret: process.env.FAUNA_SECRET_KEY,
    domain: "db.us.fauna.com",
  });

export default () => {
  const { query } = FaunaDB;
  const client = createClient();

  process.persistent = {
    query,
    client,
  };
};
