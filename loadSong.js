let correctSongId;

function setupGame() {
    correctSongId = Math.floor(Math.random() * songs.length);
    console.log(correctSongId);
    document.getElementById("musicSource").src = songs[correctSongId].audio;
}




document.addEventListener('DOMContentLoaded', setupGame(), false);