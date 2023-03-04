import { Title } from "solid-start";
import { HttpStatusCode } from "solid-start/server";

export default () => {
  return (
    <main class="w-full text-center">
      <Title>lihe.dev - Not Found</Title>
      <HttpStatusCode code={404} />
      <div></div>
      <h1>Not Found</h1>
      <h2>
        TODO: Re-design this page. <br />
      </h2>
    </main>
  );
};
