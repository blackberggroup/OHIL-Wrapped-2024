import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function accessibilityAnimations() {
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
        element.textContent = count.value.toFixed(2); 
      },
      onComplete: () => {
        element.textContent = end.toFixed(2); 
      },
    });
  }

  const counters = [
    { elementId: "accessibility-count", start: 10.01, end: 16.86, duration: 3, delay: 1 },
  ];

  ScrollTrigger.create({
    trigger: "#accessibility",
    start: "top 80%", 
    once: true,
    onEnter: () => {
      counters.forEach(({ elementId, start, end, duration, delay }) =>
        animateCountUp(elementId, start, end, duration, delay)
      );
    },
  });
}
