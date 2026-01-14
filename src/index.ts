import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
	return c.notFound();
});

export default app;
