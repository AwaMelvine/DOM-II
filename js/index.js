const navLinks = document.querySelector("nav").childNodes;

navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
  });
});

// mouseover event
const funBusImg = document.querySelector(".intro img");

funBusImg.addEventListener("mouseover", () => {
  funBusImg.classList.toggle("site-space-background");
});

// load event
// window.addEventListener("load", () => {
//   const response = confirm(
//     "By using this site, you accept that we use cookies to improve on your experience on the site"
//   );
//   if (response) {
//     // code that uses cookies
//   } else {
//     // code that doesn't use cookies
//   }
// });

// select
const paragraphs = document.getElementsByTagName("p");
[...paragraphs].forEach(p => {
  p.addEventListener("copy", () => {
    const status = confirm(
      "Thanks for spreading the word. Should we add our website link to the selected text for reference purposes?"
    );

    if (status) {
      // selected text has link to website in it
    } else {
      // selected text does not have link to website in it
    }
  });
});

// scroll event listener
window.addEventListener("scroll", event => {
  let images = document.getElementsByTagName("img");
  [...images].splice(1).forEach(image => {
    image.classList.toggle("site-space-background");
  });
});
