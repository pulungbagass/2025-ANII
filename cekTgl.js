window.onload = function () {
  const alertBox = document.getElementById("custom-alert");
  const alertButton = document.getElementById("alert-button");

  alertBox.classList.remove("hidden"); // Tampilkan alert

  alertButton.addEventListener("click", function () {
    alertBox.classList.add("hidden"); // Sembunyikan alert saat tombol "OK" diklik
  });
};

document.getElementById("button").addEventListener("click", function (event) {
  event.preventDefault(); // Mencegah form melakukan submit default

  const dateInput = document.getElementById("date-input").value; // Ambil nilai input date
  const targetDate = "2003-06-09"; // Tanggal target

  if (dateInput === targetDate) {
    // Navigasi ke kartuUcapan.html jika cocok
    window.location.href = "kartuUcapan.html";
  } else {
    // Tampilkan alert jika tanggal salah
    alert("TANGGAL SALAH !!");
  }
});
