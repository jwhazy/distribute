```bash
bun install
bun run types
bun run dev
```
# distribute
Upload and go, built on top of Cloudflare Workers and R2. Mainly, just a quick HTTP wrapper for R2 for easy uploading from desktop and mobile. This code was whipped up spread over a couple hours.

## Using a remote bucket
To use a remote/production R2 bucket edit the default wrangler.jsonc and its fields as shown below:

```jsonc
"r2_buckets": [
	{
		"binding": "DISTRIBUTE_BUCKET",
		"bucket_name": "ACTUAL_R2_BUCKET_NAME", // EDIT THIS LINE ONLY...
		"remote": true
	}
],
```

## macOS and iOS shortcuts (soon)
Shortcuts that work for both macOS and iOS. Extremely easy way to execute via Spotlight, iOS share sheet or even Raycast.
