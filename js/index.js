const paragraphs = document.getElementsByTagName("p");
const funBusImg = document.querySelector(".intro img");
const navLinks = document.querySelector("nav").childNodes;
const siteImages = [...document.getElementsByTagName("img")].splice(1);
const headings = document.querySelectorAll("h1, h2");
const bgColors = [
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

const textColors = [
  "#4C5B5C",
  "#040F0F",
  "#29524A",
  "#558564",
  "#474A2C",
  "#2B4162",
  "#D90429",
  "#FC814A",
  "#A1674A",
  "#A63A50"
];

navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
  });
});

// mouseover event
funBusImg.addEventListener("mouseover", () => {
  funBusImg.classList.toggle("site-space-background");
});

// load event
window.addEventListener("load", () => {
  const response = confirm(
    "By using this site, you accept that we use cookies to improve on your experience on the site"
  );
  if (response) {
    // code that uses cookies
  } else {
    // code that doesn't use cookies
  }
});

// copy event
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
  siteImages.forEach(image => {
    image.classList.toggle("site-slow-background");
  });
});

// click event on headings
[...headings].forEach(h => {
  h.addEventListener("click", () => {
    h.style.color = "pointer";
    h.style.color = "#A63C06";
  });
});

// dbclick event on document
const body = document.querySelector("body");
body.addEventListener("dblclick", event => {
  body.style.background = bgColors[Math.floor(Math.random() * 10)];
});

// drag event listener
siteImages.forEach(image => {
  image.addEventListener("drag", e => {
    e.target.style.display = "none";
  });
});

// stop event propagation
const btn = document.querySelector(".btn");
const dest = document.querySelector(".destination");
btn.addEventListener("click", event => {
  const email = prompt("Enter your email to sign up:");
  event.stopImmediatePropagation();
});
dest.addEventListener("click", () => {
  alert("Thanks for reading");
});

// keydown event listener
document.addEventListener("keydown", () => {
  [...paragraphs].forEach(p => {
    p.style.color = textColors[Math.floor(Math.random() * 10)];
    console.log(textColors[Math.floor(Math.random() * 10)]);
  });
});

// cut event listener
[...paragraphs].forEach(p => {
  p.addEventListener("cut", () => {
    p.style.transition = "all 1s ease-in-out";
    p.style.opacity = "0";
  });
});

window.addEventListener("resize", () => {
  document.querySelector("body").style.background =
    bgColors[Math.floor(Math.random() * 10)];
});
