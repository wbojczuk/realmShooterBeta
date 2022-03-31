
"use strict";

// Global Variables
var resumee = 0;
var currentTime = 0;
var score = 0;
var heartLost = 0;
var lvlRepeat;
var currentLvl = "lvl1";
var selectedLvl = "";
var counter = 1;
var backgroundMusic = new Audio('sounds/menu_background_music.mp3');
var tempCounter = 0;
var onlyOne11 = 1;
var randomNum1 = 0;
var tempSpeed;
var pow2Good = true;
var oonlyOne = 1;
var mainContainerr = document.getElementById("mainContainer");
var onlyOne = 1;
var onlyOne1 = 1;
var onlyOne111 = 1;



// SECOND COUNTER 

setInterval(
    function(){counter = Math.floor(counter) + 1;
        
    },1000);

    // Random Number Generator

            function getRndInteger(min, max) {
                return Math.floor(Math.random() * (max - min + 1) ) + min;
              }



    



// MAIN MENU FUNTION 
function mainMenu() {
    snowStorm.stop();

     // SET HIGHSCORE
     if (currentLvl == "lvl1"){
         if (parseInt(localStorage.getItem("FSlvl1HS")) < score) {
        localStorage.setItem("FSlvl1HS", score);
        localStorage.saveServer
    }
}

    if (currentLvl == "lvl2"){
    if (parseInt(localStorage.getItem("FSlvl2HS")) < score) {
        localStorage.setItem("FSlvl2HS", score);
        localStorage.saveServer
    }
}
    document.getElementById("lvl2Highscore").textContent = localStorage.getItem("FSlvl2HS");    
    document.getElementById("lvl1Highscore").textContent = localStorage.getItem("FSlvl1HS");
    document.getElementById("mainWrapper").style.background = "none";

    window.removeEventListener("keydown", escPause);
    window.removeEventListener("keydown", escResume);
    document.getElementById("body").style.cursor = "default"
    // DISPLAY SWAP
    document.getElementById("pauseCheck").removeAttribute("onclick");
    document.getElementById("pauseCheck").setAttribute("onclick", "pauseGame();")
    document.getElementById("mainWrapper").style.display = "none";
    document.getElementById("endScreenWrapper").style.display = "none";
    document.getElementById("startScreenWrapper").style.display = "block";
    document.getElementById("pauseCheck").checked = false;

    document.getElementById("body").style.backgroundImage = "url('img/main_screen_background.jpg')";

    // set location and music 
    currentLvl = "menu";
    currentTime = 1;
    
      
    

    counter = -10000000;
    score = 0;
    document.getElementById("score").innerHTML = score;
    
    //  Clear functions
    clearAllIntervals();
    removePowers();
    

    // Clear Main Container

    while (mainContainerr.firstChild !== null) {
        mainContainerr.removeChild(mainContainerr.firstChild);
    }


    // RESET HEARTS

    // removing the extra hearts

    var extraHearts = document.querySelectorAll(".extra-heart");
    for (let i = 0; i < extraHearts.length; i++) {
        extraHearts[i].remove();
    }
    
    heartLost = 0;

    var Gonehearts = document.querySelectorAll(".heart-gone");

    for (let i = 0; i < Gonehearts.length; i++) {
        Gonehearts[i].classList.remove("heart-gone");
        Gonehearts[i].classList.add("heart-here");
        Gonehearts[i].style.backgroundImage = "url('img/heart.png')";
    }
    
    
    setBackgroundMusic();

}


// START FUNCTION

function preStartGame(sLvl) {
    
    selectedLvl = sLvl;

    startGame();
}

function startGame() {
    // RESET VARIABLES

    score = 0;
    heartLost = 0;
    counter = 1;
    onlyOne11 = 1;

    // Add Support for ESC KEY PAUSE

    window.addEventListener("keydown", escPause);

    document.getElementById("endScreenWrapper").style.display = "none";
    document.getElementById("startScreenWrapper").style.display = "none";
    document.getElementById("pausePage").style.display = "none";
    document.getElementById("mainContainer").style.display = "block";
    document.getElementById("mainWrapper").style.display = "block";
    currentLvl = selectedLvl;
    setBackgroundMusic();
    

switch (currentLvl) {


    case "lvl1":
        lvl1Pre();
    break;

    case "lvl2":
        lvl2Pre();
    break;
    
}

}


