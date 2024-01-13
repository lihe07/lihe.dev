import { defineConfig } from "@solidjs/start/config";
import unocss from "unocss/vite";
/* @ts-ignore */
import pkg from "@vinxi/plugin-mdx";
const { default: mdx } = pkg;
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'
import rehypeHighlight from 'rehype-highlight'
import replaceMath from "./scripts/replaceMath.js";

export default defineConfig({
	start: {
		extensions: ["mdx", "md"],
	},
	plugins: [
		unocss(),
		mdx.withImports({})({
			jsx: true,
			jsxImportSource: "solid-js",
			providerImportSource: "solid-mdx",
			rehypePlugins: [rehypeHighlight, () => rehypeKatex({ output: "html" })],
			remarkPlugins: [remarkMath],
		}),
	],
});
