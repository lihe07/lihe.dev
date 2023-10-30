import BlogArticle from "./BlogArticle";
import { Outlet, useLocation } from "@solidjs/router";

import blog from "@/blog";
import { tags } from "@/config";
import { Title } from "solid-start";

export function BlogLayout() {
  const location = useLocation();

  const meta = { ...blog.find((post) => post.href === location.pathname) };

  return (
    <main>
      <Title>{`lihe.dev - ${meta.title}`}</Title>
      <BlogArticle cover="" {...meta}>
        <Outlet />
      </BlogArticle>
    </main>
  );
}
