import { useBeforeLeave } from "@solidjs/router";
import { createEffect, createSignal } from "solid-js";
import { useIsRouting } from "@solidjs/router";

export default function Transition(props) {
  const [show, setShow] = createSignal(false);

  const isRouting = useIsRouting();
  createEffect(() => {
    if (!isRouting()) {
      console.log("Transition: Page loaded. Let's display it");
      setTimeout(() => {
        props.onTransition(false);
        setShow(true);
      }, 500);
    }
  });

  useBeforeLeave((e) => {
    setShow(false);
    e.preventDefault();
    props.onTransition(true);

    setTimeout(() => {
      e.retry(true);
    }, 300);
  });

  return (
    <div
      class="op-0 transition-all-300 scale-101"
      classList={{ "!op-100 !scale-100 !blur-0 !scale-100": show() }}
    >
      {props.children}
    </div>
  );
}
