const section = document.querySelector("#covers");

//Спостерігач за появою секції в полі зору
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  },
  {
    root: null,
    rootMargin: "100px",
    threshold: 0,
  }
);

observer.observe(section);