function setBackgroundMusic() {
    // SET BACKGROUND MUSIC

    switch (currentLvl) {
        case "lvl1":
            backgroundMusic.pause();
            backgroundMusic.currentTime = 0;
            backgroundMusic = new Audio('sounds/lvl1/main_background_music.mp3');
        break;

        case "lvl2":
            backgroundMusic.pause();
            backgroundMusic.currentTime = 0;
            backgroundMusic = new Audio('sounds/lvl1/main_background_music.mp3');
        break;

        case "menu":
            backgroundMusic.pause();
            backgroundMusic.currentTime = 0;
            backgroundMusic = new Audio('sounds/menu_background_music.mp3');
            console.log("menu");
        break;
    }
    
     

    backgroundMusic.play();
    backgroundMusic.volume = 0.09;
    document.removeEventListener('click', setBackgroundMusic);
    backgroundMusic.addEventListener("ended", function(){
        backgroundMusic.currentTime = 0;
        backgroundMusic.play();
    }); 


}




function clearAllIntervals() {
    clearInterval(lvl1generationRepeat);
    clearInterval(lvl1testViewportRepeat);
    clearInterval(lvl1checkPowersRepeat);
    clearInterval(lvl1moveItemsRepeat);
    clearInterval(lvl1power1Repeat);
    clearInterval(lvl2generationRepeat);
    clearInterval(lvl2testViewportRepeat);
    clearInterval(lvl2moveItemsRepeat);
}

// REMOVE POWERS
function removePowers() {
    // POWER ONE REMOVAL

    var power1Current = document.querySelectorAll('.power1.power-icon');

    if (power1Current.length >= 1) { 

    document.getElementById("mainContainer").removeEventListener("mousedown", function(evt) {
        powerOneToggle = true;
    });
    document.getElementById("mainContainer").removeEventListener("mouseup", function(evt) {
        powerOneToggle = false;
    });
    
    powerOneToggle = false;
    power1On = 0;
    onlyOne = 1;
    document.querySelector(".power1.power-icon").remove();

    // POWER 2
    
}

var power2Current = document.querySelectorAll(".power2.power-icon");
pow2Good = false;

if (power2Current.length >= 1){

    
        clearInterval(lvl1moveItemsRepeat);
        
    
    
    document.getElementById("mainWrapper").style.backgroundImage = "none";
    
    power2Current[0].remove();
    window.removeEventListener("keydown", lvl1power2Function);
}
}

function resetVariables() {
    onlyOne = 1;
    onlyOne1 = 1;
    score = 0;
    resumee = 0;
    currentTime = 0;
    score = 0;
    heartLost = 0;
    counter = 1;
    tempCounter = 0;
    onlyOne11 = 1;
    randomNum1 = 0;
    tempSpeed;
    pow2Good = true;
    oonlyOne = 1;
    onlyOne = 1;
    onlyOne1 = 1;
    onlyOne111 = 1;
}



// FAIL SCREEN

function failScreen() {
    
    counter = -10000000;
    //  Clear functions
    clearAllIntervals();
    window.removeEventListener("keydown", escPause);

    document.getElementById("mainWrapper").style.display = "none";
    document.getElementById("endScreenWrapper").style.display = "block";
    document.getElementById("endScreenTitle").textContent = "You Died!!";
    document.getElementById("endScreenScore").innerHTML = "Score: " + score;
    
}

// RESTART

function restart() {
    // SET HIGHSCORE
    if (currentLvl == "lvl1"){
        if (parseInt(localStorage.getItem("FSlvl1HS")) < score) {
       localStorage.setItem("FSlvl1HS", score);
       localStorage.saveServer
   }
}

   if (currentLvl == "lvl2"){
   if (parseInt(localStorage.getItem("FSlvl2HS")) < score) {
       localStorage.setItem("FSlvl2HS", score);
       localStorage.saveServer
   }
}
   document.getElementById("lvl2Highscore").textContent = localStorage.getItem("FSlvl2HS");    
   document.getElementById("lvl1Highscore").textContent = localStorage.getItem("FSlvl1HS");

    

    score = 0;
    document.getElementById("score").innerHTML = score;

    // DISPLAY SWAP

    document.getElementById("mainWrapper").style.display = "block";
    document.getElementById("endScreenWrapper").style.display = "none";

    // Clear Main Container

    while (mainContainerr.firstChild !== null) {
        mainContainerr.removeChild(mainContainerr.firstChild);
    }

    // RESET HEARTS

    // removing the extra hearts

    var extraHearts = document.querySelectorAll(".extra-heart");
    for (let i = 0; i < extraHearts.length; i++) {
        extraHearts[i].remove();
    }
    
    heartLost = 0;

    var Gonehearts = document.querySelectorAll(".heart-gone");

    for (let i = 0; i < Gonehearts.length; i++) {
        Gonehearts[i].classList.remove("heart-gone");
        Gonehearts[i].classList.add("heart-here");
        Gonehearts[i].style.backgroundImage = "url('img/heart.png')";
    }



    // Load Correct Pre-Level

    startGame();

}


