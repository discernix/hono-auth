import { css } from "hono/css";
import { Child, PropsWithChildren } from "hono/jsx";

export default function AuthLayout({
  title,
  children,
}: {
  title: string;
  children: Child;
}) {
  return (
    <html>
      <head>
        <title>{title}</title>
        <link rel="stylesheet" href="/public/css/pico.min.css" />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        class={`container`}
        style={`
          display: grid;
          place-items: center;
          max-width: 50vh; 
          min-height: 100vh;
        `}>
        <main>{children}</main>
      </body>
    </html>
  );
}
