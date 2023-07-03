import BlazeSlider from "@/assets/scripts/BlazeSlider";
import "blaze-slider/dist/blaze.css";
import TagCard from "./TagCard";
import { onMount } from "solid-js";

export default () => {
  let slider;

  onMount(() => {
    slider = new BlazeSlider(document.getElementById("cards-slider"), {
      all: {
        enableAutoplay: true,
        autoplayInterval: 2000,
        transitionDuration: 300,
        slidesToShow: 4,
      },
    });
  });

  return (
    <section class="bg-zinc-9 w-full ">
      <div class="tracking-wide text-center pt-20">
        <h1 class="font-sans md:text-15 text-10 font-light mt-0 mb-3">
          WHAT I DO ?
        </h1>
        <p class="ma op-80 font-sans text-5 m0 md:max-w-100 max-w-70">
          I invest my passion in many aspects of my life. In general, I:
        </p>
      </div>

      <div class="blaze-slider px-10 pt-30 pb-50" id="cards-slider">
        <div class="blaze-container">
          <div class="blaze-container">
            <div class="blaze-track-container">
              <div class="blaze-track">
                <TagCard
                  icons={[]}
                  text="Explore Latest"
                  tagName="technolonies"
                  tagClass="bg-sky-9"
                ></TagCard>
                <div>1</div>
                <div>2</div>
                <div>3</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
