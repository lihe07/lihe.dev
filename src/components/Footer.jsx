import { For } from "solid-js";
import { footerLinks, socials } from "../config";
import Section from "./Section";
import avatar from "@/assets/images/avatar.460x460.webp";
import { A } from "solid-start";

function Card(props) {
  return (
    <div class="bg-black bg-op-50 rounded-xl md:py-7 py-5 md:px-10 px-5 flex-1">
      {props.children}
    </div>
  );
}

function Socials() {
  return (
    <div class="flex items-center  justify-between">
      <For each={socials}>
        {(social) => (
          <a href={social.href} target="_blank" rel="noreferrer">
            <img src={social.icon} alt={social.href} class="w-10 h-10" />
          </a>
        )}
      </For>
    </div>
  );
}

function Profile() {
  return (
    <div>
      <div class="flex gap-5 items-center">
        <img src={avatar} class="md:w-18 md:h-18 h-15 w-15 rounded-1/2" />
        <h2 class="font-sans md:text-2xl text-xl">He Li @ lihe.dev</h2>
      </div>
      <p class="op-70 font-sans leading-loose text-lg mb-0">
        Made with SolidStart + SolidJS.
        <br />
        Source available on{" "}
        <a
          href="https://github.com/lihe07/lihe.dev"
          class="color-white"
          target="_blank"
        >
          GitHub: lihe07/lihe.dev
        </a>
        <br />
        Thanks for visiting {"(>▽<)!"}
      </p>
    </div>
  );
}

function Links() {
  return (
    <div class="flex h-full items-center">
      <div class="flex font-sans md:pl-5 w-full">
        <For each={footerLinks}>
          {(link) => (
            <div class="md:m-5 flex-1">
              <h3 class="md:text-2xl mt-0 md:mb-8 mb-5">{link.name}</h3>
              <For each={link.children}>
                {(link) => (
                  <A
                    href={link.href}
                    class="block md:mt-5 mt-3 color-white decoration-none md:text-xl text-lg op-70 hover:op-100 transition active:op-50"
                  >
                    {link.name}
                  </A>
                )}
              </For>
            </div>
          )}
        </For>
      </div>
    </div>
  );
}

export default () => {
  return (
    <footer class="bg-#164E63 p-5 py-20">
      <Section>
        <div class="flex gap-10 md:flex-row flex-col">
          <div>
            <Card>
              <Socials />
            </Card>
            <div class="h-10" />
            <Card>
              <Profile />
            </Card>
          </div>

          <Card>
            <Links />
          </Card>
        </div>
      </Section>
    </footer>
  );
};
