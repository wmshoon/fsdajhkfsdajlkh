const currentPage = window.location.href;

const list = ["home", "API", "list", "collection", "mypage"];
const selectedColor = "#04b7cc";
for (let i = 0; i < 5; i++) {
  if (currentPage.toString().includes(list[i])) {
    const targetText = document.getElementsByClassName(list[i])[0];
    targetText.style.color = selectedColor;
  }
}
function show() {
  document.querySelector(".background").className = "background show";
}

function close() {
  document.querySelector(".background").className = "background";
}

document.querySelector(".show").addEventListener("click", show);
document.querySelector(".background").addEventListener("click", close);
