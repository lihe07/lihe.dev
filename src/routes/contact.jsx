import PageHead from "~/components/PageHead";
import { Title } from "@solidjs/meta";
import "~/assets/styles/markdown.css";
import Content from "~/components/contact/Content.mdx"

export default () => {
  return (
    <main>
      <Title>lihe.dev - Contact</Title>
      <PageHead
        title="Get in Touch"
        description="Contact me for any inquiries or just to say hi!"
      />
      <div class="px-10 my-10">
        <article class="markdown-body ma max-w-300 ">
          <Content />
        </article>
      </div>
    </main>
  );
};
