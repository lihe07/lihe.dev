import BlazeSlider from "@/assets/scripts/BlazeSlider";
import "blaze-slider/dist/blaze.css";
import TagCard from "./TagCard";
import { For, onMount } from "solid-js";
import Section from "../Section";
import Math from "../blog/Math";

import svelte from "@/assets/icons/svelte.png";
import solid from "@/assets/icons/solid.svg";
import pytorch from "@/assets/icons/pytorch.png";
import julia from "@/assets/icons/julia.png";
import numpy from "@/assets/icons/numpy.svg";
import rust from "@/assets/icons/rust.png";

import phenyl from "@/assets/images/phenyl.png";

const icons = [
	{
		icon: svelte,
		href: "https://svelte.dev/",
	},
	{
		icon: solid,
		href: "https://www.solidjs.org",
	},
	{
		icon: pytorch,
		href: "https://pytorch.org",
	},
	{
		icon: rust,
		href: "https://www.rust-lang.org",
	},
	{
		icon: julia,
		href: "https://julialang.org/",
	},
	{
		icon: numpy,
		href: "https://numpy.org/",
	},
];

function Icons() {
	return (
		<div class="grid grid-cols-3 gap-5 grid-rows-2 h-full box-border p-3">
			<For each={icons}>
				{(e) => (
					<a
						href={e.href}
						class="block h-full w-full transition-all-300 grayscale-100 hover:grayscale-0"
					>
						<img
							src={e.icon}
							alt={e.href}
							class="h-full w-full block object-contain"
						/>
					</a>
				)}
			</For>
		</div>
	);
}

function CoverImage({ src }) {
	return <img src={src} alt="cover" class="w-full h-full object-contain" />;
}

function MathProg() {
	return (
		<div class="flex flex-col items-center justify-center h-full text-3xl gap-4">
			<Math>
				{String.raw`
\min Z(\textbf{x})`}
			</Math>
			<Math>
				{String.raw`
\mathrm{s.t.}\ \ \textbf{Ax} = \textbf{b}`}
			</Math>
		</div>
	);
}

export default () => {
	let slider;

	onMount(() => {
		slider = new BlazeSlider(document.getElementById("cards-slider"), {
			all: {
				enableAutoplay: true,
				autoplayInterval: 2000,
				transitionDuration: 300,
				slidesToShow: 4,
			},
			"(max-width: 768px)": {
				slidesToShow: 1,
			},
		});
	});

	return (
		<section class="bg-zinc-9">
			<Section class="w-full">
				<div class="tracking-wide text-center pt-20">
					<h1 class="font-sans md:text-15 text-10 font-light mt-0 mb-3">
						WHAT I DO ?
					</h1>
					<p class="ma op-80 font-sans text-2xl m0 md:max-w-unset leading-relaxed max-w-70">
						I invest my passion in many aspects.
						<br />
						For example, I:
					</p>
				</div>

				<div class="blaze-slider pt-30 pb-50 px-5" id="cards-slider">
					<div class="blaze-container">
						<div class="blaze-container">
							<div class="blaze-track-container">
								<div class="blaze-track">
									<TagCard
										cover={<Icons />}
										text="Explore Latest"
										tagName="Technolonies"
										tagClass="bg-sky-9"
									/>
									<TagCard
										cover={<CoverImage src={phenyl} />}
										text="Learn and Apply"
										tagName="Quantum Chemistry"
										tagClass="bg-teal-9"
									/>
									<TagCard
										cover={<MathProg />}
										text="Delve Into"
										tagName="Opearations Research"
										tagClass="bg-teal-9"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Section>
		</section>
	);
};
