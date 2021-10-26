const { client, query } = process.persistent;

const updateColumn = (column, data) => client.query(
  query.Update(
    query.Ref(query.Collection('columns'), column),
    {
      data
    },
  )
)

export default async ({ body, params }, response) => {
  response.type("application/json");

  const column = params.index;
  const columnData = { ...body }
  delete columnData.id

  const updated = await updateColumn(column, columnData);

  if (!updated) {
    response.status(400);
    response.send();
    return;
  }

  response.status(200);
  response.send({data: 'ok'});
};
