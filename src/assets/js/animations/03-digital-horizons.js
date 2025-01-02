import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function digitalHorizonsAnimations() {

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

  const counters = [
    { elementId: "projects-count", start: 12, end: 14, duration: 1, delay: 0 },
    { elementId: "repositories-count", start: 14, end: 16, duration: 1, delay: 1 },
  ];

  ScrollTrigger.create({
    trigger: ".dh-stats",
    start: "top 80%", 
    onEnter: () => {
      counters.forEach(({ elementId, start, end, duration, delay }) =>
        animateCountUp(elementId, start, end, duration, delay)
      );
    },
  });
}