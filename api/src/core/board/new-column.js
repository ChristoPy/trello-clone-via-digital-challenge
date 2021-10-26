import { createColumnModel } from "../../models/column.js";

const { client, query } = process.persistent;

const createColumn = (data) => client.query(
  query.Create(query.Collection("columns"), {
    data: {
      name: data,
      cards: []
    },
  }),
).catch(() => false);

const addColumnToBoard = (column, board) => {
  return client.query(
    query.Let(
      {
        ref: query.Ref(query.Collection('boards'), board),
        doc: query.Get(query.Var('ref')),
        array: query.Select(['data', 'columns'], query.Var('doc'))
      },
      query.Update(query.Var('ref'),{ data: { columns: query.Append([column], query.Var('array')) } } )
    )
  ).catch(() => false)
}

export default async ({ body, params }, response) => {
  response.type("application/json");

  const board = params.id;

  const column = await createColumn(body.name, board);

  if (!column) {
    response.status(400);
    response.send();
    return;
  }

  const boardUpdated = await addColumnToBoard(column.ref.id, board);

  if (!boardUpdated) {
    response.status(400);
    response.send();
    return;
  }

  response.status(200);
  response.send(createColumnModel(column));
};
