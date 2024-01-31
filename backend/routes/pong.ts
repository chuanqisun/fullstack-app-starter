import { TrpcServer } from "../server";

export function pong(t: TrpcServer) {
  return t.procedure.query(async () => {
    return "pong";
  });
}
