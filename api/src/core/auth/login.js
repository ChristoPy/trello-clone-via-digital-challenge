import { checkPassword } from "../../utils/crypto.js";

const { client, query } = process.persistent;

const getUserByEmail = (email) => client.query(
  query.Get(query.Match(query.Index("find_user_by_email"), email))
);

export default async ({ body }, response) => {
  response.type("application/json");

  const userFound = await getUserByEmail(body.email);

  if (!userFound) {
    response.status(404);
    response.send();
    return;
  }

  try {
    await checkPassword(body.password, userFound.data.password);
  } catch (_) {
    response.status(403);
    response.send();
    return;
  }

  const userData = {
    user: {
      id: userFound.ref.id,
      name: userFound.data.name,
      email: userFound.data.email,
    },
  };

  response.status(200);
  response.send(userData);
};
