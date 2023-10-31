import { For } from "solid-js";
import { Title, useNavigate } from "solid-start";
import Section from "@/components/Section";
import PageHead from "@/components/PageHead";
import blog from "@/blog";
import { BlogDescription } from "@/components/blog/BlogDescription";
import Tag from "@/components/blog/Tag";

function Blog(props) {
	const navigate = useNavigate();
	return (
		<div
			class="flex cursor-pointer decoration-none color-white font-sans gap-10 bg-zinc-9 rounded-2xl transition-all-150 op-80 hover:op-100 active:scale-95"
			onClick={() => navigate(props.href)}
			onKeyDown={() => navigate(props.href)}
		>
			<img src={props.cover} alt="" class="rounded-2xl h-60 w-40%" />
			<div class="py-3 flex flex-col justify-center">
				<h2 class="text-4xl mt-0">{props.title}</h2>

				<div class="flex">
					<For each={props.tags}>{(e) => <Tag hover={false} {...e} />}</For>
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
				description="Here displayed some of my writings. They are about all kinds of stuffs. Hope these can help you!"
			/>

			<Section class="my-20">
				<div class="grid md:grid-cols-2 grid-cols-1" id="blogs">
					<For each={blog}>{(e) => <Blog {...e} key={e.slug} />}</For>
				</div>
			</Section>
		</main>
	);
};
