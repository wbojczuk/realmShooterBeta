"use strict";

window.addEventListener("load", index);

window.addEventListener("load", function(){
  // INSERT PARTICLES TO DOM
  var particleHTML = "<canvas class='particle-background' style='position: absolute; left: 0; top: 0; z-index: -10;'></canvas>";
  document.getElementById("body").insertAdjacentHTML("beforeend", particleHTML);
  // INITIALIZE PARTICLES
    Particles.init({
      selector: '.particle-background',
      sizeVariations: 2,
      color: "#ffffff",
      maxParticles: 128
    });
});

var currentPageIndex;

var leftPageTitles = [
"Index",
"Index",  
// ITEMS
"Snowflake",
"Glowing Orb",
"Red Potion",
"Bombs",
"Blue Crystals",
"Purple Potions",
// POWERS
"Drag Destroy",
"Time Frost"
];

 var leftPages = [
  //  lvl1 first page index0
  "<div class='index-title'>Items</div>\
  <a onclick='changePage(2)' href='#' class='tut-index-link'>Snowflake</a>\
  <a onclick='changePage(3)' href='#' class='tut-index-link'>Glowing Orb</a>\
  <a onclick='changePage(4)' href='#' class='tut-index-link'>Red Potion</a>\
  <a onclick='changePage(5)' href='#' class='tut-index-link'>Bombs</a>\
  <a onclick='changePage(6)' href='#' class='tut-index-link'>Blue Crystals</a>\
  <a onclick='changePage(7)' href='#' class='tut-index-link'>Purple Potion</a>",
    
  
   //lvl1 second page  ITEMS INDEX1
   "<div class='index-title'>How To Win</div>",

  //  ITEMS
  "<span>The Snowflake Item Appears Once Per Game</span><div class='center'><span>After Clicking On It, you will recieve the <a onclick='changePage(8)' href='#' class='intext-link'>Time Frost Power.</a></span>",
  

  "<span>The Glowing Orb </span><span> Will Give You An Extra Heart For The Rest Of The Game After Clicking On It</span>",

  "<span>Clicking On The Red Potion Will Give You 15 Points And Also Heal A Lost Heart</span>",

  "<span>Destroy Bombs Before They Reach The Bottom Of Your Screen Or You Will Lose A Heart!</span>",
  
  "<span>Blue Crystals Move Faster Than Bombs, Destroy Them Before They Reach The Bottom Of Your Screen Or You Will Lose A Heart!</span>",


  "<span>Do Not Destroy The Purple Potions. Doing So Will Remove 20 Points From Your Score And One Of Your Hearts!</span>",

// POWERS
  "<span>The Drag Destroy Power Allows you to click, hold, and drag through Items. You will see the </span><img class='tutorial-icon' src='img/icons/power1.png'><span> Icon in the top-right of your screen when the power is active.</span>",


  
  "<span>Having the icon </span><img class='tutorial-icon' src='img/icons/power2.png'><span> In The Top Right Of Your Screen means you currently have the Time Frost Power. Clicking &quot; S &quot; On Your Keyboard Or Clicking the Icon Will Cause The Power To Activate, Slowing All Falling Items Down Temporarily.</span>"

 ];

 var rightIndex = [
"<div class='index-title'>Powers</div>\
<a onclick='changePage(8)' href='#' class='tut-index-link'>Drag Destroy</a>\
<a onclick='changePage(9)' href='#' class='tut-index-link'>Time Frost</a>",

// Second for first level
"<div class='index-title'>Misc</div>",
 ];

 var rightVisual = [
   "",
   "",
  //  ITEMS
   "<div class='snowflake tut-items'></div>",
   "<div class='extra-heart-orb tut-items'></div>",
   "<div class='red-potion tut-items'></div>",
   "<div class='thing-one tut-items'></div>",
   "<div class='blue-crystal tut-items'></div>",
   "<div class='purple-potion tut-items'></div>",

  //  POWERS
   "<img class='tutorial-visual-icon' src='img/icons/power1.png'>",
   "<img class='tutorial-visual-icon' src='img/icons/power2.png'>",
 ];

 var rarityText = [
   "",
   "",
  //  ITEMS
   "Once A Game At A Random Time",
   "Very Small Chance Throughout The Level",
   "Chance To Spawn At Multiple Times Throughout The Level",
   "Thoughout The Level",
   "Thoughout The Level, But Less Frequently Than Bombs",
   "Thoughout The Level",
  //  POWERS
   "At A Score Of 500",
   "Can Be Triggered Once After Getting A Snowflake",
 ];

function index(){

  currentPageIndex = 0;
  document.getElementById("backToIndex").style.display = "none";
  document.getElementById("tutTitle").style.display = "none";
  document.getElementById("tutRightWrapper").style.display = "none";
  document.getElementById("backPage").style.color = "#aaa";
  document.getElementById("backPage").removeAttribute("onclick");

  document.getElementById("forwardPage").style.color = "#afc9ff";
  document.getElementById("forwardPage").setAttribute("onclick", "forwardPage();")

  document.getElementById("tutorialTitle").innerHTML = leftPageTitles[0];
  document.getElementById("tutInnertextLeft").innerHTML = leftPages[0];
  document.getElementById("tutRightIndex").innerHTML = rightIndex[0];
  document.getElementById("tutRightIndex").style.display = "block";
    
}

