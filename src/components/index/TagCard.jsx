export default (props) => {
  return (
    <div class="bg-true-gray-8  p-5 rounded-xl text-center">
      <div class="bg-true-gray-9 rounded-lg w-full h-40"></div>

      <p class="text-center font-mono  mt-3 mb-2">{props.text}</p>
      <a
        href="/whatever"
        class={
          "rounded-lg px-2 py-1 color-white decoration-none  font-mono " +
          props.tagClass
        }
      >
        {props.tagName}
      </a>
    </div>
  );
};
