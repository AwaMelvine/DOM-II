// mouseover event
const funBusImg = document.querySelector(".intro img");

funBusImg.addEventListener("mouseover", () => {
  funBusImg.classList.toggle("site-space-background");
});

// load event
window.addEventListener("load", () => {
  confirm(
    "By using this site, you accept that we use cookies to improve on your experience on the site"
  );
});
