import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { serveStatic } from "@hono/node-server/serve-static";
import home from "./pages";
import auth from "./pages/auth";

const app = new Hono();

app.use("/public/*", serveStatic({ root: "./" }));

app.route("/", home);
app.route("/auth", auth);

const port = 3000;
console.log(`Server is running on port ${port}: http://localhost:3000/`);

serve({
  fetch: app.fetch,
  port,
});
