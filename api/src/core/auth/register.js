import { hashPassword, createSessionToken } from "../../utils/crypto.js";
import { createUserModel } from "../../models/user.js";

const { client, query } = process.persistent;

const createUser = (data) => client.query(
  query.Create(query.Collection("users"), {
    data: {
      ...data,
    },
  }),
).catch(() => false);

export default async ({ body }, response) => {
  response.type("application/json");

  const password = await hashPassword(body.password);

  const userCreated = await createUser({ name: body.name, email: body.email, password })

  if (!userCreated) {
    response.status(400);
    response.send();
    return;
  }

  const sessionToken = await createSessionToken(userCreated.ref.id);

  response.status(200);
  response.send(createUserModel(userCreated, sessionToken));
};
