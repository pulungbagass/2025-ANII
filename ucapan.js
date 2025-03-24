window.onload = function () {
  const alertBox = document.getElementById("custom-alert");
  const alertButton = document.getElementById("alert-button");

  alertBox.classList.remove("hidden"); // Tampilkan alert

  alertButton.addEventListener("click", function () {
    alertBox.classList.add("hidden"); // Sembunyikan alert saat tombol "hehe" diklik
  });
};

const playPauseButton = document.getElementById("play-pause-button");
const icon = document.getElementById("icon");
const audioPlayer = document.getElementById("audio-player");

// Tambahkan loop agar lagu terus berulang
audioPlayer.loop = true;

playPauseButton.addEventListener("click", () => {
  if (icon.textContent === "▶️") {
    // Ubah ke mode pause dan mulai musik
    icon.textContent = "⏸️"; // Ganti ikon ke pause
    playPauseButton.classList.add("spin"); // Tambahkan animasi putar
    audioPlayer.play(); // Mulai pemutaran musik
  } else {
    // Ubah ke mode play dan hentikan musik
    icon.textContent = "▶️"; // Ganti ikon ke play
    playPauseButton.classList.remove("spin"); // Hentikan animasi putar
    audioPlayer.pause(); // Pause musik
  }
});
