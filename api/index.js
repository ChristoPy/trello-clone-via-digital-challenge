import environment from "./src/environment/index.js";
import database from "./src/database/index.js";
import server from "./src/server/index.js";

environment().then(database).then(server);

