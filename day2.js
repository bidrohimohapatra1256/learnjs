const form = document.querySelector("form");
const input = document.querySelector("input");
const reposContainer = document.querySelector(".repos");
const mainContainer = document.querySelector(".main-container");

const API = "https://api.github.com/users/";

async function fetchData(username) {
  try {
    const response = await fetch(`${API}${username}`);
    if (!response.ok) throw new Error(response.statusText);

    const {
      avatar_url,
      bio,
      blog,
      company,
      followers,
      following,
      location,
      login,
      twitter_username,
    } = await response.json();

    const html = `
    

    
  let a = await fetch("https://icanhazdadjoke.com/", config);
  let b = await a.json();
  document.getElementById("content").innerHTML = b.joke;
}
const menuBtn = document.getElementById("menu");
const sidebar = document.getElementById("sidebar");
const content = document.getElementById("content");

menuBtn.addEventListener("click", () => {
  sidebar.classList.toggle("active");
  content.classList.toggle("active");
});
const btn = document.querySelector(".btn");
const closeIcon = document.querySelector(".close-icon");
const trailerContainer = document.querySelector(".trailer-container");
const video = document.querySelector("video");

btn.addEventListener("click", () => {
  trailerContainer.classList.remove("active");
});

closeIcon.addEventListener("click", () => {
  trailerContainer.classList.add("active");
  video.pause();
  video.currentTime = 0;
});const password = document.getElementById("password");
const bg = document.querySelector(".background-image");

password.addEventListener("input", (e) => {
  const input = e.target.value;
  const length = input.length;
  const blurness = 20 - length * 2;
  bg.style.filter = `blur(${blurness}px)`;
});
const clock = document.querySelector(".clock");

clock.addEventListener("load", tick);

function tick() {
  const now = new Date();
  const h = now.getHours();
  const m = now.getMinutes();
  const s = now.getSeconds();

  const html = `
        <span>${h} :</span>
        <span>${m} :</span>
        <span>${s}</span>
    `;
  clock.innerHTML = html;
  const menuBtn = document.getElementById("bar");
}

setInterval(tick, 1000);
const textInput = document.querySelector(".text-input");
const worldCountElement = document.querySelector(".word-count");
const letterCountElement = document.querySelector(".letter-count");
const spaceCountElement = document.querySelector(".space-count");

const checks = [atLeastTwoCharacters, abscenceOfThreeConsecutiveCharacters];

function atLeastTwoCharacters(text) {
  const letters = text.match(/[a-z]/gi) || [];
  return letters.length >= 2;
}

function abscenceOfThreeConsecutiveCharacters(text) {
  for (const character of text) {
    const occurrences = Array.from(text).filter((v) => v == character).length;

    if (occurrences >= 3) {
      return false;
    }
  }

  return true;
}

textInput.addEventListener("input", () => {
  const splitted = textInput.value.trim().split(/[\s-]/);
  const letterCount = (textInput.value.match(/[a-z]/gi) || []).length;
  const spaceCount = (textInput.value.match(/\s+/g) || []).length;
  let wordCount = 0;

  outer: for (const text of splitted) {
    for (const check of checks) {
      if (!check(text)) {
        continue outer;
      }
    }
    wordCount++;
  }

 
});
day2 day2/index.js day2/index.js/index.html day2/index.js/style.css index.js project project/index.html project/index.html/app.js project/index.html/index.html project/index.html/style.css project4 project4/dad5 da5.js day2.js fast.js index.html style.css
const itemHeaders = document.querySelectorAll(".accordion-item-header");

itemHeaders.forEach((accordion) => {
  accordion.addEventListener("click", collapseAccordions);

  function collapseAccordions() {
    const activeAccordion = document.querySelector(".active");
    if (activeAccordion && activeAccordion !== accordion) {
      activeAccordion.classList.toggle("active");
      activeAccordion.nextElementSibling.style.maxHeight = 0;
    }

    accordion.classList.toggle("active");
    const accordionItemBody = accordion.nextElementSibling;

    if (accordion.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    } else {
      accordionItemBody.style.maxHeight = 0;
    }
  }
});




