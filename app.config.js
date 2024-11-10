import { defineConfig } from "@solidjs/start/config";
import pkg from "@vinxi/plugin-mdx";

import unocss from "unocss/vite";

import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import rehypeHighlight from "rehype-highlight";

const { default: mdx } = pkg;
export default defineConfig({
  extensions: ["mdx", "md"],
  vite: {
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
  },
});
