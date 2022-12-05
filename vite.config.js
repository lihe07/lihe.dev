import solid from 'solid-start/vite'
import unocss from 'unocss/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: 3000,
    host: '127.0.0.1'
  },
  plugins: [
    {
      ...(await import('@mdx-js/rollup')).default({
        jsx: true,
        jsxImportSource: 'solid-js',
        providerImportSource: 'solid-mdx'
      }),
      enforce: 'pre'
    },
    solid({ extensions: ['.mdx', '.md'] }),
    unocss()
  ]
})
