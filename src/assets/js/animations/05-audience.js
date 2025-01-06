import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function animateUSMapCircles() {
  const svgMap = document.querySelector("#us-map");
  if (!svgMap) return;

  const circles = svgMap.querySelectorAll(".map-dot");

  gsap.fromTo(
    circles,
    {
      y: -100, 
      opacity: 0,
    },
    {
      y: 0, 
      opacity: 1,
      ease: "none",
      duration: 1.5,
      stagger: 0.2,
      scrollTrigger: {
        trigger: svgMap,
        start: "top 80%",
        end: "top 30%",
        scrub: false,
      },
      onComplete: () => {
        pulseCircles(circles);
      },
    }
  );

  function pulseCircles(elements) {
    elements.forEach((circle) => {
      gsap.to(circle, {
        scale: 1.2, 
        duration: 1, 
        repeat: -1, 
        yoyo: true,
        ease: "power1.inOut",
        delay: Math.random() * 1, 
      });
    });
  }

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
        element.textContent = Math.floor(count.value).toLocaleString();
      },
      onComplete: () => {
        element.textContent = end.toLocaleString(); 
      },
    });
  }

  const counters = [
    { elementId: "audience-count", start: 140489, end: 249489, duration: 3, delay: 1 },
  ];

  ScrollTrigger.create({
    trigger: "#audience",
    start: "top 80%", 
    onEnter: () => {
      counters.forEach(({ elementId, start, end, duration, delay }) =>
        animateCountUp(elementId, start, end, duration, delay)
      );
    },
  });
}
