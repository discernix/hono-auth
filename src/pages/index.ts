import { Context, Hono } from "hono";
import Page from "./page";
import MainLayout from "../libs/layouts/main.layout";

const app = new Hono();

app.get("/", (c) => {
  return c.html(Page({ c }));
});

export default app;
