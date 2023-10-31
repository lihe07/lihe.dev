// vite.config.js
import solid from "file:///home/lihe07/Desktop/lihe.dev/node_modules/solid-start/vite/plugin.js";
import staticAdapter from "file:///home/lihe07/Desktop/lihe.dev/node_modules/solid-start-static/index.js";
import unocss from "file:///home/lihe07/Desktop/lihe.dev/node_modules/unocss/dist/vite.mjs";
import { defineConfig } from "file:///home/lihe07/Desktop/lihe.dev/node_modules/vite/dist/node/index.js";

// scripts/replaceMath.js
function inlineMath(code) {
  const reg = /\$.+\$/g;
  let hasMath = false;
  for (let piece of code.matchAll(reg)) {
    piece = piece[0];
    code = code.replace(
      piece,
      "<Math>{String.raw`" + piece.substring(1, piece.length - 1) + "`}</Math>"
    );
    hasMath = true;
  }
  return [code, hasMath];
}
function mathBlock(code) {
  const reg = /\$\$[^$]+\$\$/g;
  let hasMath = false;
  for (let piece of code.matchAll(reg)) {
    piece = piece[0];
    code = code.replace(
      piece,
      "<Math block>{String.raw`" + piece.substring(2, piece.length - 2).trim() + "`}</Math>"
    );
    hasMath = true;
  }
  return [code, hasMath];
}
var replaceMath_default = () => {
  return {
    name: "replace-math",
    enforce: "pre",
    transform(src, id) {
      if (id.endsWith(".mdx")) {
        let hasBlock, hasInline;
        [src, hasBlock] = mathBlock(src);
        [src, hasInline] = inlineMath(src);
        if (hasBlock || hasInline) {
          src = "import Math from '@/components/blog/Math'\n\n" + src;
        }
        return {
          code: src,
          map: null
        };
      }
    }
  };
};

