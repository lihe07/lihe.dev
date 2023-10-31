import { BlogLayout } from "@/components/blog/BlogLayout";
import { Outlet } from "@solidjs/router";
import { Show } from "solid-js";
import { useLocation } from "solid-start";

export default function Blog() {
	const location = useLocation();
	console.log(JSON.stringify(location.pathname));

	return (
		<Show
			when={location.pathname !== "/blog" && location.pathname !== "/blog/"}
			fallback={<Outlet />}
		>
			<BlogLayout />
		</Show>
	);
}
