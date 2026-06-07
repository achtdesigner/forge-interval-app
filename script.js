const header = document.getElementById("header");

const handleScroll = () => {
  header.classList.toggle("-scrolled", window.scrollY > 0);
};

window.addEventListener("scroll", handleScroll);

const segments = document.querySelectorAll(".f-segment");

const content = document.querySelectorAll(".f-segmented-content");

segments.forEach((segment) => {
  segment.addEventListener("click", () => {
    const target = segment.dataset.target;

    segments.forEach((item) => {
      item.classList.remove("-active");
    });

    content.forEach((panel) => {
      panel.classList.remove("-active");
    });

    segment.classList.add("-active");

    document.getElementById(target).classList.add("-active");
  });
});
