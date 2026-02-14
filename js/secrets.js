const yesBtn = document.querySelector("#yes");
const noBtn = document.querySelector("#no");

yesBtn.addEventListener("click", acceptLove);
function acceptLove() {
  // Hide login page
  document.getElementById("login-page").style.display = "none";
  // Show content
  document.getElementById("content").style.display = "block";

  const audio = document.getElementById("linkmp3");
  audio.muted = false;
  audio.loop = true;
  audio.play().catch(() => { });

  // PAUSE / RESUME SAAT PINDAH TAB
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      audio.pause();
    } else {
      audio.play().catch(() => { });
    }
  });

  // Start the valentine page animations
  initValentinePage();
}

noBtn.addEventListener("click", () => {
  document.getElementById("error-message").textContent =
    "hmm.. nggk mungkin, Adek pasti cinta mas, Klik yes ya sayang ❤️";

  const audio = document.getElementById("linkmp3");
  audio.pause();
});

document.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    acceptLove();
  }
});

function initValentinePage() {
  createHearts();
  setInterval(createHearts, 300);
  updateLoveCounter();

  const container = document.querySelector(".container");
  container.style.opacity = 0;
  let opacity = 0;
  const fadeIn = setInterval(() => {
    if (opacity >= 1) {
      clearInterval(fadeIn);
    }
    container.style.opacity = opacity;
    opacity += 0.02;
  }, 20);
}
