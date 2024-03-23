document.addEventListener("DOMContentLoaded", function () {
  const sr = ScrollReveal({
    origin: "top",
    distance: "50px",
    duration: 2000,
    reset: true,
  });

  sr.reveal(".header", { delay: 200 });
  sr.reveal(".header2", { delay: 400 });
  sr.reveal(".container", { delay: 600 });
  sr.reveal(".card", { delay: 200 });
});
