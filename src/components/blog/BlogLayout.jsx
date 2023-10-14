import BlogArticle from "./BlogArticle";
import { Outlet, useLocation } from "@solidjs/router";

import blog from "@/blog";
import { tags } from "@/config";
import { Title } from "solid-start";

export function BlogLayout() {
  const location = useLocation();

  const meta = { ...blog.find((post) => post.href === location.pathname) };

  if (meta.tags) meta.tags = meta.tags.map((tag) => tags[tag]).filter(Boolean);
  else meta.tags = [];
  console.log("blog", blog, meta);

  return (
    <main>
      <Title>lihe.dev - {meta.title}</Title>
      <BlogArticle cover="" {...meta}>
        <Outlet />
      </BlogArticle>

      {/* Comments */}
      {/* <Section> */}
      {/* 	<form */}
      {/* 		action="https://send.pageclip.co/p4iFqyJePHcYKR6HwROI5owPUXMhnyIr/comments" */}
      {/* 		method="post" */}
      {/* 	> */}
      {/* 		<input type="text" name="name" placeholder="Name" /> */}
      {/* 		<input type="email" name="email" placeholder="Email" /> */}
      {/* 		<textarea name="message" placeholder="Message" /> */}
      {/* 		<button type="submit">Submit</button> */}
      {/* 	</form> */}
      {/**/}
      {/* 	<div> */}
      {/* 		<For each={comments()}> */}
      {/* 			{(comment) => ( */}
      {/* 				<div> */}
      {/* 					<div> */}
      {/* 						<div>{comment.payload.name}</div> */}
      {/* 						<div>{comment.payload.email}</div> */}
      {/**/}
      {/* 						<div>{comment.createdAt}</div> */}
      {/**/}
      {/* 						<div>{comment.payload.message}</div> */}
      {/* 					</div> */}
      {/* 				</div> */}
      {/* 			)} */}
      {/* 		</For> */}
      {/* 	</div> */}
      {/* </Section> */}
    </main>
  );
}
