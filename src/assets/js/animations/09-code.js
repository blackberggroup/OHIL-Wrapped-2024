import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function codeAnimations() {
  const codeSection = document.querySelector("#code");
  const codeUI = document.querySelector("#code-ui");
  const verticalLine = document.querySelector(".code-ui__vertical-line");

  if (!codeSection || !verticalLine) return;

  // Ensure vertical line height grows only within #code section
  gsap.to(verticalLine, {
    scrollTrigger: {
      trigger: codeUI,
      start: "center center",
      end: () => `bottom+=${codeSection.offsetHeight - codeUI.offsetHeight}px`,
      scrub: true,
    },
    height: () => `${codeSection.offsetHeight}px`,
    ease: "none",
  });

  // Animate each big-numbers element
  document.querySelectorAll(".big-numbers").forEach((element) => {
    const numberElement = element.querySelector(".big-numbers__number");
    if (!numberElement) return; // Safeguard in case the structure is missing

    const finalValue = parseInt(numberElement.textContent.replace(/,/g, ""), 10);

    // Counting animation
    gsap.fromTo(
      numberElement,
      { textContent: 0 }, // Start from 0
      {
        textContent: finalValue,
        scrollTrigger: {
          trigger: element,
          start: "top center", // Start when the element is in the center of the viewport
          end: "bottom center", // End when the element leaves the viewport
          scrub: true, // Enable reverse animation on scroll up
        },
        ease: "power1.inOut", // Smooth counting in both directions
        snap: { textContent: 1 }, // Snap to whole numbers
        onUpdate: function () {
          numberElement.textContent = Math.floor(this.targets()[0].textContent).toLocaleString();
        },
      }
    );

    // Bounce and fade animations
    gsap.fromTo(
      element,
      { scale: 0.5, opacity: 0 }, 
      {
        scale: 1,
        opacity: 1,
        scrollTrigger: {
          trigger: element,
          start: "top center",
          end: "bottom center", // Element fades out when it leaves the viewport
          scrub: true, // Enable reverse animation on scroll up
        },
        ease: "power1.inOut", 
      }
    );
  });

  const codeElement = document.querySelector(".code-ui__card-body code");
  const cursorElement = document.createElement("span");

  if (!codeElement) {
    console.error("Code element not found!");
    return;
  }

  // Add a blinking cursor to the code element
  cursorElement.classList.add("code-ui__cursor");
  codeElement.parentNode.appendChild(cursorElement);

  // Get the innerHTML of the code tag as raw text
  const codeContent = codeElement.innerHTML.trim(); // This preserves HTML tags
  codeElement.textContent = ""; // Clear the content initially to type it out

  // Manual typing effect function
  const typeHTML = (element, text, speed, cursor) => {
    let index = 0;
    const interval = setInterval(() => {
      element.textContent += text[index];
      index++;
      if (index === text.length) {
        clearInterval(interval);
        cursor.style.display = "none"; // Hide cursor after typing is complete
      }
    }, speed);
  };

  // Trigger typing animation when .code-ui__card enters the viewport
  ScrollTrigger.create({
    trigger: ".code-ui__card",
    start: "top center", // Start typing when the card's top is at the center of the viewport
    onEnter: () => {
      typeHTML(codeElement, codeContent, 5, cursorElement); // Adjust typing speed here
    },
  });

  // Optional bounce effect for the card itself
  gsap.fromTo(
    ".code-ui__card",
    { scale: 0.95, opacity: 0 },
    {
      scale: 1,
      opacity: 1,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".code-ui__card",
        start: "top center",
        scrub: false,
      },
    }
  );

  // Refresh ScrollTrigger on resize to recalculate dimensions
  window.addEventListener("resize", () => {
    ScrollTrigger.refresh();
  });
}
