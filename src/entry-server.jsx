// @refresh reload
import { StartServer, createHandler } from "@solidjs/start/server";

const css = `
.op-0 { opacity: 0; }
`

export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
          {/* This is to ensure that some classes are available before UnoCSS is loaded */}
          <style type="text/css">{css}</style>
          {/* <script defer data-domain="lihe.dev" src="https://anna.bwrrc.org.cn/js/script.js"></script> */}
          {assets}
        </head>
        <body style="background: #0f0f0f; margin: 0; color: white;">
          <div id="app">{children}</div>
          {scripts}
        </body>
      </html>
    )}
  />
));
