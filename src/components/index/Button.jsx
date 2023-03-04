export default (props) => {
  return (
    <button
      onClick={(e) => props.onClick(e)}
      class={
        "border-none bg-white color-white bg-op-10 px-4 py-3 rounded-xl cursor-pointer op-80 hover:op-100 active:scale-95 transition flex items-center " +
        props.class
      }
    >
      {props.children}
    </button>
  );
};
