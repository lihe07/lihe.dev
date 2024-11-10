// This is the index page

import { createEffect, createSignal, For, onMount } from "solid-js";
import { Title } from "@solidjs/meta";
import Section from "~/components/Section";
import PageHead from "~/components/PageHead";
import blog from "~/blog";
import BlogCard from "~/components/blog/BlogCard";
import { A, useLocation } from "@solidjs/router";
import Tag from "~/components/blog/Tag";


export default () => {

  // Query param
  const location = useLocation()

  const [tag, setTag] = createSignal(false);

  // Tag filter is applied in browser.
  createEffect(() => {
    setTag(location.query.tag || false)
  })

  const filteredBlog = () => {
    if (!tag()) return blog;
    return blog.filter((e) => e.tags.includes(tag()));
  };

  return (
    <main>
      <Title>lihe.dev - Blog</Title>

      <PageHead
        // title={tag() ? "My Blog (filtered)" : "My Blog"}
        title={"My Blog"}
        description={tag() ? `Here displayed some of my posts with tag "${tag()}". Click the title to navigate.` :
          "Here displayed some of my posts. Click the title to navigate and tag button to filter."
        }
      />

      <Section class="my-20">

        <Show when={tag()}>
          <div class="flex items-end gap-5 my-10 op-80 font-sans">
            <p class="text-2xl m0">Filtering by tag:</p>
            <Tag id={tag()} />

            <A href="/blog" class="text-xl op-70 hover:op-100 transition active:scale-95 decoration-none text-white">Clear filter</A>
          </div>
        </Show>

        <div class="grid md:grid-cols-2 grid-cols-1 gap-5" id="blogs">
          <For each={filteredBlog()}>{(e) =>
            <BlogCard {...e} key={e.slug} />
          }</For>
        </div>
      </Section>
    </main>
  );
};
