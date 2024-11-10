// For each .md file in ./blog
//   - read the file
//   - parse the metadata
//   - move to ./src/routes/blog/[slug].mdx

import fs from "fs";
import path from "path";
import { parse } from "yaml";
// import tags from "../src/tags.js";

function transform() {
  //   Clean up
  fs.rmSync(path.join(process.cwd(), "src", "blog.js"), { force: true });
  for (const file of fs.readdirSync(
    path.join(process.cwd(), "src", "routes", "blog"),
  )) {
    if (file.endsWith(".mdx"))
      fs.rmSync(path.join(process.cwd(), "src", "routes", "blog", file), {
        force: true,
      });
  }

  const blogDir = path.join(process.cwd(), "blog");
  const blogFiles = fs.readdirSync(blogDir);

  const blogMeta = [];

  for (const file of blogFiles) {
    if (!file.endsWith("md") && !file.endsWith("mdx")) continue;

    const filePath = path.join(blogDir, file);
    let fileContent = fs.readFileSync(filePath).toString();
    // Get the first code block
    const codeBlock = fileContent.split("```yaml")[1].split("```")[0];

    const meta = parse(codeBlock);
    const slug = file.split(".")[0].toLowerCase();

    blogMeta.push({
      ...meta,
      slug,
      href: `/blog/${slug}`,
      // tags: meta.tags.map((name) => tags[name]),
      tags: meta.tags,
    });

    fileContent = fileContent.replace("```yaml" + codeBlock + "```", "");

    const newFilePath = path.join(
      process.cwd(),
      "src",
      "routes",
      "blog",
      `${slug}.mdx`,
    );

    fs.writeFileSync(newFilePath, fileContent);
  }

  // Write metadata
  fs.writeFileSync(
    path.join(process.cwd(), "src", "blog.js"),
    `export default ${JSON.stringify(blogMeta)}`,
  );
}

export default () => {
  return {
    name: "transform",

    options() {
      transform();
    },
  };
};

transform();
