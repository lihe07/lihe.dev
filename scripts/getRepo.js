import fs from "fs";
import decompress from "decompress";
import { writeFile } from "fs/promises";

const api = "https://api.github.com/repos/lihe07/obsidian/zipball";

// Parse Obsidian Repo
async function getArticles() {
  let token = process.env.GITHUB_TOKEN;
  if (!token) {
    const ENV = fs.readFileSync(".env");
    token = ENV.toString().split("GITHUB_TOKEN=")[1].trim();
  }

  console.log("Downloading...");
  const res = await fetch(api, {
    headers: {
      authorization: "Bearer " + token,
    },
    redirect: "follow",
  });
  await writeFile("./dist/repo.zip", Buffer.from(await res.arrayBuffer()));

  console.log("Decompressing...");
  const files = await decompress("./dist/repo.zip", "./dist/repo");
  // console.log('files', files)

  return files.filter((file) => (file.path + "/").split("/")[1] === "Blog");
}

async function parseArticles(files) {
  // Copy markdown files to /src/routes/blog/
  // Copy assets to /src/assets/blog/
}

export default () => {
  return {
    name: "get-repo",
    enforce: "pre",
    async buildStart() {
      if (!fs.existsSync("dist")) {
        fs.mkdirSync("dist");
      }

      // Download Repo
      if (process.env.GITHUB_TOKEN || fs.existsSync(".env")) {
        const files = await getArticles();
        await parseArticles(files);
      } else {
        console.warn("GITHUB_TOKEN not provided! Skip fetching articles");
      }

      // Clean up
      if (fs.existsSync("dist")) {
        fs.rmSync("dist", { recursive: true });
      }
    },
  };
};
