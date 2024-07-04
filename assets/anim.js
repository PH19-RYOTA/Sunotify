function openModal(imageSrc, mp3Src, songTitle) {
    const modal = document.getElementById("modal");
    const audio = document.getElementById("audio");
    const audioSource = document.getElementById("audioSource");
    const modalImage = document.getElementById("modalImage");
    const songTitleElement = document.getElementById("songTitle");

    modalImage.src = imageSrc;
    audioSource.src = mp3Src;
    songTitleElement.textContent = songTitle;
    audio.load();
    modal.style.display = "block";

    audio.addEventListener('timeupdate', updateProgressBar);

    // 音楽をオートプレイ
    audio.play().catch(error => {
        console.error('Auto-play failed:', error);
    });
}

function closeModal() {
    const modal = document.getElementById("modal");
    const audio = document.getElementById("audio");

    modal.style.display = "none";
    audio.pause();
    audio.removeEventListener('timeupdate', updateProgressBar);
    document.getElementById("progress-bar").style.width = "0%";
}

function updateProgressBar() {
    const audio = document.getElementById("audio");
    const progressBar = document.getElementById("progress-bar");
    const percentage = (audio.currentTime / audio.duration) * 100;

    progressBar.style.width = percentage + "%";
}

// Close the modal when the user clicks outside of it
window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target == modal) {
        closeModal();
    }
}
