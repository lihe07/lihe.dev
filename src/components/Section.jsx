export default function Section(props) {
  return (
    <section class={`max-w-300 ma ${props.class || ""}`}>
      {props.children}
    </section>
  );
}
