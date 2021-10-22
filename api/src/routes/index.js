import Auth from "./auth/index.js";

const ROUTES = [...Auth];

export default (fastify) => ROUTES.forEach((route) => fastify.route(route));
