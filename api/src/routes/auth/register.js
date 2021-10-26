import register from "../../core/auth/register.js";
import { EMAIL_SCHEMA, PASSWORD_SCHEMA } from "./shared.js";

export default {
  url: "/auth/register",
  method: "POST",
  handler: register,
  schema: {
    body: {
      required: ["name", "email", "password"],
      properties: {
        name: {
          type: "string",
          minimum: 2,
        },
        email: EMAIL_SCHEMA,
        password: PASSWORD_SCHEMA,
      },
    },
  },
};
