import { createColumnModel } from "../../models/column.js";

const { client, query } = process.persistent;

const addColumnToBoard = (name, board) => {
  return client.query(
    query.Let(
      {
        ref: query.Ref(query.Collection('boards'), board),
        doc: query.Get(query.Var('ref')),
        array: query.Select(['data', 'columns'], query.Var('doc'))
      },
      query.Update(query.Var('ref'),{ data: { columns: query.Append([{ name, cards: [] }], query.Var('array')) } } )
    )
  )
}

export default async ({ body, params }, response) => {
  response.type("application/json");

  const board = params.id;
  const comment = await addColumnToBoard(body.name, board);

  if (!comment) {
    response.status(400);
    response.send();
    return;
  }

  response.status(200);
  response.send(createColumnModel(comment));
};
