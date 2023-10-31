import Tag from "./Tag";
import PageHead from "../PageHead";
import "./markdown.css";
import { BlogDescription } from "./BlogDescription";
import { For } from "solid-js";

/**
 * @typedef Tag
 * @property {string} color
 * @property {string} name
 *
 *
 * @typedef Props
 * @property {string} title
 * @property {string} [cover]
 * @property {Tag[]} tags
 * @property {JSX.Element} children
 * @property {Date | undefined} date
 * @property {string | undefined} location
 * @param {Props} props
 */
export default (props) => {
  return (
    <>
      <PageHead title={props.title} cover={props.cover}>
        <p class="op-70 text-xl font-sans">
          <BlogDescription {...props} />
        </p>
        <div class="flex">
          <For each={props.tags || []}>{(e) => <Tag {...e} />}</For>
        </div>
      </PageHead>
      <div class="px-10 my-10">
        <article class="markdown-body ma max-w-300 ">{props.children}</article>
      </div>
    </>
  );
};
