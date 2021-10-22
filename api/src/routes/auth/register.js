import Register from "../../core/auth/register.js";

export default {
  url: "/auth/register",
  method: "POST",
  handler: Register,
  schema: {
    body: {
      required: ["name", "email", "password"],
      properties: {
        name: {
          type: "string",
        },
        email: {
          type: "string",
        },
        password: {
          type: "string",
        },
      }
    },
  },
};
