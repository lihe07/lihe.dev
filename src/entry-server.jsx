import { createHandler } from "@solidjs/start/entry";
import { StartServer } from "@solidjs/start/server";
export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
          <script defer data-domain="lihe.dev" src="https://anna.bwrrc.org.cn/js/script.js"></script>
          {assets}
        </head>
        <body class="m0 bg-black color-white">
          <div id="app">{children}</div>
          {scripts}
        </body>
      </html>
    )}
  />
));

