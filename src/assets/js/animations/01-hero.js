import gsap from "gsap";

export function animateHero() {
  gsap.from("section h1", {
    opacity: 0,
    y: -100,
    duration: 1.5,
    ease: "power2.out",
  });
}
