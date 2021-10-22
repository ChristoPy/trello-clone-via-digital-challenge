import Login from "../../core/auth/login.js";

export default {
  url: "/auth/login",
  method: "POST",
  handler: Login,
  schema: {
    body: {
      required: ["email", "password"],
      properties: {
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
