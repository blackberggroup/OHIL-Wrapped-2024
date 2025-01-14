import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function linesOfCodeAnimations() {

  const topRow = document.querySelector(".sliding-row.top");
  const middleRow = document.querySelector(".sliding-row.middle");
  const bottomRow = document.querySelector(".sliding-row.bottom");

  if (topRow && middleRow && bottomRow) {

    gsap.to(topRow, {
      xPercent: -10,
      ease: "none",
      scrollTrigger: {
        trigger: "#sliding-rows-section",
        start: "top bottom", 
        end: "bottom top", 
        scrub: true,
      },
    });

    gsap.to(middleRow, {
      xPercent: 10,
      ease: "none",
      scrollTrigger: {
        trigger: "#sliding-rows-section",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.to(bottomRow, {
      xPercent: -10,
      ease: "none",
      scrollTrigger: {
        trigger: "#sliding-rows-section",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  }
}
