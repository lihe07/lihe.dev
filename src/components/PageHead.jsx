import defaultCover from "@/assets/images/cover.webp";
import Section from "./Section";
import { Show } from "solid-js";
export default function PageHead(props) {
	return (
		<div class="relative">
			<img
				src={props.cover || defaultCover}
				alt="background"
				class="w-full h-full object-cover absolute z-1 top-0 left-0"
			/>
			<div class="relative top-0 bg-black/50 z-2 w-full pt-5 pb-10">
				<Section class="mt-33">
					<h1 class="font-serif text-6xl font-light mb-0">{props.title}</h1>
					<Show when={props.description}>
						<p class="font-sans text-3xl leading-relaxed md:max-w-70% op-60">
							{props.description}
						</p>
					</Show>
					{props.children}
				</Section>
			</div>
		</div>
	);
}
