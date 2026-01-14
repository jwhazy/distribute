import { Hono } from "hono";

const serve = new Hono();

serve.get("/", (c) => {
	return c.status(404);
});

export default serve;
