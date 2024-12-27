import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function fadeInParagraphs(selector = ".p-animate") {
  const paragraphs = document.querySelectorAll(selector);

  paragraphs.forEach((paragraph) => {
    const words = paragraph.textContent.trim().split(" ");
    paragraph.innerHTML = words
      .map((word) => `<span class="word">${word}</span>`)
      .join(" ");

    const wordSpans = paragraph.querySelectorAll(".word");

    gsap.fromTo(
      wordSpans,
      {
        opacity: 0.4, 
      },
      {
        opacity: 1, 
        ease: "power1.inOut",
        stagger: 0.05,
        scrollTrigger: {
          trigger: paragraph, 
          start: "top 80%", 
          end: "top 20%",
          scrub: true, 
        },
      }
    );
  });
}
