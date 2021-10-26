import updateColumn from "../../core/board/update-column.js";

export default {
  url: "/board/:id/column/:index",
  method: "POST",
  handler: updateColumn,
};
