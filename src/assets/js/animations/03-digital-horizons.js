import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function digitalHorizonsAnimations() {
  const headline = document.querySelector(".dh-headline");

  if (headline) {
    gsap.fromTo(
      headline,
      {
        y: 50, 
        opacity: 0, 
      },
      {
        y: 0, 
        opacity: 1, 
        ease: "power2.out",
        duration: 1.5,
        scrollTrigger: {
          trigger: ".dh-headline",
          start: "top 70%",
          end: "top 50%",
          scrub: false,
        },
      }
    );
  }

  // Example number count-up animation
  const counters = [
    { elementId: "projects-count", start: 12, end: 14, duration: 1, delay: 0 },
    { elementId: "repositories-count", start: 14, end: 16, duration: 1, delay: 0.5 },
  ];

  function animateCountUp(elementId, start, end, duration, delay) {
    const element = document.getElementById(elementId);
    if (!element) return;

    const count = { value: start };
    gsap.to(count, {
      value: end,
      duration: duration,
      delay: delay,
      ease: "power1.inOut",
      onUpdate: () => {
        element.textContent = Math.floor(count.value);
      },
      onComplete: () => {
        element.textContent = end;
      },
    });
  }

  ScrollTrigger.create({
    trigger: ".dh-stats",
    start: "top 80%",
    once: true,
    onEnter: () => {
      counters.forEach(({ elementId, start, end, duration, delay }) =>
        animateCountUp(elementId, start, end, duration, delay)
      );
    },
  });
}
