//TIME FUNCTION - TOP BAR
function updateTime() {
        var currentTime = new Date().toLocaleString();
        var timeText = document.querySelector("#timeElement");
        timeText.innerHTML = currentTime
    }
    setInterval(updateTime, 1000);


dragElement(document.getElementById("start"));
dragElement(document.getElementById("issGuide"));
dragElement(document.getElementById("starlinkGuide"));
dragElement(document.getElementById("JamesWebbSpaceTelescopeApp"));
dragElement(document.getElementById("NASCApp"));
//OPEN AND CLOSE WINDOW

var startScreen = document.querySelector("#start")

function closeWindow(element) {
  element.style.display = "none"
}

function openWindow(element) {
  element.style.display = "flex"
}

//BUTTTONS

var startScreenClose = document.querySelector("#startclose")

var startScreenOpen = document.querySelector("#startopen")

//EVENT LISTENERS bc if you don't add one then it wont listen lol

startScreenClose.addEventListener("click", function() {
  closeWindow(startScreen);
});
startScreenOpen.addEventListener("click", function() {
  openWindow(startScreen);
});



//OPEN AND CLOSE WINDOW ISS GUIDE

var issGuideScreen = document.querySelector("#issGuide")

function closeWindow(element) {
  element.style.display = "none"
}

function openWindow(element) {
  element.style.display = "flex"
}


var issGuideScreenClose = document.querySelector("#issGuideclose")

var issGuideScreenOpen = document.querySelector("#issGuideopen")


issGuideScreenClose.addEventListener("click", function() {
  closeWindow(issGuideScreen);
});
issGuideScreenOpen.addEventListener("click", function() {
  openWindow(issGuideScreen);
});


//OPEN AND CLOSE WINDOW STARLINK GUIDE

var starlinkGuideScreen = document.querySelector("#starlinkGuide")

function closeWindow(element) {
  element.style.display = "none"
}

function openWindow(element) {
  element.style.display = "flex"
}


var starlinkGuideScreenClose = document.querySelector("#starlinkGuideclose")

var starlinkGuideScreenOpen = document.querySelector("#starlinkGuideopen")


starlinkGuideScreenClose.addEventListener("click", function() {
  closeWindow(starlinkGuideScreen);
});
starlinkGuideScreenOpen.addEventListener("click", function() {
  openWindow(starlinkGuideScreen);
});


//CLOSE JAMESWEBBAPP

var JamesWebbSpaceTelescopeAppScreen = document.querySelector("#JamesWebbSpaceTelescopeApp")

var JamesWebbSpaceTelescopeAppScreenClose = document.querySelector("#JamesWebbSpaceTelescopeAppclose")

JamesWebbSpaceTelescopeAppScreenClose.addEventListener("click", () => closeWindow(JamesWebbSpaceTelescopeAppScreen));

//CLOSE NASCAPP

var NASCAppScreen = document.querySelector("#NASCApp")

var NASCAppScreenClose = document.querySelector("#NASCAppclose")

NASCAppScreenClose.addEventListener("click", () => closeWindow(NASCAppScreen));


