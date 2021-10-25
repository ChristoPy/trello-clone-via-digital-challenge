import auth from "./auth/index.js";

const ROUTES = [...auth];

export default (fastify) => ROUTES.forEach((route) => fastify.route(route));