function changePage(curval) {
 

  currentPageIndex = curval;



if (currentPageIndex == 0) {
  document.getElementById("tutRightIndex").style.display = "block";
  document.getElementById("tutTitle").style.display = "none";
  document.getElementById("backToIndex").style.display = "none";
  document.getElementById("backPage").style.color = "#aaa";
  document.getElementById("backPage").removeAttribute("onclick");
  document.getElementById("tutRightWrapper").style.display = "none";
  document.getElementById("tutRightIndex").innerHTML = rightIndex[0];
}

if (currentPageIndex == (leftPages.length - 1)) {
  document.getElementById("forwardPage").style.color = "#aaa";
  document.getElementById("forwardPage").removeAttribute("onclick");
}

if (currentPageIndex !== (leftPages.length - 1)) {
  document.getElementById("forwardPage").style.color = "#afc9ff";
  document.getElementById("forwardPage").setAttribute("onclick", "forwardPage();");
}

if (currentPageIndex > 1) {
  document.getElementById("tutRightIndex").style.display = "none";
  document.getElementById("tutRightWrapper").style.display = "block";
  document.getElementById("tutTitle").style.display = "block";
  document.getElementById("backToIndex").style.display = "block";
  document.getElementById("backPage").style.color = "#afc9ff";
  document.getElementById("backPage").setAttribute("onclick", "backPage();");
  document.getElementById("tutVisual").innerHTML = rightVisual[currentPageIndex];
  document.getElementById("tutRarity").innerHTML = rarityText[currentPageIndex];
}

  
  var currentPage = leftPages[currentPageIndex];
  var currentPageTitle = leftPageTitles[currentPageIndex];
    

document.getElementById("tutInnertextLeft").innerHTML = currentPage;
document.getElementById("tutorialTitle").textContent = currentPageTitle;

}



function forwardPage() {
  currentPageIndex += 1;
  document.getElementById("tutRightIndex").style.display = "none";
  document.getElementById("tutTitle").style.display = "block";
  document.getElementById("tutRightWrapper").style.display = "block";
  document.getElementById("backToIndex").style.display = "block";
  document.getElementById("backPage").setAttribute("onclick", "backPage();");
  document.getElementById("backPage").style.color = "#afc9ff";
  document.getElementById("tutVisual").innerHTML = rightVisual[currentPageIndex];

  if (currentPageIndex == (leftPages.length - 1)) {
    document.getElementById("forwardPage").style.color = "#aaa";
    document.getElementById("forwardPage").removeAttribute("onclick");
  }

  var currentPage = leftPages[currentPageIndex];
  var currentPageTitle = leftPageTitles[currentPageIndex];
    
  document.getElementById("tutRarity").innerHTML = rarityText[currentPageIndex];
document.getElementById("tutInnertextLeft").innerHTML = currentPage;
document.getElementById("tutorialTitle").textContent = currentPageTitle;
if (currentPageIndex <= 1) {
  document.getElementById("tutRightIndex").style.display = "block";
  document.getElementById("tutTitle").style.display = "none";
  document.getElementById("backToIndex").style.display = "none";
  document.getElementById("backPage").style.color = "#aaa";
  document.getElementById("tutRightWrapper").style.display = "none";
  document.getElementById("tutRightIndex").innerHTML = rightIndex[currentPageIndex];
}

}

function backPage(){
  currentPageIndex -= 1;
  document.getElementById("tutTitle").style.display = "block";
  document.getElementById("tutRightWrapper").style.display = "block";
  document.getElementById("tutRightIndex").style.display = "none";

  document.getElementById("forwardPage").setAttribute("onclick", "forwardPage();");
  document.getElementById("forwardPage").style.color = "#afc9ff";

  if (currentPageIndex == 0) {
    document.getElementById("tutRightIndex").style.display = "block";
    document.getElementById("tutTitle").style.display = "none";
    document.getElementById("backToIndex").style.display = "none";
    document.getElementById("backPage").style.color = "#aaa";
    document.getElementById("backPage").removeAttribute("onclick");
    document.getElementById("tutRightWrapper").style.display = "none";
    document.getElementById("tutRightIndex").innerHTML = rightIndex[currentPageIndex];
  }

  if (currentPageIndex <= 1) {
    document.getElementById("tutRightIndex").style.display = "block";
    document.getElementById("tutTitle").style.display = "none";
    document.getElementById("backToIndex").style.display = "none";
    document.getElementById("backPage").style.color = "#aaa";
    document.getElementById("tutRightWrapper").style.display = "none";
    document.getElementById("tutRightIndex").innerHTML = rightIndex[currentPageIndex];
  }

  var currentPage = leftPages[currentPageIndex];
  var currentPageTitle = leftPageTitles[currentPageIndex];
  document.getElementById("tutVisual").innerHTML = rightVisual[currentPageIndex];
    
document.getElementById("tutRarity").innerHTML = rarityText[currentPageIndex];
document.getElementById("tutInnertextLeft").innerHTML = currentPage;
document.getElementById("tutorialTitle").textContent = currentPageTitle;

}
