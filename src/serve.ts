import { Hono } from "hono";

const serve = new Hono();

serve.get("/", (c) => {
	return c.notFound();
});

export default serve;
