import { Hono } from "hono";

const upload = new Hono();

upload.get("/", (c) => {
	return c.status(404);
});

export default upload;
