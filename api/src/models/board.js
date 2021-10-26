export const createBoardModel = (board) => ({
  id: board.ref.id,
  name: board.data.name,
  columns: [],
});
