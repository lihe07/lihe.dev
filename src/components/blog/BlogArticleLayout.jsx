import "./markdown.css";

/**
 * @typedef Props
 * @property {string} title
 * @property {string} [cover]
 * @property {JSX.Element} children
 *
 * @param {Props} props
 */
export default function BlogArticleLayout(props) {
  return (
    <main>
      <div
        class="h-100 w-full bg-slate-9 bg-cover bg-center"
        style={{ "background-image": `url(${props.cover})` }}
      >
        <div
          class="w-full h-full flex items-center justify-center"
          classList={{ "bg-black bg-op-30": props.cover }}
        >
          <h1 class="font-serif tracking-wide">{props.title}</h1>
        </div>
      </div>
      <div class="p-x-10 mt-10">
        <article class="markdown-body ma max-w-300">{props.children}</article>
      </div>
    </main>
  );
}
