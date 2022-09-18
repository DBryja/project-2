let change = true;
const text = document.querySelector(".tekst");

document.body.addEventListener("click", () => {
  if (change) {
    document.body.style.backgroundImage = "url(./bees.jpg)";
    text.textContent = "pszczoły";
    change = !change;
  } else {
    document.body.style.backgroundImage = "url(./balony.jpg)";
    text.textContent = "balony";
    change = !change;
  }
});
