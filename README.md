```bash
bun install
bun run types
bun run dev
```

To use a remote/production R2 bucket copy the default wrangler.jsonc into wrangler.remote.jsonc and edit the fields as shown below:

```jsonc
"r2_buckets": [
	{
		"binding": "DISTRIBUTE_BUCKET", // DO NOT CHANGE THIS LINE
		"bucket_name": "ACTUAL_R2_BUCKET_NAME",
		"remote": true
	}
],
```
Use `bun run dev -c wrangler.remote.jsonc` to use. `wrangler.remote.jsonc` is Git ignored.
