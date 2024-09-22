let addBtn = document.getElementById("btnAdd");
let minusBtn = document.getElementById("btnMinus");
let counter = 0;

addBtn.onclick = function () {
  //   console.log("add btn clicked");
  counter++;
  let ourText = document.getElementById("ourText");
  ourText.innerText = counter;
};
minusBtn.onclick = function () {
    counter--;
    let ourText = document.getElementById("ourText");
    ourText.innerText = counter;

};