// PAUSE GAME

function pauseGame() {
    
    //  Clear functions
    clearAllIntervals();
    onlyOne11 = 1;
    document.getElementById("pauseCheck").removeAttribute("onclick");
    document.getElementById("pauseCheck").setAttribute("onclick", "resumeGame();");
    document.getElementById("mainContainer").style.display = "none";
    document.getElementById("pausePage").style.display = "flex";

    window.removeEventListener("keydown", escPause);

    window.addEventListener("keydown", escResume);

    tempCounter = counter;
    
}

//   ESC PAUSE 

function escPause(evt) {
    if (evt.key == "Escape") {
        pauseGame();
        document.getElementById("pauseCheck").checked = true;
    }
}

function escResume(evt){
    if (evt.key == "Escape") {
        resumeGame();
        
    }
}

function resumeGame() {

    switch (currentLvl) {
        case "lvl1":
            lvl1generationRepeat = setInterval(lvl1Generation, 1000);
            lvl1testViewportRepeat = setInterval(lvl1testViewport, 10);
            lvl1checkPowersrepeat = setInterval(lvl1checkPowers, 100);
            

            switch (currentTime) {

                case 1 :
                    lvl1moveItemsRepeat = setInterval(lvl1moveItems, 10);
                break;

                case 2 :
                    lvl1moveItemsRepeat = setInterval(lvl1moveItems, 9);
                break;

                case 3 :
                    lvl1moveItemsRepeat = setInterval(lvl1moveItems, 7);
                break;
                    
                case 4 :
                    lvl1moveItemsRepeat = setInterval(lvl1moveItems, 5);
                break;

                case 5 :
                    lvl1moveItemsRepeat = setInterval(lvl1moveItems, 5);
                break;
                case 6 :
                    lvl1moveItemsRepeat = setInterval(lvl1moveItems, 5);
                break;
                case 7 :
                    lvl1moveItemsRepeat = setInterval(lvl1moveItems, 4);
                break;
                case 8 :
                    lvl1moveItemsRepeat = setInterval(lvl1moveItems, 3);
                break;
                case 9 :
                    lvl1moveItemsRepeat = setInterval(lvl1moveItems, 2);
                break;
                case 10 :
                    lvl1moveItemsRepeat = setInterval(lvl1moveItems, 1);
                break;

                case 11 :
                    lvl1moveItemsRepeat = setInterval(lvl1moveItems, 1);
                break;


            }

        break;

        case "lvl2":
            lvl2generationRepeat = setInterval(lvl2Generation, 1000);
            lvl2testViewportRepeat = setInterval(lvl2testViewport, 10);
            

            switch (currentTime) {

                case 1 :
                    lvl2moveItemsRepeat = setInterval(lvl2moveItems, 10);
                break;

                case 2 :
                    lvl2moveItemsRepeat = setInterval(lvl2moveItems, 9);
                break;

                case 3 :
                    lvl2moveItemsRepeat = setInterval(lvl2moveItems, 7);
                break;
                    
                case 4 :
                    lvl2moveItemsRepeat = setInterval(lvl2moveItems, 5);
                break;

                case 5 :
                    lvl2moveItemsRepeat = setInterval(lvl2moveItems, 5);
                break;
                case 6 :
                    lvl2moveItemsRepeat = setInterval(lvl2moveItems, 5);
                break;
                case 7 :
                    lvl2moveItemsRepeat = setInterval(lvl2moveItems, 4);
                break;
                case 8 :
                    lvl2moveItemsRepeat = setInterval(lvl2moveItems, 3);
                break;
                case 9 :
                    lvl2moveItemsRepeat = setInterval(lvl2moveItems, 2);
                break;
                case 10 :
                    lvl2moveItemsRepeat = setInterval(lvl2moveItems, 1);
                break;

                case 11 :
                    lvl2moveItemsRepeat = setInterval(lvl2moveItems, 1);
                break;


            }

        break;
    }
    counter = tempCounter;
    document.getElementById("pauseCheck").checked = false;
    document.getElementById("mainContainer").style.display = "block";
    document.getElementById("pausePage").style.display = "none";
    document.getElementById("pauseCheck").removeAttribute("onclick");
    document.getElementById("pauseCheck").setAttribute("onclick", "pauseGame();");
    window.removeEventListener("keydown", escResume);
    window.addEventListener("keydown", escPause);

}