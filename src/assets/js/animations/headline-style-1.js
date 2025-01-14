import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function animateHeadlinesStyle1(selector = ".headline-style-1") {
    const headlines = document.querySelectorAll(selector);

    headlines.forEach((headline) => {

      const words = headline.textContent.trim().split(" ");
      headline.innerHTML = words
        .map(
          (word) =>
            `<span class="word" style="white-space: nowrap;">${[...word]
              .map((char) => `<span class="char">${char}</span>`)
              .join("")}</span>`
        )
        .join(" ");
  
      // Select all character spans for this headline
      const chars = headline.querySelectorAll(".char");
  
      // Animate the headline characters
      gsap.fromTo(
        chars,
        {
          "will-change": "transform",
          transformOrigin: "50% 0%",
          opacity: 0,
          scaleY: 0,
          y: 20,
        },
        {
          ease: "back",
          opacity: 1,
          scaleY: 1,
          yPercent: 0,
          y: 0,
          stagger: 0.03,
          scrollTrigger: {
            trigger: headline,
            start: "center bottom",
            end: "top top-=20%",
            scrub: false,
          },
        }
      );
    });
  }