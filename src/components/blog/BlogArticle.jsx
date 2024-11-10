import Tag from "./Tag";
import PageHead from "../PageHead";
import "./markdown.css";
import { BlogDescription } from "./BlogDescription";
import { For } from "solid-js";

function parseStyleString(inputString) {
  const keyValuePairs = inputString.split(";");
  const resultObject = {};

  keyValuePairs.forEach((pair) => {
    const [key, value] = pair.split(":");
    if (key && value) {
      resultObject[key.trim()] = value.trim();
    }
  });

  return resultObject;
}

function fixStyleProperties(node) {
  if (!node) return;

  const styleString = node.attributes["style"]?.value;
  if (styleString && styleString.length) {
    Object.assign(node.style, parseStyleString(styleString));
  }

  for (let i = 0; i < node.children.length; i++) {
    fixStyleProperties(node.children[i]);
  }
}

/**
 * @typedef Tag
 * @property {string} color
 * @property {string} name
 *
 *
 * @typedef Props
 * @property {string} title
 * @property {string} [cover]
 * @property {string | undefined} [wideCover]
 * @property {Tag[]} tags
 * @property {JSX.Element} children
 * @property {Date | undefined} date
 * @property {string | undefined} location
 * @param {Props} props
 */
export default (props) => {
  let article;

  return (
    <>
      <PageHead title={props.title} cover={props.wideCover || props.cover}>
        <p class="op-70 text-xl font-sans">
          <BlogDescription {...props} />
        </p>
        <div class="flex">
          <For each={props.tags || []}>{(e) => <Tag id={e} />}</For>
        </div>
      </PageHead>
      <div class="px-10 my-10">
        <article ref={article} class="markdown-body ma max-w-300 ">
          {props.children}
        </article>
      </div>
    </>
  );
};
