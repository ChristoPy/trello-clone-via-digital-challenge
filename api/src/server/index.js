import fastify from "fastify";
import cors from "fastify-cors";

const setupRoutes = async (server) =>
  import("../routes/index.js").then((module) => {
    const routes = module.default;
    routes(server);
  });

export default async () => {
  const server = fastify({ logger: true });

  server.register(cors, {
    origin:'*',
  })

  await setupRoutes(server);

  server.listen(process.env.PORT, (error) => {
    if (!error) return;

    server.log.error(error);
    process.exit(1);
  });
};
