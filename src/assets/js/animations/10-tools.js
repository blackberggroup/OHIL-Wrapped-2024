import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function toolsAnimation() {

  const topRow = document.querySelector(".tool-row.top");
  const middleRow = document.querySelector(".tool-row.middle");
  const bottomRow = document.querySelector(".tool-row.bottom");

  if (topRow && middleRow && bottomRow) {

    gsap.to(topRow, {
      xPercent: -10,
      ease: "none",
      scrollTrigger: {
        trigger: "#tools-sliding-rows-section",
        start: "top bottom", 
        end: "bottom top", 
        scrub: true,
      },
    });

    gsap.to(middleRow, {
      xPercent: 10,
      ease: "none",
      scrollTrigger: {
        trigger: "#tools-sliding-rows-section",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.to(bottomRow, {
      xPercent: -10,
      ease: "none",
      scrollTrigger: { 
        trigger: "#tools-sliding-rows-section",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  }
}
