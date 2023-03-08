import { createEffect, createSignal, For, on, onMount } from "solid-js";
import { A, useLocation } from "solid-start";

import avatar from "@/assets/images/avatar.50x50.webp";

const routes = [
  {
    name: "Works",
    path: "/works",
  },
  {
    name: "Blog",
    path: "/blog",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

export default () => {
  const location = useLocation();

  const isIndex = () => location.pathname === "/";

  const [fadeIn, setFadeIn] = createSignal(isIndex()); // Whether or not delay enter

  onMount(() => {
    setTimeout(() => setFadeIn(false), 3000);
  });

  return (
    <header
      class="w-full font-sans z-1 box-border px-10 py-5 transition-all overflow-hidden op-0"
      classList={{
        "absolute top-15 left-0": isIndex(),
        "animate-fade-in animate-mode-forwards animate-delay-500 animate-duration-800":
          fadeIn(),
        "relative top-0": !isIndex(),
        "!op-100": !fadeIn(),
      }}
    >
      {/* ProgressBar */}
      {/* <ProgressBar /> */}

      {/* Main */}
      <div class="max-w-300 w-full ma flex justify-between items-center">
        <div class="flex items-center">
          <img src={avatar} alt="Avatar" class="w-10 h-10 rounded-50%" />
          <A
            class="ml-5 text-5 font-mono color-white decoration-none transition"
            href="/"
            classList={{
              "op-100": isIndex(),
              "op-70 hover:op-100 active:scale-90": !isIndex(),
            }}
          >
            lihe.dev
          </A>
        </div>
        <div class="flex items-center sm:op-100 op-0">
          <For each={routes}>
            {(route) => (
              <div class="ml-5 w-20 flex items-center justify-center">
                <A
                  href={route.path}
                  class="text-5 color-white decoration-none transition"
                  inactiveClass="op-70 hover:op-100 active:scale-90"
                  activeClass="op-100"
                >
                  {route.name}
                </A>
              </div>
            )}
          </For>
        </div>
      </div>
    </header>
  );
};
