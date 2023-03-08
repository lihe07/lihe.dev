import BlogArticle from "@/components/blog/BlogArticle";
import { For } from "solid-js";
import { useParams, useRouteData } from "solid-start";
import { createServerData$ } from "solid-start/server";

export function routeData() {
  const params = useParams();
  console.log(params.id);
  return createServerData$(async () => {
    const commnets = await (
      await fetch("https://api.pageclip.co/data/comments?archived=false", {
        headers: {
          Authorization:
            "Basic YXBpX05TMnVqdVBQVG9QQlJWUjlSUnFZR1RYdU1Vdnl0cFc5Og==",
        },
      })
    ).json();

    console.log(commnets);
    return commnets.data;
  });
}

export default function Blog() {
  const comments = useRouteData();

  return (
    <main>
      <BlogArticle cover="" title="Title">
        Blog Content
      </BlogArticle>

      {/* Comments */}
      <div class="max-w-300 ma">
        <form
          action="https://send.pageclip.co/p4iFqyJePHcYKR6HwROI5owPUXMhnyIr/comments"
          method="post"
        >
          <input type="text" name="name" placeholder="Name" />
          <input type="email" name="email" placeholder="Email" />
          <textarea name="message" placeholder="Message" />
          <button type="submit">Submit</button>
        </form>

        <div>
          <For each={comments()}>
            {(comment) => (
              <div>
                <div>
                  <div>{comment.payload.name}</div>
                  <div>{comment.payload.email}</div>

                  <div>{comment.createdAt}</div>

                  <div>{comment.payload.message}</div>
                </div>
              </div>
            )}
          </For>
        </div>
      </div>
    </main>
  );
}
