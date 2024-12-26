import { animateHero } from "./animations/01-hero";
import { lenis, gsap } from "./smooth-scrolling";
import initKeyboardNavigation from "./keyboard-navigation";

window.addEventListener("load", () => {
  animateHero();
});

//Initialize Keyboard Navigation
initKeyboardNavigation(lenis);
