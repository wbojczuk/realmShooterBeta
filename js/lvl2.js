"use strict";
var allThingOneHitbox;
var allThingOneLengthHitbox;

var lvl2testViewportRepeat;
var lvl2checkPowersrepeat;
var lvl2moveItemsRepeat;
var lvl2generationRepeat;
var snowballNode;
var snowmanCounter = 0;
var snowmanSpeed = 0;
var waveOneScore = 100000;

function lvl2Pre() {

    // SET FROZEN HEARTS

    var hearts = document.querySelectorAll(".heart-img");

    for (var i = 0; i < hearts.length; i++) {
        hearts[i].style.backgroundImage = "url('img/frozen_heart.png')";
    }
    
    vRndX = -7;
    vRndY = 3;
    snowStorm.resume();
    snowmanCounter = 0;
    snowmanSpeed = 0;

   
    randomNum1 = Math.floor(getRndInteger(5, 120));
    currentLvl = "lvl2";
    resetVariables();
    // SET LEVEL ONE BACKGROUND
    document.getElementById("body").style.backgroundImage = "url('img/lvl2/lvl2_background.jpg')";
    document.getElementById("body").style.backgroundSize = "100% 100%";
    document.getElementById("body").style.backgroundRepeat = "repeat";
    document.getElementById("body").style.cursor = "url('img/lvl1/lvl1_main.cur'), crosshair";
    
    
    
    currentTime = 1; 

    //  Set InterVals
    
     
     
    


    //  NODE CREATIONS
    // DEFAUL FALLING CONTAINER NODE
    var fallingContainerNode = document.createElement("div");
    fallingContainerNode.setAttribute("class", "falling-container");
    fallingContainerNode.setAttribute("value", "0");

    // Default hitbox
    var thingOneHitboxNode =  document.createElement("div");
    thingOneHitboxNode.setAttribute("class", "thing-one-hitbox");
    
    //  SnowBall NODE CREATION

    // snowBall Clickbox
    var snowballClickboxNode = document.createElement("div");
    snowballClickboxNode.setAttribute("class", "clickbox snowball-clickbox unclicked");
    // Bomb Image Box
    var snowballDisplayNode = document.createElement("div");
    snowballDisplayNode.setAttribute("class", "snowball");

    // MAIN BOMB NODE

    snowballNode = fallingContainerNode.cloneNode(false);

    snowballNode.appendChild(snowballClickboxNode.cloneNode(false));
    snowballNode.firstChild.appendChild(snowballDisplayNode.cloneNode(false));
    snowballNode.firstChild.firstChild.appendChild(thingOneHitboxNode.cloneNode(false));


     // Snowflake NODE

    var snowflakeClickboxNode = document.createElement("div");
    snowflakeClickboxNode.setAttribute("class", "pow1 clickbox snowflake-clickbox unclicked");
    // Snowflake Image Box
    var snowflakeDisplayNode = document.createElement("div");
    snowflakeDisplayNode.setAttribute("class", "snowflake");

    // MAIN Snowflake NODE
    snowflakeNode = fallingContainerNode.cloneNode(false);
    snowflakeNode.appendChild(snowflakeClickboxNode.cloneNode(false));
    snowflakeNode.firstChild.appendChild(snowflakeDisplayNode.cloneNode(false));




    
     
     lvl2moveItemsRepeat = setInterval(lvl2moveItems, 10);
     lvl2generationRepeat = setInterval(lvl2Generation, 1000);
     lvl2testViewportRepeat = setInterval(lvl2testViewport, 10);



    
}

     function lvl2Generation(){
        var nodeContainer = document.createElement("div");


            // GENERATE RANDOMLY PLACED FALLING CELLS
        

        // Bomb Generation
        if ((score < 100) || ((score > waveOneScore) && (score < waveOneScore + 100))){
        if (counter % 3 == 0) {   
            nodeContainer.appendChild(snowballNode.cloneNode(true)); 
 
            
        } 
        if (counter % 5 == 0) {   
            nodeContainer.appendChild(snowballNode.cloneNode(true)); 
        } 
        
        if (counter % 13 == 0) {
            nodeContainer.appendChild(snowballNode.cloneNode(true)); 
            nodeContainer.appendChild(snowballNode.cloneNode(true)); 
            
            
        }

        if (counter % 9 == 0) {
            nodeContainer.appendChild(snowballNode.cloneNode(true)); 
        }

   
    }

    // SNOWMAN STUFF

    // WAVE 1
    
    if ((score >= 100)  && (oonlyOne == 1)) {

        snowmanCounter += 1;

        // SNOWMAN MOVE

        if ((snowmanCounter % 2 == 0) && (snowmanCounter < 15)) {
            snowmanMove(getRndInteger(1, 90), "snowmanOne", snowmanSpeed, "single");
        }

        if ((snowmanCounter % 2 == 0) && (snowmanCounter > 15) && (snowmanCounter < 30)) {
            snowmanMove(getRndInteger(1, 90), "snowmanOne", snowmanSpeed, "single");
            snowmanMove(getRndInteger(1, 90), "snowmanTwo", snowmanSpeed, "single");

        }
        if (snowmanCounter == 30) {
            snowmanSpeed = 1;
        }

        if ((snowmanCounter % 2 == 0) && (snowmanCounter > 30) && (snowmanCounter < 45)) {
            snowmanMove(getRndInteger(1, 90), "snowmanOne", snowmanSpeed, "single");
            snowmanMove(getRndInteger(1, 90), "snowmanTwo", snowmanSpeed, "single");
            snowmanMove(getRndInteger(1, 90), "snowmanThree", snowmanSpeed, "single");
        }

        // SNOWMAN GENERATION
        if (snowmanCounter == 1) {
            var snowmanContainerHTML = "<div class='snowman-container'><div id='snowmanOne' class='snowman' style='left: 40vw;'></div></div>";
            document.getElementById("mainContainer").insertAdjacentHTML("afterbegin", snowmanContainerHTML);
            snowmanSpeed = 2;

            // WAVE 1 ALERT
            document.getElementById("lvlAlertText").textContent = "WAVE 1";
        document.getElementById("potionBar").style.display = "none";
        document.getElementById("lvlAlertText").style.display = "inline-block";
        document.getElementById("lvlAlertAnimation").style.display = "inline-block";

        setTimeout(function(){
            document.getElementById("potionBar").style.display = "flex";
        document.getElementById("lvlAlertText").style.display = "none";
        document.getElementById("lvlAlertAnimation").style.display = "none";
        }, 4000);

        }

        if (snowmanCounter == 15) {
            var snowmanContainerHTML = "<div class='snowman-container'><div id='snowmanTwo' class='snowman' style='left: 40vw;'></div></div>";
            document.getElementById("mainContainer").insertAdjacentHTML("afterbegin", snowmanContainerHTML);
        }

        if (snowmanCounter == 30) {
            var snowmanContainerHTML = "<div class='snowman-container'><div id='snowmanThree' class='snowman' style='left: 40vw;'></div></div>";
            document.getElementById("mainContainer").insertAdjacentHTML("afterbegin", snowmanContainerHTML);
        }

        // SNOWMAN DEATH 

        if (snowmanCounter == 45) {
            killSnowman("all");
            oonlyOne = 2;
            waveOneScore = score;
            snowmanCounter = 0;

            // WON WAVE 1 ALERT
            document.getElementById("lvlAlertAnimation").classList.remove("alert-icon");
            document.getElementById("lvlAlertAnimation").classList.add("alert-icon-green");
            document.getElementById("lvlAlertText").textContent = "WAVE 1 COMPLETED!";
        document.getElementById("potionBar").style.display = "none";
        document.getElementById("lvlAlertText").style.display = "inline-block";
        document.getElementById("lvlAlertAnimation").style.display = "inline-block";

        setTimeout(function(){
            document.getElementById("lvlAlertAnimation").classList.add("alert-icon");
            document.getElementById("lvlAlertAnimation").classList.remove("alert-icon-green");
            document.getElementById("potionBar").style.display = "flex";
        document.getElementById("lvlAlertText").style.display = "none";
        document.getElementById("lvlAlertAnimation").style.display = "none";
        }, 4000);

        }
    }

    // WAVE 2

    if (score >= waveOneScore + 100) {
        snowmanCounter += 1;

        if (snowmanCounter == 1) {
            var snowmanContainerHTML = "<div class='snowman-container'><div id='snowmanOne' class='snowman' style='left: 40vw;'></div></div>";
            document.getElementById("mainContainer").insertAdjacentHTML("afterbegin", snowmanContainerHTML);
            snowmanSpeed = 2;

            // WAVE 2 ALERT

            document.getElementById("lvlAlertText").textContent = "WAVE 2";
        document.getElementById("potionBar").style.display = "none";
        document.getElementById("lvlAlertText").style.display = "inline-block";
        document.getElementById("lvlAlertAnimation").style.display = "inline-block";

        setTimeout(function(){
            document.getElementById("potionBar").style.display = "flex";
        document.getElementById("lvlAlertText").style.display = "none";
        document.getElementById("lvlAlertAnimation").style.display = "none";
        }, 4000);

        }

        if (snowmanCounter == 10) {
            var snowmanContainerHTML = "<div class='snowman-container'><div id='snowmanTwo' class='snowman' style='left: 40vw;'></div></div>";
            document.getElementById("mainContainer").insertAdjacentHTML("afterbegin", snowmanContainerHTML);
            snowmanSpeed = 2;
        }

        if (snowmanCounter == 20) {
            var snowmanContainerHTML = "<div class='snowman-container'><div id='snowmanThree' class='snowman' style='left: 40vw;'></div></div>";
            document.getElementById("mainContainer").insertAdjacentHTML("afterbegin", snowmanContainerHTML);
            snowmanSpeed = 1;
        }

        if (snowmanCounter == 20) {
        killSnowman("all");
        snowmanCounter = 0;



        // WON WAVE 2 ALERT
            document.getElementById("lvlAlertAnimation").classList.remove("alert-icon");
            document.getElementById("lvlAlertAnimation").classList.add("alert-icon-green");
            document.getElementById("lvlAlertText").textContent = "WAVE 2 COMPLETED!";
        document.getElementById("potionBar").style.display = "none";
        document.getElementById("lvlAlertText").style.display = "inline-block";
        document.getElementById("lvlAlertAnimation").style.display = "inline-block";

        setTimeout(function(){
            document.getElementById("lvlAlertAnimation").classList.add("alert-icon");
            document.getElementById("lvlAlertAnimation").classList.remove("alert-icon-green");
            document.getElementById("potionBar").style.display = "flex";
        document.getElementById("lvlAlertText").style.display = "none";
        document.getElementById("lvlAlertAnimation").style.display = "none";
        }, 4000);
        }



        // SNOWMAN MOVE

        if ((snowmanCounter % 2 == 0) && (snowmanCounter < 10)) {
            snowmanMove(getRndInteger(1, 90), "snowmanOne", snowmanSpeed, "double");
        }

        if ((snowmanCounter % 2 == 0) && (snowmanCounter > 10) && (snowmanCounter < 20)) {
            snowmanMove(getRndInteger(1, 90), "snowmanOne", snowmanSpeed, "double");
            snowmanMove(getRndInteger(1, 90), "snowmanTwo", snowmanSpeed, "double");
        }

        if ((snowmanCounter % 2 == 0) && (snowmanCounter > 20) && (snowmanCounter < 30)) {
            snowmanMove(getRndInteger(1, 90), "snowmanOne", snowmanSpeed, "double");
            snowmanMove(getRndInteger(1, 90), "snowmanTwo", snowmanSpeed, "double");
            snowmanMove(getRndInteger(1, 90), "snowmanThree", snowmanSpeed, "single");
        }



    }

    


        // APPLY INDIVIDUAL PROPERTIES TO NODES
        var nodeContainerLength = nodeContainer.children.length;
        for (var i = 0; i < nodeContainerLength; i++) {

            
            var tempNode = nodeContainer.children[i];

            // USE THIS NODE CLONE
            var tempNodeMain = tempNode.cloneNode(true);

            // SET Random X-Axis Placement
            tempNodeMain.firstChild.setAttribute("style", "left: " + getRndInteger(1 , 90) +  "vw");
            
            
            // Attach Events

            // SET snowball EVENTS
            var snowball = tempNodeMain.querySelectorAll(".snowball-clickbox");
            var snowballLength = snowball.length;
                
                    if (snowballLength >= 1){
                        
                        tempNodeMain.firstChild.addEventListener("click", lvl2SnowballEffect);
                    }


        // SET SNOWFLAKE EVENTS
        var snowFlake = tempNodeMain.querySelectorAll(".snowflake-clickbox");
        var snowFlakeLength = snowFlake.length;

        for (let i = 0; i < snowFlakeLength; i++) {
            if (snowFlakeLength >= 1){
                            
                tempNodeMain.firstChild.addEventListener("click", snowflakeEffect);
            }
        }
                   
            // Print cells to screen
            mainContainerr.prepend(tempNodeMain);
            
            
        }


        //   Speed things based on time


        if (counter == 15) {
            currentTime = 2;
            clearInterval(lvl2moveItemsRepeat);
            lvl2moveItemsRepeat = setInterval(lvl2moveItems, 9); 
        }

        if (counter == 25) {
            currentTime = 3;
            clearInterval(lvl2moveItemsRepeat);
            lvl2moveItemsRepeat = setInterval(lvl2moveItems, 7); 
        }

        if (counter == 50) {
            currentTime = 4; 
            clearInterval(lvl2moveItemsRepeat);
            lvl2moveItemsRepeat = setInterval(lvl2moveItems, 5); 
        }

        if (counter == 70) {
            currentTime = 5; 
            clearInterval(lvl2moveItemsRepeat);
            lvl2moveItemsRepeat = setInterval(lvl2moveItems, 5); 
        }

        if (counter == 100) {
            currentTime = 6; 
            clearInterval(lvl2moveItemsRepeat);
            lvl2moveItemsRepeat = setInterval(lvl2moveItems, 5);
        }
        if (counter == 125) {
            currentTime = 7; 
            clearInterval(lvl2moveItemsRepeat);
            lvl2moveItemsRepeat = setInterval(lvl2moveItems, 5);
        }

        if (counter == 150) {
            currentTime = 8; 
            clearInterval(lvl2moveItemsRepeat);
            lvl2moveItemsRepeat = setInterval(lvl2moveItems, 3);
        }

        if (counter == 180) {
            currentTime = 9; 
            clearInterval(lvl2moveItemsRepeat);
            lvl2moveItemsRepeat = setInterval(lvl2moveItems, 2);
        }
        if (counter == 200) {
            currentTime = 10; 
            clearInterval(lvl2moveItemsRepeat);
            lvl2moveItemsRepeat = setInterval(lvl2moveItems, 1);
        }

        if (counter == 230) {
            currentTime = 11; 
            clearInterval(lvl2moveItemsRepeat);
            lvl2moveItemsRepeat = setInterval(lvl2moveItems, 1);
        }

        // TEMP DISABLE COUNTER TRIGGERS
    counter += .0001;
        
            }





