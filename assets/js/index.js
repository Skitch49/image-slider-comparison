const containers = document.querySelectorAll(".container-disclosure");

containers.forEach((container) => {
  const dragLine = container.querySelector(".line");
  const backgroundAfter = container.querySelector(".img-container-after");
  const range = container.querySelector(".disclosure-range");

  if (dragLine && backgroundAfter && range) {
    range.addEventListener("input", function () {
      backgroundAfter.style.width = range.value + "%";
      dragLine.style.left = range.value + "%";
    });
  }
});

const loader = document.querySelector(".loader");
window.addEventListener("load", () => {
  loader.classList.add("loading-out");
  setTimeout(() => {
    loader.remove();
  }, 200);
});
