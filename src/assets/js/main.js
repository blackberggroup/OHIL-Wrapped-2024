import { lenis, gsap } from './smooth-scrolling';
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import initKeyboardNavigation from './keyboard-navigation';
import { initBulgeEffect } from './animations/01-hero';
import { digitalHorizonsAnimations } from "./animations/03-digital-horizons";
import { linesOfCodeAnimations } from "./animations/04-lines-of-code";
import { engagementAnimations } from "./animations/06-engagement";
import { designAnimations } from "./animations/08-design";
import { codeAnimations } from "./animations/09-code";
import { animateHeadlinesStyle1 } from "./animations/headline-style-1";
import { fadeInParagraphs } from "./animations/paragraph-fade-in";
import { toolsAnimation } from "./animations/10-tools";
import { accessibilityAnimations } from "./animations/07-accessibility";
import { animateUSMapCircles } from "./animations/05-audience";
import { animateWordBordersOnScroll } from "./animations/02-transforming";

//initKeyboardNavigation(lenis);
gsap.registerPlugin(MotionPathPlugin);

initBulgeEffect('hero', '/assets/images/ohil-hero-bg.jpg');

window.addEventListener("load", () => {
  digitalHorizonsAnimations();
  linesOfCodeAnimations();
  engagementAnimations();
  codeAnimations();
  animateHeadlinesStyle1(".headline-style-1");
  fadeInParagraphs(".p-animate", ".section-text-fade-in"); 
  toolsAnimation();
  accessibilityAnimations();
  designAnimations();
  animateUSMapCircles();
  animateWordBordersOnScroll();
});