function lvl2moveItems() {
                  
    var fallingContainerss = document.querySelectorAll(".falling-container");
    var fallingContainersLengths = fallingContainerss.length;


    if ((currentTime == 1) || (currentTime == 2) || (currentTime == 3)){

    for (let i = 0; i < fallingContainersLengths; i++){
         var tempppValue = parseInt(fallingContainerss[i].getAttribute("value")) + 1;
         
     
        fallingContainerss[i].style.top =  tempppValue + "px";
        fallingContainerss[i].setAttribute("value", tempppValue);
    }
 }else if (currentTime == 4){
     
     for (let i = 0; i < fallingContainersLengths; i++){
          var tempppValue = parseInt(fallingContainerss[i].getAttribute("value")) + 2;
          
      
          fallingContainerss[i].style.top =  tempppValue + "px";
         fallingContainerss[i].setAttribute("value", tempppValue);
     }
  } else if (currentTime == 5){
     
     for (let i = 0; i < fallingContainersLengths; i++){
          var tempppValue = parseInt(fallingContainerss[i].getAttribute("value")) + 2;
          
      
          fallingContainerss[i].style.top =  tempppValue + "px";
         fallingContainerss[i].setAttribute("value", tempppValue);
     }
  }else if (currentTime == 6){
     
     for (let i = 0; i < fallingContainersLengths; i++){
          var tempppValue = parseInt(fallingContainerss[i].getAttribute("value")) + 3;
          
      
          fallingContainerss[i].style.top =  tempppValue + "px";
         fallingContainerss[i].setAttribute("value", tempppValue);
     }
  }else if (currentTime == 7){
     
     for (let i = 0; i < fallingContainersLengths; i++){
          var tempppValue = parseInt(fallingContainerss[i].getAttribute("value")) + 4;
          
      
          fallingContainerss[i].style.top =  tempppValue + "px";
         fallingContainerss[i].setAttribute("value", tempppValue);
     }
  }else if (currentTime == 8){
     
     for (let i = 0; i < fallingContainersLengths; i++){
          var tempppValue = parseInt(fallingContainerss[i].getAttribute("value")) + 4;
          
      
          fallingContainerss[i].style.top =  tempppValue + "px";
         fallingContainerss[i].setAttribute("value", tempppValue);
     }
  }else if (currentTime == 9){
     
     for (let i = 0; i < fallingContainersLengths; i++){
          var tempppValue = parseInt(fallingContainerss[i].getAttribute("value")) + 5;
          
      
          fallingContainerss[i].style.top =  tempppValue + "px";
         fallingContainerss[i].setAttribute("value", tempppValue);
     }
  }else if (currentTime == 10){
     
     for (let i = 0; i < fallingContainersLengths; i++){
          var tempppValue = parseInt(fallingContainerss[i].getAttribute("value")) + 6;
          
      
          fallingContainerss[i].style.top =  tempppValue + "px";
         fallingContainerss[i].setAttribute("value", tempppValue);
     }
  }else if (currentTime == 11){
     
     for (let i = 0; i < fallingContainersLengths; i++){
          var tempppValue = parseInt(fallingContainerss[i].getAttribute("value")) + 7;
          
      
          fallingContainerss[i].style.top =  tempppValue + "px";
         fallingContainerss[i].setAttribute("value", tempppValue);
     }
 }


}

