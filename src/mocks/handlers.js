import { HttpResponse, delay, http } from "msw";

import { trades } from "./data";

export const handlers = [
  http.get("/api/trades", async () => {
    await delay();
    return HttpResponse.json(trades);
  }),
];
