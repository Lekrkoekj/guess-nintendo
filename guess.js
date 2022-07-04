let currentGuess = 0;

let guesses = [
    {
        songId: -1,
        correct: false
    },
    {
        songId: -1,
        correct: false
    },
    {
        songId: -1,
        correct: false
    },
    {
        songId: -1,
        correct: false
    },
    {
        songId: -1,
        correct: false
    },
    {
        songId: -1,
        correct: false
    },
]

function SetGuess(correct) {
    guesses[currentGuess].songId = selectedSong;
    guesses[currentGuess].correct = correct;
    currentGuess += 1;
    LoadGuesses();
}

function LoadGuesses() {
    if(guesses[0]) {
        document.getElementById("guess-1").innerText = songs[guesses[0].songId].game + " - " + songs[guesses[0].songId].name;
        if(guesses[0].correct == false) document.getElementById("guess-1").style.color = "red"; else document.getElementById("guess-1").style.color = "green";
    }

    if(guesses[1]) {
        document.getElementById("guess-2").innerText = songs[guesses[1].songId].game + " - " + songs[guesses[1].songId].name;
        if(guesses[1].correct == false) document.getElementById("guess-2").style.color = "red"; else document.getElementById("guess-2").style.color = "green";
    }
    if(guesses[2]) {
        document.getElementById("guess-3").innerText = songs[guesses[2].songId].game + " - " + songs[guesses[2].songId].name;
        if(guesses[2].correct == false) document.getElementById("guess-3").style.color = "red"; else document.getElementById("guess-3").style.color = "green";
    }
    if(guesses[3]) {
        document.getElementById("guess-4").innerText = songs[guesses[3].songId].game + " - " + songs[guesses[3].songId].name;
        if(guesses[3].correct == false) document.getElementById("guess-4").style.color = "red"; else document.getElementById("guess-4").style.color = "green";
    }
    if(guesses[4]) {
        document.getElementById("guess-5").innerText = songs[guesses[4].songId].game + " - " + songs[guesses[4].songId].name;
        if(guesses[4].correct == false) document.getElementById("guess-5").style.color = "red"; else document.getElementById("guess-5").style.color = "green";
    }
    if(guesses[5]) {
        document.getElementById("guess-6").innerText = songs[guesses[5].songId].game + " - " + songs[guesses[5].songId].name;
        if(guesses[5].correct == false) document.getElementById("guess-6").style.color = "red"; else document.getElementById("guess-6").style.color = "green";
    }
}

function CheckGuess() {
    // If selected song & game are correct
    if(selectedSong == correctSongId && selectedGame == songs[correctSongId].game) {
        ShowAnswer(true);
    }
    // If selected game is correct, but selected song isn't
    else if(songs[selectedSong].game == songs[correctSongId].game && selectedSong != correctSongId) {
        document.getElementById("gameDropdown").disabled = true
        document.getElementById("gameSearchbox").disabled = true
        document.getElementById("gameDropdown").style.color = "green"
        SetGuess(false)
    }
    // If selected game and song are not correct
    else if(selectedGame != songs[correctSongId].game && selectedSong != songs[correctSongId].name) {
        SetGuess(false);
    }

    // If all guesses are used and 
    if(currentGuess == 6 && guesses[5].correct == false) {
        ShowAnswer(false)
    }
}

function ShowAnswer(wonGame) {
    if(wonGame) document.getElementById("answer-top-text").innerText = "You did it!"
    if(!wonGame) document.getElementById("answer-top-text").innerText = "Better luck next time!"
    document.getElementById("right-answer").style.display = "block";
    document.getElementById("right-answer-song").innerHTML = "<b>" + songs[correctSongId].name + "</b> from <b>" + songs[correctSongId].game + "</b>"
    document.getElementById("game-release").innerHTML = "Released on <b>" + songs[correctSongId].releasedate + "</b> on the <b>" + songs[correctSongId].console + "</b>."
    document.getElementById("right-answer-image").src = songs[correctSongId].image;

    document.getElementById("gameDropdown").disabled = true
    document.getElementById("songDropdown").disabled = true
    document.getElementById("gameSearchbox").disabled = true
    document.getElementById("submitAnswerButton").disabled = true
}
function HideAnswer() {
    document.getElementById("right-answer").style.display = "none";
}