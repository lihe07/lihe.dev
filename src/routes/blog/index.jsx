// This is the index page

import { For } from "solid-js";
import { Title } from "@solidjs/meta";
import Section from "~/components/Section";
import PageHead from "~/components/PageHead";
import blog from "~/blog";
import BlogCard from "~/components/blog/BlogCard";


export default () => {
  return (
    <main>
      <Title>lihe.dev - Blog</Title>

      <PageHead
        title="My Blog"
        description="Here displayed some of my posts. Click the title to navigate and tag button to filter."
      />

      <Section class="my-20">
        <div class="grid md:grid-cols-2 grid-cols-1 gap-5" id="blogs">
          <For each={blog}>{(e) => <BlogCard {...e} key={e.slug} />}</For>
        </div>
      </Section>
    </main>
  );
};
