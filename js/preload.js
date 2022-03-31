"use strict";

window.onload = unlockVersion;

function unlockVersion() {

  if (localStorage.getItem("betaVersionUnlocked") !== "true") {
    document.getElementById("endScreenWrapper").style.display = "none";
    document.getElementById("startScreenWrapper").style.display = "none";
    document.getElementById("mainWrapper").style.display = "none";
    document.getElementById("preloadScreen").style.display = "none";
    document.getElementById("unlockScreen").style.display = "flex";
  }
  


  if (localStorage.getItem("betaVersionUnlocked") == "true") {
    document.getElementById("unlockScreen").style.display = "none";
    document.getElementById("preloadScreen").style.display = "block";
    preloadFunction()
  }
}

function unlockVersionCheck() {
  var codeVal = document.getElementById("unlockInput").value;
  console.log(codeVal);
  if (codeVal == "beta20523"){
    localStorage.setItem("betaVersionUnlocked", "true");
    unlockVersion();
  }
}

function preloadFunction(){


  setTimeout(function() {
    
  },20);
  

    var stuffPreload = "";
    var preloadHintHTML = ["Get to a score of 500 for a special ability!", "Get the red potions to heal a lost heart!", "Get the glowing orb for an additional heart!", "Animated with sprite sheets!", "Still in Alpha", "You don't come back from infinity", "Made in 2022"];
  var u = preloadHintHTML.length - 1;
    document.getElementById("preloadHint").textContent = preloadHintHTML[Math.floor(getRndInteger(0, u))];

    
    document.getElementById("endScreenWrapper").style.display = "none";
    document.getElementById("startScreenWrapper").style.display = "none";
    document.getElementById("mainWrapper").style.display = "none";

    stuffPreload += "<div class='red-potion-preload preload'></div>";
    
    stuffPreload += "<div class='bomb-preload preload'></div>";

    stuffPreload += "<div class='bomb-explosion-preload preload'></div>";

    stuffPreload += "<div class='red-splash-preload preload'></div>";

    stuffPreload += "<div class='extra-heart-orb-preload preload'></div>";

    stuffPreload += "<div class='extra-heart-orb-explosion-preload preload'></div>";

    stuffPreload += "<div class='blue-crystal-preload preload'></div>";

    stuffPreload += "<div class='blue-crystal-explosion-preload preload'></div>";

    stuffPreload += "<div class='snowflake-preload preload'></div>";

    stuffPreload += "<div class='snowflake-explosion-preload preload'></div>";

    stuffPreload += "<div class='purple-potion-preload preload'></div>";

    stuffPreload += "<div class='purple-potion-explosion-preload preload'></div>";

    stuffPreload += "<div class='heart-explosion-preload preload'></div>";

    stuffPreload += "<div class='heart-heal-preload preload'></div>";

    stuffPreload += "<div class='frost-preload preload'></div>";
    stuffPreload += "<div class='snow-overlay-preload preload'></div>";



    document.getElementById("preload").insertAdjacentHTML("afterbegin", stuffPreload);
    

    // SET HIGHSCORES

    var tempHighscore = parseInt(localStorage.getItem("FSlvl1HS"));

    if ( isNaN(tempHighscore) ) {

        localStorage.setItem("FSlvl1HS", "0");
        localStorage.saveServer
    }
    document.getElementById("lvl1Highscore").textContent = localStorage.getItem("FSlvl1HS");

    var tempHighscore1 = parseInt(localStorage.getItem("FSlvl2HS"));
    if ( isNaN(tempHighscore1) ) {

      localStorage.setItem("FSlvl2HS", "0");
      localStorage.saveServer
  }
  document.getElementById("lvl2Highscore").textContent = localStorage.getItem("FSlvl2HS");


    if (localStorage.getItem("FSlvl2Unlocked") !== "true"){

    document.getElementById("lvl2Slide").src = "img/padlock.png";
    document.getElementById("lvl2Slide").style.backgroundImage = "url('img/lvl2/lvl2_background.jpg')"
    document.getElementById("lvl2Slide").style.backgroundSize = "100%";
    document.getElementById("lvl2Slide").style.backgroundRepeat = "no-repeat";
    document.getElementById("lvl2Slide").style.backgroundPosition = "center";
    
    }

    if (localStorage.getItem("FSlvl2Unlocked") == "true"){

    document.getElementById("lvl2Link").setAttribute("onclick", "preStartGame('lvl2');")
    
    }
      setTimeout(function(){
        document.getElementById("preload").remove();
        document.getElementById("body").style.backgroundImage = "url('img/main_screen_background.jpg')";
        document.getElementById("preloadScreen").style.display = "none";
        document.getElementById("endScreenWrapper").style.display = "none";
        document.getElementById("startScreenWrapper").style.display = "block";
        document.getElementById("mainWrapper").style.display = "none";
        currentLvl = "menu";
        document.addEventListener("click", setBackgroundMusic);
        snowStorm.toggleSnow();
      }, 4000);
        
      
      }