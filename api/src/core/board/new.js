import { createBoardModel } from "../../models/board.js";

const { client, query } = process.persistent;

const createBoard = (data) => client.query(
  query.Create(query.Collection("boards"), {
    data: {
      ...data,
      columns: []
    },
  }),
).catch(() => false);

export default async ({ body }, response) => {
  response.type("application/json");

  const board = await createBoard(body);

  if (!board) {
    response.status(400);
    response.send();
    return;
  }

  response.status(200);
  response.send(createBoardModel(board));
};
