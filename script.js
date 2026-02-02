const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const heartsContainer = document.querySelector(".hearts");

let noClickCount = 0;
const maxTries = 100;

noBtn.addEventListener("mouseover", () => {
  if (noClickCount < maxTries) {
    moveButton();
    noClickCount++;
  }
});

noBtn.addEventListener("click", () => {
  if (noClickCount >= maxTries) {
    window.location.href = "no.html";
  }
});

yesBtn.addEventListener("click", () => {
  window.location.href = "yes.html";
});

function moveButton() {
  noBtn.style.left = Math.random() * 80 + "vw";
  noBtn.style.top = Math.random() * 80 + "vh";
}

// Floating hearts
function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 15 + "px";
  heart.style.animationDuration = Math.random() * 3 + 3 + "s";

  heartsContainer.appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}

setInterval(createHeart, 400);