// Function to test if element is in viewport 
var isInViewport = function (elem) {
    var bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight) &&
        bounding.right <= (window.innerWidth)
    );
};









// Test if cell hitbox is in viewport

function lvl2testViewport(){

allThingOneHitbox = document.querySelectorAll(".thing-one-hitbox");
allThingOneLengthHitbox = allThingOneHitbox.length;

for (let i = 0; i < allThingOneLengthHitbox; i++) {

if (isInViewport(allThingOneHitbox[i]) === false ) {

var hearts = document.querySelectorAll(".heart-img");

if (heartLost == 0){
hearts[0].style.backgroundImage = "url('img/heart_explosion_sprite.png')";
hearts[0].style.animation = "heart_explosion 300ms steps(22)";
hearts[0].style.backgroundSize = "2200% 100%";
setTimeout(function(){
    hearts[0].style.animation = "";
    hearts[0].style.backgroundImage = "url('img/heart1.png')";
    hearts[0].style.backgroundSize = "4vw 4vw";
}, 290);
} else if (heartLost == 1){
hearts[1].style.backgroundImage = "url('img/heart_explosion_sprite.png')";
hearts[1].style.backgroundSize = "2200% 100%";
hearts[1].style.animation = "heart_explosion 300ms steps(22)";
setTimeout(function(){
    hearts[1].style.animation = "";
    hearts[1].style.backgroundImage = "url('img/heart1.png')";
    hearts[1].style.backgroundSize = "4vw 4vw";
}, 290);
}else if (heartLost == 2){
hearts[2].style.backgroundImage = "url('img/heart_explosion_sprite.png')";
hearts[2].style.backgroundSize = "2200% 100%";
hearts[2].style.animation = "heart_explosion 300ms steps(22)";
setTimeout(function(){
    hearts[2].style.animation = "";
    hearts[2].style.backgroundImage = "url('img/heart1.png')";
    hearts[2].style.backgroundSize = "4vw 4vw";
}, 290);
}else if (heartLost == 3){
hearts[3].style.backgroundImage = "url('img/heart_explosion_sprite.png')";
hearts[3].style.backgroundSize = "2200% 100%";
hearts[3].style.animation = "heart_explosion 300ms steps(22)";
setTimeout(function(){
    hearts[3].style.animation = "";
    hearts[3].style.backgroundImage = "url('img/heart1.png')";
    hearts[3].style.backgroundSize = "4vw 4vw";
}, 290);
}else if (heartLost == 4){
hearts[4].style.backgroundImage = "url('img/heart_explosion_sprite.png')";
hearts[4].style.backgroundSize = "2200% 100%";
hearts[4].style.animation = "heart_explosion 300ms steps(22)";
setTimeout(function(){
    hearts[4].style.animation = "";
    hearts[4].style.backgroundImage = "url('img/heart1.png')";
    hearts[4].style.backgroundSize = "4vw 4vw";
}, 290);
}else if (heartLost == 5){
hearts[5].style.backgroundImage = "url('img/heart_explosion_sprite.png')";
hearts[5].style.backgroundSize = "2200% 100%";
hearts[5].style.animation = "heart_explosion 300ms steps(22)";
setTimeout(function(){
    hearts[5].style.animation = "";
    hearts[5].style.backgroundImage = "url('img/heart1.png')";
    hearts[5].style.backgroundSize = "4vw 4vw";
}, 290);
}else if (heartLost == 6){
hearts[6].style.backgroundImage = "url('img/heart_explosion_sprite.png')";
hearts[6].style.backgroundSize = "2200% 100%";
hearts[6].style.animation = "heart_explosion 300ms steps(22)";
setTimeout(function(){
    hearts[6].style.animation = "";
    hearts[6].style.backgroundImage = "url('img/heart1.png')";
    hearts[6].style.backgroundSize = "4vw 4vw";
}, 290);
}else if (heartLost == 7){
hearts[7].style.backgroundImage = "url('img/heart_explosion_sprite.png')";
hearts[7].style.backgroundSize = "2200% 100%";
hearts[7].style.animation = "heart_explosion 300ms steps(22)";
setTimeout(function(){
    hearts[7].style.animation = "";
    hearts[7].style.backgroundImage = "url('img/heart1.png')";
    hearts[7].style.backgroundSize = "4vw 4vw";
}, 290);
}else if (heartLost == 8){
hearts[8].style.backgroundImage = "url('img/heart_explosion_sprite.png')";
hearts[8].style.backgroundSize = "2200% 100%";
hearts[8].style.animation = "heart_explosion 300ms steps(22)";
setTimeout(function(){
    hearts[8].style.animation = "";
    hearts[8].style.backgroundImage = "url('img/heart1.png')";
    hearts[8].style.backgroundSize = "4vw 4vw";
}, 290);
}
hearts[heartLost].classList.add("heart-gone");
hearts[heartLost].classList.remove("heart-here");


var audio = new Audio('sounds/lose_heart.mp3');
audio.volume = 0.2;
audio.playbackRate = 1;
audio.play();

heartLost += 1;

allThingOneHitbox[i].remove();

// FAILLLLL



if (heartLost == hearts.length) {
    // SET lvl 1 HIGHSCORE
    if (parseInt(localStorage.getItem("FSlvl2HS")) < score) {
        localStorage.setItem("FSlvl2HS", score);
        localStorage.saveServer
    }

    document.getElementById("lvl2Highscore").textContent = localStorage.getItem("FSlvl2HS");
    failScreen();
    removePowers();
    resetVariables();
}

}


}
var viewTest = document.getElementById("mainContainer");
var viewSubject = viewTest.lastElementChild;

var fallingCount = document.querySelectorAll(".falling-container");
var fallingCountLength = fallingCount.length;


for(let i = 0; i < fallingCountLength; i++){
if (isInViewport(viewSubject) === false) {

viewSubject.remove();

viewSubject = viewTest.lastElementChild;

}
}

// WIN GAME
if (score >= 1300 && onlyOne111 == 1){
localStorage.setItem("FSlvl2Won", "true");
localStorage.saveServer


onlyOne111 += 1;
document.getElementById("lvlAlertText").textContent = "Level Won!";
document.getElementById("potionBar").style.display = "none";
document.getElementById("lvlAlertText").style.display = "inline-block";
document.getElementById("lvlAlertAnimation").style.display = "inline-block";

setTimeout(function(){
document.getElementById("potionBar").style.display = "flex";
document.getElementById("lvlAlertText").style.display = "none";
document.getElementById("lvlAlertAnimation").style.display = "none";
}, 4000);
}
}


