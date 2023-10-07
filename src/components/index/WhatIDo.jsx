import BlazeSlider from "@/assets/scripts/BlazeSlider";
import "blaze-slider/dist/blaze.css";
import TagCard from "./TagCard";
import { onMount } from "solid-js";
import Section from "../Section";

function Icons() {
  return <div></div>;
}

function CoverImage({ src }) {
  return <img src={src} alt="cover" class="w-full h-full object-contain" />;
}

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
      "(max-width: 768px)": {
        slidesToShow: 1,
      },
    });
  });

  return (
    <Section class="w-full ">
      <div class="tracking-wide text-center pt-20">
        <h1 class="font-sans md:text-15 text-10 font-light mt-0 mb-3">
          WHAT I DO ?
        </h1>
        <p class="ma op-80 font-sans text-2xl m0 md:max-w-unset leading-relaxed max-w-70">
          I invest my passion in many aspects.
          <br />
          For example, I:
        </p>
      </div>

      <div class="blaze-slider pt-30 pb-50 px-5" id="cards-slider">
        <div class="blaze-container">
          <div class="blaze-container">
            <div class="blaze-track-container">
              <div class="blaze-track">
                <TagCard
                  cover={<Icons />}
                  text="Explore Latest"
                  tagName="Technolonies"
                  tagClass="bg-sky-9"
                />
                <TagCard
                  cover={
                    <CoverImage src="http://www.iqmol.org/images/phenyl.png" />
                  }
                  text="Learn and Apply"
                  tagName="Quantum Chemistry"
                  tagClass="bg-teal-9"
                />
                <TagCard
                  cover={<Icons />}
                  text="??"
                  tagName="??"
                  tagClass="bg-teal-9"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
