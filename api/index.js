import environment from "./src/environment/index.js";
import server from "./src/server/index.js";

environment().then(server);
