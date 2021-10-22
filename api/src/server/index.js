import Fastify from "fastify";
import Routes from "../routes/index.js";

export default () => {
  const server = Fastify({ logger: true });

  Routes(server);

  server.listen(process.env.PORT, (error) => {
    if (!error) return

    server.log.error(error);
    process.exit(1);
  });
};
