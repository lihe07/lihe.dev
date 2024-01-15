export default defineNitroConfig({
  prerender: {
    routes: ["/404"],
    autoSubfolderIndex: false,
    crawlLinks: true,
    concurrency: 4,
  },
});
