import React, { useState, useEffect } from "react";
import Scene from "./Scene";
import SalmonContent from "./SalmonContent";
import "./App.css";
import { CameraTimeline } from "./AnimatedCamera";

function getScrollProgress() {
  const winScroll = window.document.documentElement.scrollTop;
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  return winScroll / height;
}

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [dynamicText, setDynamicText] = useState("");
  const [introOpacity, setIntroOpacity] = useState(1);
  const cubicEaseOut = (t) => 1 - Math.pow(1 - t, 3);
  const cubicEaseIn = (t) => t * t * t;
  const [outroOpacity, setOutroOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = getScrollProgress();
      CameraTimeline.progress(scrolled);

      const windowHeight = window.innerHeight;
      const outroDivAppears = windowHeight * 0.95;

      const outroAppearProgress = 0.9;

      // Update outro_div opacity based on scrollProgress
      if (scrolled >= outroAppearProgress) {
        setOutroOpacity(cubicEaseOut((scrolled - outroAppearProgress) / 0.1)); // Ease in for outro_div
      } else {
        setOutroOpacity(0);
      }

      // speed for intro
      const opacity = 1.3 - scrolled * 18;
      setIntroOpacity(opacity < 0 ? 0 : opacity);

      if (scrolled < 0.15) {
        setDynamicText(
          "During the early stages of glacier retreat up the valley, a multitude of river channels and proglacial lakes become exposed. This phenomenon enhances habitat diversity, providing expanded opportunities for various salmon life histories."
        );
      } else if (scrolled < 0.225) {
        setDynamicText(
          "For one, due to the fact that the glacier runoff is typically at its highest, known as peak water, during this phase, there are higher sediment loads and elevated turbidity that limits salmon and prey productivity in mainstream river channels."
        );
      } else if (scrolled < 0.3) {
        setDynamicText(
          "Conversely, side channels become crucial habitats for specific salmon species. Warmer temperatures, lower turbidity, increased prey production, and reduced velocities make side channels favorable for spawning and rearing, offering an alternative to the mainstem channel dominated by glacier meltwater."
        );
      } else if (scrolled < 0.45) {
        setDynamicText(
          "During the subsequent phase of glacier melting, as it retreats to higher elevations inaccessible to salmon, no new river habitat is created. However, downstream effects and ongoing river evolution from glacier retreat can significantly impact salmon populations, contingent upon how these effects cascade throughout their life cycles."
        );
      } else if (scrolled < 0.7) {
        setDynamicText(
          "While the majority of salmon return to their original habitat for spawning, some may stray to colonize new habitats, adapting to the changing conditions. For instance, as glacier meltwater runoff decreases, elevated water temperatures accelerate embryo development, potentially resulting in less-developed fish."
        );
      } else if (scrolled < 0.8) {
        setDynamicText(
          "In specific regions, mature riparian forests stabilize stream banks, influencing habitat quality as wood is introduced to stream channels. This wood accumulation traps ample gravel for spawning, altering water flow to create more space for juvenile salmon growth."
        );
      } else if (scrolled < 0.85) {
        setDynamicText(
          "Clearer water resulting from wood accumulation and decreased sedimentation also allows more light penetration, creating diverse prey opportunities. This, in turn, enhances the foraging success and accelerated growth of juvenile salmon."
        );
      } else if (scrolled < 0.9) {
        setDynamicText(
          "Similarly though, clearer water also means more visibility for predators that are attacking both rearing and out-migrating salmon."
        );
      }
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div
        id="intro_div"
        style={{
          position: "absolute",
          width: "100%",
          backgroundColor: "rgba(42, 160, 149, 1.0)",
          // backgroundColor: "rgba(235, 253, 254, 1.0)",
          top: "0",
          bottom: "0",
          left: "0",
          right: "0",
          zIndex: "3",
          opacity: introOpacity,
          transition: "opacity 0.05s ease",
        }}
      >
        <img
          src="https://cdn.glitch.global/09089cc5-a623-49f8-ba78-635e2a593267/hero-image-test.png?v=1702510521911"
          alt="Salmon and Glacier Retreat Hero Image"
          style={{
            display: "block",
            margin: "0 auto",
            maxWidth: "40%",
            maxHeight: "10%",
            paddingTop: "2%",
            paddingBottom: "2%",
          }}
        />

        <h2
          style={{
            fontFamily: "Georgia",
            fontWeight: "525",
            fontSize: "2.500em",
            color: "rgba(250, 250, 250, 1.0)",
            // color: "rgba(125, 132, 137, 1.0)",
            paddingLeft: "25%",
            paddingRight: "25%",
            marginBottom: "10px",
            textAlign: "center-aligned",
          }}
        >
          Climate Change-Induced Glacier Retreat Alters Pacific Salmon Habitat
          with Varied Effects
        </h2>
        <h1
          style={{
            fontFamily: "Inter",
            fontWeight: "600",
            fontSize: "1.000em",
            color: "rgba(250, 250, 250, 1.0)",
            // color: "rgba(112, 118, 122, 1.0)",
            paddingTop: "0.5%",
            paddingBottom: "0.5%",
            marginLeft: "25%",
            marginRight: "25%",
            textAlign: "center-aligned",
          }}
        >
          Collaborators: Queenie Huang (Aka. Boss Q 🪝) , Eric Cheng (Aka. Sushi
          Boss 🍣) & Levitia Patricia (Aka. Remix Boss Lev 🎛)
        </h1>
        <p
          style={{
            fontFamily: "Inter",
            fontWeight: "400",
            fontSize: "1.15em",
            color: "rgba(250, 250, 250, 1.0)",
            // color: "rgba(112, 118, 122, 1.0)",
            width: "50%",
            marginLeft: "25%",
            marginRight: "25%",
            textAlign: "center-aligned",
          }}
        >
          In the face of climate change, the melting ice on North American
          Mountains is reshaping aquatic ecosystems, bringing forth both
          challenges and benefits for the Pacific Salmon population. Glaciers in
          western North America have experienced a significant annual loss of up
          to 3% between 2006 and 2016, and projections suggest a staggering 80%
          volume reduction by 2100. These glaciers, crucial in shaping the
          habitat for North American Pacific Salmon, are prompting researchers
          to anticipate a dynamic impact on the salmon population throughout
          their life cycles.
          <br />
          <br />
          Despite the salmon's tendency to return from the sea to their natal
          stream for spawning, the changing landscape means some salmon will
          deviate and colonize the newly formed habitats for juveniles with
          varying effects. During the initial phases of glacier retreat along
          the coast, the process is giving rise to new lakes and streams,
          presenting diverse potential habitats for salmon. However, as the
          retreat advances to higher elevations, the runoff from the melting
          glaciers starts to significantly alter downstream ecosystems’
          temperature, turbidity, diminishing water flows, and general
          geomorphic evolution. The ongoing glacier retreat is a complex
          phenomenon that introduces a mix of challenges and opportunities for
          Pacific Salmon, highlighting the intricate interplay between climate
          change and the delicate balance of aquatic ecosystems.
          <br />
          <br />
          Here’s a walkthrough of potential effects of glaciers retreat through
          the lens of Pacific salmon life cycles:
        </p>
      </div>
      <div
        id="article_wrapper"
        style={{
          position: "absolute",
          top: "0",
          bottom: "0",
          left: "0",
          right: "0",
          zIndex: "0",
        }}
      >
        {scrollProgress >= 0.09 && scrollProgress < 0.95 && (
          <SalmonContent viewportPosition={5} text={dynamicText} />
        )}
        <Scene />
      </div>
      ) )
      {scrollProgress >= 0.9 && (
        <div
          id="outro_div"
          style={{
            position: "fixed",
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
            width: "100%",
            zIndex: "5",
            //backgroundColor: "rgba(209, 220, 227, 1.0)",
            backgroundColor: "rgba(235, 247, 254, 1.0)",
            paddingTop: "2%",
            opacity: outroOpacity,
            transition: "opacity 0.1s ease",
          }}
        >
          <p
            style={{
              fontFamily: "Inter",
              fontWeight: "400",
              fontSize: "1.15em",
              color: "rgba(60,60,60, 1.0)",
              width: "50%",
              paddingLeft: "25%",
              paddingRight: "25%",
            }}
          >
            In considering the changes in salmon habitat and life cycle, it's
            crucial to recognize the multifaceted factors at play. The
            aforementioned scenario provides a broad overview, but it's
            essential to acknowledge that local contexts and adaptations may
            introduce variations, a topic that merits further exploration in
            future studies. Nevertheless, it is evident that anthropogenic
            stressors are expediting the melting process.
            <br />
            <br />
            While certain alterations in the habitat resulting from glacier
            retreat may currently appear advantageous, researchers warn that as
            the melting persists until the complete disappearance of ice,
            enduring shifts in water temperature—stemming from the absence of
            cold meltwater during summer—could usher in fundamental changes in
            seasonal hydrological patterns. This, in turn, poses potential
            challenges to the quantity and quality of salmon habitat. It serves
            as a cautionary reminder to consider the broader implications of
            climate change and resist letting short-term benefits divert
            attention from the need to reassess our current actions.
            <br />
            <br />
            The impact extends beyond salmon to encompass other fishes and
            animals within the ecosystem, emphasizing the urgency of more
            effective conservation and management strategies. This entails
            continuous observations and updates to predictive models, providing
            region-specific guidance for appropriate responses. For some
            regions, adjusting escapement goals and salmon harvest levels might
            be paramount to fostering population growth in new colonies,
            favoring process-based approaches over the construction of new
            infrastructures in attempts to slow down the melting process.
          </p>

          <h1
            style={{
              fontFamily: "Inter",
              fontWeight: "550",
              fontSize: "1.15em",
              color: "rgba(60, 60, 60, 100%)",
              marginLeft: "25%",
              marginRight: "25%",
              textAlign: "center-aligned",
            }}
          >
            Credits: Pitman, Kara J et al. “Glacier Retreat and Pacific Salmon.”
            Bioscience vol. 70,3 (2020): 220-236. doi:10.1093/biosci/biaa015
            <a
              href="https://academic.oup.com/bioscience/article/70/3/220/5799047"
              target="_blank"
              rel="noopener noreferrer"
            >
              Link
            </a>
          </h1>
        </div>
      )}
    </div>
  );
}

export default App;
