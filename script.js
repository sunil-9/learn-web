let addBtn = document.getElementById("btnAdd");
let minusBtn = document.getElementById("btnMinus");
let counter = 0;
let colors = ["red", "green", "blue"];

addBtn.onclick = function () {
  //   console.log("add btn clicked");
  counter++;
  let ourText = document.getElementById("ourText");
  ourText.innerText = counter;
  ourText.style.color = colors[counter % 3];
};
minusBtn.onclick = function () {
  if (counter == 0) return;
  counter--;
  let ourText = document.getElementById("ourText");
  ourText.innerText = counter;
  ourText.style.color = colors[counter % 3];

};
