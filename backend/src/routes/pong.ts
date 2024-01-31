import { TrpcServer } from "../main";

export function pong(t: TrpcServer) {
  return t.procedure.query(async () => {
    return "pong";
  });
}
