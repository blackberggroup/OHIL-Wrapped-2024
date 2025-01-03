import { lenis, gsap } from './smooth-scrolling';
import initKeyboardNavigation from './keyboard-navigation';
import { initBulgeEffect } from './animations/01-hero';
import { digitalHorizonsAnimations } from "./animations/03-digital-horizons";
import { linesOfCodeAnimations } from "./animations/04-lines-of-code";
import { engagementAnimations } from "./animations/06-engagement";
import { codeAnimations } from "./animations/09-code";
import { animateHeadlinesStyle1 } from "./animations/headline-style-1";
import { fadeInParagraphs } from "./animations/paragraph-fade-in";

initKeyboardNavigation(lenis);

initBulgeEffect('hero', '/assets/images/ohil-hero-bg.jpg');

window.addEventListener("load", () => {
  digitalHorizonsAnimations();
  linesOfCodeAnimations();
  engagementAnimations();
  codeAnimations();
  animateHeadlinesStyle1(".headline-style-1");
  fadeInParagraphs(".p-animate"); 
});