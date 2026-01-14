import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
	return c.status(404);
});

export default app;
