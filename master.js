// input name
document.querySelector("input").focus();
function inputName() {
  if (document.querySelector("input").value.trim() === "") {
    document.querySelector(".name span").textContent = "Unknown";
    document.querySelector(".winner span").textContent = "Unknown";
  } else {
    document.querySelector(".name span").textContent = document.querySelector("input").value;
    document.querySelector(".winner span").textContent = document.querySelector("input").value;
  }
  document.querySelector(".input-name").remove();
}

document.querySelector(".start").addEventListener("click", () => {
  inputName();
});

window.addEventListener("keydown", () => {
  if (event.key === "Enter") {
    inputName();
  }
});

// ----------------------------------------
// make alphapets and push them into page
function pushAlphabets() {
  Array.from("qwertyuiopasdfghjklzxcvbnm").forEach((alpha) => {
    const span = document.createElement("span");
    span.appendChild(document.createTextNode(alpha));
    document.querySelector(".letters .contant").appendChild(span);
  });
}
pushAlphabets();

// make object of topices and words and start gussing

const topices = {
  men: ["Dwayne Johnson", "Joe Biden", "Elon Musk", "Jeff Bezos", "LeBron James", "Kylie Jenner", "Robert Downey", "Cristiano Ronaldo", "Will Smith", "Justin Bieber"],
  countries: ["Algeria", "Libya", "Lebanon", "Egypt", "Oman", "Bahrain", "Kuwait", "Qatar", "Morocco", "Palestinian"],
  brands: ["Apple", "Amazon", "Google", "Microsoft", "Walmart", "Samsung", "Facebook", "Coca Cola", "Nike", "Ikea"],
  planets: ["Moon", "Jupiter", "Mars", "Earth ", "Venus", "Mercury", "Pluto", "Neptune ", "Uranus", "aturn"],
  movies: ["Angry Men", "The Godfather", "Seven Samurai", "Casablanca", "Citizen Kane", "Singin", "Parasite", "Fight Club", "Schindlert", "Dark night"],
};

// make it random

// get random topic
const topic = Object.keys(topices)[Math.floor(Math.random() * Object.keys(topices).length)];
// set topic into page
document.querySelector(".topic span").innerHTML = topic;
// get random word
const randomWrod = topices[topic][Math.floor(Math.random() * topices[topic].length)];

// set random word into a page
Array.from(randomWrod).forEach((letter) => {
  const span = document.createElement("span");
  document.querySelector(".word").appendChild(span);
  span.classList.add("empty");
  if (letter === "’") {
    span.className = "space";
  } else if (letter === " ") {
    span.className = "space";
  }
});

let wright = 0;
let test = 0;
Array.from(document.querySelectorAll(".letters .contant span")).forEach((letter) => {
  letter.addEventListener("click", () => {
    test++;
    letter.classList.add("clicked");
    console.log(randomWrod);
    Array.from(randomWrod).forEach((alpha, index) => {
      if (letter.innerHTML === alpha.toLowerCase()) {
        wright++;
        test--;
        addWrong();
        document.querySelectorAll(".empty")[index].innerHTML = alpha;
        if (randomWrod.length === wright) {
          document.querySelector(".winner").classList.add("open");
        }
      }
    });
    addWrong();
  });
});

// add wrong move into game
function addWrong() {
  for (let i = 0; i < test; i++) {
    document.querySelectorAll(".game ul li")[i].classList.add("lose");
  }
  document.querySelector(".move span").innerHTML = 10 - test;
  if (test === 10) {
    document.querySelector(".overlay-gamever").classList.add("open");
    document.querySelector(".overlay-gamever h2 span").innerHTML = randomWrod;
  }
}
addWrong();

// add reald

document.querySelector(".relad").addEventListener("click", () => {
  location.reload();
});

document.querySelector(".random").addEventListener("click", () => {
  if (test === 0 && wright === 0) {
    // make it random
    // get random topic
    const topic = Object.keys(topices)[Math.floor(Math.random() * Object.keys(topices).length)];
    // set topic into page
    document.querySelector(".topic span").innerHTML = topic;
    // get random word
    const randomWrod = topices[topic][Math.floor(Math.random() * topices[topic].length)];
  } else {
    document.querySelector(".random").classList.add("gray");
    console.log("ddd");
  }
  console.log(randomWrod);
});
