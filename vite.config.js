import solid from 'solid-start/vite'
import unocss from 'unocss/vite'
import { defineConfig } from 'vite'

export default defineConfig({
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
