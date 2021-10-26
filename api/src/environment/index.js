import { config } from "dotenv";
import path from "path";

export default async () => {
  const fileName = process.env.NODE_ENV === "prod" ? ".env" : "dev.env";
  config({ path: `${path.resolve("")}/${fileName}` });
};
