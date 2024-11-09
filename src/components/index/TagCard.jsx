import { A } from "@solidjs/router";

export default (props) => {
  return (
    <div class="bg-true-gray-8 p-5 rounded-xl text-center">
      <div class="bg-true-gray-9 rounded-lg w-full h-50 p-5 box-border select-none">
        {props.cover}
      </div>

      <p class="text-center ma font-sans w-70% my-3 text-lg">{props.text}</p>
      <A
        href="/blog"
        class={
          "rounded-lg px-2 py-1 color-white decoration-none text-lg font-mono " +
          props.tagClass
        }
      >
        {props.tagName}
      </A>
    </div>
  );
};
