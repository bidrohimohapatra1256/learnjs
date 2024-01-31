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
    <div
      class="user-avatar"
      style="background: url(${avatar_url}) no-repeat center/cover"
    ></div>
    <p class="user-name">${login}</p>
    <button class="follow">Follow</button>
    <p class="user-bio">${bio}</p>
    <div class="followers-info">
      <a href="#">
        <i class="fa-solid fa-person"></i>
        <span class="followers">${followers}</span> follower
      </a>

      <a href='#'>
        <span class="following">${following} </span> following
      </a>

      <div class="icon-container">
        <i class="fa-regular fa-building"></i>
        <a href="#" class="company">${company}</a>
      </div>
      <div class="icon-container">
        <i class="fa-sharp fa-solid fa-location-dot"></i>
        <a href="#" class="location">${location}</a>
      </div>
      <div class="icon-container">
        <i class="fa-regular fa-solid fa-link"></i>
        <a href="#" class="blog">${blog}</a>
      </div>
      <div class="icon-container">
        <i class="fa-brands fa-twitter"></i>
        <a href="#" class="twitter_username">@${twitter_username}</a>
      </div>
    </div>
    `;

    const section = document.createElement("section");
    section.classList.add("about-user");
    section.innerHTML = html;
    mainContainer.insertAdjacentElement("afterbegin", section);
  } catch (error) {
    console.error(error);
  }
}

async function fetchRepos(username) {
  try {
    const response = await fetch(`${API}${username}/subscriptions`);
    if (!response.ok) throw new Error(response.statusText);
    const data = await response.json();

    data.forEach(
      ({
        name,
        description,
        forks_count,
        language,
        watchers_count,
        git_url,
      }) => {
        const modifiedUrl = git_url
          .replace(/^git:/, "http:")
          .replace(/\.git$/, "");

        const singleElement = document.createElement("div");
        singleElement.classList.add("repo-card");
        const html = `
        <a href=${modifiedUrl} class="repo-title">${name}</a>
        <p class="repo-subtitle">${description}</p>
        <div class="popularity">
            <p class="technology-used">${language}</p>
            <p class="stars"><i class="fa-regular fa-star"></i>${watchers_count}</p>
            <img src="./git-fork_1.svg" alt="Fork SVG" class="fork-svg">
            <span class="forked">${forks_count}</span>
        </div>
    
        <p class="pill">Public</p>
        `;
        singleElement.innerHTML = html;
        reposContainer.append(singleElement);
      }
    );
  } catch (error) {
    console.error(error);
  }
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const val = input.value;

  if (val) {
    try {
      await fetchData(val);
      await fetchRepos(val);
    } catch (error) {
      console.log(error);
    } finally {
      input.value = "";
    }
  }

  document
    .querySelector("input")
    .addEventListener("click", () => location.reload());
});
AudioDestinationNode
document.getElementById("btn").addEventListener("click", joke);

async function joke() {
  let config = {
    headers: {
      Accept: "application/json",
    },
  };

  let a = await fetch("https://icanhazdadjoke.com/", config);
  let b = await a.json();
  document.getElementById("content").innerHTML = b.joke;
}
document.getElementById("btn").addEventListener("click", joke);

async function joke() {
  let config = {
    headers: {
      Accept: "application/json",
    },
  };

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

  worldCountElement.textContent = wordCount;
  letterCountElement.textContent = letterCount;
  spaceCountElement.textContent = spaceCount;
});





