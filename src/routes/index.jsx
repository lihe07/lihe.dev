import { Meta, Title } from "@solidjs/meta";

import BasicProfile from "~/components/index/BasicProfile";
import First from "~/components/index/First";
import WhatIDo from "~/components/index/WhatIDo";
import Wave from "~/components/index/Wave";
import NextStop from "~/components/index/NextStop";
import News from "~/components/index/News";

export default function Home() {
	return (
		<main>
			<Title>lihe.dev - Home Page</Title>
			<Meta name="description" content="Home Page" />
			<Meta name="keywords" content="Home Page" />
			<First />
			<BasicProfile />
			<WhatIDo />
			<News />
			<Wave />
		</main>
	);
}
