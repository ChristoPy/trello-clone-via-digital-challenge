import { hashPassword } from "../../utils/crypto.js";

const { client, query } = process.persistent;

const createUser = (data) => client.query(
  query.Create(query.Collection("users"), {
    data: {
      ...data,
    },
  }),
);

export default ({ body }, response) => {
  response.type("application/json");

  hashPassword(body.password)
    .then((hash) =>
      createUser({ name: body.name, email: body.email, password: hash })
    )
    .then((faunaResponse) => {
      response.status(200);
      response.send({ ...faunaResponse.data });
    })
    .catch((error) => {
      response.status(400);
      response.send(error);
    });
};
