var allThingOneHitbox;
var allThingOneLengthHitbox;

var lvl2testViewportRepeat;
var lvl2checkPowersrepeat;
var lvl2moveItemsRepeat;
var lvl2generationRepeat;
var snowballNode;

function lvl2Pre() {
    
    vRndX = -7;
    vRndY = 3;
    snowStorm.resume();

   
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
        if (counter % 3 == 0) {   
            nodeContainer.appendChild(snowballNode.cloneNode(true)); 
            nodeContainer.appendChild(snowballNode.cloneNode(true)); 
            
        } 
        if (counter % 5 == 0) {   
            nodeContainer.appendChild(snowballNode.cloneNode(true)); 
        } 
        
        if (counter % 7 == 0) {   
            nodeContainer.appendChild(snowballNode.cloneNode(true)); 
        } 
        if (counter % 13 == 0) {
            nodeContainer.appendChild(snowballNode.cloneNode(true)); 
            nodeContainer.appendChild(snowballNode.cloneNode(true)); 
            
            
        }

        if (counter % 9 == 0) {
            nodeContainer.appendChild(snowballNode.cloneNode(true)); 
        }

   
    // SNOWFLAKE GENERATION

    if (counter % 5 == 0) {
        
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
                        
                        tempNodeMain.firstChild.addEventListener("click", lvl1SnowballEffect);
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
        

        


        
        

        
        // shaky things

        

        

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

        if (counter == 85) {
            currentTime = 6; 
            clearInterval(lvl2moveItemsRepeat);
            lvl2moveItemsRepeat = setInterval(lvl2moveItems, 5);
        }
        if (counter == 100) {
            currentTime = 7; 
            clearInterval(lvl2moveItemsRepeat);
            lvl2moveItemsRepeat = setInterval(lvl2moveItems, 5);
        }

        if (counter == 120) {
            currentTime = 8; 
            clearInterval(lvl2moveItemsRepeat);
            lvl2moveItemsRepeat = setInterval(lvl2moveItems, 3);
        }

        if (counter == 140) {
            currentTime = 9; 
            clearInterval(lvl2moveItemsRepeat);
            lvl2moveItemsRepeat = setInterval(lvl2moveItems, 2);
        }
        if (counter == 160) {
            currentTime = 10; 
            clearInterval(lvl2moveItemsRepeat);
            lvl2moveItemsRepeat = setInterval(lvl2moveItems, 1);
        }

        if (counter == 180) {
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

function lvl1SnowballEffect(evt) {
    this.removeEventListener("click", lvl1SnowballEffect);
    this.classList.remove("unclicked");
    this.style.zIndex = "1";
    var audio = new Audio('sounds/bomb_explosion.mp3');
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