import { Context } from "hono";
import { getCookie } from "hono/cookie";
import { css } from "hono/css";
import { Child, PropsWithChildren } from "hono/jsx";

export default function MainLayout({
  title,
  children,
  c,
}: {
  title: string;
  children: Child;
  c: Context;
}) {
  const userdata = getCookie(c, "userdata");
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
          min-height: 100vh;
        `}>
        <header>
          <nav>
            <h1>Hono Auth</h1>
            <ul>
              {!userdata ? (
                <li>
                  <a href="/auth/login">
                    <button>Login</button>
                  </a>
                </li>
              ) : (
                <>
                  <li>
                    <h4>{JSON.parse(userdata).email}</h4>
                  </li>
                  <li>
                    <a>
                      <form action="/auth/logout" method="POST">
                        <button>Logout</button>
                      </form>
                    </a>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          <nav>
            <h5>Hono Auth</h5>
            <ul>
              <li>
                <a href="https://github.com/bintangyosua">Github</a>
              </li>
            </ul>
          </nav>
        </footer>
      </body>
    </html>
  );
}
