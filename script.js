const nextButton = document.querySelector("button#next");
const prevButton = document.querySelector("button#prev");
const cards = document.querySelector(".cards");

let currentCard = 0;

let scrollValue =
  getComputedStyle(cards).width.split("px")[0] / cards.children.length;

const setActive = () => {
  document.querySelectorAll(".indicator").forEach((e, index) => {
    if (index === currentCard) {
      e.style.transform = "scale(1.2)";
    } else {
      e.style.transform = "scale(0.7)";
    }
  });
  let currentValue = scrollValue * currentCard;
  cards.style.transform = `translateX(-${currentValue}px)`;
};

nextButton.onclick = () => {
  if (currentCard < cards.children.length - 1) {
    currentCard++;
    setActive();
  }
};

prevButton.onclick = () => {
  if (currentCard > 0) {
    currentCard--;
    setActive();
  }
};

for (let i = 0; i < cards.children.length; i++) {
  const button = document.createElement("button");
  button.id = i;
  button.classList.add("indicator");
  document.querySelector(".indicator-div").appendChild(button);

  button.onclick = (e) => {
    currentCard = +e.target.id;
    setActive();
  };
}

setInterval(() => {
  if (currentCard === cards.children.length - 1) {
    currentCard = 0;
  } else {
    currentCard++;
  }
  setActive();
}, 5000);

setActive();