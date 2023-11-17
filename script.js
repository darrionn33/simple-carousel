const nextButton = document.querySelector("button#next");
const prevButton = document.querySelector("button");
const cards = document.querySelector(".cards");

let minValue = 0;
let maxValue = getComputedStyle(cards).width.split("px")[0];
let currentValue = minValue;

let scrollValue = maxValue / cards.children.length;

nextButton.onclick = () => {
  if (currentValue < maxValue - scrollValue) {
    cards.style.transform = `translateX(-${currentValue + scrollValue}px)`;
    currentValue += scrollValue;
  }
};
prevButton.onclick = () => {
  if (currentValue > minValue) {
    cards.style.transform = `translateX(-${currentValue - scrollValue}px)`;
    currentValue -= scrollValue;
  }
};
