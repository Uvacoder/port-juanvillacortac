import type { RequestHandler } from "@sveltejs/kit";

export const get: RequestHandler = () => ({
  status: 200,
  body: {
    date: new Date().toLocaleString(),
  }
})
