import cors from "@fastify/cors";
import fastifyStatic from "@fastify/static";
import { initTRPC } from "@trpc/server";
import { fastifyTRPCPlugin } from "@trpc/server/adapters/fastify";
import fastify from "fastify";
import path from "path";
import { pong } from "./routes/pong";

export const trpc = initTRPC.context().create();
export type TrpcServer = typeof trpc;

const trpcRouter = trpc.router({
  ping: pong(trpc),
});

export type AppRouter = typeof trpcRouter;

const server = fastify()
  .register(cors)
  .register(fastifyStatic, {
    root: path.resolve("dist/static"),
  })
  .register(fastifyTRPCPlugin, {
    prefix: "/trpc",
    trpcOptions: {
      router: trpcRouter,
    },
  });

const port = parseInt(process.env.PORT ?? "3000");

(async () => {
  try {
    console.log(`Listening on port ${port}`);
    await server.listen({ port });
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
})();
