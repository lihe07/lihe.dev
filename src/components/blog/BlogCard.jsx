import { BlogDescription } from "~/components/blog/BlogDescription";
import { A } from "@solidjs/router";
import Tag from "~/components/blog/Tag";

export default function Blog(props) {
  return (
    <div
      class={"flex md:flex-row md:h-60 h-unset flex-col color-white font-sans bg-zinc-9 rounded-2xl " + props.class || ""}
      href={props.href}
    >
      <img
        src={props.cover}
        alt={props.title}
        class="rounded-2xl md:h-full h-60 md:w-40% w-full"
      />
      <div class="py-7 flex flex-col justify-center md:w-60% w-full px-7 box-border">
        <h2 class="text-2xl mt-0 leading-relaxed">
          <A href={props.href} class="color-white decoration-none op-70 hover:op-100 transition-all-150">{props.title}</A>
        </h2>

        <div class="flex">
          <For each={props.tags}>{(e) => <Tag {...e} />}</For>
        </div>

        <p class="text-xl op-70 mb-0">
          <BlogDescription {...props} />
        </p>
      </div>
    </div>
  );
}
