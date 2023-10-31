import solid from "solid-start/vite";
import staticAdapter from "solid-start-static";
import unocss from "unocss/vite";
import { defineConfig } from "vite";
import replaceMath from "./scripts/replaceMath";

export default defineConfig({
	server: {
		port: 3000,
		host: "127.0.0.1",
	},
	resolve: {
		alias: {
			"@": "/src",
		},
	},
	plugins: [
		// transform(),
		replaceMath(),
		{
			...(await import("@mdx-js/rollup")).default({
				jsx: true,
				jsxImportSource: "solid-js",
				providerImportSource: "solid-mdx",
			}),
			enforce: "pre",
		},
		solid({
			// adapter: netlify({ edge: true }),
			adapter: staticAdapter(),
			extensions: [".md", ".mdx"],
		}),
		unocss(),
	],
});
