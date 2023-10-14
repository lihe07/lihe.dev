import { createResource, For } from "solid-js";
import { A, Title, useRouteData } from "solid-start";
import Section from "@/components/Section";
import PageHead from "@/components/PageHead";
import blog from "@/blog.json";
import { BlogDescription } from "@/components/blog/BlogDescription";
import Tag from "@/components/blog/Tag";

function Blog(props) {
  return (
    <A
      class="flex decoration-none color-white font-sans gap-10 bg-zinc-9 rounded-2xl transition-all-150 op-80 hover:op-100 active:scale-95"
      href={props.href}
    >
      <img src={props.cover} alt="" class="rounded-2xl h-60 w-40%" />
      <div class="py-3">
        <h2 class="text-4xl">{props.title}</h2>

        <div>
          <For each={props.tags}>{(e) => <Tag {...e} />}</For>
        </div>

        <p class="text-xl op-70">
          <BlogDescription {...props} />
        </p>
      </div>
    </A>
  );
}

export default () => {
  return (
    <main>
      <Title>lihe.dev - Blog</Title>

      <PageHead
        title="My Blog"
        description="Here displayed some of my writings. They are about all kinds of stuffs. Hope these can help you!"
      />

      <Section class="my-20">
        <div class="grid md:grid-cols-2 grid-cols-1">
          <For each={blog}>{(e) => <Blog {...e} />}</For>
        </div>
      </Section>
    </main>
  );
};
