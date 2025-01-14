import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function animateWordBordersOnScroll() {

  const wordBorders = document.querySelectorAll(".word-border span");

  if (wordBorders.length > 0) {
    gsap.fromTo(
      wordBorders,
      {
        width: "0%", 
      },
      {
        width: "100%", 
        duration: 1, 
        stagger: 0.75, 
        ease: "none",
        scrollTrigger: {
          trigger: "#transforming-development",
          start: "top 60%", 
          end: "top 20%",
          scrub: false,
          once: true,
        },
      }
    );
  }
}
