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

// copy event
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
    image.classList.toggle("site-slow-background");
  });
});

// click event on headings
const headings = document.querySelectorAll("h1, h2");
[...headings].forEach(h => {
  h.addEventListener("click", () => {
    h.style.color = "pointer";
    h.style.color = "#A63C06";
  });
});

// dbclick event on document
const body = document.querySelector("body");
body.addEventListener("dblclick", event => {
  const colors = [
    "#ECFFF8",
    "#EDFBC1",
    "#F1F5F2",
    "#DDFFD9",
    "#EFEFD0",
    "#F7C59F",
    "#ECFFF8",
    "#EDFBC1",
    "#F1F5F2",
    "#DDFFD9"
  ];
  body.style.background = colors[Math.floor(Math.random() * 10)];
});
