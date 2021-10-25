import newColumn from "../../core/board/new-column.js";

export default {
  url: "/board/:id/column",
  method: "POST",
  handler: newColumn,
  schema: {
    body: {
      required: ["name"],
      properties: {
        name: {
          type: "string",
          minimum: 1,
        },
      },
    },
  },
};