// EFFECT EVENTS

function lvl2SnowballEffect(evt) {
    this.removeEventListener("click", lvl2SnowballEffect);
    this.classList.remove("unclicked");
    this.style.zIndex = "1";
    var audio = new Audio('sounds/lvl2/snowball_explosion.mp3');
    audio.volume = 0.6;
    audio.playbackRate = 1.1;
    audio.play();
    var targetElementTemp = this.querySelectorAll(".snowball");
    var targetElement = targetElementTemp[0];
    
    this.querySelector(".thing-one-hitbox").remove();
    targetElement.style.height = "7.5vw";
    targetElement.style.width = "7.5vw";
    targetElement.style.marginTop = "2vw";

    targetElement.style.background = "url('img/lvl2/snowball_explosion_sprite.png')" ;
    targetElement.style.animation = "snowball_explosion 300ms steps(13)";
    targetElement.style.backgroundSize= "1300% 100%";

    score += 5;
    document.getElementById("score").innerHTML = score;
    

    setTimeout(() => {
        this.remove();
    }, 290);
}

// MOB MOVEMENT

// SNOWMAN

function snowmanMove(whereAt, snowmanID, speed, hitType) {
    var currentSnowmanID = snowmanID;
    var currentSpeed = speed * 10;
    var snowman = document.getElementById(currentSnowmanID);
    var currentPosition = parseInt(snowman.style.getPropertyValue("left"));
    var goTo = parseInt(whereAt);
    var tempPos = 0;
    var localCounter = 0;
    var currentHitType = hitType;
    // CALC WHERE TO MOVE TO

    // MOVE BACKWARDS
    if (goTo < currentPosition) {
        var calcPos = currentPosition - whereAt;
        var snowmanBackRepeat = setInterval(moveSnowmanBack, currentSpeed);

        // SET SNOWMAN MOVING BACKGROUND

        snowman.style.background = "url('img/lvl2/snowman/snowman_move.png')"
        snowman.style.animation = "snowman_move 400ms steps(5) infinite";
        snowman.style.backgroundSize= "500% 100%";

        setTimeout(function(){
            clearInterval(snowmanBackRepeat)
            snowmanThrow(currentSnowmanID, currentHitType);
            }, (calcPos * currentSpeed));

        function moveSnowmanBack() {
            localCounter += 1;
            tempPos = currentPosition - localCounter;
            snowman.style.left = tempPos + "vw";
        }
    }

    if (goTo > currentPosition) {
        var calcPos = whereAt - currentPosition;
        var snowmanForwardRepeat = setInterval(moveSnowmanForward, currentSpeed);

        snowman.style.background = "url('img/lvl2/snowman/snowman_move.png')"
        snowman.style.animation = "snowman_move 400ms steps(5) infinite";
        snowman.style.backgroundSize= "500% 100%";

        setTimeout(function(){
            clearInterval(snowmanForwardRepeat)
            snowmanThrow(currentSnowmanID, currentHitType);
            }, (calcPos * currentSpeed));

        function moveSnowmanForward() {
            localCounter += 1;
            tempPos = currentPosition + localCounter;
            snowman.style.left = tempPos + "vw";
        }
    }

}

