export const createColumnModel = (column) => ({
  id: column.ref.id,
  name: column.data.name,
  cards: [],
});
