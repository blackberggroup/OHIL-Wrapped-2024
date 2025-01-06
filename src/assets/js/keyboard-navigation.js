export default function initKeyboardNavigation(lenis = null) {
    const sections = document.querySelectorAll(".container-fluid");
    let currentSectionIndex = 0;
  
    function scrollToSection(index) {
      if (index >= 0 && index < sections.length) {
        currentSectionIndex = index;
        const targetSection = sections[currentSectionIndex];
        const offsetTop = targetSection.offsetTop;
  
        if (lenis) {
          lenis.scrollTo(offsetTop); 
        } else {
          window.scrollTo({
            top: offsetTop,
            behavior: "smooth", 
          });
        }
      }
    }
  
    document.addEventListener("keydown", (event) => {
      if (event.key === "ArrowDown") {
        if (currentSectionIndex < sections.length - 1) {
          scrollToSection(currentSectionIndex + 1);
        }
      } else if (event.key === "ArrowUp") {
        if (currentSectionIndex > 0) {
          scrollToSection(currentSectionIndex - 1);
        }
      }
    });
  
    if (lenis) {
      lenis.on("scroll", () => {
        const scrollPosition = window.scrollY || document.documentElement.scrollTop;
        sections.forEach((section, index) => {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < bottom) {
            currentSectionIndex = index;
          }
        });
      });
    }
  }
  