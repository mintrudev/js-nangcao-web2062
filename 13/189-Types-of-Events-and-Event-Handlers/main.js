"use strict";
const h1 = document.querySelector("h1");
const alertH1 = (e) => {
  alert("addEventListener: Great! You are reading the heading :D");
};
h1.addEventListener("mouseenter", alertH1);

setTimeout(() => h1.removeEventListener("mouseenter", alertH1), 3000);

// h1.onmouseenter = (e) => {
//   alert("onmouseenter: Great! You are reading the heading :D");
// };
