import { Hono } from "hono";
import Page from "./login/page";
import { zValidator } from "@hono/zod-validator";
import { z } from "zod";
import { validator } from "hono/validator";
import { deleteCookie, setCookie } from "hono/cookie";

const app = new Hono();

app.get("/login", (c) => {
  return c.html(Page());
});

app.post(
  "/login",
  validator("form", (value, c) => {
    const parsed = z
      .object({
        email: z.string().email().min(1),
        password: z.string().min(3),
      })
      .safeParse(value);

    if (!parsed.success) {
      return c.json(parsed);
    }

    setCookie(c, "userdata", JSON.stringify(value));
    return c.redirect("/");
  })
);

app.post("/logout", (c) => {
  deleteCookie(c, "userdata");
  return c.redirect("/");
});

app.get("/register");

export default app;
