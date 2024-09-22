let addBtn = document.getElementById("btnAdd");
let minusBtn = document.getElementById("btnMinus");
let counter = 0;
let colors = ["red", "green", "blue"];

addBtn.onclick = function () {
  changeText(counter++);
};
minusBtn.onclick = function () {
  if (counter == 0) return;
  changeText(counter--);
};
function changeText(num) {
  let ourText = document.getElementById("ourText");
  ourText.innerText = num;
  ourText.style.color = colors[num % 3];
}
