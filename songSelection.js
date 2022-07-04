let selectedGame;
let selectedSong;
function ChangeSelectedGame(gameName) {
    selectedGame = gameName;
    console.log("Selected game: " + selectedGame);
    loadSongDropdown()
}

function loadSongDropdown() {
    document.getElementById("songDropdown").innerHTML = "<option value='-1'>Select Song</option>"
    for (let i = 0; i < songs.length; i++) {
        if(songs[i].game == selectedGame) {
            document.getElementById("songDropdown").innerHTML += "<option value='" + i + "'>" + songs[i].name + "</option>";
        }
    }
}

function ChangeSelectedSong(songId) {
    selectedSong = songId;
    console.log("Selected song: " + songs[songId].name);
}

function SearchGameList(input) {
    let gameDropdownOptions = document.getElementById("gameDropdown").children;
    console.log(gameDropdownOptions)
    for (let i = 0; i < gameDropdownOptions.length; i++) {
        if(gameDropdownOptions[i].innerHTML.toLowerCase().includes(input)) {
            gameDropdownOptions[i].style.display = "block"
        }
        else {
            gameDropdownOptions[i].style.display = "none"
        }
    }
}