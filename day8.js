const username = document.querySelector(".username");
const email = document.querySelector(".email");
const password1 = document.querySelector(".password1");
const password2 = document.querySelector(".password2");
const submit = document.querySelector(".submit");

// MESSAGES
const usernameMessage = document.querySelector(".user-msg");
const emailMessage = document.querySelector(".email-msg");
const password1Message = document.querySelector(".password1-msg");
const password2Message = document.querySelector(".password2-msg");

submit.addEventListener("click", (e) => {
  e.preventDefault();

  if (username === "" && email === "" && password1 === "" && password2 === "") {
    alert("Please fill all input fields");
  }

  if (username.value === "") {
    showMessage(usernameMessage, "Please Provide Your Name", "#FF0000");
  } else {
    showMessage(usernameMessage, "Great Name", "#4BB543");
  }

  if (email.value === "") {
    showMessage(emailMessage, "Please Provide Your Email", "#FF0000");
  } else {
    showMessage(emailMessage, "Got your email", "#4BB543");
  }

  if (password1.value === "") {
    showMessage(password1Message, "Please Provide Your Password", "#FF0000");
  } else {
    showMessage(password1Message, "Valid password", "#4BB543");
  }

  if (password2.value === "") {
    showMessage(password2Message, "Confirm Your Password", "#FF0000");
  } else if (password1.value !== password2.value) {
    showMessage(password2Message, "Passwords do not match", "#FF0000");
  } else {
    showMessage(password2Message, "Valid password", "#4BB543");
  }
});

function showMessage(element, msg, color) {
  element.style.visibility = "visible";
  element.textContent = msg;
  element.style.color = color;
  element.previousElementSibling.style.border = `2px solid ${color}`;
}
const searchMeal = async (e) => {
  e.preventDefault();

  // Select Elements
  const input = document.querySelector(".input");
  const title = document.querySelector(".title");
  const info = document.querySelector(".info");
  const img = document.querySelector(".img");
  const ingredientsOutput = document.querySelector(".ingredients");

  const showMealInfo = (meal) => {
    const { strMeal, strMealThumb, strInstructions } = meal;
    title.textContent = strMeal;
    img.style.backgroundImage = `url(${strMealThumb})`;
    info.textContent = strInstructions;

    const ingredients = [];

    for (let i = 1; i <= 20; i++) {
      if (meal[`strIngredient${i}`]) {
        ingredients.push(
          `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
        );
      } else {
        break;
      }
    }

    const html = `
    <span>${ingredients
      .map((ing) => `<li class="ing">${ing}</li>`)
      .join("")}</span>
    `;

    ingredientsOutput.innerHTML = html;
  };

  const showAlert = () => {
    alert("Meal not found :(");
  };

  // Fetch Data
  const fetchMealData = async (val) => {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${val}`
    );

    const { meals } = await res.json();
    return meals;
  };

  // Get the user value
  const val = input.value.trim();

  if (val) {
    const meals = await fetchMealData(val);

    if (!meals) {
      showAlert();
      return;
    }

    meals.forEach(showMealInfo);
  } else {
    alert("Please try searching for meal :)");
  }
};

const form = document.querySelector("form");
form.addEventListener("submit", searchMeal);

const magnifier = document.querySelector(".magnifier");
magnifier.addEventListener("click", searchMeal);

