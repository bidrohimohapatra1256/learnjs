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

day2 day2/index.js day2/index.js/index.html day2/index.js/style.css index.js project project/index.html project/index.html/app.js project/index.html/index.html project/index.html/style.css project4 project4/dad5 da5.js day2.js fast.js index.html style.css
const itemHeaders = document.querySelectorAll(".accordion-item-header");

itemHeaders.forEach((accordion) => {
  accordion.addEventListener("click", collapseAccordions);

 