// THROW

function snowmanThrow(currentSnowmanID, currentHitType) {
    var currentSnowman = currentSnowmanID;
    var snowman = document.getElementById(currentSnowman);

    switch(currentHitType){
        case "single":
    snowman.style.background = "url('img/lvl2/snowman/snowman_attack.png')"
    snowman.style.animation = "snowman_attack 400ms steps(6)";
    snowman.style.backgroundSize= "600% 100%";

    var currentPos = parseInt(snowman.style.getPropertyValue("left") + 1);

    var tempSnowBall = snowballNode.cloneNode(true);
    tempSnowBall.firstChild.setAttribute("style", "left: " + currentPos +  "vw");
    tempSnowBall.firstChild.addEventListener("click", lvl2SnowballEffect);

    mainContainerr.prepend(tempSnowBall);

    snowman.addEventListener("animationend", function(evt){
        evt.target.style.background = "url('img/lvl2/snowman/snowman_idle.png')"
        evt.target.style.animation = "snowman_idle 400ms steps(4) infinite";
        evt.target.style.backgroundSize= "400% 100%";
        evt.target.removeEventListener("animationend", function(){
            evt.target.style.background = "url('img/lvl2/snowman/snowman_idle.png')"
            evt.target.style.animation = "snowman_idle 400ms steps(4) infinite";
            evt.target.style.backgroundSize= "400% 100%";
        });
    });
        break;

        case "double":
            console.log("once");
                snowman.style.background = "url('img/lvl2/snowman/snowman_attack.png')"
                snowman.style.animation = "snowman_attack 400ms steps(6) 1";
                snowman.style.backgroundSize= "600% 100%";
                var currentPos = parseInt(snowman.style.getPropertyValue("left") + 1);
                var tempSnowBall = snowballNode.cloneNode(true);
                tempSnowBall.firstChild.setAttribute("style", "left: " + currentPos +  "vw");
                tempSnowBall.firstChild.addEventListener("click", lvl2SnowballEffect);
                mainContainerr.prepend(tempSnowBall);
                var snowmans = snowman;
                snowmans.addEventListener("animationend", doubleHit);
        break;
    }


    

}

