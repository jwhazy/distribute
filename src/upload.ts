import { Hono } from "hono";

const upload = new Hono();

upload.post("/", async (c) => {
	const { file } = await c.req.parseBody();

	if (!file) {
		return c.json({ error: "No file uploaded." }, 400);
	}
	return c.json({ message: "File uploaded" });
});

export default upload;
