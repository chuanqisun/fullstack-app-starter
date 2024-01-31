import type { AppRouter } from "@app/backend";
import { createTRPCProxyClient, httpLink, type CreateTRPCProxyClient } from "@trpc/client";

export type ApiProxy = CreateTRPCProxyClient<AppRouter>;
const serverEndpoint = import.meta.env.PROD ? `${location.protocol}//${location.host}/trpc` : `${import.meta.env.VITE_DEV_SERVER_HOST}/trpc`;
console.log(`[trpc client] serverEndpoint: ${serverEndpoint}`);

export const api = createTRPCProxyClient<AppRouter>({
  links: [
    httpLink({
      url: serverEndpoint,
    }),
  ],
});
