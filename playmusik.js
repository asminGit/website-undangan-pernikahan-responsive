var audio = document.getElementById("myAudio");
var playButton = document.getElementById("playButton");

// Tambahkan event listener untuk tombol
playButton.addEventListener("click", function() {
    // Cek apakah audio sedang tidak dimainkan
    if (audio.paused) {
        audio.play(); // Memulai pemutaran audio
    } else {
        audio.pause();

    }
});