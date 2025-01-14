import gsap from "gsap";

export function designAnimations() {
  const cursors = [
    { id: "#cursor1", label: "Ross" },
    { id: "#cursor2", label: "Jim" },
    { id: "#cursor3", label: "Ryan" },
    { id: "#cursor4", label: "Will" },
  ];

  const container = document.querySelector(".design__animation-container");
  if (!container) {
    console.error("Animation container not found!");
    return;
  }

  const containerWidth = container.offsetWidth;
  const containerHeight = container.offsetHeight;

  cursors.forEach((cursor) => {
    const cursorElement = document.querySelector(cursor.id);
    if (!cursorElement) return;

    // Initialize cursor near the center of the container
    const initialX = containerWidth / 2 + (Math.random() * 100 - 50); // +/- 50px from center
    const initialY = containerHeight / 2 + (Math.random() * 100 - 50); // +/- 50px from center

    gsap.set(cursorElement, {
      x: initialX,
      y: initialY,
    });

    // Create infinite random movement
    function randomMovement() {
      const randomX = Math.random() * containerWidth * 0.8; // Stay within 80% of the container width
      const randomY = Math.random() * containerHeight * 0.8; // Stay within 80% of the container height

      gsap.to(cursorElement, {
        x: randomX,
        y: randomY,
        duration: 3 + Math.random() * 2, // Slower animation: 3-5 seconds per move
        ease: "power1.inOut",
        onComplete: randomMovement, // Loop the movement
      });
    }

    randomMovement(); // Start random movement
  });

  // Optional: Hover effect for cursors
  document.querySelectorAll(".design__cursor").forEach((cursor) => {
    cursor.addEventListener("mouseenter", () => {
      gsap.to(cursor, { scale: 1.2, duration: 0.3 });
    });
    cursor.addEventListener("mouseleave", () => {
      gsap.to(cursor, { scale: 1, duration: 0.3 });
    });
  });
}
