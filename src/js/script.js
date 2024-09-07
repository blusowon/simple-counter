let count = 0;

//Titolo h1
const h1Title = document.createElement("h1");
h1Title.className = "title";
h1Title.innerHTML = "Counter Antistress!";
document.body.appendChild(h1Title);

//contatore
const countDiv = document.createElement("div");
countDiv.className = "countDiv";
countDiv.innerHTML = count;
document.body.appendChild(countDiv);

// bottone -
const decreaseBtn = document.createElement("button");
decreaseBtn.className = "decreaseBtn";
decreaseBtn.innerHTML = "-";
decreaseBtn.addEventListener("click", () => {
  count--;
  countDiv.textContent = count;
});
document.body.appendChild(decreaseBtn);

// bottone reset
const resetBtn = document.createElement("button");
resetBtn.className = "resetBtn";
resetBtn.innerHTML = "Reset";
resetBtn.addEventListener("click", () => {
  count = 0;
  countDiv.textContent = count;
});
document.body.appendChild(resetBtn);

// bottone +
const increaseBtn = document.createElement("button");
increaseBtn.className = "increaseBtn";
increaseBtn.innerHTML = "+";
increaseBtn.addEventListener("click", () => {
  count++;
  countDiv.textContent = count;
});
document.body.appendChild(increaseBtn);
