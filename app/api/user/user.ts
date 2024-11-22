// user.ts
import prismadb from "@/lib/prismadb";
import { Hono } from "hono";

const app = new Hono();

// app.get("/", async (c) => {
//   const users = await prismadb.user.findMany();
//   return c.json(users);
// });

app.post("/", async (c) => {
  const { email, name, password } = await c.req.json();
  const user = await prismadb.user.create({
    data: {
      email,
      name,
      password,
    },
  });
  return c.json(user);
});

app.get("/get-by-email", async (c) => {
  console.log(await c.req.query());

  // const { email } = await c.req.query();
  // const user = await prismadb.user.findFirst({
  //   where: { email: email.toString() },
  // });
  // return c.json(await c.req.query());
  const users = await prismadb.user.findMany();
  return c.json(users);
});

app.get("/:id", async (c) => {
  const { id } = await c.req.param();
  const user = await prismadb.user.findFirst({
    where: { id: id.toString() },
  });
  return c.json(user);
});

export default app;
