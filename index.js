let clickCount = 0;
const arr = [];

function displayNumber() {
    const userInput = parseInt(document.getElementById("numberInput").value);
    if(clickCount === 0 ) {
        for(let i = 0; i < 9; i++) {
            let num = Math.round(Math.random()*100);
            if (num !== userInput) {
                arr[i] = num;
            }
            else {
                i--;
            }
        }
        arr[9]= userInput;
        arr.sort();
    }

    if(userInput === arr[clickCount]) {
        alert("You are Winner!");
    }
    else {
        alert("Try again!");
    }

    clickCount++;  

    if (clickCount === 10) {
        //disablePlayButton();
        alert("Attempts over! Please restart the game.");
    }   
}

function restartGame() {
    clickCount = 0;
    //enablePlayButton();
    document.getElementById("numberInput").value="";
    alert("Game restarted!");
}

// function disablePlayButton() {
//     document.getElementById("playButton").disabled = true;
// }

// function enablePlayButton() {
//     document.getElementById("playButton").disabled = false;
// }