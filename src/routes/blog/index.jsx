// This is the index page

import { For } from "solid-js";
import { A } from "@solidjs/router";
import { Title } from "@solidjs/meta";
import Section from "~/components/Section";
import PageHead from "~/components/PageHead";
import blog from "~/blog";
import { BlogDescription } from "~/components/blog/BlogDescription";
import Tag from "~/components/blog/Tag";

function Blog(props) {
	return (
		<div
			class="flex md:flex-row flex-col color-white font-sans bg-zinc-9 rounded-2xl"
			href={props.href}
		>
			<img
				src={props.cover}
				alt=""
				class="rounded-2xl md:h-60 h-50 md:w-40% w-full"
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
					<For each={blog}>{(e) => <Blog {...e} key={e.slug} />}</For>
				</div>
			</Section>
		</main>
	);
};