// vite.config.js
var vite_config_default = defineConfig({
  server: {
    port: 3e3,
    host: "127.0.0.1"
  },
  resolve: {
    alias: {
      "@": "/src"
    }
  },
  plugins: [
    // transform(),
    replaceMath_default(),
    {
      ...(await import("file:///home/lihe07/Desktop/lihe.dev/node_modules/@mdx-js/rollup/index.js")).default({
        jsx: true,
        jsxImportSource: "solid-js",
        providerImportSource: "solid-mdx"
      }),
      enforce: "pre"
    },
    solid({
      // adapter: netlify({ edge: true }),
      adapter: staticAdapter(),
      extensions: [".md", ".mdx"]
    }),
    unocss()
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiLCAic2NyaXB0cy9yZXBsYWNlTWF0aC5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9ob21lL2xpaGUwNy9EZXNrdG9wL2xpaGUuZGV2XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9saWhlMDcvRGVza3RvcC9saWhlLmRldi92aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS9saWhlMDcvRGVza3RvcC9saWhlLmRldi92aXRlLmNvbmZpZy5qc1wiO2ltcG9ydCBzb2xpZCBmcm9tIFwic29saWQtc3RhcnQvdml0ZVwiO1xuaW1wb3J0IHN0YXRpY0FkYXB0ZXIgZnJvbSBcInNvbGlkLXN0YXJ0LXN0YXRpY1wiO1xuaW1wb3J0IHVub2NzcyBmcm9tIFwidW5vY3NzL3ZpdGVcIjtcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlXCI7XG5pbXBvcnQgcmVwbGFjZU1hdGggZnJvbSBcIi4vc2NyaXB0cy9yZXBsYWNlTWF0aFwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuXHRzZXJ2ZXI6IHtcblx0XHRwb3J0OiAzMDAwLFxuXHRcdGhvc3Q6IFwiMTI3LjAuMC4xXCIsXG5cdH0sXG5cdHJlc29sdmU6IHtcblx0XHRhbGlhczoge1xuXHRcdFx0XCJAXCI6IFwiL3NyY1wiLFxuXHRcdH0sXG5cdH0sXG5cdHBsdWdpbnM6IFtcblx0XHQvLyB0cmFuc2Zvcm0oKSxcblx0XHRyZXBsYWNlTWF0aCgpLFxuXHRcdHtcblx0XHRcdC4uLihhd2FpdCBpbXBvcnQoXCJAbWR4LWpzL3JvbGx1cFwiKSkuZGVmYXVsdCh7XG5cdFx0XHRcdGpzeDogdHJ1ZSxcblx0XHRcdFx0anN4SW1wb3J0U291cmNlOiBcInNvbGlkLWpzXCIsXG5cdFx0XHRcdHByb3ZpZGVySW1wb3J0U291cmNlOiBcInNvbGlkLW1keFwiLFxuXHRcdFx0fSksXG5cdFx0XHRlbmZvcmNlOiBcInByZVwiLFxuXHRcdH0sXG5cdFx0c29saWQoe1xuXHRcdFx0Ly8gYWRhcHRlcjogbmV0bGlmeSh7IGVkZ2U6IHRydWUgfSksXG5cdFx0XHRhZGFwdGVyOiBzdGF0aWNBZGFwdGVyKCksXG5cdFx0XHRleHRlbnNpb25zOiBbXCIubWRcIiwgXCIubWR4XCJdLFxuXHRcdH0pLFxuXHRcdHVub2NzcygpLFxuXHRdLFxufSk7XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9ob21lL2xpaGUwNy9EZXNrdG9wL2xpaGUuZGV2L3NjcmlwdHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL2xpaGUwNy9EZXNrdG9wL2xpaGUuZGV2L3NjcmlwdHMvcmVwbGFjZU1hdGguanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2hvbWUvbGloZTA3L0Rlc2t0b3AvbGloZS5kZXYvc2NyaXB0cy9yZXBsYWNlTWF0aC5qc1wiO2Z1bmN0aW9uIGlubGluZU1hdGgoY29kZSkge1xuICBjb25zdCByZWcgPSAvXFwkLitcXCQvZztcbiAgbGV0IGhhc01hdGggPSBmYWxzZTtcbiAgZm9yIChsZXQgcGllY2Ugb2YgY29kZS5tYXRjaEFsbChyZWcpKSB7XG4gICAgcGllY2UgPSBwaWVjZVswXTtcbiAgICBjb2RlID0gY29kZS5yZXBsYWNlKFxuICAgICAgcGllY2UsXG4gICAgICBcIjxNYXRoPntTdHJpbmcucmF3YFwiICsgcGllY2Uuc3Vic3RyaW5nKDEsIHBpZWNlLmxlbmd0aCAtIDEpICsgXCJgfTwvTWF0aD5cIlxuICAgICk7XG4gICAgaGFzTWF0aCA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gW2NvZGUsIGhhc01hdGhdO1xufVxuXG5mdW5jdGlvbiBtYXRoQmxvY2soY29kZSkge1xuICBjb25zdCByZWcgPSAvXFwkXFwkW14kXStcXCRcXCQvZztcbiAgbGV0IGhhc01hdGggPSBmYWxzZTtcbiAgZm9yIChsZXQgcGllY2Ugb2YgY29kZS5tYXRjaEFsbChyZWcpKSB7XG4gICAgcGllY2UgPSBwaWVjZVswXTtcbiAgICBjb2RlID0gY29kZS5yZXBsYWNlKFxuICAgICAgcGllY2UsXG4gICAgICBcIjxNYXRoIGJsb2NrPntTdHJpbmcucmF3YFwiICtcbiAgICAgICAgcGllY2Uuc3Vic3RyaW5nKDIsIHBpZWNlLmxlbmd0aCAtIDIpLnRyaW0oKSArXG4gICAgICAgIFwiYH08L01hdGg+XCJcbiAgICApO1xuICAgIGhhc01hdGggPSB0cnVlO1xuICB9XG4gIHJldHVybiBbY29kZSwgaGFzTWF0aF07XG59XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBcInJlcGxhY2UtbWF0aFwiLFxuICAgIGVuZm9yY2U6IFwicHJlXCIsXG4gICAgdHJhbnNmb3JtKHNyYywgaWQpIHtcbiAgICAgIGlmIChpZC5lbmRzV2l0aChcIi5tZHhcIikpIHtcbiAgICAgICAgLy8gc3JjID0gXCJpbXBvcnQgTWF0aCBmcm9tICdAL2NvbXBvbmVudHMvYmxvZy9NYXRoJ1xcblxcblwiICsgc3JjXG4gICAgICAgIGxldCBoYXNCbG9jaywgaGFzSW5saW5lO1xuICAgICAgICBbc3JjLCBoYXNCbG9ja10gPSBtYXRoQmxvY2soc3JjKTtcbiAgICAgICAgW3NyYywgaGFzSW5saW5lXSA9IGlubGluZU1hdGgoc3JjKTtcbiAgICAgICAgaWYgKGhhc0Jsb2NrIHx8IGhhc0lubGluZSkge1xuICAgICAgICAgIHNyYyA9IFwiaW1wb3J0IE1hdGggZnJvbSAnQC9jb21wb25lbnRzL2Jsb2cvTWF0aCdcXG5cXG5cIiArIHNyYztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGNvZGU6IHNyYyxcbiAgICAgICAgICBtYXA6IG51bGwsXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfSxcbiAgfTtcbn07XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXlRLE9BQU8sV0FBVztBQUMzUixPQUFPLG1CQUFtQjtBQUMxQixPQUFPLFlBQVk7QUFDbkIsU0FBUyxvQkFBb0I7OztBQ0hvUSxTQUFTLFdBQVcsTUFBTTtBQUN6VCxRQUFNLE1BQU07QUFDWixNQUFJLFVBQVU7QUFDZCxXQUFTLFNBQVMsS0FBSyxTQUFTLEdBQUcsR0FBRztBQUNwQyxZQUFRLE1BQU0sQ0FBQztBQUNmLFdBQU8sS0FBSztBQUFBLE1BQ1Y7QUFBQSxNQUNBLHVCQUF1QixNQUFNLFVBQVUsR0FBRyxNQUFNLFNBQVMsQ0FBQyxJQUFJO0FBQUEsSUFDaEU7QUFDQSxjQUFVO0FBQUEsRUFDWjtBQUVBLFNBQU8sQ0FBQyxNQUFNLE9BQU87QUFDdkI7QUFFQSxTQUFTLFVBQVUsTUFBTTtBQUN2QixRQUFNLE1BQU07QUFDWixNQUFJLFVBQVU7QUFDZCxXQUFTLFNBQVMsS0FBSyxTQUFTLEdBQUcsR0FBRztBQUNwQyxZQUFRLE1BQU0sQ0FBQztBQUNmLFdBQU8sS0FBSztBQUFBLE1BQ1Y7QUFBQSxNQUNBLDZCQUNFLE1BQU0sVUFBVSxHQUFHLE1BQU0sU0FBUyxDQUFDLEVBQUUsS0FBSyxJQUMxQztBQUFBLElBQ0o7QUFDQSxjQUFVO0FBQUEsRUFDWjtBQUNBLFNBQU8sQ0FBQyxNQUFNLE9BQU87QUFDdkI7QUFFQSxJQUFPLHNCQUFRLE1BQU07QUFDbkIsU0FBTztBQUFBLElBQ0wsTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsVUFBVSxLQUFLLElBQUk7QUFDakIsVUFBSSxHQUFHLFNBQVMsTUFBTSxHQUFHO0FBRXZCLFlBQUksVUFBVTtBQUNkLFNBQUMsS0FBSyxRQUFRLElBQUksVUFBVSxHQUFHO0FBQy9CLFNBQUMsS0FBSyxTQUFTLElBQUksV0FBVyxHQUFHO0FBQ2pDLFlBQUksWUFBWSxXQUFXO0FBQ3pCLGdCQUFNLGtEQUFrRDtBQUFBLFFBQzFEO0FBQ0EsZUFBTztBQUFBLFVBQ0wsTUFBTTtBQUFBLFVBQ04sS0FBSztBQUFBLFFBQ1A7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRjs7O0FEN0NBLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzNCLFFBQVE7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNQO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUixPQUFPO0FBQUEsTUFDTixLQUFLO0FBQUEsSUFDTjtBQUFBLEVBQ0Q7QUFBQSxFQUNBLFNBQVM7QUFBQTtBQUFBLElBRVIsb0JBQVk7QUFBQSxJQUNaO0FBQUEsTUFDQyxJQUFJLE1BQU0sT0FBTywyRUFBZ0IsR0FBRyxRQUFRO0FBQUEsUUFDM0MsS0FBSztBQUFBLFFBQ0wsaUJBQWlCO0FBQUEsUUFDakIsc0JBQXNCO0FBQUEsTUFDdkIsQ0FBQztBQUFBLE1BQ0QsU0FBUztBQUFBLElBQ1Y7QUFBQSxJQUNBLE1BQU07QUFBQTtBQUFBLE1BRUwsU0FBUyxjQUFjO0FBQUEsTUFDdkIsWUFBWSxDQUFDLE9BQU8sTUFBTTtBQUFBLElBQzNCLENBQUM7QUFBQSxJQUNELE9BQU87QUFBQSxFQUNSO0FBQ0QsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
