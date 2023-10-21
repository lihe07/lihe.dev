import BlogArticle from "./BlogArticle";
import { Outlet, useLocation } from "@solidjs/router";

import blog from "@/blog";
import { tags } from "@/config";
import { Title } from "solid-start";

export function BlogLayout() {
  const location = useLocation();

  const meta = { ...blog.find((post) => post.href === location.pathname) };

  if (meta.tags) meta.tags = meta.tags.map((tag) => tags[tag]).filter(Boolean);
  else meta.tags = [];
  console.log("blog", blog, meta);

  return (
    <main>
      <Title>{`lihe.dev - ${meta.title}`}</Title>
      <BlogArticle cover="" {...meta}>
        <Outlet />
      </BlogArticle>
    </main>
  );
}
