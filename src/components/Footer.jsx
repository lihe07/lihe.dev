import { For } from "solid-js";
import { socials } from "../config";
import Section from "./Section";

function Card(props) {
  return <div class="bg-black bg-op-50 rounded-xl p-5">{props.children}</div>;
}

function Socials() {
  return (
    <div class="flex items-center gap-8">
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

export default () => {
  return (
    <footer class="h-200 bg-#164E63 p-5">
      <Section>
        <div class="flex">
          <Card>
            <Socials />
          </Card>
        </div>
      </Section>
    </footer>
  );
};
