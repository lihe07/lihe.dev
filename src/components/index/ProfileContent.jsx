import { createEffect, createSignal, onMount } from "solid-js";

import style from "./ProfileContent.module.css";

export default (props) => {
  let paragraph;

  const [width, setWidth] = createSignal(10);

  function calculateWidth() {
    setWidth(paragraph.offsetWidth / 10);
  }

  onMount(() => {
    window.addEventListener("resize", calculateWidth);
    calculateWidth();

    return () => {
      window.removeEventListener("resize", calculateWidth);
    };
  });

  function repeat(str, offset) {
    return str.repeat(width() + offset);
  }

  return (
    <div class="w-full max-w-300 ma h-full py-10 color-emerald font-sans">
      <h1 class={"text-15 tracking-wider leading-15 " + style.fontPixel}>
        BASIC PROFILE
      </h1>
      <p class="transition font-mono">
        mysql&gt; SELECT * FROM profile WHERE NAME = "He Li";
      </p>
      <p class="transition font-mono" ref={paragraph}>
        <span>+{repeat("-", -2)}+</span>
        <br />
        <span>| name | birth | location | school |</span>
        <br />
        <span>| He Li | 2007 | Beijing, China | Beijing Academy |</span>
      </p>
      <p class="transition font-mono" />
    </div>
  );
};
