import { env } from "cloudflare:workers";
import { Hono } from "hono";
import upload from "./upload";

if (!env.UPLOAD_PASSWORD || typeof env.UPLOAD_PASSWORD !== "string") {
	throw new Error(
		"UPLOAD_PASSWORD is not set. Please set it in your environment variables (or more likely the Cloudflare dashboard).",
	);
}

const app = new Hono();

app.route("/upload", upload);

export default app;
