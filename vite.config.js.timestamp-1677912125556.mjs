// vite.config.js
import solid from "file:///home/lihe07/Desktop/lihe.dev/node_modules/solid-start/vite/plugin.js";
import unocss from "file:///home/lihe07/Desktop/lihe.dev/node_modules/unocss/dist/vite.mjs";

// scripts/resolver.js
function resolveImages(code) {
  const reg = /_components\.img, {\s*src:\s*"\S+"/g;
  const nameReg = /(?!")\S+(?=")/g;
  const i = 0;
  for (let piece of code.matchAll(reg)) {
    piece = piece[0];
    const name = nameReg.exec(piece)[0];
    code =
      `import _img${i} from "@/assets/blog/${name}";
` + code.replace(piece, piece.replace(`"${name}"`, `_img${i}`));
  }
  return code;
}
var resolver_default = () => {
  return {
    name: "mdx-resolver",
    transform(src, id) {
      if (id.endsWith(".mdx")) {
        src = resolveImages(src);
        return {
          code: src,
          map: null,
        };
      }
    },
  };
};

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
      "<Math block>{String.raw`" +
        piece.substring(2, piece.length - 2).trim() +
        "`}</Math>"
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
          map: null,
        };
      }
    },
  };
};

// vite.config.js
import { defineConfig } from "file:///home/lihe07/Desktop/lihe.dev/node_modules/vite/dist/node/index.js";
var vite_config_default = defineConfig({
  server: {
    port: 3e3,
    host: "127.0.0.1",
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  plugins: [
    replaceMath_default(),
    {
      ...(
        await import(
          "file:///home/lihe07/Desktop/lihe.dev/node_modules/@mdx-js/rollup/index.js"
        )
      ).default({
        jsx: true,
        jsxImportSource: "solid-mdx",
        providerImportSource: "solid-mdx",
      }),
      enforce: "pre",
    },
    resolver_default(),
    solid({ extensions: [".mdx", ".md"] }),
    unocss(),
  ],
});
export { vite_config_default as default };
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiLCAic2NyaXB0cy9yZXNvbHZlci5qcyIsICJzY3JpcHRzL3JlcGxhY2VNYXRoLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL2hvbWUvbGloZTA3L0Rlc2t0b3AvbGloZS5kZXZcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL2xpaGUwNy9EZXNrdG9wL2xpaGUuZGV2L3ZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL2xpaGUwNy9EZXNrdG9wL2xpaGUuZGV2L3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHNvbGlkIGZyb20gJ3NvbGlkLXN0YXJ0L3ZpdGUnXG5pbXBvcnQgdW5vY3NzIGZyb20gJ3Vub2Nzcy92aXRlJ1xuaW1wb3J0IHJlc29sdmVyIGZyb20gJy4vc2NyaXB0cy9yZXNvbHZlcidcbmltcG9ydCByZXBsYWNlTWF0aCBmcm9tICcuL3NjcmlwdHMvcmVwbGFjZU1hdGgnXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBzZXJ2ZXI6IHtcbiAgICBwb3J0OiAzMDAwLFxuICAgIGhvc3Q6ICcxMjcuMC4wLjEnXG4gIH0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgJ0AnOiAnL3NyYydcbiAgICB9XG4gIH0sXG4gIHBsdWdpbnM6IFtcbiAgICByZXBsYWNlTWF0aCgpLFxuICAgIHtcbiAgICAgIC4uLihhd2FpdCBpbXBvcnQoJ0BtZHgtanMvcm9sbHVwJykpLmRlZmF1bHQoe1xuICAgICAgICBqc3g6IHRydWUsXG4gICAgICAgIGpzeEltcG9ydFNvdXJjZTogJ3NvbGlkLW1keCcsXG4gICAgICAgIHByb3ZpZGVySW1wb3J0U291cmNlOiAnc29saWQtbWR4J1xuICAgICAgfSksXG4gICAgICBlbmZvcmNlOiAncHJlJ1xuICAgIH0sXG4gICAgcmVzb2x2ZXIoKSxcbiAgICBzb2xpZCh7IGV4dGVuc2lvbnM6IFsnLm1keCcsICcubWQnXSB9KSxcbiAgICB1bm9jc3MoKVxuICBdXG59KVxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9saWhlMDcvRGVza3RvcC9saWhlLmRldi9zY3JpcHRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9saWhlMDcvRGVza3RvcC9saWhlLmRldi9zY3JpcHRzL3Jlc29sdmVyLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL2xpaGUwNy9EZXNrdG9wL2xpaGUuZGV2L3NjcmlwdHMvcmVzb2x2ZXIuanNcIjtmdW5jdGlvbiByZXNvbHZlSW1hZ2VzIChjb2RlKSB7XG4gIGNvbnN0IHJlZyA9IC9fY29tcG9uZW50c1xcLmltZywge1xccypzcmM6XFxzKlwiXFxTK1wiL2dcbiAgY29uc3QgbmFtZVJlZyA9IC8oPyFcIilcXFMrKD89XCIpL2dcblxuICBjb25zdCBpID0gMFxuXG4gIGZvciAobGV0IHBpZWNlIG9mIGNvZGUubWF0Y2hBbGwocmVnKSkge1xuICAgIHBpZWNlID0gcGllY2VbMF1cbiAgICBjb25zdCBuYW1lID0gbmFtZVJlZy5leGVjKHBpZWNlKVswXVxuICAgIGNvZGUgPVxuICAgICAgYGltcG9ydCBfaW1nJHtpfSBmcm9tIFwiQC9hc3NldHMvYmxvZy8ke25hbWV9XCI7XFxuYCArXG4gICAgICBjb2RlLnJlcGxhY2UocGllY2UsIHBpZWNlLnJlcGxhY2UoYFwiJHtuYW1lfVwiYCwgYF9pbWcke2l9YCkpXG4gIH1cblxuICByZXR1cm4gY29kZVxufVxuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgbmFtZTogJ21keC1yZXNvbHZlcicsXG4gICAgdHJhbnNmb3JtIChzcmMsIGlkKSB7XG4gICAgICBpZiAoaWQuZW5kc1dpdGgoJy5tZHgnKSkge1xuICAgICAgICBzcmMgPSByZXNvbHZlSW1hZ2VzKHNyYylcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBjb2RlOiBzcmMsXG4gICAgICAgICAgbWFwOiBudWxsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL2hvbWUvbGloZTA3L0Rlc2t0b3AvbGloZS5kZXYvc2NyaXB0c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvbGloZTA3L0Rlc2t0b3AvbGloZS5kZXYvc2NyaXB0cy9yZXBsYWNlTWF0aC5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS9saWhlMDcvRGVza3RvcC9saWhlLmRldi9zY3JpcHRzL3JlcGxhY2VNYXRoLmpzXCI7ZnVuY3Rpb24gaW5saW5lTWF0aCAoY29kZSkge1xuICBjb25zdCByZWcgPSAvXFwkLitcXCQvZ1xuICBsZXQgaGFzTWF0aCA9IGZhbHNlXG4gIGZvciAobGV0IHBpZWNlIG9mIGNvZGUubWF0Y2hBbGwocmVnKSkge1xuICAgIHBpZWNlID0gcGllY2VbMF1cbiAgICBjb2RlID0gY29kZS5yZXBsYWNlKFxuICAgICAgcGllY2UsXG4gICAgICAnPE1hdGg+e1N0cmluZy5yYXdgJyArIHBpZWNlLnN1YnN0cmluZygxLCBwaWVjZS5sZW5ndGggLSAxKSArICdgfTwvTWF0aD4nXG4gICAgKVxuICAgIGhhc01hdGggPSB0cnVlXG4gIH1cblxuICByZXR1cm4gW2NvZGUsIGhhc01hdGhdXG59XG5cbmZ1bmN0aW9uIG1hdGhCbG9jayAoY29kZSkge1xuICBjb25zdCByZWcgPSAvXFwkXFwkW14kXStcXCRcXCQvZ1xuICBsZXQgaGFzTWF0aCA9IGZhbHNlXG4gIGZvciAobGV0IHBpZWNlIG9mIGNvZGUubWF0Y2hBbGwocmVnKSkge1xuICAgIHBpZWNlID0gcGllY2VbMF1cbiAgICBjb2RlID0gY29kZS5yZXBsYWNlKFxuICAgICAgcGllY2UsXG4gICAgICAnPE1hdGggYmxvY2s+e1N0cmluZy5yYXdgJyArXG4gICAgICAgIHBpZWNlLnN1YnN0cmluZygyLCBwaWVjZS5sZW5ndGggLSAyKS50cmltKCkgK1xuICAgICAgICAnYH08L01hdGg+J1xuICAgIClcbiAgICBoYXNNYXRoID0gdHJ1ZVxuICB9XG4gIHJldHVybiBbY29kZSwgaGFzTWF0aF1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIG5hbWU6ICdyZXBsYWNlLW1hdGgnLFxuICAgIGVuZm9yY2U6ICdwcmUnLFxuICAgIHRyYW5zZm9ybSAoc3JjLCBpZCkge1xuICAgICAgaWYgKGlkLmVuZHNXaXRoKCcubWR4JykpIHtcbiAgICAgICAgLy8gc3JjID0gXCJpbXBvcnQgTWF0aCBmcm9tICdAL2NvbXBvbmVudHMvYmxvZy9NYXRoJ1xcblxcblwiICsgc3JjXG4gICAgICAgIGxldCBoYXNCbG9jaywgaGFzSW5saW5lXG4gICAgICAgIDtbc3JjLCBoYXNCbG9ja10gPSBtYXRoQmxvY2soc3JjKVxuICAgICAgICA7W3NyYywgaGFzSW5saW5lXSA9IGlubGluZU1hdGgoc3JjKVxuICAgICAgICBpZiAoaGFzQmxvY2sgfHwgaGFzSW5saW5lKSB7XG4gICAgICAgICAgc3JjID0gXCJpbXBvcnQgTWF0aCBmcm9tICdAL2NvbXBvbmVudHMvYmxvZy9NYXRoJ1xcblxcblwiICsgc3JjXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBjb2RlOiBzcmMsXG4gICAgICAgICAgbWFwOiBudWxsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1c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
