import login from "../../core/auth/login.js";
import { EMAIL_SCHEMA, PASSWORD_SCHEMA } from "./shared.js";

export default {
  url: "/auth/login",
  method: "POST",
  handler: login,
  schema: {
    body: {
      required: ["email", "password"],
      properties: {
        email: EMAIL_SCHEMA,
        password: PASSWORD_SCHEMA,
      },
    },
  },
};