function doubleHit(evt) {
    evt.target.removeEventListener("animationend", doubleHit);
    setTimeout( function(){
    evt.target.style.animation = "none";
    evt.target.offsetHeight;
    evt.target.style.animation = null;
    evt.target.style.background = "url('img/lvl2/snowman/snowman_attack.png')"
    evt.target.style.animation = "snowman_attack 400ms steps(6) 1";
    evt.target.style.backgroundSize= "600% 100%";

var currentPos = parseInt( evt.target.style.getPropertyValue("left") + 1);
var tempSnowBall = snowballNode.cloneNode(true);
tempSnowBall.firstChild.setAttribute("style", "left: " + currentPos +  "vw");
tempSnowBall.firstChild.addEventListener("click", lvl2SnowballEffect);
mainContainerr.prepend(tempSnowBall);
    }, 200);

}

// KILL ALL SNOWMEN

function killSnowman(amount){
    console.log("wut");
    if (amount == "all") {
       var allSnowman = document.querySelectorAll(".snowman");
       
    //    DEATH ANIMATION
       for (var i = 0; i < allSnowman.length; i++){
    allSnowman[i].style.background = "url('img/lvl2/snowman/snowman_death.png')"
    allSnowman[i].style.animation = "snowman_death 500ms steps(6)";
    allSnowman[i].style.backgroundSize= "600% 100%";
       }

       setTimeout(function(){
        var allSnowmanContainers = document.querySelectorAll(".snowman-container");
       
    //    Kill em
       for (var i = 0; i < allSnowmanContainers.length; i++){
        allSnowmanContainers[i].remove();
       }
       },500);
    }


}