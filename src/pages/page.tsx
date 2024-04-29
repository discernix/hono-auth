import { FC } from "hono/jsx";
import MainLayout from "../libs/layouts/main.layout";
import { Context } from "hono";

export default function Page({ c }: { c: Context }) {
  return (
    <MainLayout title="Home" c={c}>
      <h2>Simple Authentication using Hono</h2>
      <p>
        Our web application leverages Eclipse Hono for secure device
        authentication, ensuring that only authorized devices can access and
        interact with our IoT platform. Through simple yet robust authentication
        mechanisms, we guarantee the integrity and confidentiality of data
        exchanged between devices and our platform.
      </p>
    </MainLayout>
  );
}
