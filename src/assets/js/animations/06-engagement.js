import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function engagementAnimations() {

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
    { elementId: "soi-count", start: 1106, end: 1206, duration: 1, delay: 0 },
    { elementId: "hackathon-count", start: 459, end: 499, duration: 1, delay: 1 },
  ];

  ScrollTrigger.create({
    trigger: ".engagement-stats",
    start: "top 80%", 
    once: true,
    onEnter: () => {
      counters.forEach(({ elementId, start, end, duration, delay }) =>
        animateCountUp(elementId, start, end, duration, delay)
      );
    },
  });
}