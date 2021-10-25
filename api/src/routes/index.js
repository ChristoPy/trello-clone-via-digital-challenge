import auth from "./auth/index.js";
import board from "./board/index.js";

const ROUTES = [...auth, ...board];

export default (fastify) => ROUTES.forEach((route) => fastify.route(route));
