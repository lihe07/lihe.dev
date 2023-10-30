import { A } from "@solidjs/router";

export default function Tag(props) {
  return (
    <A
      class={
        "px-5 py-2 block rounded-lg font-sans op-70 decoration-none color-white transition-all-150 hover:op-100 active:scale-95"
      }
      href="#"
      style={{ background: props.color }}
    >
      {props.name}
    </A>
  );
}
