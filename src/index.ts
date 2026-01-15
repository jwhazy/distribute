import { Hono } from "hono";
import upload from "./upload";

const app = new Hono();

app.route("/upload", upload);

export default app;
