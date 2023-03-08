import BlazeSlider from "@/assets/scripts/BlazeSlider";
import "blaze-slider/dist/blaze.css";
import TagCard from "./TagCard";

export default () => {
  return (
    <section class="bg-zinc-9 w-full h-screen">
      <div class="tracking-wide text-center pt-20">
        <h1 class="font-sans md:text-15 text-10 font-light mt-0 mb-3">
          WHAT I DO?
        </h1>
        <p class="ma op-80 font-sans text-5 m0 md:max-w-100 max-w-70">
          I invest my passion in many aspects of my life. In general, I:
        </p>
      </div>

      <div class="blaze-slider">
        <div class="blaze-container">
          <TagCard icons={[]} text="Explore Latest"></TagCard>
        </div>
      </div>
    </section>
  );
};
