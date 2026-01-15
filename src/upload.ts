import { Hono } from "hono";
import type { Bindings } from "./types";

const upload = new Hono<Bindings>();

upload.post("/", async (c) => {
	const { file } = await c.req.parseBody();

	if (!file || typeof file === "string") {
		return c.json({ error: "No file uploaded." }, 400);
	}

	await c.env.DISTRIBUTE_BUCKET.put(file.name, file.stream());

	return c.json({
		message: "File uploaded",
		url: `${c.env.R2_URL}/${file.name}`,
	});
});

export default upload;
