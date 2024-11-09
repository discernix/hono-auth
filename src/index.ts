import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { serveStatic } from "@hono/node-server/serve-static";
import home from "./pages";
import auth from "./pages/auth";
import fs from "fs";
import { handle } from "hono/vercel";

export const runtime = "edge";

const app = new Hono();

app.use("/public/*", serveStatic({ root: "./" }));

app.route("/", home);
app.route("/auth", auth);

// const port = 3000;
// console.log(`Server is running on port ${port}: http://localhost:3000/`);

export const GET = handle(app);
export const POST = handle(app);
export const PUT = handle(app);
export const DELETE = handle(app);

// serve({
//   fetch: app.fetch,
//   port,
// });
