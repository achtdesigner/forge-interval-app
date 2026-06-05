const header = document.getElementById("header");

const handleScroll = () => {
  header.classList.toggle("-scrolled", window.scrollY > 0);
};

window.addEventListener("scroll", handleScroll);
