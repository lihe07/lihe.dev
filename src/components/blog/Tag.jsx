import { A } from "@solidjs/router";

export default function Tag(props) {
  return (
    <A
      class={
        "px-5 py-2 block rounded-lg font-sans op-70 decoration-none color-white transition-all-150 hover:op-100 active:scale-95"
      }
      classList={{ "!op-100 !scale-100": props.hover === false }}
      href={`/blog?tag=${props.id}`}
      style={{ background: props.color }}
    >
      {props.name}
    </A>
  );
}
