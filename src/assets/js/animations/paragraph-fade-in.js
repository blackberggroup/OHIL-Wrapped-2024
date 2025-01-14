import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function fadeInParagraphs(selector = ".p-animate", sectionSelector = ".section") {
  const sections = document.querySelectorAll(sectionSelector);

  sections.forEach((section) => {
    const paragraphs = section.querySelectorAll(selector);

    if (paragraphs.length > 0) {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section, 
          start: "top 80%",
          end: "bottom 95%",
          scrub: true,
        },
      });

      paragraphs.forEach((paragraph) => {
        const parser = new DOMParser();
        const parsedHTML = paragraph.innerHTML;
        const tempContainer = parser.parseFromString(`<div>${parsedHTML}</div>`, "text/html").body;

        const wrapWordsInSpans = (node) => {
          if (node.nodeType === Node.TEXT_NODE) {
            return node.textContent
              .split(/(\s+)/) 
              .map((text) => (text.trim() ? `<span class="word">${text}</span>` : text))
              .join("");
          } else if (node.nodeType === Node.ELEMENT_NODE) {
            const children = Array.from(node.childNodes).map(wrapWordsInSpans).join("");
            return `<${node.tagName.toLowerCase()} ${Array.from(node.attributes)
              .map((attr) => `${attr.name}="${attr.value}"`)
              .join(" ")}>${children}</${node.tagName.toLowerCase()}>`;
          }
          return "";
        };

        const wrappedHTML = Array.from(tempContainer.childNodes).map(wrapWordsInSpans).join("");
        paragraph.innerHTML = wrappedHTML;

        const wordSpans = paragraph.querySelectorAll(".word");

        timeline.fromTo(
          wordSpans,
          {
            opacity: 0.4,
          },
          {
            opacity: 1,
            ease: "power1.inOut",
            stagger: 0.05,
            duration: 0.5,
          },
          ">+=0.1" 
        );
      });
    }
  });
}
