import newBoard from "../../core/board/new.js";

export default {
  url: "/board/new",
  method: "POST",
  handler: newBoard,
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
