import { useBeforeLeave } from "@solidjs/router";
import { createEffect, createSignal } from "solid-js";
import { useIsRouting } from "@solidjs/router";

export default function Transition(props) {
  const [show, setShow] = createSignal(false);

  const isRouting = useIsRouting();
  createEffect(() => {
    if (!isRouting()) {
      console.log("Loaded");
      setTimeout(() => {
        setShow(true);
      }, 500);
    }
  });

  useBeforeLeave((e) => {
    setShow(false);
    e.preventDefault();

    setTimeout(() => {
      e.retry(true);
    }, 500);
  });

  // let lastLocation;
  // function watchLocation() {
  //   if (lastLocation !== location.pathname) {
  //     setShow(false);
  //     lastLocation = location.pathname;
  //   }
  //
  //   requestAnimationFrame(watchLocation);
  // }
  //
  // onMount(() => {
  //   watchLocation();
  // });

  return (
    <div class="overflow-clip w-full h-screen">
      <div
        class="op-0 transition-all-500 scale-105"
        classList={{ "!op-100 !scale-100 ": show() }}
      >
        {props.children}
      </div>
    </div>
  );
}
